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
        </body>
      </Html>
    );
  }
}
export default MyDocument;
