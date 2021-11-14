import NextHead from 'next/head';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const { locale, asPath, pathname } = router;
  const win = typeof window !== 'undefined';

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
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      {pathname !== '/404' && (
        <link
          rel="canonical"
          hrefLang={locale}
          href={`${win && window?.location.href}`}
        />
      )}

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
