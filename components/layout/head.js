import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { string, shape } from 'prop-types';
export const config = { amp: true };

const defaultDescription = 'Almoosa';
const defaultKeywords = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = ({ data, children }) => {
  const router = useRouter();
  const { locale, asPath, pathname } = router;
  const win = typeof window !== 'undefined';
  const url =
    win &&
    window?.location.href?.includes(`/${locale}/`) &&
    pathname !== '/404';
  const lan = locale === 'en' ? 'ar' : 'en';

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{data && data[locale]?.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={data && data[locale]?.meta_description} />
      <meta
        name="keywords"
        content={(data && data[locale]?.meta_keywords) || defaultKeywords}
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

      {url && <link rel="canonical" href={win && window?.location.href} />}
      <link
        rel="alternate"
        hreflocale={lan}
        href={win && window?.location?.origin + '/' + lan + asPath}
      />

      <link
        rel="alternate"
        hreflocale={locale}
        href={win && window?.location?.origin + '/' + locale + asPath}
      />

      <meta property="og:url" content={(data && data.url) || defaultOGURL} />
      <meta
        property="og:title"
        content={data && (data[locale]?.meta_title || data[locale]?.title)}
      />
      <meta
        property="og:description"
        content={(data && data[locale]?.meta_description) || defaultDescription}
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
