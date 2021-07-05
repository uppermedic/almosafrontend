import NextHead from 'next/head';
import { string, shape, object } from 'prop-types';
export const config = { amp: true };
import { i18n } from 'root/i18n';

const defaultDescription = 'Almoosa';
const defaultKeywords = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = ({ data, children }) => {
  const { language: lang } = i18n;
  const seoLang = data && data[lang];
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{data && data[lang]?.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={data && data[lang]?.meta_description} />
      <meta
        name="keywords"
        content={(data && data[lang]?.meta_keywords) || defaultKeywords}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta property="og:url" content={(data && data.url) || defaultOGURL} />
      <meta property="og:title" content={data && data[lang]?.title} />
      <meta
        property="og:description"
        content={(data && data[lang]?.meta_description) || defaultDescription}
      />
      <meta name="twitter:site" content={(data && data.url) || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content={(data && data.ogImage) || defaultOGImage}
      />
      <meta
        property="og:image"
        content={(data && data.ogImage) || defaultOGImage}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* <script
  type="text/javascript"
  src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
></script> */}
      {/* <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
        crossOrigin="anonymous"
      /> */}
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      {children}
    </NextHead>
  );
};

Head.propTypes = {
  data: shape({
    title: string,
    meta_description: string,
    meta_keywords: string,
    url: string,
    ogImage: string
  })
};

export default Head;
