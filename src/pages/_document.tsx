// src/pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* App favicon */}
          <link rel="shortcut icon" href="/assets/images/favicon.ico" />

          {/* jsvectormap CSS */}
          <link
            href="/assets/libs/jsvectormap/jsvectormap.min.css"
            rel="stylesheet"
            type="text/css"
          />

          {/* Swiper slider CSS */}
          <link
            href="/assets/libs/swiper/swiper-bundle.min.css"
            rel="stylesheet"
            type="text/css"
          />

          {/* Layout and App CSS */}
          <link
            href="/assets/css/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets/css/icons.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets/css/app.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets/css/custom.min.css"
            rel="stylesheet"
            type="text/css"
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

export default MyDocument;
