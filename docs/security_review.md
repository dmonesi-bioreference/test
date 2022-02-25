# Code Injection

## Cross-Site Scripting

The pentest report identified __possible__ reflected XSS opportunities, we have since enabled server side filtering which alleviates the issue, but does not remove it.

Previously the malicious request `/?<scRipt>alert(0x001125)</scRipt>` was resulting in a redirect, but now our site returns a `403` response with error page declaring the request was blocked due to security rules, likely server side filtering. The redirect caused the pentest to identify this as a possible issue as it could not verify if our site executed the alert, though local testing shows this is not an issue.

If the malicious request were to include URI fragments (i.e. `#`) these do not get sent to our server to then reject the request, and instead need proection within our front end code, although again, local testing shows this is not an issue.

At present I have identified the following locations where we parse the URI;
- Registration page
  - Using query parameters `Guid` and `Source` from `URLSearchParams`
- Article and FAQ pages
  - Using slugs from `next/dist/client/router.query()`

At present there are no obvious vulnerabilities from the above, as we do not use these values in the DOM itself

## Registration

When the user registers their account they can declare a number of variables, these variables are then passed to third parties and get used by us later as trusted data. At present all sanitisation is client side, a malicious user could easily disable this and submit malicious data to our services

In addition, the following are not sanitised;
- `src/client/api/identity.ts`
  - `email` 
  - `PatientPortalUserId` 
  - `zip`

Although react.js will sanitise these before we re-render them to the client, as the trusted-untrusted code boundary it is our responsibility to sanitise these before passing them on.

## GraphQL 

There are a few locations where we take URIs and inject them into GraphQL requests, although likely minor, it's good practice to prevent injection vectors;
- `src/client/content/queries.ts`
  - `articleByUrlSlug`
  - `articleById`
  - `faq`

# Headers

## Content-Security-Policy

The pentest correctly identified we had no CSP header defined, to implement this I start at the most restrictive, marking everything as `'none'`, unsurprisingly this made everything break, so error by error I released the restrictions. The following are my observations on the current state;
- I am now banning any non-`https:` request or redirect to any site other than auth0
- I had to allow images sourced as `data:`, this seems to be coming from our select component 
- In development I have to allow `unsafe-eval` as react.js uses this for hot reloading, this is disabled in production
- In production scripts use nonce generation combined with `strict-dynamic` to allow trusted scripts to inject more code, this is for things like GTM and OneTrust
- In **all** environments I have had to allow `unsafe-inline` on styles, this is because of our use of styled-components, which adds inline styles *everywhere*
  - This does leave us exposed to potential [data leaking](https://www.netsparker.com/blog/web-security/private-data-stolen-exploiting-css-injection/)
  - This could be [prevented with a lot of effort](https://reesmorris.co.uk/blog/implementing-proper-csp-nextjs-styled-components)


## X-Frame-Options

Additional research identified this header, it is used to tell browsers not to allow our site in iframes, preventing clickjacking attacks

## X-XSS-Protection

Additional research identified this header, superceded by Content-Security-Policy, but a fallback for browsers which don't yet support it, values have been set to detect and abort rendering if attacks are detected

## X-Content-Type-Options

Additional research identified this header, it is used to tell browsers not to guess content types. It's not stricly useful to us at present, but it helps prevent future mistakes or vulnerability to malicious intent

## Referrer-Policy

Additional research identified this header, it is used to tell browsers how much information to include in `Referer` headers, the value has been set to only include our origin

## Strict-Transport-Security

Additional research identified this header, it is used to tell browsers to use the `https:` protocol when interacting with our site, the values have been set to the recommended values

## Incapsula

There is something seemingly called Incapsula being injected into our site. I cant find any reference to this in our code base, and suspect it's used by Azure.

On initial load to our application multiple cookies are set, including one to persistently identify users, and another to identify the current session (privacy issues?), in addition, a script is injected which at present the CSP is interfering with this. I suspect the reason for a non-http-only cookie is because the script being injected is going to add the cookie to all requests dynamically

This also seems to be the source od rthe `__utmvc` cookie, which Google results suggest is an intentionally malformed cookie used to detect brower information.

# Recommendations

- Submit our sites to the [HSTS Preload List](https://hstspreload.org/)
  - This prevents man-in-the-middle attacks by allowing browsers to know they should load a site via HTTPS before an initial load, which would otherwise be vulnerable to a downgrade attack prior to the `Strict-Transport-Security` header being used
- Try to remove inline styles so we can remove `unsafe-inline` from the `style-src` in the `Content-Security-Policy` header
- Find out what the Imperva script is and how to make it allowed