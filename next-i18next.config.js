/** @type {import('next-i18next').UserConfig} */
const path = require('path');

module.exports = {
  i18n: {
    localeDetection: false,
    defaultLocale: 'ar',
    locales: ['ar', 'en']
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath: path.resolve('./public/locales'),
    // typeof window === 'undefined'
    //   ? require('path').resolve('./static/locales')
    //   : '/puplic/static/locales',
    //   // ns: ['common'],

};
