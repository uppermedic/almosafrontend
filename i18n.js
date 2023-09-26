const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
  defaultLanguage: 'ar',
  otherLanguages: ['en'],
  localeSubpaths: ['ar', 'en'],
  localePath: path.resolve('./public/static/locales'),
  shallowRender: true
});
// //test

// const NextI18Next = require('next-i18next').default;
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
// const path = require('path');

// module.exports = new NextI18Next({
//   defaultLanguage: 'ar',
//   otherLanguages: ['en'],
//   localeSubpaths: {
//     ar: 'ar',
//     en: 'en',
//   },
//   localePath: path.resolve('./public/static/locales'),
//   shallowRender: true,
//   useSuspense: false, // Use React suspense mode
// });
