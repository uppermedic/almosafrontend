import NextHead from 'next/head';
import { string } from 'prop-types';
export const config = { amp: true };
const defaultDescription = '';
const defaultKeywords = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="keywords" content={props.keywords || defaultKeywords} />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/public/favicon-16x16.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/public/favicon-32x32.png"
    />
    <link rel="shortcut icon" href="/public/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/public/apple-touch-icon.png"
    />
    <link rel="mask-icon" href="/public/favicon-mask.svg" color="#000000" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    {/* <script
      type="text/javascript"
      src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    ></script> */}
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
      integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
      crossOrigin="anonymous"
    />
    {props.children}
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string
};

export default Head;
