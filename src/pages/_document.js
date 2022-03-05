import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="tr-TR">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-16x16.png"
            sizes="16x16"
          />
          <meta name="title" content="G Psikoloji" />
          <meta
            name="description"
            content="Güçlenerek Gelişmenizde Güvenli Liman G Psikoloji"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="G Psikoloji"
          />
          <meta
            property="og:description"
            content="Güçlenerek Gelişmenizde Güvenli Liman G Psikoloji"
          />
          {/* <meta
            property="og:image"
            content=""
          /> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="G Psikoloji"
          />
          <meta
            property="twitter:description"
            content="Güçlenerek Gelişmenizde Güvenli Liman G Psikoloji"
          />
          {/* <meta
            property="twitter:image"
            content=""
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
