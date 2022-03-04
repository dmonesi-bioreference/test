# Tracking

## Introduction

We use Google Analytics 4 and Google Tag Manager to track user interactions with pages.

## Google Tag Manager (GMT)

Google Tag Manager is a tag management system (TMS) that allows you to quickly and easily update measurement codes and related code fragments collectively known as tags on your website. Once the small segment of Tag Manager code has been added to your project, you can safely and easily deploy analytics and measurement tag configurations from a web-based user interface.
For more information follow this [link](https://support.google.com/tagmanager/answer/6102821).
We have 2 main tags: GA4 and OneTrust Cookies Consent Notice.

#### GTM containers:

- `patient-stage.genedx.com` - used for all preproduction environments
- `patient.genedx.com` - used for production environment

#### Initialize GMT

In order initialize gtm we are using npm package called [react-gtm-module](https://www.npmjs.com/package/react-gtm-module). In `Shell.tsx` file we call `initialize` function passing ID of GTM container:

```
useEffect(() => {
    if (client_config.gtm.id) {
      TagManager.initialize({ gtmId: client_config.gtm.id });
    }
  }, []);
```

#### Custom events

As of the time of writing there are 4 custom events we send from our appication:

- `sign_up_flow` - is triggered on each step of registration flow. Allows to analyse how many steps users are willing to pass. Properties can be found in `SignUpFlowEventProps` type and I'll list them here:
  - `signUpStep` - name of the registration step
  - `signUpMethod` - `email` or `SMS`
  - `signUpButtonText` - text of the proceed button
- `sign_up` - is triggered when user has successfully finished registration process
- `login` - is triggered when user logs into his account
- `log_out` - is triggered when user logs out

There is a folder `src/tracking` with `events.ts`, `index.ts`, `types.ts` files where all events, type definitions and helper functions are written.

#### OneTrust Cookies Consent Notice

[OneTrust Cookie Consent](https://www.onetrust.com/products/cookie-consent/) enables companies to uncover hidden cookies and trackers on websites, configure branded banners using unique consent approaches based on location, and measure and optimize consent rates for maximum opt-ins.

We use GTM to inject OneTrust's javascript script which does all the job for us.

```
<script type="text/javascript">
  var script = document.createElement('script');
  script.dataset.domainScript = 'xxx-xxx-xxx';
  script.src = 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js';
  script.charset = 'UTF-8';
  document.body.appendChild(script);
</script>
<script type="text/javascript">
function OptanonWrapper() { }
</script>
```

## Google Analytics 4 (GA4)

Google Analytics 4 is an analytics service that enables you to measure traffic and engagement across your websites and mobile apps using customizable reports.
We control events we want to send to GA4 via GTM. Whenever we want to track custom event, we push this event to GTM's [dataLayer](https://developers.google.com/tag-platform/tag-manager/web/datalayer?hl=en). Then in GTM we have a configuration that when specific event is pushed to dataLayer it should send specific event to GA4.
In addition GA4 has some things it tracks automatically, like page views, page scrolls etc ([Enhanced measurement events](https://support.google.com/analytics/answer/9216061?hl=en&ref_topic=9756175)).

#### GA4 properties:

- `GeneDx Patient Stage` - used for all preproduction environments
- `GeneDx Patient Prod` - used for production environment

## Getting started

- Create a Google account with your GeneDx email address.
- Request an access to GTM and GA4

## Environment variables

There is only 1 value GTM requires you to provide - GTM ID. We provide it via `NEXT_PUBLIC_GTM_ID` environemnt variable. Notice it starts with `NEXT_PUBLIC`, this is due to the nature of Next.js, you must prefix varibles this way to make them accessible on the client side.

## Learning Resources

- [How to Track Events with Google Analytics 4 and Google Tag Manager Youtube channel](https://www.youtube.com/channel/UCOEX0WT2MJZX3ev954syP3A)
- [How to Track Events with Google Analytics 4 and Google Tag Manager](https://www.youtube.com/watch?v=ekp6dcCXXb8)
- [GA4 docs](https://support.google.com/analytics/answer/10089681)
- [GTM docs](https://developers.google.com/tag-platform/tag-manager/web?hl=en)
