import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="EQ2L15_h9EboCsU_n3mW8nmXTqT0C3FSpbYOsbMMO5Q"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
            integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async=""
            src="https://www.googletagmanager.com/gtm.js?id=GTM-KJQ33LF"
          ></script>
          <script
            type="text/javascript"
            async=""
            src="https://www.google-analytics.com/analytics.js"
          ></script>
          <script
            async=""
            src="https://www.googletagmanager.com/gtag/js?id=UA-45018493-1"
          ></script>
          {/* <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'UA-45018493-1');
          </script> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-45018493-1');`
            }}
          />

          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KJQ33LF');`
            }}
          ></script>
          {/*End Google Tag Manager*/}

          <meta
            name="google-site-verification"
            content="5ChBpw2MtkPYHI9TGJa1OOHEfNLylds4NY0OAyM6pls"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          ></script>
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script
            type="text/javascript"
            src="https://cdn.labiba.ai/static/js/bundle.js"
            id="labibaWebChat"
            cdn="https://cdn.labiba.ai"
            storyId="dded4da5-f160-4074-beb3-86116ec4535b"
            baseURL="https://botbuilder.labiba.ai"
          ></script>
          <script type="text/javascript">AOS.init();</script>
          {/* Google Tag Manager (noscript)*/}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJQ33LF"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          ></noscript>
          {/* End Google Tag Manager (noscript)*/}
        </body>
      </Html>
    );
  }
}
export default MyDocument;
