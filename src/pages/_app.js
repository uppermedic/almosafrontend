import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { withRouter } from 'next/router';
import withReduxStore from '../store/with-redux-store';
import { appWithTranslation, i18n } from 'i18n';
import Head from 'src/components/layout/head';
import Nav from 'src/components/layout/nav';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/Home/Footer';
import BlogButton from 'src/components/Blog/BlogButton';
/**
 * styles
 */
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.scss';

let isSSR = typeof window === 'undefined';
class MyApp extends App {
  componentDidMount() {
    /**
     * check if not server side render
     * then add lang attr
     */
    if (!isSSR) {
      document
        .getElementsByTagName('html')[0]
        .setAttribute('lang', i18n.language);
    }
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <div style={{ overflow: 'hidden' }}>
        <Provider store={reduxStore}>
          <BlogButton />
          <Head />
          <Nav />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </div>
    );
  }
}

export default appWithTranslation(withReduxStore(MyApp));
