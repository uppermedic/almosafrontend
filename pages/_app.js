import App from 'next/app';
import { useEffect } from 'react';
import { appWithTranslation, i18n } from 'root/i18n';
import { Provider } from 'react-redux';
import reduxStore from 'src/store/store';
import Head from 'src/components/layout/head';
import Nav from 'src/components/layout/TopNav';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/Home/Footer';
import ContactUsButton from 'src/components/contact-us/ContactUsButton';
import BreadCrumb from 'src/components/layout/BreadCrumb';
import { fetchData } from '../store/Request';
import { useRouter } from 'next/router';

/**
 * styles
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'hover.css/scss/hover.scss';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../assets/style/style.scss';

let isSSR = typeof window === 'undefined';
function MyApp({ Component, pageProps }) {
  const { header, footer } = pageProps.AppPageData;
  const router = useRouter();
  const { locale, asPath, pathname } = router;
  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: 'Almoosa Specialist Hospital',
    url: 'http://almoosahospital.org/',
    address: 'Dhahran Rd, Al Mubarraz 36342, Saudi Arabia',
    sameAs: [
      'https://www.facebook.com/almoosahospital1/',
      'https://www.youtube.com/channel/UCspHgrLVKETE06FNIFcBy3A',
      'https://twitter.com/almoosahospital',
      'https://www.instagram.com/almoosahospital/',
      'https://foursquare.com/v/almoosa-specialist-hospital--%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D8%A7%D9%84%D8%AA%D8%AE%D8%B5%D8%B5%D9%8A/56161bae498e781bbeb1c068',
      'https://www.linkedin.com/company/almoosa-specialist-hospital/'
    ]
  };

  useEffect(() => {
    // console.log('hiiiii', asPath.includes(`/${locale}/`));
    if (
      pathname !== '/404' &&
      asPath !== `/${locale}` &&
      !asPath.includes(`/${locale}/`)
    ) {
      if (locale == i18n.language) {
        i18n.changeLanguage(i18n.language);
        document
          .getElementsByTagName('html')[0]
          .setAttribute('lang', i18n.language);

        router.push(
          `/${i18n.language}` + asPath,
          `/${i18n.language}` + asPath,
          {
            locale: i18n.language
          }
        );
      } else if (locale != i18n.language) {
        i18n.changeLanguage(locale);
        document.getElementsByTagName('html')[0].setAttribute('lang', locale);

        router.push(`/${locale}` + asPath, `/${locale}` + asPath, {
          locale: locale
        });
      }
    } else if (
      asPath == `/${locale}` ||
      asPath.includes('/en/') ||
      asPath.includes('/ar/')
    ) {
      i18n.changeLanguage(locale);
      document.getElementsByTagName('html')[0].setAttribute('lang', locale);

      router.push(`/${locale}/404`);
    }
  }, [locale, i18n.language]);

  useEffect(() => {
    if (!isSSR) {
      document
        .getElementsByTagName('html')[0]
        .setAttribute('lang', i18n.language);
    }
  }, []);

  return (
    <div style={{ overflow: 'hidden' }}>
      <Provider store={reduxStore}>
        <ContactUsButton phone={footer?.contact_us?.contact_phone} />
        {/* <Head /> */}
        <Nav />
        <Header data={header} />
        <BreadCrumb />
        <Component {...pageProps} />
        <Footer data={footer} />
      </Provider>
      {asPath === '/' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </div>
  );
}

MyApp.getInitialProps = async appContext => {
  const { data } = await fetchData('/layout');
  let appProps = await App.getInitialProps(appContext);
  appProps.pageProps['AppPageData'] = data;
  return { ...appProps };
};
export default appWithTranslation(MyApp);
