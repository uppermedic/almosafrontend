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
  console.log(router);
  useEffect(() => {
    if (pathname !== '/404' && asPath !== `/${locale}`) {
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
    }
    if (asPath == `/${locale}`) {
      router.push(`/404`);
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
