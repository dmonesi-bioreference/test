import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class Document extends NextDocument {
  static async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    const serverSideStyles = new ServerStyleSheet();
    const originalRenderResult = context.renderPage;

    try {
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
      };
    } finally {
      serverSideStyles.seal();
    }
  }

  render(): JSX.Element {
    const nonce = 'REPLACE_WITH_NONCE';

    return (
      <Html lang="en">
        <Head nonce={nonce} />
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}
