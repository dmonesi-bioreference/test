import { nanoid } from 'nanoid';
import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

type MyProps = DocumentInitialProps & {
  nonce: string
}

export default class Document extends NextDocument<MyProps> {
  static async getInitialProps(
    context: DocumentContext
  ): Promise<MyProps> {
    const serverSideStyles = new ServerStyleSheet();
    const originalRenderResult = context.renderPage;
    const nonce = nanoid();

    try {
      // Overwrite the nonces in the CSP
      if (context.res) {
        let cspHeader: string = context.res.getHeader('Content-Security-Policy') as string;
        if (cspHeader && typeof(cspHeader) == 'string') {
          cspHeader = cspHeader.replace('%REPLACE_WITH_NONCE%', nonce);
          context.res.setHeader('Content-Security-Policy', cspHeader);
        }
      }

      context.renderPage = () =>
        originalRenderResult({
          enhanceApp: (App) => (props) =>
            serverSideStyles.collectStyles(<App {...props} />),
        });

      const initialProps = await NextDocument.getInitialProps(context);
      
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {serverSideStyles.getStyleElement()}
          </>
        ),
        nonce: nonce,
      };
    } finally {
      serverSideStyles.seal();
    }
  }

  render(): JSX.Element {
    const nonce = this.props.nonce;

    return (
      <Html lang="en">
        <Head nonce={nonce}>
          <meta property="csp-nonce" content={nonce} />
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}
