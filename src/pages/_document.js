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
      <Html lang="en-GB">
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
          <meta name="title" content="gpsikoloji" />
          <meta
            name="description"
            content="Hey there, This is Vipul Jha aka lordarcadius. I am an Android & Flutter developer who also works on ROMs, Kernels, & Scripts."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Vipul Jha - Android & Flutter Dev"
          />
          <meta
            property="og:description"
            content="Hey there, This is Vipul Jha aka lordarcadius. I am an Android & Flutter developer who also works on ROMs, Kernels, & Scripts."
          />
          <meta
            property="og:image"
            content="https://www.vipuljha.com/images/banner.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="Vipul Jha - Android & Flutter Dev"
          />
          <meta
            property="twitter:description"
            content="Hey there, This is Vipul Jha aka lordarcadius. I am an Android & Flutter developer who also works on ROMs, Kernels, & Scripts."
          />
          <meta
            property="twitter:image"
            content="https://www.vipuljha.com/images/banner.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
