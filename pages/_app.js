import App from 'next/app';
import { useEffect } from 'react';
import { appWithTranslation, i18n } from 'root/i18n';
import { Provider } from 'react-redux';
import reduxStore from 'src/store/store';
import Head from 'src/components/layout/head';
import Nav from 'src/components/layout/nav';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/Home/Footer';
import ContactUsButton from 'src/components/contact-us/ContactUsButton';
import BreadCrumb from 'src/components/layout/BreadCrumb';
import { fetchData } from '../store/Request';
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
        <Head />
        <Nav />
        <Header data={header} />
        <BreadCrumb />
        <Component {...pageProps} />
        <Footer data={footer} />
      </Provider>
    </div>
  );
}

// MyApp.getInitialProps = async ctx => {
//   const { data } = await fetchData('/layout');
//   return {
//     pageProps: {
//       // namespacesRequired: ['common','menu'], // we won't need to add in every grtServerSideProps method
//       AppPageData: data
//     }
//   };
// };
MyApp.getInitialProps = async appContext => {
  const { data } = await fetchData('/layout');
  let appProps = await App.getInitialProps(appContext);
  appProps.pageProps['AppPageData'] = data;
  return { ...appProps };
};
export default appWithTranslation(MyApp);
