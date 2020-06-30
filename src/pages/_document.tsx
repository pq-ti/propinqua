import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// import outputcss from '!raw-loader!../styles/output.css';

type Props = {
  styleTags: any;
};

class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }
  // static async getInitialProps(ctx: any) {
  //   const page = ctx.renderPage((App) => (props) => <App {...props} />);
  //   const initialProps: any = await Document.getInitialProps(ctx);
  //   return {
  //     ...page,
  //     styles: [
  //       ...initialProps.styles,
  //       <style
  //         key="custom"
  //         dangerouslySetInnerHTML={{
  //           __html: outputcss,
  //         }}
  //       />,
  //     ],
  //   };
  // }

  render() {
    const GA_TRACKING_ID = 'GTM-TGT2JV7';
    const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GA_TRACKING_ID}');`;
    const gtmFrame = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

    return (
      <Html lang="ja">
        <Head>
          <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          /> */}
          {this.props.styleTags}
          <link
            rel="preload"
            as="font"
            href="/fonts/comfortaa-v28-latin-300.woff2"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/comfortaa-v28-latin-regular.woff2"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/comfortaa-v28-latin-700.woff2"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{ __html: gtmFrame }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
