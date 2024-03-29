const path = require('path');
const webpack = require('webpack');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true
});
const optimizedImages = require('next-optimized-images');
// const { nextI18NextRewrites } = require('next-i18next/rewrites');
const { i18n } = require('./next-i18next.config');
const localeSubpaths = {};

/* redirect permanent links */
const links_permanent = [
  {
    source: '/ar/event/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2019-09-08/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2019-09/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2019-10/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2019-11/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2019-12/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2020-01/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2020-02/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2020-03/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2020-04/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2020-05/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2020-06/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2020-07/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2020-08/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2020-09/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2020-10/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2020-11/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2020-12/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2021-01/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2021-02/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2021-03/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2021-04/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2021-05/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2021-06/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2021-07/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2021-08/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2021-10-18/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8/',
    destination: '/ar/'
  },
  {
    source: '/ar/%D8%A7%D9%84%D9%86%D9%85%D8%B3%D8%A7/',
    destination: '/ar/'
  },
  {
    source: '/ar/%D8%A7%D9%84%D9%8A%D8%A7%D8%A8%D8%A7%D9%86/',
    destination: '/ar/'
  },
  {
    source: '/ar/%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A%D8%A7/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%D8%AC%D9%86%D9%88%D8%A8-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/',
    destination: '/ar/'
  },
  {
    source: '/ar/%D8%AC%D9%88%D8%B1%D8%AC%D9%8A%D8%A7/',
    destination: '/ar/'
  },
  {
    source: '/ar/2018/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2018/11/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2019/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2019/07/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2019/08/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2019/09/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2020/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2020/06/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2020/07/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2020/08/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2020/09/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2020/10/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2021/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2021/04/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2021/05/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2021/06/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/2021/07/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/author/admin/page/10/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/author/admin/page/11/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/author/admin/page/12/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/author/admin/page/13/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/author/admin/page/14/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/author/admin/page/15/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/author/admin/page/2/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/author/admin/page/3/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/author/admin/page/4/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/author/admin/page/5/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/author/admin/page/6/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/author/admin/page/7/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/author/admin/page/8/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/author/admin/page/9/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/%D8%A3%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A7/',
    destination: '/ar/'
  },
  {
    source: '/ar/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/',
    destination: '/ar/'
  },
  {
    source: '/ar/%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86/',
    destination: '/ar/'
  },
  {
    source: '/ar/%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A%D9%86/',
    destination: '/ar/'
  },
  {
    source: '/ar/%D8%A7%D9%84%D8%B5%D9%8A%D9%86/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%A4%D8%AA%D9%85%D8%B1%D8%A7%D8%AA-%D9%88-%D9%88%D8%B1%D8%B4-%D8%A7%D9%84%D8%B9%D9%85%D9%84/',
    destination: '/ar/training-education/courses'
  },
  {
    source: '/ar/%D8%A7%D9%84%D9%85%D8%A7%D9%84%D8%AF%D9%8A%D9%81/',
    destination: '/ar/'
  },
  {
    source: '/ar/%D8%AF%D8%A8%D9%8A/',
    destination: '/ar/'
  },
  {
    source: '/ar/%D8%B1%D9%88%D8%B3%D9%8A%D8%A7/',
    destination: '/ar/'
  },
  {
    source: '/ar/%D8%B3%D9%88%D9%8A%D8%B3%D8%B1%D8%A7/',
    destination: '/ar/'
  },
  {
    source: '/ar/%D9%82%D8%B7%D8%B1/',
    destination: '/ar/'
  },
  {
    source: '/ar/%D9%83%D9%86%D8%AF%D8%A7/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/magazines/%D9%85%D8%AC%D9%84%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-1/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source:
      '/ar/magazines/%D9%85%D8%AC%D9%84%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-2/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source:
      '/ar/magazines/%D9%85%D8%AC%D9%84%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-4/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source:
      '/ar/magazines/%D9%85%D8%AC%D9%84%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-5/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source:
      '/ar/magazines/%D9%85%D8%AC%D9%84%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-6/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source:
      '/ar/magazines/%D9%85%D8%AC%D9%84%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-8/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/ar/magazines/ahsa-run-2018/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/ar/magazines/almoosa-magazine-number-10/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/ar/magazines/almoosa-magazine-number-11/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/ar/magazines/almoosa-magazine-number-12/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/ar/magazines/almoosa-magazine-number-13/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/ar/magazines/almoosa-magazine-number-14/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/ar/slider/banner1/',
    destination: '/ar/'
  },
  {
    source: '/ar/travel-guidelines/',
    destination: '/ar/'
  },
  {
    source: '/ar/upcoming-event/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/cat_homeboxes/about-accordion-ar/',
    destination: '/ar/about/awards'
  },
  {
    source: '/ar/cat_homeboxes/about-ar/',
    destination: '/ar/about/overview'
  },
  {
    source: '/ar/cat_homeboxes/home-ar/',
    destination: '/ar/'
  },
  {
    source: '/ar/dining-options/cafeteria-for-staff-only/',
    destination: '/ar/'
  },
  {
    source: '/ar/magazines/almoosa-magazine-number-15/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source:
      '/ar/magazines/almoosa-magazine-number-16-20-years-in-serving-homeland/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/ar/magazines/almoosa-magazine-number-17-hospital-for-the-future/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/ar/magazines/almoosa-magazine-number-18/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/ar/magazines/almoosa-magazine-number-3/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/ar/magazines/almoosa-magazine-number-7/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/ar/magazines/almoosa-magazine-number-9/',
    destination: '/ar/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/ar/homeboxes/human-resources/',
    destination: '/ar/'
  },
  {
    source: '/ar/homeboxes/specialties/',
    destination: '/ar/services/medical-centers'
  },
  {
    source: '/ar/author/admin/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/events/2021-09/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/virtual-tour/',
    destination: '/ar/'
  },
  {
    source: '/ar/dining-options/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/events/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/egypt/',
    destination: '/ar/'
  },
  {
    source: '/ar/departments/allergies-asthma-clinic/',
    destination:
      '/ar/services/medical-centers/%D8%B9%DB%8C%D8%A7%D8%AF%D8%A9-%D8%A3%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2-%D8%A7%D9%84%D8%AA%D9%86%D9%81%D8%B3%D9%8A/?id=22'
  },
  {
    source: '/ar/departments/cardiovascular-clinic/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A-%D9%88%D8%A7%D9%84%D8%BA%D8%AF%D8%AF-%D8%A7%D9%84%D8%B5%D9%85%D8%A7%D8%A1/?id=26'
  },
  {
    source: '/ar/departments/epilepsy-clinic/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85-%D8%A7%D9%84%D8%B9%D8%B5%D8%A8%DB%8C%D8%A9/?id=7'
  },
  {
    source: '/ar/departments/gastroenterology-clinic/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A3%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2-%D8%A7%D9%84%D9%87%D8%B6%D9%85%D9%8A/?id=16'
  },
  {
    source: '/ar/departments/hematology-clinic/',
    destination: '/ar/services/medical-centers'
  },
  {
    source: '/ar/departments/infectious-diseases-division/',
    destination: '/ar/services/medical-centers'
  },
  {
    source: '/ar/departments/mother-fetal-clinic/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%B5%D8%AD%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D8%A3%D8%A9/?id=11'
  },
  {
    source: '/ar/departments/nephrology-clinic/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A3%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%83%D9%84%D9%89-%D9%88%D8%A7%D9%84%D8%BA%D8%B3%DB%8C%D9%84-%D8%A7%D9%84%D9%83%D9%84%D9%88%D9%8A/?id=17'
  },
  {
    source: '/ar/departments/physiotherapy-department/',
    destination: '/ar/'
  },
  {
    source: '/ar/departments/psychiatry-clinic/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85-%D8%A7%D9%84%D8%B9%D8%B5%D8%A8%DB%8C%D8%A9/?id=7'
  },
  {
    source: '/ar/departments/diabetic-and-endocrinology-clinic/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A-%D9%88%D8%A7%D9%84%D8%BA%D8%AF%D8%AF-%D8%A7%D9%84%D8%B5%D9%85%D8%A7%D8%A1/?id=26'
  },
  {
    source: '/ar/departments/e-nt-clinic/',
    destination:
      '/ar/services/medical-centers/%D9%82%D8%B3%D9%85-%D8%A7%D9%84%D8%A3%D9%86%D9%81-%D9%88%D8%A7%D9%84%D8%A3%D8%B0%D9%86-%D9%88%D8%A7%D9%84%D8%AD%D9%86%D8%AC%D8%B1%D8%A9/?id=19'
  },
  {
    source: '/ar/departments/family-medicine-clinic/',
    destination:
      '/ar/services/medical-centers/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9-%D8%B7%D8%A8-%D8%A7%D9%84%D8%A3%D8%B3%D8%B1%D8%A9/?id=21'
  },
  {
    source: '/ar/departments/plastic-surgery-clinic/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%AC%D9%84%D8%AF%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D9%8A%D9%84/?id=20'
  },
  {
    source: '/ar/departments/pulmonary-clinic/',
    destination:
      '/ar/services/medical-centers/%D8%B9%DB%8C%D8%A7%D8%AF%D8%A9-%D8%A3%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2-%D8%A7%D9%84%D8%AA%D9%86%D9%81%D8%B3%D9%8A/?id=22'
  },
  {
    source: '/ar/departments/urology-clinic/',
    destination:
      '/ar/services/medical-centers/%D8%B9%DB%8C%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%84%D9%83-%D8%A7%D9%84%D8%A8%D9%88%D9%84%DB%8C%D8%A9/?id=25'
  },
  {
    source: '/ar/departments/vascular-surgery-clinic/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D9%82%D9%84%D8%A8/?id=6'
  },
  {
    source: '/ar/departments/dermatology-clinic/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%AC%D9%84%D8%AF%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D9%8A%D9%84/?id=20'
  },
  {
    source: '/ar/doctors/%D8%AF-%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85-%D9%85%D9%88%D8%A7%D9%81%D9%8A/?id=226'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A8%D9%84%D9%82%D9%8A%D8%B3-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D8%B9%D9%84%D9%8A/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/%D9%87%D8%A8%D8%A9/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF-%D8%AD%D8%B3%D9%8A%D9%86-%D9%85%D8%AD%D9%85%D8%AF-%D8%B3%D9%86%D8%AF/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/ar/dr-ghnnam-aldossary/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%AD%D8%AC%D8%A7%D8%B1/',
    destination:
      '/ar/our-doctors/%D8%AF.%D8%A3%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%AD%D8%AC%D8%A7%D8%B1/?id=166'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF-%D8%A8%D9%88-%D8%B9%D9%8A%D8%B3%D9%89/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D8%AD%D9%85%D8%AF-%D8%A8%D9%88-%D8%B9%D9%8A%D8%B3%D9%89-/?id=15'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF-%D8%B9%D9%84%D8%A7%D9%85/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/%D8%AF-%D8%A3%D9%85%D8%AC%D8%AF-%D8%B9%D9%88%D8%B6/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D9%85%D8%AC%D8%AF-%D8%B9%D9%88%D8%B6/?id=86'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A7%D8%B3%D8%A7%D9%85%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D8%B6%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D8%B3%D8%A7%D9%85%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D8%B6%D9%8A/?id=44'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A7%D8%B3%D8%B1%D8%A7%D8%A1-%D8%AA%D9%85%D9%83%D9%86%D8%A7%D8%AA/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A7%D8%B3%D8%B1%D8%A7%D8%A1-%D8%AA%D9%85%D9%83%D9%86%D8%A7%D8%AA/?id=88'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A7%D9%84%D8%B3%D9%8A%D8%AF-%D9%8A%D9%88%D8%B3%D9%81/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A7%D9%84%D8%B3%D9%8A%D8%AF-%D9%8A%D9%88%D8%B3%D9%81/?id=20'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A7%D9%84%D8%B9%D9%86%D9%88%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A7%D9%84%D8%B9%D9%86%D9%88%D8%AF-%D9%85%D9%86%D8%B5%D9%88%D8%B1/?id=151'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A7%D9%84%D9%8A%D8%A7%D9%86%D8%A7-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A7%D9%84%D9%8A%D8%A7%D9%86%D8%A7-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84/?id=85'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%AC%D8%A7%D8%A8%D8%B1-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AC%D8%A7%D8%A8%D8%B1-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87/?id=149'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%AD%D8%A7%D9%85%D8%AF-%D8%A7%D9%84%D9%88%D8%AF%D8%B9%D8%A7%D9%86%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AD%D8%A7%D9%85%D8%AF-%D8%A7%D9%84%D9%88%D8%AF%D8%B9%D8%A7%D9%86%D9%8A/?id=42'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%AD%D8%B3%D9%8A%D9%86-%D9%85%D8%AD%D9%85%D8%AF-%D8%B5%D8%AF%D9%82%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AD%D8%B3%D9%8A%D9%86-%D9%85%D8%AD%D9%85%D8%AF-%D8%B5%D8%AF%D9%82%D9%8A/?id=141'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%AF%D9%8A%D9%86%D8%A7-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B3%D9%85%D9%8A%D8%B9/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AF%D9%8A%D9%86%D8%A7-%D8%A8%D8%B1%D9%8A%D9%86-/?id=21'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B1%D8%A7%D9%86%D9%8A%D8%A7-%D8%A7%D9%84%D8%B9%D9%8A%D8%B3%D9%89/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B1%D8%A7%D9%86%D9%8A%D8%A7-%D8%A7%D9%84%D8%B9%D9%8A%D8%B3%D9%89/?id=94'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B2%D9%8A%D9%86%D8%A8-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B2%D9%8A%D9%86%D8%A8-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/?id=137'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B3%D8%A7%D8%B1%D8%A9-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B8%D9%8A%D9%85/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B3%D8%A7%D8%B1%D8%A9-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B8%D9%8A%D9%85/?id=150'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B3%D8%B9%D8%AF-%D8%A7%D9%84%D8%B7%D8%A7%D9%87%D8%B1/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B4%D8%A7%D9%87%D9%8A%D9%86-%D8%A3%D8%AD%D9%85%D8%AF/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B4%D8%A7%D9%87%D9%8A%D9%86-%D8%A3%D8%AD%D9%85%D8%AF/?id=163'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B5%D9%81%D9%88%D8%AA-%D8%A7%D9%84%D8%AF%D8%B9%D8%A8%D9%88%D8%B3/',
    destination:
      '/ar/our-doctors/%D8%AF.%D8%B5%D9%81%D9%88%D8%AA-%D8%A7%D9%84%D8%AF%D8%B9%D8%A8%D9%88%D8%B3/?id=100'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B9%D8%A7%D8%AF%D9%84-%D8%B7%D8%A7%D9%84%D8%A8/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86-%D8%B7%D8%A8%D9%84/?id=29'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%81%D8%A7%D8%B7%D9%85%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D9%83/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%81%D8%A7%D8%B7%D9%85%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D9%83/?id=152'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%81%D9%87%D8%AF-%D8%A7%D9%84%D9%88%D8%AF%D8%B9%D8%A7%D9%86%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%81%D9%87%D8%AF-%D8%A7%D9%84%D9%88%D8%AF%D8%B9%D8%A7%D9%86%D9%8A/?id=28'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%84%D8%A7%D8%B1%D8%A7-%D8%A8%D8%B3%D8%AA%D8%B1%D8%B3/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%84%D8%A7%D8%B1%D8%A7-%D8%A8%D8%B7%D8%B1%D8%B3/?id=138'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%84%D9%8A%D8%AB-%D9%81%D9%8A%D8%B5%D9%84-%D8%B9%D8%A8%D9%8A%D8%AF%D8%A7%D8%AA/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%AD%D8%A7%D8%B3%D9%86-%D9%85%D8%AD%D8%AC%D9%88%D8%A8/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D8%A7%D8%B3%D9%86-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D9%84%D8%B7%D9%8A%D9%81-%D9%85%D8%AD%D8%AC%D9%88%D8%A8/?id=170'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B3%D9%84%D9%8A%D9%85/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B3%D9%84%D9%8A%D9%85/?id=22'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D9%82%D8%AD%D8%B7%D8%A7%D9%86%D9%8A/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%86%D9%88%D8%B1/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D8%AF-%D8%A3%D9%86%D9%88%D8%B1/?id=103'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D8%AD%D8%B3%D9%8A%D9%86/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D9%87%D9%8A%D8%AB%D9%85/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D8%AF-%D9%87%D9%8A%D8%AB%D9%85-%D8%B7%D9%87/?id=106'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%AF%D9%8A%D9%86-%D8%B9%D8%B7%D9%8A%D8%A9/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AF%D9%8A%D9%86-%D8%B9%D8%B7%D9%8A%D8%A9/?id=49'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%B1%DA%A4%D8%AA-%D8%A8%D8%A7%D9%84%D9%88%D8%AA/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D9%8A%D8%B1%DA%A4%D8%AA-%D8%A8%D8%A7%D9%84%D9%88%D8%AA/?id=46'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%B2%D9%8A%D8%AF-%D8%A7%D9%84%D8%B1%D9%88%D8%A7%D8%B4%D8%AF%D8%A9/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%B2%D9%8A%D8%AF-%D8%A7%D9%84%D8%B1%D9%88%D8%A7%D8%B4%D8%AF%D8%A9/?id=105'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%86%D8%A7%D9%8A%D9%81-%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D9%85/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%86%D8%A7%D9%8A%D9%81-%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D9%85/?id=24'
  },
  {
    source: '/ar/doctors/%D8%AF-%D9%86%D9%87%D9%89-%D9%88%D8%B1%D8%B4%D8%A9/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%86%D9%87%D9%89-%D9%88%D8%B1%D8%B4%D8%A9/?id=25'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%88%D8%B3%D9%8A%D9%85-%D8%B1%D9%88%D9%81%D8%A7%D9%8A%D9%84/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%88%D8%B3%D9%8A%D9%85-%D8%B1%D9%88%D9%81%D8%A7%D9%8A%D9%84/?id=47'
  },
  {
    source: '/ar/doctors/14776/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B2%D9%8A%D9%86%D8%A8-%D9%85%D8%B5%D8%B7%D9%81%D9%89/?id=45'
  },
  {
    source: '/ar/doctors/14819/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B9%D8%AF%D9%86%D8%A7%D9%86-%D8%A7%D9%84%D9%86%D8%AD%D9%88%D9%8A/?id=104'
  },
  {
    source: '/ar/doctors/dr-abdullah-bureggah-2/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D9%84%D9%87-%D8%A8%D9%88%D8%B1%D9%82%D9%87/?id=26'
  },
  {
    source: '/ar/doctors/dr-akram-baseil/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D9%83%D8%B1%D9%85-%D8%A8%D8%A7%D8%B3%D9%8A%D9%84/?id=159'
  },
  {
    source: '/ar/doctors/dr-ashraf-hanafy/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D8%B4%D8%B1%D9%81-%D8%AD%D9%86%D9%81%D9%8A/?id=92'
  },
  {
    source: '/ar/doctors/dr-basheer-rababah/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A8%D8%B4%D9%8A%D8%B1-%D8%B1%D8%A8%D8%A7%D8%A8%D8%A9/?id=211'
  },
  {
    source: '/ar/doctors/dr-haitham-al-thulithi/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%87%D9%8A%D8%AB%D9%85-%D8%A7%D9%84%D8%AB%D9%84%D9%8A%D8%AB%D9%8A/?id=158'
  },
  {
    source: '/ar/doctors/dr-housam-almoukayed/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AD%D8%B3%D8%A7%D9%85-%D8%A7%D9%84%D9%85%D9%82%D9%8A%D8%AF/?id=32'
  },
  {
    source: '/ar/doctors/dr-houssain-al-hajj/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AD%D8%B3%D9%8A%D9%86-%D8%A7%D9%84%D8%AD%D8%A7%D8%AC/?id=157'
  },
  {
    source: '/ar/doctors/dr-ibrahim-hassoun/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85-%D8%AD%D8%B3%D9%88%D9%86-%D8%A7%D9%84%D8%B9%D9%84%D9%8A/?id=156'
  },
  {
    source: '/ar/doctors/dr-kassem-ahmad-mazzaz/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/dr-mahmoud-abou-tabl/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%A7%D8%A8%D9%88-%D8%B7%D8%A8%D9%84/?id=96'
  },
  {
    source: '/ar/doctors/dr-mariam-khateeb/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%B1%D9%8A%D9%85-%D8%AE%D8%B7%D9%8A%D8%A8/?id=155'
  },
  {
    source: '/ar/doctors/dr-mohamad-k-tameesh/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D8%AF-%D8%B7%D9%85%D9%8A%D8%B4/?id=31'
  },
  {
    source: '/ar/doctors/dr-mohamed-el-awady-2/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B9%D9%88%D8%B6%D9%8A/?id=164'
  },
  {
    source: '/ar/doctors/dr-mohamed-el-sayed-abdel-latif-mahmoud/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B3%D9%8A%D8%AF/?id=154'
  },
  {
    source: '/ar/doctors/dr-mohamed-yehya-neama/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D8%AF-%D9%8A%D8%AD%D9%8A%D9%89-%D9%86%D8%B9%D9%85%D8%A9/?id=30'
  },
  {
    source: '/ar/doctors/dr-mohammed-bassiouny/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D8%AF-%D8%A8%D8%B3%D9%8A%D9%88%D9%86%D9%8A/?id=145'
  },
  {
    source: '/ar/doctors/dr-salwa-el-hadidi/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B3%D9%84%D9%88%D9%89-%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AF%D9%8A/?id=95'
  },
  {
    source: '/ar/doctors/dr-samer-nahle/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B3%D8%A7%D9%85%D8%B1-%D9%86%D8%AD%D9%84%D8%A9/?id=153'
  },
  {
    source: '/ar/doctors/dr-samer-qarah/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B3%D8%A7%D9%85%D8%B1-%D9%82%D8%A7%D8%B1%D9%87/?id=131'
  },
  {
    source: '/ar/doctors/dr-shamel-aboulsaad/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B4%D8%A7%D9%85%D9%84-%D8%A7%D8%A8%D9%88%D8%B3%D8%B9%D8%AF/?id=91'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%A8%D8%A7%D8%A1-%D9%85%D8%AD%D9%85%D8%AF-%D8%B9%D8%A7%D8%AF%D9%84/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D8%A8%D8%A7%D8%A1-%D9%85%D8%AD%D9%85%D8%AF-%D8%B9%D8%A7%D8%AF%D9%84-/?id=17'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85/?id=228'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF-%D8%AF%D8%B3%D9%88%D9%82%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D8%AD%D9%85%D8%AF-%D8%AF%D8%B3%D9%88%D9%82%D9%8A-/?id=18'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF-%D8%B9%D9%84%D9%8A-%D8%BA%D9%88%D8%A7%D8%B3/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF-%D8%B9%D9%88%D9%8A%D8%B3/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF-%D9%83%D8%A7%D8%AD%D9%84%D8%A7/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF-%D9%85%D8%A7%D8%B1%D9%8A%D8%A7/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF-%D9%85%D9%88%D8%B3%D9%89/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%B3%D8%A7%D9%85%D8%A9-%D8%AD%D8%B3%D9%8A%D9%86/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D8%B3%D8%A7%D9%85%D8%A9-%D8%AD%D8%B3%D9%8A%D9%86-/?id=232'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85-%D8%A7%D9%84%D8%AC%D8%A8%D8%B1/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85-%D8%A7%D9%84%D8%AC%D8%A8%D8%B1/?id=90'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85-%D9%85%D9%88%D8%A7%D9%81%D9%8A/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A8%D8%A7%D8%B3%D9%84-%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%AA%D8%A7%D9%85%D8%B1-%D8%B4%D9%88%D9%82%D9%8A/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/%D8%AF-%D8%AD%D8%B3%D9%86-%D8%AF%D9%8A%D8%A7%D8%A8/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AD%D8%B3%D9%86-%D8%AF%D9%8A%D8%A7%D8%A8/?id=227'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%AD%D8%B3%D9%8A%D9%86-%D8%A7%D9%84%D8%B1%D8%B6%D9%88%D8%A7%D9%86/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AD%D8%B3%D9%8A%D9%86-%D8%A7%D9%84%D8%B1%D8%B6%D9%88%D8%A7%D9%86/?id=14'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%AD%D8%B3%D9%8A%D9%86-%D8%AC%D9%88%D8%A7%D8%AF-%D8%B9%D9%84%D9%8A-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AD%D8%B3%D9%8A%D9%86-%D8%AC%D9%88%D8%A7%D8%AF-%D8%B9%D9%84%D9%8A-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1/?id=79'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%AD%D8%B3%D9%8A%D9%86-%D8%B9%D9%84%D9%8A-%D8%A3%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%AD%D8%A7%D8%AC%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AD%D8%B3%D9%8A%D9%86-%D8%A7%D9%84%D8%AD%D8%A7%D8%AC%D9%8A/?id=134'
  },
  {
    source: '/ar/doctors/%D8%AF-%D8%B1%D8%A7%D8%B6%D9%8A-%D9%85%D9%83%D9%8A/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B1%D8%A7%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%A8%D8%B4%D8%B1/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B1%D8%A7%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%A8%D8%B4%D8%B1/?id=48'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B1%D8%BA%D8%AF%D8%A9-%D8%A7%D9%84%D8%B3%D9%8A%D8%AF-%D9%85%D8%A8%D8%B1%D9%88%D9%83-%D8%A7%D9%84%D8%B1%D9%88%D9%8A%D9%86%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B1%D8%BA%D8%AF%D8%A9-%D8%A7%D9%84%D8%B1%D9%88%D9%8A%D9%86%D9%8A/?id=147'
  },
  {
    source: '/ar/doctors/%D8%AF-%D8%B3%D9%8A%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B4%D9%8A%D9%85%D8%A7%D8%A1-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D9%8A/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B5%D9%81%D9%88%D8%AA-%D9%85%D8%AD%D9%85%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B4%D9%8A%D9%88%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B5%D9%81%D9%88%D8%AA-%D9%85%D8%AD%D9%85%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B4%D9%8A%D9%88%D9%8A/?id=80'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D9%84%D9%87-%D9%81%D8%A7%D8%B1%D9%88%D9%82/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D9%84%D9%87-%D9%81%D8%A7%D8%B1%D9%88%D9%82/?id=121'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87-%D8%B1%D9%85%D8%B6%D8%A7%D9%86-%D8%AD%D8%B3%D9%8A%D9%86-%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D9%84%D9%87-%D8%B1%D9%85%D8%B6%D8%A7%D9%86-/?id=19'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B9%D9%84%D8%A7%D8%A1-%D9%83%D9%85%D8%A7%D9%84-%D8%A7%D9%84%D8%AC%D9%86%D8%A7%D9%88%D9%8A/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/%D8%AF-%D8%B9%D9%84%D9%8A-%D8%BA%D9%8A%D8%A7%D8%AF/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B9%D9%84%D9%8A-%D9%87%D8%B1%D9%8A%D8%AF%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B9%D9%84%D9%8A-%D9%87%D8%B1%D9%8A%D8%AF%D9%8A/?id=64'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B9%D9%85%D8%B1%D9%88-%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B9%D9%8A%D8%B3%D9%89-%D9%85%D9%88%D8%B3%D9%89/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B9%D9%8A%D8%B3%D9%89-%D9%85%D9%88%D8%B3%D9%89/?id=225'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%81%D8%B1%D8%AD-%D9%87%D8%A7%D8%AA%D9%88%D9%85/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/%D8%AF-%D9%81%D8%B6%D9%84-%D8%AC%D8%A7%D8%A8%D8%B1/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%81%D8%B6%D9%84-%D8%AC%D8%A7%D8%A8%D8%B1/?id=146'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D8%AA%D9%88%D9%81%D9%8A%D9%82/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D8%AE%D9%84%D9%8A%D9%84/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D8%B9%D9%8A%D8%B3%D9%89/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D8%AF-%D8%B9%D9%8A%D8%B3%D9%89/?id=16'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%B1%D9%88%D8%A9-%D8%AD%D9%86%D9%81%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%B1%D9%88%D8%A9-%D8%AD%D9%86%D9%81%D9%8A/?id=87'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%B5%D8%B7%D9%81%D9%89-%D8%B3%D8%B9%D8%AF/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%B5%D8%B7%D9%81%D9%89-%D8%B3%D8%B9%D8%AF/?id=162'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%B9%D8%AA%D8%B2-%D8%B5%D8%A8%D8%B1%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%B9%D8%AA%D8%B2-%D8%B5%D8%A8%D8%B1%D9%8A/?id=120'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D9%86%D9%89-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/%D8%AF-%D9%85%D9%86%D9%89-%D8%B9%D9%84%D9%8A/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D9%88%D8%AF%D8%A9/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%86%D8%B4%D9%88%D9%89-%D8%B3%D9%8A%D8%AF%D8%A7/',
    destination: '/ar/our-doctors'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%86%D9%8A%D9%81%D9%8A%D9%86-%D8%AD%D9%84%D9%85%D9%8A-%D9%86%D8%A7%D8%B1%D9%88%D8%B2/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%86%D9%8A%D9%84%D9%8A-%D8%A3%D8%AD%D9%85%D8%AF/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%86%D9%8A%D9%84%D9%8A-%D8%A3%D8%AD%D9%85%D8%AF/?id=50'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%87%D8%B4%D8%A7%D9%85-%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%87%D8%B4%D8%A7%D9%85-%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86/?id=224'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%87%D8%B4%D8%A7%D9%85-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%88%D8%AD%D9%8A%D8%AF-%D9%85%D9%87%D8%AF%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%88%D8%AD%D9%8A%D8%AF-%D9%85%D9%87%D8%AF%D9%8A/?id=129'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%88%D8%B3%D8%A7%D9%85-%D8%B9%D9%84%D9%8A-%D8%AD%D8%B3%D9%86/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D9%88%D9%84%D8%A7%D8%A1-%D8%A7%D9%84%D8%AF%D9%8A%D8%B1%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%88%D9%84%D8%A7%D8%A1-%D8%A7%D9%84%D8%AF%D9%8A%D8%B1%D9%8A/?id=27'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF-%D9%85%D9%8A%D8%B1%D8%B2%D8%A7-%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D8%B3%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D8%B3%D9%8A/?id=38'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D9%8A%D9%85%D9%86-%D8%B7%D9%86%D8%B7%D8%A7%D9%88%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D9%8A%D9%85%D9%86-%D8%B7%D9%86%D8%B7%D8%A7%D9%88%D9%8A/?id=5'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85-%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%AF/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85-%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%AF/?id=37'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%AC%D9%88%D9%86-%D8%A7%D9%86%D9%81%D8%A7%D9%86%D8%AA%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AC%D9%88%D9%86-%D8%A7%D9%86%D9%81%D8%A7%D9%86%D8%AA%D9%8A/?id=57'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%AD%D8%B3%D9%8A%D9%86-%D8%A7%D9%84%D9%82%D8%B1%D9%86%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AD%D8%B3%D9%8A%D9%86-%D8%A7%D9%84%D9%82%D8%B1%D9%86%D9%8A/?id=107'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B3%D8%A7%D9%85%D9%8A-%D8%B5%D8%A8%D9%8A%D8%AD/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B3%D8%A7%D9%85%D9%8A-%D8%B5%D8%A8%D9%8A%D8%AD/?id=142'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B5%D8%A7%D8%A8%D8%B1-%D8%A7%D8%A8%D9%88-%D8%A7%D9%84%D8%AD%D8%B3%D9%86/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B5%D8%A7%D8%A8%D8%B1-%D8%A7%D8%A8%D9%88-%D8%A7%D9%84%D8%AD%D8%B3%D9%86/?id=36'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D8%AD%D9%83%D9%8A%D9%85-%D9%85%D8%AD%D9%85%D8%AF-%D8%AD%D8%A8%D9%8A%D8%A8/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D8%AD%D9%83%D9%8A%D9%85-%D9%85%D8%AD%D9%85%D8%AF-%D8%AD%D8%A8%D9%8A%D8%A8/?id=4'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%BA%D9%86%D8%AF%D8%A7-%D8%AD%D9%85%D9%8A%D8%A9/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%BA%D9%86%D8%AF%D8%A7-%D8%AD%D9%85%D9%8A%D8%A9/?id=108'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%A7%D9%84%D8%AD%D8%A7%D8%AC%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%A7%D9%84%D8%AD%D8%A7%D8%AC%D9%8A/?id=35'
  },
  {
    source: '/ar/doctors/14636/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/dr-ahmet-sukru-mercan-2/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D8%AD%D9%85%D8%AF-%D8%B3%D9%83%D8%B1%D9%88-%D9%85%D9%8A%D8%B1%D9%83%D8%A7%D9%86/?id=10'
  },
  {
    source: '/ar/doctors/dr-ayman-ghoneim/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D9%8A%D9%85%D9%86-%D8%BA%D9%86%D9%8A%D9%85/?id=13'
  },
  {
    source: '/ar/doctors/dr-elie-hakme/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A5%D9%8A%D9%84%D9%8A-%D8%AD%D9%83%D9%85%D8%A9/?id=58'
  },
  {
    source: '/ar/doctors/dr-hanan-alabdulkareem/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AD%D9%86%D8%A7%D9%86-%D8%A7%D9%84%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85/?id=62'
  },
  {
    source: '/ar/doctors/dr-hassan-chouman/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AD%D8%B3%D9%86-%D8%B4%D9%88%D9%85%D8%A7%D9%86/?id=99'
  },
  {
    source: '/ar/doctors/dr-hassan-salama/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AD%D8%B3%D9%86-%D8%B3%D9%84%D8%A7%D9%85%D8%A9/?id=41'
  },
  {
    source: '/ar/doctors/dr-mamdouh-al-nahawi/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D9%85%D8%AF%D9%88%D8%AD-%D8%A7%D9%84%D9%86%D8%AD%D9%88%D9%8A/?id=60'
  },
  {
    source: '/ar/doctors/dr-mohamed-chour/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D8%AF-%D8%B4%D9%88%D8%B1/?id=59'
  },
  {
    source: '/ar/doctors/dr-mohammad-hassan-soliman-khedr/',
    destination:
      '/ar/our-doctors/%D8%AF-.%D9%85%D8%AD%D9%85%D8%AF-%D8%AD%D8%B3%D9%86-%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86-%D8%AE%D8%B6%D8%B1/?id=12'
  },
  {
    source: '/ar/doctors/dr-mohammed-matter/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D8%AF-%D9%85%D8%B7%D8%B1/?id=11'
  },
  {
    source: '/ar/doctors/dr-osama-kattih/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D8%B3%D8%A7%D9%85%D8%A9-%D9%82%D8%B7%D9%8A%D8%B9/?id=144'
  },
  {
    source: '/ar/doctors/dr-rasha-hseiki/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B1%D8%B4%D8%A7-%D8%A3%D9%85%D9%8A%D9%86-%D8%AD%D8%B3%D9%8A%D9%83%D9%8A/?id=98'
  },
  {
    source: '/ar/doctors/dr-sherif-saad-osman/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B4%D8%B1%D9%8A%D9%81-%D8%B3%D8%B9%D8%AF/?id=40'
  },
  {
    source: '/ar/doctors/dr-taha-abdullah/',
    destination:
      '/ar/our-doctors/%D8%AF.%D8%B7%D9%87-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87/?id=143'
  },
  {
    source: '/ar/doctors/fatimah-alali/',
    destination:
      '/ar/our-doctors/%D8%A3.-%D9%81%D8%A7%D8%B7%D9%85%D8%A9-%D8%A7%D9%84%D8%B9%D9%84%D9%8A/?id=39'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B3%D8%B1%D9%88%D8%AC%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D8%B4%D8%B1%D9%81-%D8%A7%D9%84%D9%86%D8%B5%D9%8A%D8%B1/?id=54'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A8%D8%A7%D8%B3%D9%85-%D8%AD%D9%8A%D8%AF%D8%B1/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A8%D8%A7%D8%B3%D9%85-%D8%AD%D9%8A%D8%AF%D8%B1/?id=133'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B2%D9%8A%D9%86%D8%A8-%D8%A7%D9%84%D8%B9%D8%AB%D8%A7%D9%86/',
    destination:
      '/ar/our-doctors/%D8%A3.-%D8%B2%D9%8A%D9%86%D8%A8-%D8%A7%D9%84%D8%B9%D8%AB%D8%A7%D9%86/?id=34'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B4%D9%8A%D9%85%D8%A7%D8%A1-%D9%85%D8%AD%D9%85%D9%88%D8%AF/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B9%D9%84%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D8%AF/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B9%D9%84%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D8%AF/?id=257'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%B9%D9%85%D8%A7%D8%B1-%D8%B5%D8%A7%D9%84%D8%AD-%D8%A7%D9%84%D8%AE%D8%B1%D8%B3/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B9%D9%85%D8%A7%D8%B1-%D8%B5%D8%A7%D9%84%D8%AD-%D8%A7%D9%84%D8%AE%D8%B1%D8%B3/?id=135'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%88%D9%84%D9%8A%D8%AF-%D8%A7%D9%84%D8%B3%D9%8A%D8%AF/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%88%D9%84%D9%8A%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B3%D9%8A%D8%AF-%D9%85%D8%AD%D9%85%D8%AF/?id=181'
  },
  {
    source: '/ar/dr-mahmmoud-mustafa/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D9%85%D8%B5%D8%B7%D9%81%D9%89/?id=36'
  },
  {
    source: '/ar/dr-mohammed-kandil/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D9%85%D8%AD%D9%85%D8%AF-%D9%82%D9%86%D8%AF%D9%8A%D9%84/?id=40'
  },
  {
    source: '/ar/dr-moustafa-saad/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D9%85%D8%B5%D8%B7%D9%81%D9%89-%D8%B3%D8%B9%D8%AF/?id=42'
  },
  {
    source: '/ar/dr-rida-khadra/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%B1%D8%B6%D8%A7-%D8%A7%D9%84%D8%AE%D8%B6%D8%B1%D8%A7/?id=237'
  },
  {
    source: '/ar/dr-samer-qara/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%AF-%D8%B3%D8%A7%D9%85%D8%B1-%D9%82%D8%A7%D8%B1%D8%A9/?id=44'
  },
  {
    source: '/ar/dr-zainab-almoosa/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%A7%D9%84%D8%AF%D9%83%D8%AA%D9%88%D8%B1%D8%A9-%D8%B2%D9%8A%D9%86%D8%A8-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/?id=26'
  },
  {
    source: '/ar/eng-mahmoud-yaseen/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D9%85-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D9%8A%D8%A7%D8%B3%D9%8A%D9%86/?id=39'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D9%81%D8%A7%D8%B1%D9%88%D9%82-%D8%A7%D9%84%D9%85%D9%86%D9%8A%D8%B3%D9%8A/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D9%81%D8%A7%D8%B1%D9%88%D9%82-%D8%A7%D9%84%D9%85%D9%86%D9%8A%D8%B3%D9%8A/?id=56'
  },
  {
    source: '/ar/doctors/dr-mahmoud-machmouchi/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D9%85%D8%B4%D9%85%D9%88%D8%B4%D9%8A/?id=61'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%A3%D8%B4%D8%B1%D9%81-%D8%A7%D9%84%D9%86%D8%B5%D9%8A%D8%B1/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors/%D8%AF-%D8%AD%D8%B3%D8%A7%D9%85-%D9%85%D9%88%D8%A7%D9%81%D8%A7%D8%AC-%D8%B3%D8%B9%D9%8A%D8%AF-%D9%83%D8%A7%D9%84%D8%A7%D8%B3/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%AD%D8%B3%D8%A7%D9%85-%D9%83%D8%A7%D9%84%D8%A7%D8%B3/?id=55'
  },
  {
    source: '/ar/doctors/dr-ahlam-haroun/',
    destination:
      '/ar/our-doctors/%D8%AF.-%D8%A3%D8%AD%D9%84%D8%A7%D9%85-%D9%87%D8%A7%D8%B1%D9%88%D9%86/?id=63'
  },
  {
    source: '/ar/centers/bariatric-center/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%B3%D9%85%D9%86%D8%A9/?id=10'
  },
  {
    source: '/ar/centers/cardiology-center/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D9%82%D9%84%D8%A8/?id=6'
  },
  {
    source: '/ar/centers/dental-center/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%A3%D8%B3%D9%86%D8%A7%D9%86/?id=52'
  },
  {
    source: '/ar/centers/emergency-center/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D9%88%D8%A7%D8%B1%D8%A6/?id=14'
  },
  {
    source: '/ar/centers/nawal-afaleq-oncology-center/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%A3%D9%88%D8%B1%D8%A7%D9%85/?id=15'
  },
  {
    source: '/ar/centers/nephrology-and-the-hemodialysis-center/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A3%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%83%D9%84%D9%89-%D9%88%D8%A7%D9%84%D8%BA%D8%B3%DB%8C%D9%84-%D8%A7%D9%84%D9%83%D9%84%D9%88%D9%8A/?id=17'
  },
  {
    source: '/ar/centers/neurosciences-center/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85-%D8%A7%D9%84%D8%B9%D8%B5%D8%A8%DB%8C%D8%A9/?id=7'
  },
  {
    source: '/ar/centers/orthopedic-center/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%D8%B8%D8%A7%D9%85/?id=8'
  },
  {
    source: '/ar/centers/pediatrics-center/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%B7%D8%A8-%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84/?id=18'
  },
  {
    source: '/ar/centers/surgery-center/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9/?id=12'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D8%A7%D9%84%D8%B5%D8%AD%D9%8A/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%AC%D9%84%D8%AF%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D9%8A%D9%84/?id=20'
  },
  {
    source: '/ar/centers/internal-medicine-center/',
    destination: '/ar/services/medical-centers'
  },
  {
    source: '/ar/centers/womens-health-center/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%B5%D8%AD%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D8%A3%D8%A9/?id=11'
  },
  {
    source: '/ar/departments/dermatology-clinic',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%AC%D9%84%D8%AF%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D9%8A%D9%84/?id=20'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%D9%8A%D9%88%D9%86/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%DB%8C%D9%88%D9%86/?id=9'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/',
    destination: '/ar/services/medical-centers'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%A3%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D8%A8%D8%A7%D8%B7%D9%86%D9%8A%D8%A9/',
    destination: '/ar/services/medical-centers'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%A3%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%83%D9%84%D9%89-%D9%88-%D8%A7%D9%84%D8%BA%D8%B3%D9%8A%D9%84-%D8%A7%D9%84%D9%83%D9%84%D9%88%D9%8A/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A3%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%83%D9%84%D9%89-%D9%88%D8%A7%D9%84%D8%BA%D8%B3%DB%8C%D9%84-%D8%A7%D9%84%D9%83%D9%84%D9%88%D9%8A/?id=17'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D9%88%D9%85/',
    destination:
      '/ar/services/medical-programs/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D9%88%D9%85/?id=13'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9/?id=12'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D9%88%D8%A7%D8%B1%D8%A6/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D9%88%D8%A7%D8%B1%D8%A6/?id=14'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%D8%B8%D8%A7%D9%85/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%D8%B8%D8%A7%D9%85/?id=8'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85-%D8%A7%D9%84%D8%B9%D8%B5%D8%A8%D9%8A%D8%A9/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85-%D8%A7%D9%84%D8%B9%D8%B5%D8%A8%DB%8C%D8%A9/?id=7'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D9%82%D9%84%D8%A8/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D9%82%D9%84%D8%A8/?id=6'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%B5%D8%AD%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D8%A3%D8%A9/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%B5%D8%AD%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D8%A3%D8%A9/?id=11'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%B7%D8%A8-%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%B7%D8%A8-%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84/?id=18'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%B7%D8%A8-%D9%88%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9-%D8%A7%D9%84%D8%A3%D8%B3%D9%86%D8%A7%D9%86/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%A3%D8%B3%D9%86%D8%A7%D9%86/?id=52'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%B3%D9%85%D9%86%D8%A9/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%B3%D9%85%D9%86%D8%A9/?id=10'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D9%86%D9%88%D8%A7%D9%84-%D8%A7%D9%84%D8%B9%D9%81%D8%A7%D9%84%D9%82-%D9%84%D9%84%D8%A3%D9%88%D8%B1%D8%A7%D9%85/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%A3%D9%88%D8%B1%D8%A7%D9%85/?id=15'
  },
  {
    source: '/ar/programs/depression-management/',
    destination:
      '/ar/services/medical-programs/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%A7%D9%83%D8%AA%D8%A6%D8%A7%D8%A8/?id=33'
  },
  {
    source: '/ar/programs/diabetes-management/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A-%D9%88%D8%A7%D9%84%D8%BA%D8%AF%D8%AF-%D8%A7%D9%84%D8%B5%D9%85%D8%A7%D8%A1/?id=26'
  },
  {
    source: '/ar/programs/fertility-treatment/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%A8%D8%A9/?id=50'
  },
  {
    source: '/ar/programs/hair-transplant/',
    destination:
      '/ar/services/medical-programs/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D8%B4%D8%B9%D8%B1/?id=27'
  },
  {
    source: '/ar/programs/maternity-program/',
    destination:
      '/ar/services/medical-programs/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A7%D9%84%D8%A3%D9%85%D9%88%D9%85%D8%A9/?id=30'
  },
  {
    source: '/ar/programs/medical-checkup/',
    destination:
      '/ar/services/medical-programs/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A7%D9%84%D9%81%D8%AD%D8%B5-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A-%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84/?id=29'
  },
  {
    source: '/ar/programs/migraine-management/',
    destination:
      '/ar/services/medical-programs/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%B5%D8%AF%D8%A7%D8%B9-%D8%A7%D9%84%D9%86%D8%B5%D9%81%D9%8A/?id=38'
  },
  {
    source: '/ar/programs/sickle-cell-management/',
    destination:
      '/ar/services/medical-programs/%D8%B9%D9%84%D8%A7%D8%AC-%D9%81%D9%82%D8%B1-%D8%A7%D9%84%D8%AF%D9%85-%D8%A7%D9%84%D9%85%D9%86%D8%AC%D9%84%D9%8A/?id=36'
  },
  {
    source: '/ar/programs/sleep-disorders-program/',
    destination:
      '/ar/services/medical-programs/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D9%88%D9%85/?id=13'
  },
  {
    source: '/ar/programs/speech-therapy/',
    destination:
      '/ar/services/medical-programs/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D9%86%D8%B7%D9%82-%D9%88%D8%A7%D9%84%D8%AA%D8%AE%D8%A7%D8%B7%D8%A8-%D9%88%D8%AA%D8%A3%D8%AE%D8%B1-%D8%A7%D9%84%D9%83%D9%84%D8%A7%D9%85/?id=32'
  },
  {
    source: '/ar/programs/stroke-management/',
    destination:
      '/ar/services/medical-programs/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%B3%D9%83%D8%AA%D8%A9-%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D8%BA%D9%8A%D8%A9/?id=28'
  },
  {
    source: '/ar/programs/vaccination-program/',
    destination:
      '/ar/services/medical-programs/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A7%D9%84%D8%AA%D8%B7%D8%B9%D9%8A%D9%85/?id=31'
  },
  {
    source: '/ar/programs/varicose-treatment/',
    destination:
      '/ar/services/medical-programs/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D9%84%D9%8A/?id=37'
  },
  {
    source: '/ar/patient-complains/ways-to-submit-your-complaint/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/dining-options/costa-cafe/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/13197-2/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/category/news/page/10/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/news/page/11/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/news/page/12/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/news/page/13/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/news/page/14/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/news/page/3/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/news/page/4/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/news/page/5/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/news/page/6/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/news/page/7/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/news/page/8/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/news/page/9/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/uncategorized/page/10/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/uncategorized/page/11/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/uncategorized/page/2/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/uncategorized/page/3/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/uncategorized/page/4/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/uncategorized/page/5/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/uncategorized/page/6/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/uncategorized/page/7/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/uncategorized/page/8/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/category/uncategorized/page/9/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/centers/page/2/',
    destination: '/ar/services/medical-centers'
  },
  {
    source: '/ar/doctors_category/icu-ar/page/2/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/orthopedic-sports-injuries-center-ar/page/2/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/pediatrics-center-ar/page/2/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors_category/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors_category/%D9%85%D8%B1%D9%83%D8%B2-%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9-%D8%A7%D9%84%D8%B3%D9%85%D9%86%D8%A9/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/cardiac-center-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/tag/%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A%D8%A9/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/tag/%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D8%AD%D9%8A%D8%A9/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/tag/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/tag/%D8%A7%D9%86%D9%82%D8%A7%D8%B0/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/tag/%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/tag/%D8%AC%D8%B1%D8%A7%D8%AD%D9%8A%D8%A9/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/tag/%D8%B9%D9%85%D9%84/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/tag/%D8%B9%D9%85%D9%84%D9%8A%D8%A9/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/tag/%D9%88%D8%B1%D8%B4%D8%A9/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/doctors_category/%D8%A7%D9%84%D8%A3%D8%B4%D8%B9%D8%A9/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/%D8%A7%D9%84%D8%AA%D8%BA%D8%B0%D9%8A%D8%A9/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors_category/%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A-%D9%88-%D8%A7%D9%84%D8%BA%D8%AF%D8%AF-%D8%A7%D9%84%D8%B5%D9%85%D8%A7%D8%A1/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors_category/%D8%A7%D9%84%D8%B7%D9%88%D8%A7%D8%B1%D8%A6-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors_category/%D8%A7%D9%84%D8%B7%D9%88%D8%A7%D8%B1%D8%A6-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/page/2/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D8%A8%D8%B1/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors_category/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A3%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D8%AF%D9%85/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors_category/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9-%D8%B5%D8%AD%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B8%D9%81/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source:
      '/ar/doctors_category/%D8%BA%D8%B1%D9%81%D8%A9-%D8%A7%D9%84%D8%AA%D8%AE%D8%AF%D9%8A%D8%B1-%D9%88%D8%A7%D9%84%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/dental-center-ar/page/2/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/dermatology-clinic-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/e-n-t-clinic-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/eye-center-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/family-medicine-clinic-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/icu-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/internal-medicine-center-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/internal-medicine-center-ar/page/2/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/nephrology-and-the-hemodialysis-center-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/nephrology-clinic-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/neuroscience-center-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/nicu-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/oncology-center-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/orthopedic-sports-injuries-center-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/pediatrics-center-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/psychiatry-clinic-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/pulmonary-clinic-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/sleep-disorders-center-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/urology-clinic-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/vascular-surgery-clinic-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors_category/womens-health-center-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/photo-gallery/',
    destination: '/ar/media-center/photo-gallery'
  },
  {
    source:
      '/ar/doctors_category/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%A3%D9%84%D9%85/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/category/news/page/2/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/%D8%A7%D9%84%D9%85%D8%AF%D9%88%D9%86%D8%A9/2/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/%D8%A7%D9%84%D9%85%D8%AF%D9%88%D9%86%D8%A9/3/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/%D8%A7%D9%84%D9%85%D8%AF%D9%88%D9%86%D8%A9/4/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/%D8%A7%D9%84%D9%85%D8%AF%D9%88%D9%86%D8%A9/5/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/programs/page/2/',
    destination: '/ar/services/medical-centers'
  },
  {
    source: '/ar/category/uncategorized/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source:
      '/ar/%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D9%88%D8%B1/',
    destination: '/ar/media-center/photo-gallery/?page=1'
  },
  {
    source: '/ar/events-classes-support-groups/',
    destination: '/ar/training-education/events'
  },
  {
    source: '/ar/category/news/',
    destination: '/ar/media-center/news/?page=1'
  },
  {
    source: '/ar/planning-your-hospital-stay/',
    destination: '/ar/for-patient'
  },
  {
    source:
      '/ar/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/',
    destination: '/ar/about/almoosa-medical-group'
  },
  {
    source:
      '/ar/photo-gallery/%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B5%D9%88%D8%B1-2020/%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D8%A9/',
    destination: '/ar/media-center/photo-gallery/?category=6&page=1'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D8%B1%D8%A4%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%B1%D8%B3%D8%A7%D9%84%D8%A9/',
    destination: '/ar/about/vision-mission'
  },
  {
    source: '/ar/dining-options/food-nutrition-services/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/dining-options/grocery-store/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/dining-options/local-restaurants/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/dining-options/vending-machines/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/gifts-flower-shops/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/homeboxes/core-values/',
    destination: '/ar/about/values'
  },
  {
    source:
      '/ar/photo-gallery/%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B5%D9%88%D8%B1-2020/',
    destination: '/ar/media-center/photo-gallery/?page=1'
  },
  {
    source:
      '/ar/photo-gallery/%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B5%D9%88%D8%B1-2020/%D8%A7%D9%84%D8%A3%D8%AC%D9%86%D8%AD%D8%A9/',
    destination: '/ar/media-center/photo-gallery/?category=8&page=1'
  },
  {
    source:
      '/ar/photo-gallery/%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B5%D9%88%D8%B1-2020/%D8%A7%D9%84%D8%A3%D8%B3%D9%86%D8%A7%D9%86/',
    destination: '/ar/media-center/photo-gallery/?category=7&page=1'
  },
  {
    source:
      '/ar/photo-gallery/%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B5%D9%88%D8%B1-2020/%D8%A7%D9%84%D8%A8%D8%B1%D8%AC-%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A/',
    destination: '/ar/media-center/photo-gallery/?category=4&page=1'
  },
  {
    source:
      '/ar/photo-gallery/%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B5%D9%88%D8%B1-2020/%D8%A7%D9%84%D8%B9%D9%8A%D9%88%D9%86/',
    destination: '/ar/media-center/photo-gallery/?category=5&page=1'
  },
  {
    source:
      '/ar/photo-gallery/%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B5%D9%88%D8%B1-2020/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84/',
    destination: '/ar/media-center/photo-gallery/?category=13&page=1'
  },
  {
    source:
      '/ar/photo-gallery/%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B5%D9%88%D8%B1-2020/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D8%B3%D8%A7%D8%A1/',
    destination: '/ar/media-center/photo-gallery/?category=12&page=1'
  },
  {
    source:
      '/ar/photo-gallery/%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B5%D9%88%D8%B1-2020/%D8%BA%D8%B1%D9%81-%D8%A7%D9%84%D8%AA%D9%86%D9%88%D9%8A%D9%85/',
    destination: '/ar/media-center/photo-gallery/?category=11&page=1'
  },
  {
    source:
      '/ar/photo-gallery/%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B5%D9%88%D8%B1-2020/%D8%BA%D8%B1%D9%81-%D8%A7%D9%84%D9%88%D9%84%D8%A7%D8%AF%D8%A9/',
    destination: '/ar/media-center/photo-gallery/?category=10&page=1'
  },
  {
    source:
      '/ar/photo-gallery/%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B5%D9%88%D8%B1-2020/%D8%BA%D8%B1%D9%81%D8%A9-%D8%A7%D9%84%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/',
    destination: '/ar/media-center/photo-gallery/?category=14&page=1'
  },
  {
    source:
      '/ar/photo-gallery/%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B5%D9%88%D8%B1-2020/%D8%BA%D8%B1%D9%81%D8%A9-%D8%A7%D9%84%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA/',
    destination: '/ar/media-center/photo-gallery/?category=9&page=1'
  },
  {
    source: '/ar/planning-your-hospital-stay/companions/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/planning-your-hospital-stay/daily-meals/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/preparing-for-a-procedure/at-the-admission-office/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/preparing-for-a-procedure/companions/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/preparing-for-a-procedure/discharge-information-process/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/doctors/page/10/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/page/11/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/page/12/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/page/13/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/page/14/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/page/15/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/page/2/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/page/3/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/page/4/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/page/5/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/page/6/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/page/7/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/page/8/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/doctors/page/9/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/waiting-areas/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/atms/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/waiting-areas/kids-club/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/doctors_category/dental-center-ar/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/directions-parking/car-rental-offices/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/directions-parking/taxis-limousine/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/directions-parking/air-transport/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/directions-parking/bus-service/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/directions-parking/road-network/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/directions-parking/trains/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/homeboxes/appointment/',
    destination: '/ar/'
  },
  {
    source: '/ar/centers/',
    destination: '/ar/services/medical-centers'
  },
  {
    source: '/ar/visiting-hours-policies/general-visiting-guidelines/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/visiting-hours-policies/hospital-quiet-time/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/visiting-hours-policies/icu-visiting-hours-guidelines/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/visiting-hours-policies/nicu-visiting-hours-guidelines/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/visiting-hours-policies/other-inpatient-units/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/visiting-hours-policies/picu-visiting-hours-guidelines/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/waiting-areas/games-booth/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/waiting-areas/games-room/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/waiting-areas/other-waiting-areas/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/planning-your-hospital-stay/on-admission-day/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/planning-your-hospital-stay/questions-to-ask-your-doctor/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/planning-your-hospital-stay/what-to-bring/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/planning-your-hospital-stay/your-room/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/preparing-for-a-procedure/discharge-procedures/',
    destination: '/ar/for-patient'
  },
  {
    source:
      '/ar/preparing-for-a-procedure/payment-methods-at-admission-office/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/preparing-for-a-procedure/postpartum-procedures/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/preparing-for-your-appointment/before-coming-to-the-hospital/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/preparing-for-your-appointment/what-to-bring-2/',
    destination: '/ar/for-patient'
  },
  {
    source:
      '/ar/homeboxes/%D8%A7%D9%84%D8%A7%D9%87%D8%AF%D8%A7%D9%81-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9/',
    destination: '/ar/about/strategic-priorities'
  },
  {
    source: '/ar/homeboxes/accreditation-and-awards/',
    destination: '/ar/about/awards'
  },
  {
    source: '/ar/homeboxes/clinics-departments/',
    destination: '/ar/services/medical-centers'
  },
  {
    source: '/ar/homeboxes/find-doctors/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/homeboxes/mission-and-vision/',
    destination: '/ar/about/vision-mission'
  },
  {
    source: '/ar/magazines/innovation-revolutionizes-the-world/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/patient-complains/how-we-deal-with-complaints/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/planetree/',
    destination: '/ar/about/awards'
  },
  {
    source:
      '/ar/visiting-hours-policies/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-%D9%84%D9%80-%D8%A7%D9%84%D8%B2%D8%A7%D8%A6%D8%B1-%D9%88%D8%A7%D9%84%D8%A3%D8%B3%D8%B1%D8%A9-%D9%88%D8%B4/',
    destination: '/ar/for-visitors/visiting-hours/covid-pandemic'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%D9%8A%D9%88%D9%86/%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%DB%8C%D9%88%D9%86/?id=9'
  },
  {
    source: '/ar/medical-center/',
    destination: '/ar/services/medical-centers'
  },
  {
    source: '/ar/mrs-sara-almoosa-ar/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%A3-%D8%B3%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/?id=25'
  },
  {
    source: '/ar/malek-almoosa/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%A3-%D9%85%D8%A7%D9%84%D9%83-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/?id=24'
  },
  {
    source: '/ar/mouhammad-saleem/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D9%85%D8%AD%D9%85%D8%AF-%D8%B3%D8%A7%D9%84%D9%85/?id=41'
  },
  {
    source: '/ar/doctors/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/programs/',
    destination: '/ar/services/medical-programs'
  },
  {
    source:
      '/ar/%D9%85%D8%B9%D8%B1%D8%B6-%D8%A7%D9%84%D8%B5%D8%AD%D8%A9-%D9%85%D8%B0%D8%A7%D9%82-%D8%A7%D9%84%D9%81%D9%86/',
    destination: '/ar/community/taste-of-art'
  },
  {
    source: '/ar/wifi/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/video-gallery/',
    destination: '/ar/media-center/video-gallery'
  },
  {
    source: '/ar/visiting-hours-policies/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/nursery-neonatal-intensive-care-unit/',
    destination: '/ar/services/inpatient-units/?id=39'
  },
  {
    source: '/ar/coronary-care-unit-ccu/',
    destination: '/ar/services/inpatient-units/?id=39'
  },
  {
    source: '/ar/departments/',
    destination: '/ar/services'
  },
  {
    source: '/ar/vip-services/',
    destination: '/ar/'
  },
  {
    source: '/ar/volunteer-at-almoosa/',
    destination: '/ar/'
  },
  {
    source: '/ar/directions-parking/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/medical-programs/',
    destination: '/ar/services/medical-programs'
  },
  {
    source: '/ar/privacy-policy/',
    destination: '/ar/privacy'
  },
  {
    source: '/ar/preparing-for-a-procedure/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/preparing-for-your-appointment/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/radiology-department/',
    destination: '/ar/services/supportive-services'
  },
  {
    source: '/ar/request-medical-records/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/disabled-access-services/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/insurance/',
    destination: '/ar/for-patient'
  },
  {
    source: '/ar/intensive-care-unit-icu/',
    destination: '/ar/services/inpatient-units/?id=39'
  },
  {
    source: '/ar/laboratory-department/',
    destination: '/ar/services/inpatient-units/?id=39'
  },
  {
    source: '/ar/latest-news/',
    destination: '/ar/media-center/news'
  },
  {
    source: '/ar/library/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/magazines/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/mosques/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/patient-complains/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/patient-and-family-rights/',
    destination: '/ar/for-patient'
  },
  {
    source:
      '/ar/%D8%AD%D9%88%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89/',
    destination: '/ar/about/overview'
  },
  {
    source:
      '/ar/%D8%A3%D9%88%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D9%85/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/event/al-mousa-specialized-hospital-uses-a-gastroenterologist/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%D8%A2%D8%AE%D8%B1-%D8%AA%D8%AD%D8%AF%D9%8A%D8%AB%D8%A7%D8%AA-%D9%81%D9%8A%D8%B1%D9%88%D8%B3-%D9%83%D9%88%D8%B1%D9%88%D9%86%D8%A7-%D9%83%D9%88%D9%81%D9%8A%D8%AF-19/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%D8%A5%D8%B9%D8%AA%D9%85%D8%A7%D8%AF-%D8%A7%D9%84%D8%A8%D9%84%D9%8A%D9%86-%D8%AA%D8%B1%D9%8A-%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D8%AC%D9%88%D8%A7%D8%A6%D8%B2-%D9%88-%D8%A7%D9%84%D8%A3%D8%B9%D8%AA%D9%85%D8%A7%D8%AF%D8%A7%D8%AA/',
    destination: '/ar/about/awards'
  },
  {
    source:
      '/ar/%D9%84%D9%85%D8%AD%D8%A9-%D8%B9%D9%86-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89/',
    destination: '/ar/about/overview'
  },
  {
    source: '/ar/board-of-governors-ar/',
    destination: '/ar/about/board-directors-and-executive-team'
  },
  {
    source:
      '/ar/%D8%AD%D9%82%D8%A7%D8%A6%D9%82-%D8%B3%D8%B1%D9%8A%D8%B9%D8%A9/',
    destination: '/ar/about/fast-facts'
  },
  {
    source:
      '/ar/planning-your-hospital-stay/available-wards-departments-room-types/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/femtolasik/',
    destination:
      '/ar/services/medical-centers/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%DB%8C%D9%88%D9%86/?id=9'
  },
  {
    source: '/ar/homeboxes/education-and-training/',
    destination: '/ar/training-education/courses'
  },
  {
    source:
      '/ar/magazines/oasis-of-rehabilitation-and-long-term-care-in-al-ahsa/',
    destination: '/ar/for-visitors'
  },
  {
    source: '/ar/abdul-rahim-alnatour/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/mona-khamis/',
    destination: '/ar/our-doctors/?page=1'
  },
  {
    source: '/ar/pharmacy/',
    destination: '/ar/services/supportive-services/?id=54'
  },
  {
    source:
      '/ar/%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%88%D9%86-%D9%85%D8%B9-%D8%A7%D9%84%D8%A7%D8%B3%D8%B1-%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%A9/',
    destination: '/ar/community/cooperation-with-productive-families'
  },
  {
    source:
      '/ar/%D8%AD%D8%AF%D9%8A%D9%82%D8%A9-%D9%86%D9%84%D8%B9%D8%A8-%D9%85%D8%B9%D8%A7%D9%8B/',
    destination: '/ar/community/play-together-park'
  },
  {
    source:
      '/ar/%D8%B1%D8%AD%D9%84%D8%AA%D9%86%D8%A7-%D8%A7%D9%84%D9%89-%D8%A7%D9%84%D9%80-magnet/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%D8%B3%D8%A8%D8%A7%D9%82-%D8%A7%D9%84%D8%AD%D8%B3%D8%A7-%D8%AA%D8%B1%D9%83%D8%B6/',
    destination: '/ar/community/ahsa-run-marathon'
  },
  {
    source:
      '/ar/%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%B4%D9%81%D8%A9-%D8%A7%D9%84%D9%85%D8%B4%D9%82%D9%88%D9%82%D8%A9/',
    destination: '/ar/community/smile-of-hope-initiative'
  },
  {
    source:
      '/ar/%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A9-%D8%A7%D9%84%D9%83%D9%84-%D9%85%D8%B3%D8%B9%D9%81/',
    destination: '/ar/community/paramedic-in-each-school'
  },
  {
    source:
      '/ar/%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A9-%D9%82%D9%88%D8%A9-%D8%A7%D9%84%D9%81%D9%86/',
    destination: '/ar/community/power-of-art'
  },
  {
    source: '/ar/%D9%88%D8%B8%D8%A7%D8%A6%D9%81/',
    destination: '/ar/'
  },
  {
    source: '/ar/anesthesia-and-pain-management-department/',
    destination: '/ar/services/supportive-services/?id=45'
  },
  {
    source: '/ar/day-surgery-unit/',
    destination: '/ar/services/inpatient-units/?id=39'
  },
  {
    source: '/ar/digital-operation-rooms/',
    destination: '/ar/services/supportive-services/?id=43'
  },
  {
    source: '/ar/interpreter-services/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%D9%85%D8%AC%D9%84%D8%B3-%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D8%A9-%D9%88-%D8%A7%D9%84%D9%81%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A/',
    destination: '/ar/about/board-directors-and-executive-team'
  },
  {
    source:
      '/ar/team/%D8%A7%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0-%D9%85%D8%A7%D9%84%D9%83-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%A3-%D9%85%D8%A7%D9%84%D9%83-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/?id=24'
  },
  {
    source:
      '/ar/team/%D8%A7%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0-%D9%85%D8%B3%D8%A7%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%A3-%D9%85%D8%B3%D8%A7%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/?id=27'
  },
  {
    source:
      '/ar/team/%D8%A7%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%D8%A9-%D8%B3%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%A3-%D8%B3%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/?id=25'
  },
  {
    source:
      '/ar/team/%D8%A7%D9%84%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D8%BA%D9%86%D8%A7%D9%85-%D8%A7%D9%84%D8%AF%D9%88%D8%B3%D8%B1%D9%8A/',
    destination: '/ar/about/board-directors-and-executive-team'
  },
  {
    source:
      '/ar/team/%D8%A7%D9%84%D8%B4%D9%8A%D8%AE-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%A7%D9%84%D8%B4%D9%8A%D8%AE-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/?id=23'
  },
  {
    source: '/ar/team/114/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%A7%D9%84%D8%AF%D9%83%D8%AA%D9%88%D8%B1%D8%A9-%D8%B2%D9%8A%D9%86%D8%A8-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/?id=26'
  },
  {
    source: '/ar/team/mr-ahmed-al-bader/',
    destination: '/ar/about/board-directors-and-executive-team'
  },
  {
    source: '/ar/board-of-governors-ar/mr-ahmed-al-bader-ar/',
    destination: '/ar/about/board-directors-and-executive-team'
  },
  {
    source: '/ar/board-of-governors-ar/dr-zainab-al-moosa-ar/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%AF-%D8%B2%D9%8A%D9%86%D8%A8-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/?id=33'
  },
  {
    source: '/ar/board-of-governors-ar/mr-hassan-afaleq-ar/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%A3-%D8%AD%D8%B3%D9%86-%D8%A7%D9%84%D8%B9%D9%81%D8%A7%D9%84%D9%82/?id=28'
  },
  {
    source: '/ar/board-of-governors-ar/mr-malek-almoosa-ar/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%A3-%D9%85%D8%A7%D9%84%D9%83-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/?id=24'
  },
  {
    source: '/ar/board-of-governors-ar/mr-musaed-almoosa-ar/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%A3-%D9%85%D8%B3%D8%A7%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/?id=27'
  },
  {
    source: '/ar/hera/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%A3-%D9%87%D9%8A%D8%B1%D8%A7-%D8%AA%D8%A7%D8%B4%D8%AC%D9%8A%D8%A7%D9%86/?id=37'
  },
  {
    source: '/ar/mrs-sara-almoosa/',
    destination:
      '/ar/about/board-directors-and-executive-team/%D8%A3-%D8%B3%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89/?id=25'
  },
  {
    source: '/%D8%A5%D8%B3%D8%A8%D8%A7%D9%86%D9%8A%D8%A7/',
    destination: '/en/'
  },
  {
    source: '/events/2019-09-08/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2019-09/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2019-10/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2019-11/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2019-12/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2020-01/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2020-02/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2020-03/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2020-04/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2020-05/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2020-06/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2020-07/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2020-08/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2020-09/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2020-10/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2020-11/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2020-12/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2021-01/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2021-02/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2021-03/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2021-04/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2021-05/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2021-06/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2021-07/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2021-08/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2021-09/',
    destination: '/en/training-education/events'
  },
  {
    source: '/events/2021-10-18/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2017/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2017/10/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2017/11/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2017/12/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2018/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2018/04/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2018/05/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2018/06/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2018/07/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2018/08/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2018/09/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2018/10/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2018/11/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2019/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2019/01/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2019/02/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2019/07/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2019/08/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2019/09/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2020/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2020/06/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2020/07/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2020/08/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2020/09/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2020/10/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2021/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2021/04/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2021/05/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2021/06/',
    destination: '/en/training-education/events'
  },
  {
    source: '/2021/07/',
    destination: '/en/training-education/events'
  },
  {
    source: '/198-2/',
    destination: '/en/training-education/events'
  },
  {
    source: '/event/',
    destination: '/en/training-education/events'
  },
  {
    source: '/event/al-mousa-specialized-hospital-uses-a-gastroenterologist/',
    destination: '/en/training-education/events'
  },
  {
    source: '/product-tag/antibiotics-101/',
    destination: '/en/training-education/courses'
  },
  // /product-tag/course/?add-to-cart=30833
  {
    source: '/product-tag/course/',
    destination: '/en/training-education/courses'
  },
  // /product-tag/ecg-interpretation/?add-to-cart=29765
  {
    source: '/product-tag/ecg-interpretation/',
    destination: '/en/training-education/courses'
  },
  // /product-tag/learning/?add-to-cart=30833
  {
    source: '/product-tag/learning/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/product-tag/radiology/',
    destination: '/en/training-education/courses'
  },
  // /product-tag/research/?add-to-cart=30224
  {
    source: '/product-tag/research/',
    destination: '/en/training-education/courses'
  },
  // /product-tag/workshop/?add-to-cart=30224
  {
    source: '/product-tag/workshop/',
    destination: '/en/training-education/courses'
  },
  // /product-tag/workshop/?add-to-cart=30833
  {
    source: '/product-tag/workshop/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/slider/banner1/',
    destination: '/en/'
  },
  {
    source: '/tag/ahsa/',
    destination: '/en/media-center/news'
  },
  {
    source: '/tag/basic/',
    destination: '/en/media-center/news'
  },
  {
    source: '/tag/rehabilitation/',
    destination: '/en/media-center/news'
  },
  {
    source: '/tag/skills/',
    destination: '/en/media-center/news'
  },
  {
    source: '/tag/surgical/',
    destination: '/en/media-center/news'
  },
  {
    source: '/tag/workshop/',
    destination: '/en/media-center/news'
  },
  {
    source: '/working-hours/',
    destination: '/en/'
  },
  {
    source: '/category/diabetes-management/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/diabetic-and-endocrinology/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/emergency-center/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/events/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/eye-center/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/family-medicine-clinic/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/gastroenterology/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/general/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/health/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/hematology-and-oncology-clinic/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/hemodialysis/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/icu/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/infectious-diseases/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/maternity-program/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/migraine-management/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/neuroscience-center/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/nicu/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/oncology-center/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/orthopedic-center/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/pediatrics-center/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/radiology/',
    destination: '/en/media-center/news'
  },
  {
    source: '/cat_homeboxes/home/',
    destination: '/en/'
  },
  {
    source: '/chatbot/',
    destination: '/en/'
  },
  {
    source: '/conferences-workshops/',
    destination: '/en/training-education/events'
  },
  {
    source: '/cool_timeline/',
    destination: '/en/'
  },
  {
    source: '/golden-designation-from-the-planetree-organization/',
    destination: '/en/community'
  },
  {
    source: '/homeboxes/human-resources/',
    destination: '/en/'
  },
  {
    source: '/homeboxes/specialties/',
    destination: '/en/'
  },
  {
    source: '/latest-coronavirus-covid-19-update/',
    destination: '/en/'
  },
  {
    source: '/my-account/lost-password/',
    destination: '/en/'
  },
  {
    source: '/category/news/page/2/',
    destination: '/en/media-center/news'
  },
  {
    source: '/events/month/',
    destination: '/en/training-education/events'
  },
  {
    source: '/author/admin/page/10/',
    destination: '/en/media-center/news'
  },
  {
    source: '/author/admin/page/11/',
    destination: '/en/media-center/news'
  },
  {
    source: '/author/admin/page/2/',
    destination: '/en/media-center/news'
  },
  {
    source: '/author/admin/page/3/',
    destination: '/en/media-center/news'
  },
  {
    source: '/author/admin/page/4/',
    destination: '/en/media-center/news'
  },
  {
    source: '/author/admin/page/5/',
    destination: '/en/media-center/news'
  },
  {
    source: '/author/admin/page/6/',
    destination: '/en/media-center/news'
  },
  {
    source: '/author/admin/page/7/',
    destination: '/en/media-center/news'
  },
  {
    source: '/author/admin/page/8/',
    destination: '/en/media-center/news'
  },
  {
    source: '/author/admin/page/9/',
    destination: '/en/media-center/news'
  },
  {
    source: '/product-tag/ecg-interpretation/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/product-tag/research/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/product-tag/learning/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/cart/',
    destination: '/en/'
  },
  {
    source: '/my-account/',
    destination: '/en/'
  },
  {
    source: '/author/admin/',
    destination: '/en/media-center/news'
  },
  {
    source: '/product-tag/workshop/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/product-tag/course/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/events/',
    destination: '/en/training-education/events'
  },
  {
    source: '/virtual-tour/',
    destination: '/en/'
  },
  {
    source: '/category/news/',
    destination: '/en/media-center/news'
  },
  {
    source: '/events-classes-support-groups/',
    destination: '/en/training-education/events'
  },
  {
    source: '/departments/allergies-asthma-clinic/',
    destination:
      '/en/services/medical-centers/Respiratory-Diseases-Clinic/?id=22'
  },
  {
    source: '/departments/cardiovascular-clinic/',
    destination: '/en/services/medical-centers/Heart-Center/?id=6'
  },
  {
    source: '/departments/epilepsy-clinic/',
    destination: '/en/services/medical-centers/-Neuroscience-Center/?id=7'
  },
  {
    source: '/departments/gastroenterology-clinic/',
    destination: '/en/services/medical-centers/Gastroenterology-Center/?id=16'
  },
  {
    source: '/departments/nephrology-clinic/',
    destination:
      '/en/services/medical-centers/Nephrology-and-Dialysis-Center/?id=17'
  },
  {
    source: '/departments/physiotherapy-department/',
    destination: '/en/services/supportive-services'
  },
  {
    source: '/departments/hematology-clinic/',
    destination: '/en/services/medical-centers'
  },
  {
    source: '/departments/infectious-diseases-division/',
    destination: '/en/services/medical-centers'
  },
  {
    source: '/departments/psychiatry-clinic/',
    destination: '/en/services/medical-centers/-Neuroscience-Center/?id=7'
  },
  {
    source: '/departments/diabetic-and-endocrinology-clinic/',
    destination:
      '/en/services/medical-centers/Diabetes-and-Endocrinology-Center/?id=26'
  },
  {
    source: '/departments/e-nt-clinic/',
    destination:
      '/en/services/medical-centers/Ear,-Nose,-and-Throat-Center/?id=19'
  },
  {
    source: '/departments/plastic-surgery-clinic/',
    destination: '/en/services/medical-centers/Almoosa-Aesthetic-Center/?id=20'
  },
  {
    source: '/departments/pulmonary-clinic/',
    destination:
      '/en/services/medical-centers/Respiratory-Diseases-Clinic/?id=22'
  },
  {
    source: '/departments/urology-clinic/',
    destination: '/en/services/medical-centers/-Urology-Clinic/?id=25'
  },
  {
    source: '/departments/vascular-surgery-clinic/',
    destination: '/en/services/medical-centers/Heart-Center/?id=6'
  },
  {
    source: '/anesthesia-and-pain-management-department/',
    destination: '/en/services/supportive-services/?id=45'
  },
  {
    source: '/departments/dermatology-clinic/',
    destination: '/en/services/medical-centers/Almoosa-Aesthetic-Center/?id=20'
  },
  {
    source: '/departments/family-medicine-clinic/',
    destination: '/en/services/medical-centers/Family-Medicine-Clinic/?id=21'
  },
  {
    source: '/doctors/dr-ahmad-hussain-mohammed-sanad/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-balqees-abdullah-ali/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-ibrahem-mwafi/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/heba/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/d-ghnnam-aldossary/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-abaa-mohamed-adel/',
    destination: '/en/our-doctors/Dr.-Ebaa-Mohamed-Adel-/?id=17'
  },
  {
    source: '/doctors/dr-abdalla-ramadan-hussien-ibrahim/',
    destination: '/en/our-doctors/Dr.-Abdullah-Ramadan-/?id=19'
  },
  {
    source: '/doctors/dr-abdel-rahman-tabl/',
    destination: '/en/our-doctors/Dr.-AbdulRahman-Tabl/?id=29'
  },
  {
    source: '/doctors/dr-abdullah-bureggah-2/',
    destination: '/en/our-doctors/Dr.-Abdullah-Bouarka/?id=26'
  },
  {
    source: '/doctors/dr-abdullah-farouk/',
    destination: '/en/our-doctors/Dr.-Abdullah-Farouk/?id=121'
  },
  {
    source: '/doctors/dr-adnan-alnahawe/',
    destination: '/en/our-doctors/Dr.-Adnan-Alnahawe/?id=104'
  },
  {
    source: '/doctors/dr-ahmed-abo-essa/',
    destination: '/en/our-doctors/Dr.-Ahmed-Bu-Issa-/?id=15'
  },
  {
    source: '/doctors/dr-ahmed-alhajjar/',
    destination: '/en/our-doctors/Dr.-Ahmed-Al-Hajjar/?id=166'
  },
  {
    source: '/doctors/dr-ahmed-allam/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-ahmed-almuslim/',
    destination: '/en/our-doctors/Dr.-Ahmed-Al-Muslim/?id=228'
  },
  {
    source: '/doctors/dr-ahmed-desoky/',
    destination: '/en/our-doctors/Dr.-Ahmed-Desouky-/?id=18'
  },
  {
    source: '/doctors/dr-ahmed-ewais/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-ahmed-kahla/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-ahmed-marya/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-ahmed-mousa/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-akram-baseil/',
    destination: '/en/our-doctors/Dr.-Akram-Bassil/?id=159'
  },
  {
    source: '/doctors/dr-alaa-elsyed-goumaa-falogy/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-alaa-kamal-elhennawy/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-alanoud-ahmed/',
    destination: '/en/our-doctors/Dr.-Anoud-Mansour/?id=151'
  },
  {
    source: '/doctors/dr-ali-ghiad/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-ali-haredy/',
    destination: '/en/our-doctors/Dr.-Ali-Haridi/?id=64'
  },
  {
    source: '/doctors/dr-alsayed-youssef/',
    destination: '/en/our-doctors/Dr.-Al-Syed-Youssef/?id=20'
  },
  {
    source: '/doctors/dr-amged-awad/',
    destination: '/en/our-doctors/Dr.-Amged-Awad/?id=86'
  },
  {
    source: '/doctors/dr-amr-ibrahim/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-ashraf-hanafy/',
    destination: '/en/our-doctors/Dr.-Ashraf-Hanafy/?id=92'
  },
  {
    source: '/doctors/dr-basel-ismail/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-basheer-rababah/',
    destination: '/en/our-doctors/Dr.-Basheer-Rababah/?id=211'
  },
  {
    source: '/doctors/dr-basher-al-rababa/',
    destination: '/en/our-doctors/Dr.-Shahin-Ahmed/?id=163'
  },
  {
    source: '/doctors/dr-dina-abdul-samea/',
    destination: '/en/our-doctors/Dr.-Dina-Breen/?id=21'
  },
  {
    source: '/doctors/dr-eissa-mousa/',
    destination: '/en/our-doctors/Dr.-Issa-Mousa/?id=225'
  },
  {
    source: '/doctors/dr-elyana/',
    destination: '/en/our-doctors/Dr.-Elyana-Al-Tawil/?id=85'
  },
  {
    source: '/doctors/dr-fadl-gaber/',
    destination: '/en/our-doctors/Dr.-Fadl-Jaber/?id=146'
  },
  {
    source: '/doctors/dr-fahd-alwadani/',
    destination: '/en/our-doctors/Dr.-Fahad-Al-Wadani/?id=28'
  },
  {
    source: '/doctors/dr-fatima-al-baik/',
    destination: '/en/our-doctors/Dr.-Fatima-Al-Beik/?id=152'
  },
  {
    source: '/doctors/dr-haitham-al-thulithi/',
    destination: '/en/our-doctors/Dr.-Haitham-Al-Thulithi/?id=158'
  },
  {
    source: '/doctors/dr-hamid-alwaadany/',
    destination: '/en/our-doctors/Dr.-Hamed-Al-Wadany/?id=42'
  },
  {
    source: '/doctors/dr-hassan-diab/',
    destination: '/en/our-doctors/Dr.-Hassan-Diab/?id=227'
  },
  {
    source: '/doctors/dr-hesham-soliman/',
    destination: '/en/our-doctors/Dr.-Hesham-Soliman/?id=224'
  },
  {
    source: '/doctors/dr-hisham-abdulkarim/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-housam-almoukayed/',
    destination: '/en/our-doctors/Dr.-Hussam-Al-Maqid/?id=32'
  },
  {
    source: '/doctors/dr-houssain-al-hajj/',
    destination: '/en/our-doctors/Dr.-Hussein-Hajj/?id=157'
  },
  {
    source: '/doctors/dr-husam-harbi-mahmoud-bdair/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-hussain-ali-ahmad-alhajii/',
    destination: '/en/our-doctors/Dr.-Hussein-Hajji/?id=134'
  },
  {
    source: '/doctors/dr-hussain-alradwan/',
    destination: '/en/our-doctors/Dr.-Hussein-Al-Radwan-/?id=14'
  },
  {
    source: '/doctors/dr-hussein-jawad-ali-alamer/',
    destination: '/en/our-doctors/Dr.-Hussein-Jawad-Ali-AL-Amir/?id=79'
  },
  {
    source: '/doctors/dr-hussein-mohamed-sedky/',
    destination: '/en/our-doctors/Dr.-Hussein-Muhammad-Sidqi/?id=141'
  },
  {
    source: '/doctors/dr-ibrahim-al-jabr/',
    destination: '/en/our-doctors/Dr.-Ibrahim-Al-Jabr/?id=90'
  },
  {
    source: '/doctors/dr-ibrahim-hassoun/',
    destination: '/en/our-doctors/Dr.-Ibrahim-Hassoun-Al-Ali/?id=156'
  },
  {
    source: '/doctors/dr-ibrahim-mowafy/',
    destination: '/en/our-doctors/Dr.-Ibrahim-Mowafi/?id=226'
  },
  {
    source: '/doctors/dr-israa-tamakanath/',
    destination: '/en/our-doctors/Dr.-Israa-Tamaknat/?id=88'
  },
  {
    source: '/doctors/dr-jaber-abdullah/',
    destination: '/en/our-doctors/Dr.-Jaber-Abdullah/?id=149'
  },
  {
    source: '/doctors/dr-laith-faisal-obaidat/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-lara-boustros/',
    destination: '/en/our-doctors/Dr.-Lara-Boutros/?id=138'
  },
  {
    source: '/doctors/dr-mahmoud-abou-tabl/',
    destination: '/en/our-doctors/Dr.-Mahmoud-Abou-Tabl/?id=96'
  },
  {
    source: '/doctors/dr-mariam-khateeb/',
    destination: '/en/our-doctors/Dr.-Maryam-Khatib/?id=155'
  },
  {
    source: '/doctors/dr-marwa-hanafy-2/',
    destination: '/en/our-doctors/Dr.-Marwa-Hanafy/?id=87'
  },
  {
    source: '/doctors/dr-median-attia/',
    destination: '/en/our-doctors/Dr.-Median-Attia/?id=49'
  },
  {
    source: '/doctors/dr-mervat-ballot/',
    destination: '/en/our-doctors/Dr.-Mervat-Balot/?id=46'
  },
  {
    source: '/doctors/dr-mezyad-alrawashda/',
    destination: '/en/our-doctors/Dr.-Mezyad-Al-Rawashda/?id=105'
  },
  {
    source: '/doctors/dr-mohamad-k-tameesh/',
    destination: '/en/our-doctors/Dr.-Muhammad-Tamish/?id=31'
  },
  {
    source: '/doctors/dr-mohamed-al-salim/',
    destination: '/en/our-doctors/Dr.-Mohamed-Al-Salim-/?id=22'
  },
  {
    source: '/doctors/dr-mohamed-anwar/',
    destination: '/en/our-doctors/Dr.-Mohammed-Anwar/?id=103'
  },
  {
    source: '/doctors/dr-mohamed-el-awady-2/',
    destination: '/en/our-doctors/Dr.-Mohammed-Al-Awadi/?id=164'
  },
  {
    source: '/doctors/dr-mohamed-el-sayed-abdel-latif-mahmoud/',
    destination: '/en/our-doctors/Dr.-Muhammad-Al-Sayed/?id=154'
  },
  {
    source: '/doctors/dr-mohamed-el-sheimy/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-mohamed-essa/',
    destination: '/en/our-doctors/Dr.-Muhammad-Issa-/?id=16'
  },
  {
    source: '/doctors/dr-mohamed-hussin/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-mohamed-khalil/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-mohamed-magdy-yehia-elsherif/',
    destination: '/en/our-doctors/Dr.-Muhammad-Yahya-Neama/?id=30'
  },
  {
    source: '/doctors/dr-mohamed-yehya-neama/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-mohammed-al-qahtani/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-mohammed-bassiouny/',
    destination: '/en/our-doctors/Dr.-Mohamed-Bassiouni/?id=145'
  },
  {
    source: '/doctors/dr-mohmed-haitham/',
    destination: '/en/our-doctors/Dr.-Muhammad-Haitham-Taha/?id=106'
  },
  {
    source: '/doctors/dr-mona-abdulaziz/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-mona-ali/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-motaaz-sabry/',
    destination: '/en/our-doctors/Dr.-Moataz-Sabry/?id=120'
  },
  {
    source: '/doctors/dr-mustafa-saad/',
    destination: '/en/our-doctors/Dr.-Mustafa-Saad/?id=162'
  },
  {
    source: '/doctors/dr-nabil-fouda/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-naif-alhmam/',
    destination: '/en/our-doctors/Dr.-Nayef-Al-Hamam/?id=24'
  },
  {
    source: '/doctors/dr-nashwa-seada/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-nelly-ahmed/',
    destination: '/en/our-doctors/Dr.-Nelly-Ahmed/?id=50'
  },
  {
    source: '/doctors/dr-niveen-helmy-narooz/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-noha-warsha/',
    destination: '/en/our-doctors/Dr.-Noha-Warsha/?id=25'
  },
  {
    source: '/doctors/dr-osama-al-sayed/',
    destination: '/en/our-doctors/Dr.-Osama-Al-Aredy/?id=44'
  },
  {
    source: '/doctors/dr-osama-hussein/',
    destination: '/en/our-doctors/Dr.-Osama-Hussein/?id=232'
  },
  {
    source: '/doctors/dr-radi-makki/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-raghdaa-elsayed-mabrook-elrweene/',
    destination: '/en/our-doctors/Dr.-Raghda-Al-Ruwaini/?id=147'
  },
  {
    source: '/doctors/dr-ramia-almobasher/',
    destination: '/en/our-doctors/Dr.-Ramia-Al-Mobasher/?id=48'
  },
  {
    source: '/doctors/dr-rania-issa/',
    destination: '/en/our-doctors/Dr.-Rania-Al-Issa/?id=94'
  },
  {
    source: '/doctors/dr-saad-al-taher/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-safwat-aldabos/',
    destination: '/en/our-doctors/Dr.Safwat-Aldabos/?id=100'
  },
  {
    source: '/doctors/dr-safwat-mohammad-mohammad-elshewy/',
    destination: '/en/our-doctors/Dr.-Safwat-Mohamed-Mohamed-El-Shewy/?id=80'
  },
  {
    source: '/doctors/dr-salwa-hassanein-elhadidi/',
    destination: '/en/our-doctors/Dr.-Salwa-Hassanein-ElHadidi/?id=95'
  },
  {
    source: '/doctors/dr-samer-nahle/',
    destination: '/en/our-doctors/Dr.-Samer-Nahale/?id=153'
  },
  {
    source: '/doctors/dr-samer-qarah/',
    destination: '/en/our-doctors/Dr.-Samer-Qarah/?id=131'
  },
  {
    source: '/doctors/dr-sarah/',
    destination: '/en/our-doctors/Dr.-Sarah-Abdel-Azim/?id=150'
  },
  {
    source: '/doctors/dr-shamel-abo-saad/',
    destination: '/en/our-doctors/Dr.-Shamel-Abo-Saad/?id=91'
  },
  {
    source: '/doctors/dr-shimaa-abdelbary/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-syed-ahmed/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-tamer-shawky/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-waheed-mahdy/',
    destination: '/en/our-doctors/Dr.-Wahid-Mahdi/?id=129'
  },
  {
    source: '/doctors/dr-wasim-rofael/',
    destination: '/en/our-doctors/Dr.-Wasim-Rofael/?id=47'
  },
  {
    source: '/doctors/dr-wisam-ali-hassan/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-zainab-al-mousa/',
    destination: '/en/our-doctors/Dr.-Zainab-Al-Moosa/?id=137'
  },
  {
    source: '/doctors/dr-zeinab-mustafa/',
    destination: '/en/our-doctors/Dr.-Zainab-Mustafa/?id=45'
  },
  {
    source: '/doctors/tarek-mohammed-ahmad-mohammed/',
    destination: '/en/our-doctors/Dr.-Tarek-Mohamed/?id=82'
  },
  {
    source: '/doctors/walaa-aldery/',
    destination: '/en/our-doctors/Dr.-Walaa-Al-Dery/?id=27'
  },
  {
    source: '/doctors/dr-abdulhakeem-mohamed-habib/',
    destination: '/en/our-doctors/Dr.-Abdul-Hakim-Muhammad-Habib/?id=4'
  },
  {
    source: '/doctors/dr-ahmed-el-serougi/',
    destination: '/en/our-doctors/Dr.-Ahmed-Al-Serougi/?id=53'
  },
  {
    source: '/doctors/dr-ahmet-sukru-mercan-2/',
    destination: '/en/our-doctors/Dr.-Ahmed-Sacro-Mercan/?id=10'
  },
  {
    source: '/doctors/dr-aly-alsaad/',
    destination: '/en/our-doctors/Dr.-Aly-Alsaad/?id=257'
  },
  {
    source: '/doctors/dr-ammar-saleh-alkhars/',
    destination: '/en/our-doctors/Dr.-Ammar-Saleh-Al-Khars/?id=135'
  },
  {
    source: '/doctors/dr-ayman-ghoneim/',
    destination: '/en/our-doctors/Dr.-Ayman-Ghoneim/?id=13'
  },
  {
    source: '/doctors/dr-ayman-tantawe/',
    destination: '/en/our-doctors/Dr.-Ayman-Tantawi/?id=5'
  },
  {
    source: '/doctors/dr-basem-hedar/',
    destination: '/en/our-doctors/Dr.-Basem-Haider/?id=133'
  },
  {
    source: '/doctors/dr-elie-hakmah/',
    destination: '/en/our-doctors/Dr.-Ellie-Hekma/?id=58'
  },
  {
    source: '/doctors/dr-fatimah-alali/',
    destination: '/en/our-doctors/Fatima-Al-Ali/?id=39'
  },
  {
    source: '/doctors/dr-ghanda-hemia/',
    destination: '/en/our-doctors/Dr.-Ghanda-Hemia/?id=108'
  },
  {
    source: '/doctors/dr-hanan-alabdulkareem/',
    destination: '/en/our-doctors/Dr.-Hanan-Al-Abdul-Karim/?id=62'
  },
  {
    source: '/doctors/dr-hassan-chouman/',
    destination: '/en/our-doctors/Dr.-Hassan-Chouman/?id=99'
  },
  {
    source: '/doctors/dr-hassan-salama/',
    destination: '/en/our-doctors/Dr.-Hassan-Salama/?id=41'
  },
  {
    source: '/doctors/dr-hussain-alquraini/',
    destination: '/en/our-doctors/Dr.-Hussain-Alquraini/?id=107'
  },
  {
    source: '/doctors/dr-ibrahim-al-ahmad/',
    destination: '/en/our-doctors/Dr.-Ibrahim-Al-Ahmad/?id=37'
  },
  {
    source: '/doctors/dr-john-anfanty/',
    destination: '/en/our-doctors/Dr.-John-Anfanty/?id=57'
  },
  {
    source: '/doctors/dr-mahmoud-al-hajji/',
    destination: '/en/our-doctors/Dr.-Mahmoud-Al-Hajji/?id=35'
  },
  {
    source: '/doctors/dr-mamdouh-al-nahawe/',
    destination: '/en/our-doctors/Dr.-Mamdouh-Al-Nahawe/?id=60'
  },
  {
    source: '/doctors/dr-memoona-akram/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-mohamed-shour/',
    destination: '/en/our-doctors/Dr.-Muhammad-Chour/?id=59'
  },
  {
    source: '/doctors/dr-mohammad-hassan-soliman-khedr/',
    destination: '/en/our-doctors/Dr.-Muhammad-Hassan-Suleiman-Khader/?id=12'
  },
  {
    source: '/doctors/dr-mohammed-matter/',
    destination: '/en/our-doctors/Dr.-Muhammad-Matar/?id=11'
  },
  {
    source: '/doctors/dr-osama-kattih/',
    destination: '/en/our-doctors/Dr.-Osama-Kattih/?id=144'
  },
  {
    source: '/doctors/dr-rasha-hseiki/',
    destination: '/en/our-doctors/Dr.-Rasha-Amen-Hseiki/?id=98'
  },
  {
    source: '/doctors/dr-saber-abou-el-hassan/',
    destination: '/en/our-doctors/Dr.-Saber-Abu-Al-Hassan/?id=36'
  },
  {
    source: '/doctors/dr-sami-subaih/',
    destination: '/en/our-doctors/Dr.-Sami-Subaih/?id=142'
  },
  {
    source: '/doctors/dr-shadi-mahmoud-abdulrahman/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/dr-sherif-saad-osman/',
    destination: '/en/our-doctors/Dr.-Sherif-Saad/?id=40'
  },
  {
    source: '/doctors/dr-sherif-saad/',
    destination: '/en/our-doctors/Dr.-Ahmed-Al-Shamasy/?id=38'
  },
  {
    source: '/doctors/dr-taha-abdullah/',
    destination: '/en/our-doctors/Dr.-Taha-Abdullah/?id=143'
  },
  {
    source: '/doctors/dr-walid-elsayed/',
    destination: '/en/our-doctors/Dr.-Waleed-Mohammed-Elsayed-Mohammed/?id=181'
  },
  {
    source: '/doctors/dr-zeinab-al-athan/',
    destination: '/en/our-doctors/Ms.-Zainab-Al-Athan/?id=34'
  },
  {
    source: '/doctors/dr-ahlam-haroun/',
    destination: '/en/our-doctors/Dr.-Ahlam-Haroon/?id=63'
  },
  {
    source: '/doctors/dr-ashraf-al-nousier/',
    destination: '/en/our-doctors/Dr.-Ashraf-Al-Nousier/?id=54'
  },
  {
    source: '/doctors/dr-hussam-mowaffag-saeed-kallas/',
    destination: '/en/our-doctors/Dr.-Hussam-Kallas/?id=55'
  },
  {
    source: '/doctors/dr-mahmoud-farooq/',
    destination: '/en/our-doctors/Dr.-Mahmoud-Farouk-Al-Menisey/?id=56'
  },
  {
    source: '/doctors/dr-mahmoud-mashmoushi/',
    destination: '/en/our-doctors/Dr.-Mahmoud-Mashmoushi/?id=61'
  },
  {
    source: '/centers/bariatric-center/',
    destination: '/en/services/medical-centers/Obesity-Center/?id=10'
  },
  {
    source: '/centers/cardiology-center/',
    destination: '/en/services/medical-centers/Heart-Center/?id=6'
  },
  {
    source: '/centers/dental-center/',
    destination: '/en/services/medical-centers/Dental-center/?id=52'
  },
  {
    source: '/centers/emergency-center/',
    destination: '/en/services/medical-centers/Emergency-Center/?id=14'
  },
  {
    source: '/centers/haya-alkatheer-eye-center/',
    destination: '/en/services/medical-centers/Eye-Center/?id=9'
  },
  {
    source: '/centers/nawal-afaleq-oncology-center/',
    destination: '/en/services/medical-centers/Cancer-Center/?id=15'
  },
  {
    source: '/centers/nephrology-and-the-hemodialysis-center/',
    destination:
      '/en/services/medical-centers/Nephrology-and-Dialysis-Center/?id=17'
  },
  {
    source: '/centers/neurosciences-center/',
    destination: '/en/services/medical-centers/-Neuroscience-Center/?id=7'
  },
  {
    source: '/centers/pediatrics-center/',
    destination: '/en/services/medical-centers/Pediatric-Center/?id=18'
  },
  {
    source: '/centers/surgery-center/',
    destination: '/en/services/medical-centers/Surgery-Center/?id=12'
  },
  {
    source: '/centers/internal-medicine-center/',
    destination: '/en/services/medical-centers/Gastroenterology-Center/?id=16'
  },
  {
    source: '/centers/orthopedic-center/',
    destination: '/en/services/medical-centers/Orthopedic-Center/?id=8'
  },
  {
    source: '/centers/womens-health-center/',
    destination: "/en/services/medical-centers/Women's-Health-Center/?id=11"
  },
  {
    source: '/programs/depression-management/',
    destination:
      '/en/services/medical-programs/Depression-Treatment-Program/?id=33'
  },
  {
    source: '/programs/diabetes-management/',
    destination:
      '/en/services/medical-centers/Diabetes-and-Endocrinology-Center/?id=26'
  },
  {
    source: '/programs/fertility-treatment/',
    destination: '/en/services/medical-centers/IVF-Center/?id=50'
  },
  {
    source: '/programs/hair-transplant/',
    destination: '/en/services/medical-programs/Hair-Transplant-Program/?id=27'
  },
  {
    source: '/programs/maternity-program/',
    destination: '/en/services/medical-programs/Maternity-Program/?id=30'
  },
  {
    source: '/programs/medical-checkup/',
    destination:
      '/en/services/medical-programs/Executive-medical-checkup/?id=29'
  },
  {
    source: '/programs/migraine-management/',
    destination:
      '/en/services/medical-programs/Migraine-Treatment-Program/?id=38'
  },
  {
    source: '/programs/sickle-cell-management/',
    destination:
      '/en/services/medical-programs/Sickle-Cell-Anemia-Treatment-Program/?id=36'
  },
  {
    source: '/programs/sleep-disorders-program/',
    destination: '/en/services/medical-programs/Sleep-disorders-program-/?id=13'
  },
  {
    source: '/programs/speech-therapy/',
    destination:
      '/en/services/medical-programs/Speech-problems-and-Speech-Delay-Therapy-Program/?id=32'
  },
  {
    source: '/programs/stroke-management/',
    destination: '/en/services/medical-programs/Stroke-Program/?id=28'
  },
  {
    source: '/programs/vaccination-program/',
    destination: '/en/services/medical-programs/Vaccination-Program/?id=31'
  },
  {
    source: '/programs/varicose-treatment/',
    destination:
      '/en/services/medical-programs/Varicose-Veins-Treatment-Program/?id=37'
  },
  {
    source: '/strategic-priorities/',
    destination: '/en/about/strategic-priorities'
  },
  ///centers/womens-health-center/?lang=ar
  {
    source: '/centers/womens-health-center/',
    destination: "/en/services/medical-centers/Women's-Health-Center/?id=11"
  },
  {
    source: '/category/awards-and-accreditations/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/cardiac-clinic/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/uncategorized/',
    destination: '/en/media-center/news'
  },
  //'/departments/family-medicine-clinic/?lang=ar'
  {
    source: '/departments/family-medicine-clinic/',
    destination: '/en/services/medical-centers/Family-Medicine-Clinic/?id=21'
  },
  //'/departments/hematology-clinic/?lang=ar'
  {
    source: '/departments/hematology-clinic/',
    destination: '/en/services/medical-centers'
  },
  //'/departments/infectious-diseases-division/?lang=ar'
  {
    source: '/departments/infectious-diseases-division/',
    destination: '/en/services/medical-centers'
  },
  //'/departments/psychiatry-clinic/?lang=ar'
  {
    source: '/departments/psychiatry-clinic/',
    destination: '/en/services/supportive-services'
  },
  {
    source: '/centers/page/2/',
    destination: '/en/services/medical-centers'
  },
  {
    source: '/bwg_album/almoosa-hospital/',
    destination: '/en/media-center/photo-gallery/?page=1'
  },
  {
    source: '/wifi/',
    destination: '/en/for-visitors'
  },
  {
    source: '/bwg_gallery/general-vedio/',
    destination: '/en/media-center/video-gallery/?page=1'
  },
  {
    source: '/category/news/page/10/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/news/page/11/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/news/page/4/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/news/page/5/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/news/page/6/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/news/page/7/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/news/page/8/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/news/page/9/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/uncategorized/page/2/',
    destination: '/en/media-center/news'
  },
  {
    source: '/doctors/page/10/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/page/11/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/page/12/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/page/13/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/page/14/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/page/15/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/page/2/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/page/3/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/page/4/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/page/5/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/page/6/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/page/7/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/page/8/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors/page/9/',
    destination: '/en/our-doctors/?page=1'
  },
  // '/educational-courses/?add-to-cart=29765',
  // '/educational-courses/?add-to-cart=30224',
  // '/educational-courses/?add-to-cart=30679',
  // '/educational-courses/?add-to-cart=30783',
  // '/educational-courses/?add-to-cart=30833',

  {
    source: '/educational-courses/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/programs/page/2/',
    destination: '/en/services/medical-programs'
  },
  {
    source: '/doctors_category/icu/page/2/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/internal-medicine-center/page/2/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/orthopedic-sports-injuries-center/page/2/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/pediatrics-center/page/2/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/surgery-center/page/2/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/3d-flip-book-category/annual-reports/',
    destination: '/en/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/3d-flip-book-category/newsletter/',
    destination: '/en/media-center/hakeem-magazine/?page=1'
  },
  //'/bwg_album/almoosa-hospital/?type_0=gallery&album_gallery_id_0=1'
  {
    source: '/bwg_album/almoosa-hospital/',
    destination: '/en/media-center/photo-gallery/?page=1'
  },
  // '/bwg_album/general-video/?type_0=gallery&album_gallery_id_0=1'
  {
    source: '/bwg_album/general-video/',
    destination: '/en/media-center/video-gallery/?page=1'
  },
  {
    source: '/bwg_gallery/events/',
    destination: '/en/media-center/photo-gallery/?page=1'
  },
  {
    source: '/bwg_gallery/video/',
    destination: '/en/media-center/video-gallery/?page=1'
  },
  {
    source: '/doctors_category/anesthesia-and-operating-room/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/bariatric-center/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/cardiac-center/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/dental-center/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/dental-center/page/2/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/dermatology-clinic/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/dietitian-clinic/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/e-n-t-clinic/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/employee-health-clinic/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/endocrinology-and-diabetes/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/eye-center/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/family-medicine-clinic/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/hematology-clinic/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/icu/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/internal-medicine-center/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/laboratory/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/medical-emergency/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/medical-emergency/page/2/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/nephrology-clinic/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/neuroscience-center/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/nicu/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/oncology-center/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/orthopedic-sports-injuries-center/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/pain-management-clinic/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/pediatrics-center/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/psychiatry-clinic/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/pulmonary-clinic/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/radiology/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/sleep-disorders-center/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/surgery-center/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/urology-clinic/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/vascular-surgery-clinic/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/doctors_category/womens-health-center/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/videos/',
    destination: '/en/media-center/video-gallery/?page=1'
  },
  {
    source: '/visiting-hours-policies/general-visiting-guidelines/',
    destination: '/en/for-visitors'
  },
  {
    source: '/visiting-hours-policies/icu-visiting-hours-guidelines/',
    destination: '/en/for-visitors'
  },
  {
    source: '/visiting-hours-policies/nicu-visiting-hours-guidelines/',
    destination: '/en/for-visitors'
  },
  {
    source: '/visiting-hours-policies/other-inpatient-units/',
    destination: '/en/for-visitors'
  },
  {
    source: '/visiting-hours-policies/picu-visiting-hours-guidelines/',
    destination: '/en/for-visitors'
  },
  {
    source: '/waiting-areas/kids-club/',
    destination: '/en/for-visitors'
  },
  {
    source: '/waiting-areas/other-waiting-areas/',
    destination: '/en/for-visitors'
  },
  {
    source: '/photo-gallery/',
    destination: '/en/media-center/photo-gallery'
  },
  {
    source: '/photo-gallery/2020-gallery/',
    destination: '/en/media-center/photo-gallery'
  },
  {
    source: '/product-category/courses/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/awards-accreditations/',
    destination: '/en/about/awards'
  },
  {
    source: '/cat_homeboxes/about-accordion/',
    destination: '/en/about/overview'
  },
  {
    source: '/cat_homeboxes/about/',
    destination: '/en/about/overview'
  },
  {
    source: '/dining-options/cafeteria-for-staff-only/',
    destination: '/en/for-patient'
  },
  {
    source: '/dining-options/costa-cafe/',
    destination: '/en/for-patient'
  },
  {
    source: '/dining-options/food-nutrition-services/',
    destination: '/en/for-patient'
  },
  {
    source: '/dining-options/grocery-store/',
    destination: '/en/for-patient'
  },
  {
    source: '/dining-options/local-restaurants/',
    destination: '/en/for-patient'
  },
  {
    source: '/dining-options/vending-machines/',
    destination: '/en/for-patient'
  },
  {
    source: '/hospital-amenities/',
    destination: '/en/for-patient'
  },
  {
    source: '/blog2/2/',
    destination: '/en/media-center/news'
  },
  {
    source: '/blog2/3/',
    destination: '/en/media-center/news'
  },
  {
    source: '/blog2/4/',
    destination: '/en/media-center/news'
  },
  {
    source: '/blog2/5/',
    destination: '/en/media-center/news'
  },
  {
    source: '/photo-gallery-2/',
    destination: '/en/media-center/photo-gallery'
  },
  {
    source: '/waiting-areas/',
    destination: '/en/for-visitors'
  },
  {
    source: '/ahsa-run-marathon/',
    destination: '/en/community/ahsa-run-marathon'
  },
  {
    source: '/atms/',
    destination: '/en/for-visitors'
  },
  {
    source: '/cleft-lip-initiative/',
    destination: '/en/community/smile-of-hope-initiative'
  },
  {
    source: '/cooperation-with-productive-families/',
    destination: '/en/community/cooperation-with-productive-families'
  },
  {
    source: '/dining-options/',
    destination: '/en/for-patient'
  },
  {
    source: '/disabled-access-services/',
    destination: '/en/for-visitors'
  },
  {
    source: '/laboratory-department/',
    destination: '/en/services/supportive-services'
  },
  {
    source: '/paramedic-in-each-school/',
    destination: '/en/community/paramedic-in-each-school'
  },
  {
    source: '/blog2/',
    destination: '/en/media-center/news'
  },
  {
    source: '/category/news/page/3/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/almoosa-medical-group/',
    destination: '/about/almoosa-medical-group'
  },
  {
    source: '/directions-parking/air-transport/',
    destination: '/for-patient'
  },
  {
    source: '/directions-parking/bus-service/',
    destination: '/for-patient'
  },
  {
    source: '/directions-parking/car-rental-offices/',
    destination: '/for-patient'
  },
  {
    source: '/directions-parking/road-network/',
    destination: '/for-patient'
  },
  {
    source: '/directions-parking/taxis-limousine/',
    destination: '/for-patient'
  },
  {
    source: '/directions-parking/trains/',
    destination: '/for-patient'
  },
  {
    source: '/board-of-governors/mr-ahmed-al-bader/',
    destination: '/en/about/board-directors-and-executive-team'
  },
  {
    source: '/dr-ghannam-aldossary-2/',
    destination: '/en/about/board-directors-and-executive-team'
  },
  {
    source: '/dr-ghannam-aldossary/',
    destination: '/en/about/board-directors-and-executive-team'
  },
  {
    source: '/medical-centers-x/wellness-center/',
    destination: '/en/services/medical-centers'
  },
  {
    source: '/mission-and-vision/',
    destination: '/en/about/vision-mission'
  },
  {
    source: '/for-patients/',
    destination: '/en/for-patient'
  },
  {
    source: '/homeboxes/accreditation-and-awards/',
    destination: '/en/about/awards'
  },
  {
    source: '/product/ecg-interpretation/',
    destination: '/en/services/medical-centers/Heart-Center/?id=6'
  },
  {
    source: '/board-of-governors-and-leadership-team/',
    destination: '/en/about/board-directors-and-executive-team'
  },
  {
    source: '/fast-facts/',
    destination: '/en/about/fast-facts'
  },
  {
    source: '/gifts-flower-shops/',
    destination: '/en/for-visitors'
  },
  {
    source: '/homeboxes/clinics-departments/',
    destination: '/en/services/medical-centers'
  },
  {
    source: '/homeboxes/core-values/',
    destination: '/en/about/values'
  },
  {
    source: '/homeboxes/find-doctors/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/homeboxes/mission-and-vision/',
    destination: '/en/about/vision-mission'
  },
  {
    source: '/over-view/',
    destination: '/en/about/overview'
  },
  {
    source: '/product/antibiotics-101/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/product/basic-surgical-skills/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/product/comprehensive-imaging-anatomy-course-radiology-course/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/product/ecg-program/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/product/summer-research-training/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/visiting-hours-policies/hospital-quiet-time/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/ahsa-run-2018/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-1/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-10/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-11/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-12/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-13/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-14/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-15/',
    destination: '/en/for-visitors'
  },
  {
    source:
      '/magazines/almoosa-magazine-number-16-20-years-in-serving-homeland/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-17-hospital-for-the-future/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-18/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-2/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-3/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-4/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-5/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-6/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-7/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-8/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/almoosa-magazine-number-9/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/innovation-revolutionizes-the-world/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/oasis-of-rehabilitation-and-long-term-care-in-al-ahsa/',
    destination: '/en/for-visitors'
  },
  {
    source:
      '/planning-your-hospital-stay/available-wards-departments-room-types/',
    destination: '/en/for-patient'
  },
  {
    source: '/planning-your-hospital-stay/companions/',
    destination: '/en/for-patient'
  },
  {
    source: '/planning-your-hospital-stay/daily-meals/',
    destination: '/en/for-patient'
  },
  {
    source: '/planning-your-hospital-stay/on-admission-day/',
    destination: '/en/for-patient'
  },
  {
    source: '/planning-your-hospital-stay/questions-to-ask-your-doctor/',
    destination: '/en/for-patient'
  },
  {
    source: '/planning-your-hospital-stay/what-to-bring/',
    destination: '/en/for-patient'
  },
  {
    source: '/planning-your-hospital-stay/your-room/',
    destination: '/en/for-patient'
  },
  {
    source: '/patient-complains/how-we-deal-with-complaints/',
    destination: '/en/for-patient'
  },
  {
    source: '/patient-complains/ways-to-submit-your-complaint/',
    destination: '/en/for-patient'
  },
  {
    source: '/preparing-for-a-procedure/at-the-admission-office/',
    destination: '/en/for-patient'
  },
  {
    source: '/preparing-for-a-procedure/companions/',
    destination: '/en/for-patient'
  },
  {
    source: '/preparing-for-a-procedure/discharge-information-process/',
    destination: '/en/for-patient'
  },
  {
    source: '/preparing-for-a-procedure/discharge-procedures/',
    destination: '/en/for-patient'
  },
  {
    source: '/preparing-for-a-procedure/payment-methods-at-admission-office/',
    destination: '/en/for-patient'
  },
  {
    source: '/preparing-for-a-procedure/postpartum-procedures/',
    destination: '/en/for-patient'
  },
  {
    source: '/preparing-for-your-appointment/before-coming-to-the-hospital/',
    destination: '/en/for-patient'
  },
  {
    source: '/preparing-for-your-appointment/what-to-bring-2/',
    destination: '/en/for-patient'
  },
  {
    source: '/medical-centers-x/ophthalmology-center/cataract-surgery/',
    destination: '/en/services/medical-centers/Eye-Center/?id=9'
  },
  {
    source: '/board-of-governors/',
    destination: '/en/about/board-directors-and-executive-team'
  },
  {
    source: '/departments/dermatology-clinic',
    destination: '/en/services/medical-centers/Almoosa-Aesthetic-Center/?id=20'
  },
  {
    source: '/product/research-workshop-methodology/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/product/spss-hands-on-workshop/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/board-of-governors/dr-zainab-al-moosa/',
    destination:
      '/en/about/board-directors-and-executive-team/dr-zainab-al-moosa/?id=26'
  },
  {
    source: '/board-of-governors/mr-hassan-afaleq/',
    destination:
      '/en/about/board-directors-and-executive-team/mr-hassen-al-afaaleq/?id=28'
  },
  {
    source: '/board-of-governors/mr-malek-almoosa/',
    destination:
      '/en/about/board-directors-and-executive-team/mr-malek-almoosa/?id=24'
  },
  {
    source: '/board-of-governors/mr-musaed-almoosa/',
    destination:
      '/en/about/board-directors-and-executive-team/mr-musaed-almoosa/?id=27'
  },
  {
    source: '/dr-mahmoud-mustafa/',
    destination:
      '/en/about/board-directors-and-executive-team/dr-mahmoud-mustafa/?id=36'
  },
  {
    source: '/dr-mohammed-kandil/',
    destination:
      '/en/about/board-directors-and-executive-team/dr-mohammed-kandil/?id=40'
  },
  {
    source: '/dr-mustafa-saad/',
    destination:
      '/en/about/board-directors-and-executive-team/dr-mustafa-saad/?id=42'
  },
  {
    source: '/dr-rida-khadra/',
    destination: '/en/our-doctors/Dr.-Rida-A.-Khadra-/?id=237'
  },
  {
    source: '/dr-samer-qara/',
    destination: '/en/our-doctors/Dr.-Samer-Qarah/?id=131'
  },
  {
    source: '/dr-zainab-almoosa/',
    destination:
      '/en/about/board-directors-and-executive-team/dr-zainab-al-moosa/?id=26'
  },
  {
    source: '/eng-mahmoud-yaseen/',
    destination:
      '/en/about/board-directors-and-executive-team/eng-mahmoud-yaseen/?id=39'
  },
  {
    source: '/mrs-hera-tashjian/',
    destination:
      '/en/about/board-directors-and-executive-team/mrs-hera-tashjian/?id=37'
  },
  {
    source: '/mrs-sara-almoosa-2/',
    destination:
      '/en/about/board-directors-and-executive-team/mrs-sara-almoosa/?id=25'
  },
  {
    source: '/mrs-sara-almoosa/',
    destination:
      '/en/about/board-directors-and-executive-team/mrs-sara-almoosa/?id=25'
  },
  {
    source: '/muhammad-saleem/',
    destination:
      '/en/about/board-directors-and-executive-team/muhammed-saleem/?id=41'
  },
  {
    source:
      '/visiting-hours-policies/visitor-family-and-care-partner-restrictions-related-to-covid-19-pandemic/',
    destination: '/en/for-visitors/visiting-hours/covid-pandemic'
  },
  {
    source: '/malek-almoosa/',
    destination:
      '/en/about/board-directors-and-executive-team/mr-malek-almoosa/?id=24'
  },
  {
    source: '/find-doctors/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/mona-khamis/',
    destination:
      '/en/about/board-directors-and-executive-team/mona-khamis/?id=34'
  },
  // {
  //   source: '/contact-us/',
  //   destination: '/en/contact-us'
  // },
  {
    source: '/centers/',
    destination: '/en/services/medical-centers'
  },
  {
    source: '/doctors/',
    destination: '/en/our-doctors/?page=1'
  },
  {
    source: '/programs/',
    destination: '/en/services/medical-programs'
  },
  {
    source: '/taste-of-art/',
    destination: '/en/community/taste-of-art'
  },
  {
    source: '/directions-parking/',
    destination: '/for-patient'
  },
  {
    source: '/12553-2/',
    destination: '/en/services/inpatient-units/?id=39'
  },
  // {
  //   source: '/career/',
  //   destination: '/en/'
  // },
  {
    source: '/coronary-care-unit-ccu/',
    destination: '/en/services/inpatient-units/?id=39'
  },
  {
    source: '/day-surgery-unit/',
    destination: '/en/services/inpatient-units/?id=39'
  },
  {
    source: '/radiology-department/',
    destination: '/en/services/supportive-services'
  },
  {
    source: '/request-medical-records/',
    destination: '/en/for-patient'
  },
  {
    source: '/video-gallery/',
    destination: '/en/media-center/video-gallery/?page=1'
  },
  {
    source: '/vip-services/',
    destination: '/en/'
  },
  {
    source: '/visiting-hours-policies/',
    destination: '/en/for-visitors'
  },
  {
    source: '/volunteer-at-almoosa/',
    destination: '/en/'
  },
  {
    source: '/medical-center/',
    destination: '/en/services/medical-centers'
  },
  {
    source: '/medical-centers-x/',
    destination: '/en/services/medical-centers'
  },
  {
    source: '/medical-centers-x/bariatric-center/',
    destination: '/en/services/medical-centers/Obesity-Center/?id=10'
  },
  {
    source: '/medical-centers-x/cardiology-center/',
    destination: '/en/services/medical-centers/Heart-Center/?id=6'
  },
  {
    source: '/medical-centers-x/dental-center/',
    destination: '/en/services/medical-centers/Dental-center/?id=52'
  },
  {
    source: '/medical-centers-x/emergency-center/',
    destination: '/en/services/medical-centers/Emergency-Center/?id=14'
  },
  {
    source: '/medical-centers-x/internal-medicine-center/',
    destination: '/en/services/medical-centers'
  },
  {
    source: '/medical-centers-x/nephrology-and-the-hemodialysis-center/',
    destination:
      '/en/services/medical-centers/Nephrology-and-Dialysis-Center/?id=17'
  },
  {
    source: '/medical-centers-x/neurosciences-center/',
    destination: '/en/services/medical-centers/-Neuroscience-Center/?id=7'
  },
  {
    source: '/medical-centers-x/oncology-center/',
    destination: '/en/services/medical-centers/Cancer-Center/?id=15'
  },
  {
    source: '/medical-centers-x/ophthalmology-center/',
    destination: '/en/services/medical-centers/Eye-Center/?id=9'
  },
  {
    source: '/medical-centers-x/orthopedic-center/',
    destination: '/en/services/medical-centers/Orthopedic-Center/?id=8'
  },
  {
    source: '/medical-centers-x/pediatrics-center/',
    destination: '/en/services/medical-centers/Pediatric-Center/?id=18'
  },
  {
    source: '/medical-centers-x/sleep-disorders-center/',
    destination: '/en/services/medical-programs/Sleep-disorders-program-/?id=13'
  },
  {
    source: '/medical-centers-x/surgery-center/',
    destination: '/en/services/medical-centers/Surgery-Center/?id=12'
  },
  {
    source: '/medical-centers-x/womens-health-center/',
    destination: "/en/services/medical-centers/Women's-Health-Center/?id=11"
  },
  {
    source: '/medical-programs/',
    destination: '/en/services/medical-programs'
  },
  {
    source: '/newsletters/',
    destination: '/en/media-center/news/?page=1'
  },
  {
    source: '/latest-news/',
    destination: '/en/media-center/news/?page=1'
  },
  {
    source: '/departments/',
    destination: '/en/services'
  },
  {
    source: '/digital-operation-rooms/',
    destination: '/en/services/supportive-services'
  },
  {
    source: '/insurance/',
    destination: '/en/for-patient'
  },
  {
    source: '/intensive-care-unit-icu/',
    destination: '/en/services/inpatient-units/?id=42'
  },
  {
    source: '/mosques/',
    destination: '/en/for-patient'
  },
  {
    source: '/nursing-department/',
    destination: '/en/services/nursing-department'
  },
  {
    source: '/pharmacy/',
    destination: '/en/services/supportive-services/?id=54'
  },
  {
    source: '/library/',
    destination: '/en/for-visitors'
  },
  {
    source: '/magazines/',
    destination: '/en/for-visitors'
  },
  {
    source: '/privacy-policy/',
    destination: '/en/privacy'
  },
  {
    source: '/patient-and-family-rights/',
    destination: '/en/for-patient'
  },
  {
    source: '/patient-responsibilities/',
    destination: '/en/for-patient'
  },
  {
    source: '/planning-your-hospital-stay/',
    destination: '/en/for-patient'
  },
  {
    source: '/patient-complains/',
    destination: '/en/for-patient'
  },
  {
    source: '/play-together-park/',
    destination: '/en/community/play-together-park'
  },
  {
    source: '/power-of-art-initiative/',
    destination: '/en/community/power-of-art'
  },
  {
    source: '/preparing-for-a-procedure/',
    destination: '/en/for-patient'
  },
  {
    source: '/preparing-for-your-appointment/',
    destination: '/en/for-patient'
  },
  {
    source: '/educational-courses/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/waiting-areas/games-booth/',
    destination: '/en/for-visitors'
  },
  {
    source: '/waiting-areas/games-room/',
    destination: '/en/for-visitors'
  },
  {
    source: '/abdul-rahim-al-natour/',
    destination:
      '/en/about/board-directors-and-executive-team/abdul-rahim-al-natour/?id=35'
  },
  {
    source: '/about-us/',
    destination: '/en/about/overview'
  },
  {
    source: '/homeboxes/appointment/',
    destination: '/en/'
  },
  {
    source: '/interpreter-services/',
    destination: '/en/'
  },
  {
    source: '/homeboxes/education-and-training/',
    destination: '/en/training-education/courses'
  },
  {
    source: '/3d-flip-book/almoosa-specialist-hospital-annual-report-ar/',
    destination: '/en/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/3d-flip-book/newsletter/',
    destination: '/en/media-center/hakeem-magazine/?page=1'
  },
  {
    source: '/our-journey-to-magnet/',
    destination: '/en/'
  },
  {
    source: '/team/114/',
    destination:
      '/en/about/board-directors-and-executive-team/dr-zainab-al-moosa/?id=26'
  },
  {
    source: '/team/dr-ghannam-aldossary/',
    destination: '/en/about/board-directors-and-executive-team'
  },
  {
    source: '/team/mr-ahmed-al-bader/',
    destination: '/en/about/board-directors-and-executive-team'
  },
  {
    source: '/team/mr-malek-almoosa/',
    destination:
      '/en/about/board-directors-and-executive-team/mr-malek-almoosa/?id=24'
  },
  {
    source: '/team/mr-musaed-almoosa/',
    destination:
      '/en/about/board-directors-and-executive-team/mr-musaed-almoosa/?id=27'
  },
  {
    source: '/team/mrs-sarah-almoosa/',
    destination:
      '/en/about/board-directors-and-executive-team/mrs-sara-almoosa/?id=25'
  },
  {
    source: '/team/sheikh-abdulaziz-almoosa/',
    destination:
      '/en/about/board-directors-and-executive-team/sheikh-abdulaziz-al-mousa/?id=23'
  },
  //source: '/wp-content/uploads/2020/01/عمار-الخرس-10332-2-scaled.jpg',
  {
    source:
      '/wp-content/uploads/2020/01/%D8%B9%D9%85%D8%A7%D8%B1-%D8%A7%D9%84%D8%AE%D8%B1%D8%B3-10332-2-scaled.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2020/01/Dr.Zeinab-Mustafa.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2020/07/Surgery.jpg',
    destination: '/ar/'
  },
  // /wp-content/uploads/2020/08/باسل-اسماعيل.png
  {
    source:
      '/wp-content/uploads/2020/08/%D8%A8%D8%A7%D8%B3%D9%84-%D8%A7%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84.png',
    destination: '/ar/'
  },
  // /wp-content/uploads/2020/08/دليلك-الشامل-لكل-ما-يتعلق-بعمليات-الفيمتوليزك-1-941x640.png
  {
    source:
      '/wp-content/uploads/2020/08/%D8%AF%D9%84%D9%8A%D9%84%D9%83-%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84-%D9%84%D9%83%D9%84-%D9%85%D8%A7-%D9%8A%D8%AA%D8%B9%D9%84%D9%82-%D8%A8%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%81%D9%8A%D9%85%D8%AA%D9%88%D9%84%D9%8A%D8%B2%D9%83-1-941x640.png',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2020/08/Untitled-design-10-941x640.png',
    destination: '/ar/'
  },
  // /wp-content/uploads/2020/09/زيارة-للحلاق-تكشف-ورم-نادر-بحجم-بيضة-941x640.png
  {
    source:
      '/wp-content/uploads/2020/09/%D8%B2%D9%8A%D8%A7%D8%B1%D8%A9-%D9%84%D9%84%D8%AD%D9%84%D8%A7%D9%82-%D8%AA%D9%83%D8%B4%D9%81-%D9%88%D8%B1%D9%85-%D9%86%D8%A7%D8%AF%D8%B1-%D8%A8%D8%AD%D8%AC%D9%85-%D8%A8%D9%8A%D8%B6%D8%A9-941x640.png',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2020/09/Untitled-design-12-941x640.png',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2020/12/Untitled-design-17-941x640.png',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2020/12/Untitled-design-18-941x640.png',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2020/12/Untitled-design-19-941x640.png',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2021/04/Untitled-design-27.png',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2021/04/Untitled-design-28.png',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/06/psychiatry.jpg',
    destination: '/ar/'
  },
  // '/wp-content/uploads/2019/07/لأول-مرة-بالأحساء_-استخدام-الليزر-في-علاج-البواسير.png'
  {
    source:
      '/wp-content/uploads/2019/07/%D9%84%D8%A3%D9%88%D9%84-%D9%85%D8%B1%D8%A9-%D8%A8%D8%A7%D9%84%D8%A3%D8%AD%D8%B3%D8%A7%D8%A1_-%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-%D8%A7%D9%84%D9%84%D9%8A%D8%B2%D8%B1-%D9%81%D9%8A-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%B3%D9%8A%D8%B1.png',
    destination: '/ar/'
  },
  {
    source: '/wp-content/themes/almoosa/images/doctor-placeholder.jpg',
    destination: '/ar/'
  },
  {
    source:
      '/wp-content/uploads/2017/10/Celebration-of-the-best-EMPLOYEE-OF-THE-3RD-QUARTER-2017.png',
    destination: '/ar/'
  },
  {
    source:
      '/wp-content/uploads/2018/09/Successful-Treatment-of-a-Child-with-Paralysis-Caused-by-“Guillain-Barre-Syndrome”.png',
    destination: '/ar/'
  },
  {
    source:
      '/wp-content/uploads/2019/01/SUCCESSFUL-KASABACH-MERRITT-SYNDROME-KMS-SURGERY-FOR-A-6-DAY-OLD-BABY-1024x697.png',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/05/b4-300x148.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/05/pulmonary-clinic-941x312.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/05/pulmonary-clinic.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/06/abt.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/06/dermatology.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/06/plastic-surgery.jpg',
    destination: '/ar/'
  },
  // /wp-content/uploads/2019/07/الموسى-يشارك-في-فعاليات-الأسبوع-العالمي-لمكافحة-العدوى.png
  {
    source:
      '/wp-content/uploads/2019/07/%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D9%8A%D8%B4%D8%A7%D8%B1%D9%83-%D9%81%D9%8A-%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D8%B3%D8%A8%D9%88%D8%B9-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A-%D9%84%D9%85%D9%83%D8%A7%D9%81%D8%AD%D8%A9-%D8%A7%D9%84%D8%B9%D8%AF%D9%88%D9%89.png',
    destination: '/ar/'
  },
  // /wp-content/uploads/2019/07/انطلاق-المؤتمر-العلمي-الأول-للعلوم-العصبية-بالأحساء.png
  {
    source:
      '/wp-content/uploads/2019/07/%D8%A7%D9%86%D8%B7%D9%84%D8%A7%D9%82-%D8%A7%D9%84%D9%85%D8%A4%D8%AA%D9%85%D8%B1-%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A-%D8%A7%D9%84%D8%A3%D9%88%D9%84-%D9%84%D9%84%D8%B9%D9%84%D9%88%D9%85-%D8%A7%D9%84%D8%B9%D8%B5%D8%A8%D9%8A%D8%A9-%D8%A8%D8%A7%D9%84%D8%A3%D8%AD%D8%B3%D8%A7%D8%A1.png',
    destination: '/ar/'
  },
  // /wp-content/uploads/2019/07/حوالي-90-من-مصابي-الصرع-في-الدول-النامية،-منهم-70-لا-يستطيعون-الحصول-على-العلاج.png
  {
    source:
      '/wp-content/uploads/2019/07/%D8%AD%D9%88%D8%A7%D9%84%D9%8A-90-%D9%85%D9%86-%D9%85%D8%B5%D8%A7%D8%A8%D9%8A-%D8%A7%D9%84%D8%B5%D8%B1%D8%B9-%D9%81%D9%8A-%D8%A7%D9%84%D8%AF%D9%88%D9%84-%D8%A7%D9%84%D9%86%D8%A7%D9%85%D9%8A%D8%A9%D8%8C-%D9%85%D9%86%D9%87%D9%85-70-%D9%84%D8%A7-%D9%8A%D8%B3%D8%AA%D8%B7%D9%8A%D8%B9%D9%88%D9%86-%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC.png',
    destination: '/ar/'
  },
  // /wp-content/uploads/2019/07/مؤتمر-علمي-بالأحساء-يناقش-المستجدات-في-أمراض-الجهاز-الهضمي-والكبد-1024x697.png
  {
    source:
      '/wp-content/uploads/2019/07/%D9%85%D8%A4%D8%AA%D9%85%D8%B1-%D8%B9%D9%84%D9%85%D9%8A-%D8%A8%D8%A7%D9%84%D8%A3%D8%AD%D8%B3%D8%A7%D8%A1-%D9%8A%D9%86%D8%A7%D9%82%D8%B4-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AC%D8%AF%D8%A7%D8%AA-%D9%81%D9%8A-%D8%A3%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2-%D8%A7%D9%84%D9%87%D8%B6%D9%85%D9%8A-%D9%88%D8%A7%D9%84%D9%83%D8%A8%D8%AF-1024x697.png',
    destination: '/ar/'
  },
  ///wp-content/uploads/2019/07/مجموعة-الموسى-تكشف-الستار-عن-خطط-إقامة-واحة-استشفائية-للتأهيل-والرعاية-الممتدة-بالأحساء-1024x697.png
  {
    source:
      '/wp-content/uploads/2019/07/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D8%AA%D9%83%D8%B4%D9%81-%D8%A7%D9%84%D8%B3%D8%AA%D8%A7%D8%B1-%D8%B9%D9%86-%D8%AE%D8%B7%D8%B7-%D8%A5%D9%82%D8%A7%D9%85%D8%A9-%D9%88%D8%A7%D8%AD%D8%A9-%D8%A7%D8%B3%D8%AA%D8%B4%D9%81%D8%A7%D8%A6%D9%8A%D8%A9-%D9%84%D9%84%D8%AA%D8%A3%D9%87%D9%8A%D9%84-%D9%88%D8%A7%D9%84%D8%B1%D8%B9%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D9%85%D8%AA%D8%AF%D8%A9-%D8%A8%D8%A7%D9%84%D8%A3%D8%AD%D8%B3%D8%A7%D8%A1-1024x697.png',
    destination: '/ar/'
  },
  ///wp-content/uploads/2019/07/مجموعة-الموسى-تكشف-الستار-عن-خطط-إقامة-واحة-استشفائية-للتأهيل-والرعاية-الممتدة-بالأحساء.png
  {
    source:
      '/wp-content/uploads/2019/07/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D8%AA%D9%83%D8%B4%D9%81-%D8%A7%D9%84%D8%B3%D8%AA%D8%A7%D8%B1-%D8%B9%D9%86-%D8%AE%D8%B7%D8%B7-%D8%A5%D9%82%D8%A7%D9%85%D8%A9-%D9%88%D8%A7%D8%AD%D8%A9-%D8%A7%D8%B3%D8%AA%D8%B4%D9%81%D8%A7%D8%A6%D9%8A%D8%A9-%D9%84%D9%84%D8%AA%D8%A3%D9%87%D9%8A%D9%84-%D9%88%D8%A7%D9%84%D8%B1%D8%B9%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D9%85%D8%AA%D8%AF%D8%A9-%D8%A8%D8%A7%D9%84%D8%A3%D8%AD%D8%B3%D8%A7%D8%A1.png',
    destination: '/ar/'
  },
  ///wp-content/uploads/2019/07/محاضرة-تعليمية-من-أجل-ولادة-طبيعية-أسهل.png
  {
    source:
      '/wp-content/uploads/2019/07/%D9%85%D8%AD%D8%A7%D8%B6%D8%B1%D8%A9-%D8%AA%D8%B9%D9%84%D9%8A%D9%85%D9%8A%D8%A9-%D9%85%D9%86-%D8%A3%D8%AC%D9%84-%D9%88%D9%84%D8%A7%D8%AF%D8%A9-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9-%D8%A3%D8%B3%D9%87%D9%84.png',
    destination: '/ar/'
  },
  // /wp-content/uploads/2019/07/نجاح-المستشفى-في-التعامل-مع-الكوارث-الخارجية.png
  {
    source:
      '/wp-content/uploads/2019/07/%D9%86%D8%AC%D8%A7%D8%AD-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89-%D9%81%D9%8A-%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%85%D9%84-%D9%85%D8%B9-%D8%A7%D9%84%D9%83%D9%88%D8%A7%D8%B1%D8%AB-%D8%A7%D9%84%D8%AE%D8%A7%D8%B1%D8%AC%D9%8A%D8%A9.png',
    destination: '/ar/'
  },
  // /wp-content/uploads/2019/07/نجاح-علاج-طفل-من-الشلل-نتيجة-إصابته-بـ-“غيلان-باريه”.png
  {
    source:
      '/wp-content/uploads/2019/07/%D9%86%D8%AC%D8%A7%D8%AD-%D8%B9%D9%84%D8%A7%D8%AC-%D8%B7%D9%81%D9%84-%D9%85%D9%86-%D8%A7%D9%84%D8%B4%D9%84%D9%84-%D9%86%D8%AA%D9%8A%D8%AC%D8%A9-%D8%A5%D8%B5%D8%A7%D8%A8%D8%AA%D9%87-%D8%A8%D9%80-%E2%80%9C%D8%BA%D9%8A%D9%84%D8%A7%D9%86-%D8%A8%D8%A7%D8%B1%D9%8A%D9%87%E2%80%9D.png',
    destination: '/ar/'
  },
  // /wp-content/uploads/2019/07/وزير-الصحة-يزور-مستشفى-الموسى-في-الأحساء-1024x697.png
  {
    source:
      '/wp-content/uploads/2019/07/%D9%88%D8%B2%D9%8A%D8%B1-%D8%A7%D9%84%D8%B5%D8%AD%D8%A9-%D9%8A%D8%B2%D9%88%D8%B1-%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D9%81%D9%8A-%D8%A7%D9%84%D8%A3%D8%AD%D8%B3%D8%A7%D8%A1-1024x697.png',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/07/01-1-941x312.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/07/05-941x312.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/07/05.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/07/07-1-941x312.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/07/08.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/07/ArabiaSheild-254x300-254x300.png',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/07/Dr.-Hamsa-Noori-600x400-410x273.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/07/Dr.-Mohamed-El-Awadi.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/07/bupa-1.jpeg',
    destination: '/ar/'
  },
  // /wp-content/uploads/2019/09/سيدة-ستينية-تستعيد-وعيها-في-العناية-المركزة-بعد-غيبوبة-استمرت-3-شهور.png
  {
    source:
      '/wp-content/uploads/2019/09/%D8%B3%D9%8A%D8%AF%D8%A9-%D8%B3%D8%AA%D9%8A%D9%86%D9%8A%D8%A9-%D8%AA%D8%B3%D8%AA%D8%B9%D9%8A%D8%AF-%D9%88%D8%B9%D9%8A%D9%87%D8%A7-%D9%81%D9%8A-%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D8%A9-%D8%A8%D8%B9%D8%AF-%D8%BA%D9%8A%D8%A8%D9%88%D8%A8%D8%A9-%D8%A7%D8%B3%D8%AA%D9%85%D8%B1%D8%AA-3-%D8%B4%D9%87%D9%88%D8%B1.png',
    destination: '/ar/'
  },
  // /wp-content/uploads/2019/09/مؤتمر-حماية-الطفل-02.jpg
  {
    source:
      '/wp-content/uploads/2019/09/%D9%85%D8%A4%D8%AA%D9%85%D8%B1-%D8%AD%D9%85%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D8%B7%D9%81%D9%84-02.jpg',
    destination: '/ar/'
  },
  // /wp-content/uploads/2019/09/88.ai-محول.jpg
  {
    source: '/wp-content/uploads/2019/09/88.ai-%D9%85%D8%AD%D9%88%D9%84.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/09/Volunteer-1-941x264.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/09/Volunteer-1.jpg',
    destination: '/ar/'
  },
  {
    source: '/wp-content/uploads/2019/09/cover-eng-19-941x1191.jpg',
    destination: '/ar/'
  },
  // /wp-content/uploads/2020/01/احمد-مبروك--scaled.jpg
  {
    source:
      '/wp-content/uploads/2020/01/%D8%A7%D8%AD%D9%85%D8%AF-%D9%85%D8%A8%D8%B1%D9%88%D9%83--scaled.jpg',
    destination: '/ar/'
  },
  {
    source:
      '/saving-the-life-of-a-29-year-old-man-his-stomach-moved-and-settled-in-his-chest-for-7-years/',
    destination:
      '/en/media-center/news/post/SAVING-THE-LIFE-OF-A-29-YEAR-OLD-MAN-HIS-STOMACH-MOVED-AND-SETTLED-IN-HIS-CHEST-FOR-7-YEARS/?id=10'
  },
  //destination:'/en/media-center/news/post/AL-MOOSA-CELEBRATES-THE-INTERNATIONAL-INFECTION-PREVENTION-WEEK-(IIPW)/?id=48'
  {
    source: '/prevention-week/',
    destination:
      '/en/media-center/news/post/AL-MOOSA-CELEBRATES-THE-INTERNATIONAL-INFECTION-PREVENTION-WEEK/?id=48'
  },
  {
    source: '/neuroscience-conference/',
    destination:
      '/en/media-center/news/post/LAUNCHING-THE-FIRST-NEUROSCIENCE-CONFERENCE-IN-ALHASSA/?id=52'
  },
  {
    source: '/beirut-explosion/',
    destination:
      '/en/media-center/news/post/NURSING-BETWEEN-THE-SANCTITY-OF-MISSION-AND-THE-SANCTITY-OF-DUTY/?id=13'
  },
  {
    source: '/depression-and-anxiety/',
    destination:
      '/en/media-center/news/post/DEPRESSION-AND-ANXIETY-COSTS-THE-WORLD-US$1-TRILLION-A-YEAR/?id=53'
  },
  {
    source: '/cooled-radio-frequency-ablation/',
    destination:
      '/en/media-center/news/post/COOLED-RADIOFREQUENCY-ABLATION-MODALITY-TO-TREAT-CHRONIC-JOINTS-PAIN/?id=15'
  },
  {
    source: '/best-employee-2017/',
    destination:
      '/en/media-center/news/post/CELEBRATION-OF-THE-BEST-EMPLOYEE-OF-THE-3RD-QUARTER-2017/?id=51'
  },
  {
    source: '/delicate-surgery/',
    destination:
      '/en/media-center/news/post/DELICATE-SURGERY-FOR-THE-HEART-OF-A-BABY-WEIGHING-800G/?id=49'
  },
  {
    source: '/boosting-memory-through-drawing/',
    destination:
      '/en/media-center/news/post/BOOSTING-MEMORY-THROUGH-DRAWING/?id=12'
  },
  {
    source:
      '/a-visit-to-a-barber-reveals-a-rare-egg-sized-carotid-sheath-mass/',
    destination:
      '/en/media-center/news/post/A-VISIT-TO-A-BARBER-REVEALS-A-RARE-EGG-SIZED-CAROTID-SHEATH-MASS/?id=11'
  },
  {
    source: '/innovation-center/',
    destination:
      '/en/media-center/news/post/ALMOOSA-SPECIALIST-HOSPITAL-OPENING-INSPIRE-INNOVATION-CENTER/?id=56'
  },
  {
    source: '/pregnant-woman-accident/',
    destination:
      '/en/media-center/news/post/A-MOTHER-WENT-TO-CHECK-ON-HER-BABY-AND-CAME-BACK-WITHOUT-HIM/?id=54'
  },
  //destination:'/en/media-center/news/post/Premenstrual-Syndrome-(PMS)%E2%80%8F/?id=9'
  {
    source: '/premenstrual-syndrome-pms%e2%80%8f/',
    destination:
      '/en/media-center/news/post/Premenstrual-Syndrome%E2%80%8F/?id=9'
  },
  {
    source: '/centers/orthopedic-center/',
    destination: '/en/media-center/news/post/ORTHOPEDIC-CENTER/?id=50'
  },
  {
    source: '/successful-aortic-stenting-for-a-30-year-old-patient/',
    destination:
      '/en/media-center/news/post/SUCCESSFUL-AORTIC-STENTING-FOR-A-30-YEAR-OLD-PATIENT/?id=14'
  },
  {
    source: '/alqaisariya-square/',
    destination:
      '/en/media-center/news/post/IN-PARTNERSHIP-WITH-AL-AHSA-MUNICIPALITY-ALMOOSA-SPECIALIST-HOSPITAL-IS-PARTICIPATING-IN-THE-%E2%80%9CAL-QAISARIYA-SQUARE%E2%80%9D-DEVELOPMENT-PROJECT/?id=55'
  },
  {
    source:
      '/ar/%d8%a5%d9%86%d9%82%d8%a7%d8%b0-%d8%b4%d8%a7%d8%a8-%d8%b9%d8%b4%d8%b1%d9%8a%d9%86%d9%8a-%d9%87%d8%a7%d8%ac%d8%b1%d8%aa-%d9%85%d8%b9%d8%af%d8%aa%d9%87-%d8%a7%d9%84%d8%a8%d8%b7/',
    destination:
      '/ar/media-center/news/post/%D8%A5%D9%86%D9%82%D8%A7%D8%B0-%D8%B4%D8%A7%D8%A8-%D8%B9%D8%B4%D8%B1%D9%8A%D9%86%D9%8A-%D9%87%D8%A7%D8%AC%D8%B1%D8%AA-%D9%85%D8%B9%D8%AF%D8%AA%D9%87-%D8%A7%D9%84%D8%A8%D8%B7%D9%86-%D9%88%D8%A7%D8%B3%D8%AA%D9%82%D8%B1%D8%AA-%D9%81%D9%8A-%D8%B5%D8%AF%D8%B1%D9%87-7-%D8%B3%D9%86%D9%88%D8%A7%D8%AA/?id=10'
  },
  {
    source:
      '/ar/al-moosa-celebrates-the-international-infection-prevention-week-iipw/',
    destination:
      '/ar/media-center/news/post/%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D9%8A%D8%B4%D8%A7%D8%B1%D9%83-%D9%81%D9%8A-%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D8%B3%D8%A8%D9%88%D8%B9-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A-%D9%84%D9%85%D9%83%D8%A7%D9%81%D8%AD%D8%A9-%D8%A7%D9%84%D8%B9%D8%AF%D9%88%D9%89/?id=48'
  },
  {
    source: '/ar/launching-the-first-neuroscience-conference-in-alhassa/',
    destination:
      '/ar/media-center/news/post/%D8%A7%D9%86%D8%B7%D9%84%D8%A7%D9%82-%D8%A7%D9%84%D9%85%D8%A4%D8%AA%D9%85%D8%B1-%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A-%D8%A7%D9%84%D8%A3%D9%88%D9%84-%D9%84%D9%84%D8%B9%D9%84%D9%88%D9%85-%D8%A7%D9%84%D8%B9%D8%B5%D8%A8%D9%8A%D8%A9-%D8%A8%D8%A7%D9%84%D8%A3%D8%AD%D8%B3%D8%A7%D8%A1/?id=52'
  },
  {
    source:
      '/ar/%d9%82%d9%84%d8%a8%d9%8b%d8%a7-%d9%8a%d9%86%d8%a8%d8%b6-%d8%a8%d8%a7%d9%84%d8%b1%d8%ad%d9%85%d8%a9/',
    destination:
      '/ar/media-center/news/post/%D8%AA%D8%AC%D9%84%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D9%85%D8%B1%D9%8A%D8%B6-%D8%A8%D9%8A%D9%86-%D9%82%D8%AF%D8%B3%D9%8A%D8%A9-%D8%A7%D9%84%D8%B1%D8%B3%D8%A7%D9%84%D8%A9-%D9%88%D9%82%D8%AF%D8%B3%D9%8A%D8%A9-%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D8%A8/?id=13'
  },
  {
    source: '/ar/depression-and-anxiety-costs-the-world-us1-trillion-a-year/',
    destination:
      '/ar/media-center/news/post/%D8%AA%D8%B1%D9%8A%D9%84%D9%8A%D9%88%D9%86-%D8%AF%D9%88%D9%84%D8%A7%D8%B1-%D8%AA%D9%83%D9%84%D9%81%D8%A9-%D8%A7%D9%84%D8%A7%D9%83%D8%AA%D8%A6%D8%A7%D8%A8-%D9%88%D8%A7%D9%84%D9%82%D9%84%D9%82-%D8%B3%D9%86%D9%88%D9%8A%D8%A7%D9%8B/?id=53'
  },
  {
    source:
      '/ar/%d8%aa%d9%82%d9%86%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%b1%d8%af%d8%af-%d8%a7%d9%84%d8%ad%d8%b1%d8%a7%d8%b1%d9%8a-%d8%a7%d9%84%d9%85%d8%a8%d8%b1%d8%af-cooled-radio-frequency-ablation-%d9%84%d8%b9%d9%84/',
    destination:
      '/ar/media-center/news/post/%D8%AA%D9%82%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D8%B1%D8%AF%D8%AF-%D8%A7%D9%84%D8%AD%D8%B1%D8%A7%D8%B1%D9%8A-%D8%A7%D9%84%D9%85%D8%A8%D8%B1%D8%AF-%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A2%D9%84%D8%A7%D9%85-%D8%A7%D9%84%D9%85%D9%81%D8%A7%D8%B5%D9%84/?id=15'
  },
  {
    source: '/ar/celebration-of-the-best-employee-of-the-3rd-quarter-2017/',
    destination:
      '/ar/media-center/news/post/%D8%AA%D9%83%D8%B1%D9%8A%D9%85-%D8%A7%D9%84%D9%85%D9%88%D8%B8%D9%81-%D8%A7%D9%84%D9%85%D8%AB%D8%A7%D9%84%D9%8A-%D9%84%D9%84%D8%B1%D8%A8%D8%B9-%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB-2017%D9%85/?id=51'
  },
  {
    source: '/ar/delicate-surgery-for-the-heart-of-a-baby-weighing-800g/',
    destination:
      '/ar/media-center/news/post/%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9-%D8%AF%D9%82%D9%8A%D9%82%D8%A9-%D9%84%D9%82%D9%84%D8%A8-%D8%B1%D8%B6%D9%8A%D8%B9-%D9%8A%D8%B2%D9%86-800-%D8%AC%D9%85/?id=49'
  },
  {
    source:
      '/ar/%d8%b0%d8%a7%d9%83%d8%b1%d8%aa%d9%8a-%d8%a3%d9%81%d8%b6%d9%84-%d8%ad%d9%8a%d9%86-%d8%a3%d8%b1%d8%b3%d9%85/',
    destination:
      '/ar/media-center/news/post/%D8%B0%D8%A7%D9%83%D8%B1%D8%AA%D9%8A-%D8%A3%D9%81%D8%B6%D9%84-%D8%AD%D9%8A%D9%86-%D8%A3%D8%B1%D8%B3%D9%85/?id=12'
  },
  {
    source:
      '/ar/%d8%b2%d8%b1%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d9%82%d8%b1%d9%86%d9%8a%d8%a9-%d8%a8%d8%aa%d9%82%d9%86%d9%8a%d8%a9-dmek/',
    destination:
      '/ar/media-center/news/post/%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D9%82%D8%B1%D9%86%D9%8A%D8%A9-%D8%A8%D8%AA%D9%82%D9%86%D9%8A%D8%A9-DMEK-%D8%AB%D9%88%D8%B1%D8%A9-%D8%B9%D9%84%D8%A7%D8%AC%D9%8A%D8%A9-%D9%81%D9%8A-%D8%B2%D8%B1%D8%A7%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D8%B1%D9%86%D9%8A%D8%A9/?id=32'
  },
  {
    source:
      '/ar/%d8%a7%d9%83%d8%aa%d8%b4%d8%a7%d9%81-%d9%88%d8%b1%d9%85-%d9%86%d8%a7%d8%af%d8%b1-%d8%a8%d8%ad%d8%ac%d9%85-%d8%a8%d9%8a%d8%b6%d8%a9/',
    destination:
      '/ar/media-center/news/post/%D8%B2%D9%8A%D8%A7%D8%B1%D8%A9-%D9%84%D9%84%D8%AD%D9%84%D8%A7%D9%82-%D8%AA%D9%83%D8%B4%D9%81-%D9%88%D8%B1%D9%85-%D9%86%D8%A7%D8%AF%D8%B1-%D8%A8%D8%AD%D8%AC%D9%85-%D8%A8%D9%8A%D8%B6%D8%A9/?id=11'
  },
  {
    source:
      '/ar/to-foster-new-ideas-and-expand-the-potential-for-iinnovation-almoosa-specialist-hospital-celebrates-the-opening-of-the-almoosa-inspire-innovation-center-2/',
    destination:
      '/ar/media-center/news/post/%D8%B6%D9%85%D9%86-%D8%AE%D8%B7%D9%88%D8%A7%D8%AA%D9%87-%D9%84%D8%AA%D8%B9%D8%B2%D9%8A%D8%B2-%D8%B1%D8%B9%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D8%B6%D9%89-%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D9%8A%D9%81%D8%AA%D8%AA%D8%AD-%D9%85%D8%B1%D9%83%D8%B2%D8%A7-%D9%84%D9%84%D8%A5%D8%A8%D8%AA%D9%83%D8%A7%D8%B1/?id=56'
  },
  {
    source:
      '/ar/natural-childbirth-vaginal-birth-of-stillbirth-saving-the-life-of-the-mother-from-terrific-rta/',
    destination:
      '/ar/media-center/news/post/%D9%81%D9%8A-%D8%A7%D9%84%D8%A3%D8%AD%D8%B3%D8%A7%D8%A1..-%D8%A7%D8%B7%D9%85%D8%A3%D9%86%D8%AA-%D8%B9%D9%84%D9%89-%D8%AC%D9%86%D9%8A%D9%86%D9%87%D8%A7-%D9%88%D8%B9%D8%A7%D8%AF%D8%AA-%D8%A8%D8%AF%D9%88%D9%86%D9%87!-%D9%88%D8%AA%D8%AF%D8%AE%D9%84-%D8%B7%D8%A8%D9%8A-%E2%80%9C%D9%8A%D9%8F%D9%86%D9%82%D8%B0%D9%87%D8%A7-%D9%85%D9%86-%D9%85%D9%88%D8%AA-%D9%85%D8%AD%D9%82%D9%82%E2%80%9D/?id=54'
  },
  {
    source:
      '/ar/%d9%85%d8%aa%d9%84%d8%a7%d8%b2%d9%85%d8%a9-%d9%85%d8%a7-%d9%82%d8%a8%d9%84-%d8%a7%d9%84%d8%ad%d9%8a%d8%b6/',
    destination:
      '/ar/media-center/news/post/%D9%85%D8%AA%D9%84%D8%A7%D8%B2%D9%85%D8%A9-%D9%85%D8%A7-%D9%82%D8%A8%D9%84-%D8%A7%D9%84%D8%AD%D9%8A%D8%B6/?id=9'
  },
  {
    source:
      '/ar/naming-the-orthopedic-center-at-almoosa-specialist-hospital-after-dr-mark-c-gebhardt/',
    destination:
      '/ar/media-center/news/post/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%B9%D8%B8%D8%A7%D9%85/?id=50'
  },
  {
    source: '/ar/successful-aortic-stenting-for-a-30-year-old-patient/',
    destination:
      '/ar/media-center/news/post/%D9%86%D8%AC%D8%A7%D8%AD-%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9-%D8%AF%D8%B9%D8%A7%D9%85%D8%A9-%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D9%8A%D9%86%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D8%B4%D8%B1%D9%8A%D8%A7%D9%86-%D8%A7%D9%84%D8%A3%D9%88%D8%B1%D8%B7%D9%8A/?id=14'
  },
  {
    source:
      '/ar/in-partnership-with-al-ahsa-municipality-almoosa-specialist-hospital-is-participating-in-the-al-qaisariya-square-development-project-2/',
    destination:
      '/ar/media-center/news/post/%D9%81%D9%8A-%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-88-%D9%88%D8%A8%D8%A7%D9%84%D8%B4%D8%B1%D8%A7%D9%83%D8%A9-%D9%85%D8%B9-%D8%A3%D9%85%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A3%D8%AD%D8%B3%D8%A7%D8%A1-%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%89-%D9%8A%D8%AA%D8%A8%D9%86%D9%89-%D8%A5%D9%86%D8%B4%D8%A7%D8%A1-%E2%80%9C%D9%85%D9%8A%D8%AF%D8%A7%D9%86-%D8%A7%D9%84%D9%82%D9%8A%D8%B5%D8%B1%D9%8A%D8%A9%E2%80%9D-%D8%A8%D8%A7%D9%84%D8%A3%D8%AD%D8%B3%D8%A7%D8%A1/?id=55'
  }
];

/* redirect temporary links */
const links_temporary = [
  {
    source: '/ar/a-29-year-old-with-a-mysterious-disease/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d9%84%d9%84%d9%85%d8%b1%d8%a9-%d8%a7%d9%84%d8%ab%d8%a7%d9%86%d9%8a%d8%a9-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%aa%d9%88%d8%a7%d9%84%d9%8a-%d8%a5%d8%b9%d8%aa%d9%85%d8%a7%d8%af-%d8%a8%d9%86%d9%83-%d8%a7/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/almoosa-specialist-hospitals-blood-bank-achieves-american-association-of-blood-banks-aabb-accreditation/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/almoosa-specialist-hospital-wins-king-abdulaziz-quality-award-2018-2/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/after-successful-therapeutic-cardiac-catheterization-hamza-got-his-smile-back/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%af%d9%84%d9%8a%d9%84%d9%83-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84-%d9%84%d9%83%d9%84-%d9%85%d8%a7-%d9%8a%d8%aa%d8%b9%d9%84%d9%82-%d8%a8%d8%b9%d9%85%d9%84%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d9%81%d9%8a/',
    destination: '/ar/'
  },
  {
    source: '/ar/cardiac-team/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d9%86%d8%ac%d8%a7%d8%ad-%d8%b9%d9%84%d8%a7%d8%ac-%d8%b1%d8%b6%d9%8a%d8%b9%d8%a9/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/almoosa-specialist-hospital-cardiac-center-teams-successfully-treats-critical-child-with-wolff-parkinson-white-syndrome/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/almoosa-specialist-hospital-celebrates-world-hemophilia-day-2018/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%aa%d9%88%d9%82%d9%8a%d8%b9-%d8%a5%d8%aa%d9%81%d8%a7%d9%82%d9%8a%d9%87-%d8%a8%d9%82%d9%8a%d9%85%d8%a9-%d9%85%d9%84%d9%8a%d9%88%d9%86%d9%8a%d9%86-%d8%b1%d9%8a%d8%a7%d9%84-%d9%85%d8%b9-%d9%85%d8%a4/',
    destination: '/ar/'
  },
  {
    source: '/ar/an-awareness-booth-rheumatic-diseases/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/around-90-of-people-with-epilepsy-live-in-developing-countries-and-70-of-them-are-not-receiving-appropriate-treatment/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%a7%d9%84%d9%87%d9%8a%d8%a6%d8%a9-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a%d8%a9-%d9%84%d9%84%d8%aa%d8%ae%d8%b5%d8%b5%d8%a7%d8%aa-%d8%a7%d9%84%d8%b5%d8%ad%d9%8a%d8%a9/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/bacterial-pneumonia-puts-a-20-year-old-patient-in-a-wheelchair/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/after-all-other-doctors-recommended-hysterectomy-bakri-balloon-gives-hope-to-a-30-year-old-patient/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d9%88%d8%b1%d8%b4%d8%a9-%d8%b9%d9%85%d9%84-%d8%a7%d9%84%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%ac%d8%b1%d8%a7%d8%ad%d9%8a%d8%a9-%d8%a7%d9%84%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a9/',
    destination: '/ar/'
  },
  {
    source: '/ar/best-employee-of-1st-quarter-2018/',
    destination: '/ar/'
  },
  {
    source: '/ar/breakfast-with-the-bosses/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/an-accurate-diagnosis-brings-hope-back-to-a-40-year-old-woman-with-breast-cancer/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/women-over-40-should-visit-the-surgical-oncology-clinic-almoosa-specialist-hospital-celebrates-breast-cancer-awareness-month/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/ritical-cis-irthbour-after-h-an-breastfeeding-withiniveslewborn-naving-s-for/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/cheese-and-chocolate-trigger-your-migraine-botox-treatment-proves-life-changing-for-migraine-patients/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/clinical-updates-in-gastroenterology-and-hepatology-conference-in-al-ahsa/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d9%81%d9%86%d8%ac%d8%a7%d9%86-%d8%a7%d9%84%d9%82%d9%87%d9%88%d8%a9-%d8%a7%d9%84%d8%b5%d8%a8%d8%a7%d8%ad%d9%8a-%d8%a3%d8%af%d8%a7%d8%a9-%d9%84%d8%a5%d9%86%d9%82%d8%a7%d8%b5-%d8%a7%d9%84%d9%88%d8%b2/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/in-collaboration-with-the-american-college-of-healthcare-executives-ache-almoosa-is-conducting-a-workshop-to-improve-patient-experience-initiatives/',
    destination: '/ar/'
  },
  {
    source: '/ar/concluding-kidney-disease-awareness-event/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/cpr-is-a-real-lifesaver-an-11-month-old-baby-drowned-in-his-bathtub/',
    destination: '/ar/'
  },
  {
    source: '/ar/do-you-know-what-to-do-to-save-a-heart/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d9%83%d9%8a%d9%81-%d8%a3%d9%86%d9%82%d8%b0-%d8%a7%d9%84%d9%81%d8%ad%d8%b5-%d8%a7%d9%84%d9%85%d8%a8%d9%83%d8%b1-%d8%ad%d9%8a%d8%a7%d8%a9-%d9%85%d8%b1%d9%8a%d9%85/',
    destination: '/ar/'
  },
  {
    source: '/ar/educational-lecture-on-facilitating-natural-birth/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/eyeglasses-will-miraculously-correct-your-childs-vision-true-or-false/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/al-ahsa-entering-the-guinness-world-record-for-the-largest-hands-hygiene-lesson/',
    destination: '/ar/'
  },
  {
    source: '/ar/al-ahsa-entering-guinness-world-records-next-week/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/hand-washing-can-help-prevent-illness-and-save-lives-700-students-were-covered-by-almoosa-infection-control-campaign/',
    destination: '/ar/'
  },
  {
    source: '/ar/heart-microsurgery-lasting-5-hours-in-a-7-day-old-child/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/almoosa-hospital-inaugurates-new-expansion-of-the-hemodialysis-center/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/al-ahsa-runs-twice-honors-hussein-hweikm-the-hero-of-willpower/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d9%81%d9%8a-%d8%b2%d9%85%d9%86-%d8%a7%d9%84%d9%83%d9%88%d8%b1%d9%88%d9%86%d8%a7-%d9%85%d8%a7-%d8%a7%d9%84%d8%b0%d9%8a-%d9%8a%d9%86%d8%a8%d8%ba%d9%8a-%d8%b9%d9%84%d9%8a%d9%83-%d9%81%d8%b9%d9%84%d9%87/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/infection-prevention-control-conference-concludes-its-activities/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/almoosa-rehab-and-ltc-hospital-design-wins-hrev-2018-innovation-award/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/inspirational-stories-in-celebration-of-world-social-work-day-2018/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/intravitreal-injections-a-quantum-leap-in-diabetic-retinopathy-treatment/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%a7%d9%84%d8%b9%d9%88%d8%af%d8%a9-%d8%a5%d9%84%d9%89-%d8%a7%d9%84%d9%86%d8%a7%d8%af%d9%8a/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/for-the-4th-time-almoosa-specialist-hospital-achieves-jci-accreditation/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/almoosa-hospital-celebrating-the-karkayan-night-with-children/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%ae%d8%a7%d9%84%d8%af-%d9%8a%d8%b1%d9%88%d9%8a-%d9%82%d8%b5%d8%aa%d9%87-%d9%85%d8%b9-%d9%83%d9%88%d8%b1%d9%88%d9%86%d8%a7/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/laparoscopic-surgery-to-treat-ovarian-torsion-for-a-6-year-girl/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/using-laser-in-the-treatment-of-hemorrhoids-laser-hemorrhoidectomy/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d9%85%d8%a8%d8%a7%d8%af%d8%b1%d8%a9-%d9%84%d9%86%d8%aa%d8%b9%d9%84%d9%85/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/almoosa-specialist-hospital-organizes-advanced-trauma-life-support-atls-for-healthcare-practitioners/',
    destination: '/ar/'
  },
  {
    source: '/ar/lunch-with-the-ceo/',
    destination: '/ar/'
  },
  {
    source: '/ar/minister-of-health-visits-almoosa-hospital-in-al-ahsa/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/mohammed-salahs-shoulder-dislocation-injury-puts-his-world-cup-dream-in-doubt/',
    destination: '/ar/'
  },
  {
    source: '/ar/musicians-sydnrome-when-arms-or-legs-fall-asleep/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/almoosa-specialist-hospital-celebrates-the-national-nurses-week/',
    destination: '/ar/'
  },
  {
    source: '/ar/nuts-endangered-a-babys-life/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/off-pump-cabg-beating-heart-surgery-saved-a-77-year-old-patients-life-2/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/cytoreductive-surgery-and-hyperthermic-intraperitoneal-chemotherapy-hipec-give-new-hope-to-patients-with-advanced-tumors/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/successful-permanent-pacemaker-insertion-procedure-at-almoosa-specialist-hospital/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/physiotherapy-team-achieved-a-record-6100-sessions-in-october/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/planetree-designation-workshop-at-almoosa-specialist-hospital-for-ministry-of-health-staff/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/planetree-designated-almoosa-specialist-hospital-with-planetree-golden-designation/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/discussing-the-latest-updates-on-pulmonary-diseases-and-sleep-disorders-at-a-scientific-conference-in-al-ahsa/',
    destination: '/ar/'
  },
  {
    source: '/ar/rehabilitation/',
    destination: '/ar/'
  },
  {
    source: '/ar/removing-tumor-from-head-the-pancreas/',
    destination: '/ar/'
  },
  {
    source: '/ar/a-baby-born-with-a-reversed-heart-arteries/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/the-rottinger-approach-for-total-hip-arthroplasty-successful-total-hip-arthroplasty-for-a-50-year-old-patient/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d9%81%d8%aa%d8%ad-%d8%a7%d9%86%d8%b3%d8%af%d8%a7%d8%af-%d9%83%d8%a7%d9%85%d9%84-%d8%a8%d8%a7%d9%84%d8%b4%d8%b1%d9%8a%d8%a7%d9%86-%d8%a7%d9%84%d8%aa%d8%a7%d8%ac%d9%8a-%d9%8a%d9%86%d9%87%d9%8a-%d9%85/',
    destination: '/ar/'
  },
  {
    source: '/ar/sedra-project/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/simulation-training-scenario-acute-respiratory-arrest-management/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/smoking-is-silent-killer-a-50-year-old-smoker-ends-up-living-with-half-a-lung/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/staying-away-from-stress-and-psychological-pressures-key-messages-celebrating-world-health-day-2018-2/',
    destination: '/ar/'
  },
  {
    source: '/ar/successful-external-disaster/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/successful-interventional-radiology-procedure-saves-a-62-year-old-man-from-paralysis/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/successful-surgery-ends-the-suffering-of-a-child-with-deep-cystic-brain-stem-mass/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/successful-kasabach-merritt-syndrome-kms-surgery-for-a-6-day-old-baby/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%a7%d8%b9%d8%aa%d9%85%d8%a7%d8%af-%d8%a7%d9%84%d9%83%d9%84%d9%8a%d8%a9-%d8%a7%d9%84%d8%a7%d9%85%d8%b1%d9%8a%d9%83%d9%8a%d8%a9-%d9%84%d9%84%d8%a3%d8%b4%d8%b9%d8%a9/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/successful-treatment-of-a-child-with-paralysis-caused-by-guillain-barre-syndrome/',
    destination: '/ar/'
  },
  {
    source: '/ar/u-s-consul-general-visits-almoosa-specialist-hospital/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/collaboration-with-almoosa-specialist-hospital-to-bring-uchicago-medicines-clinical-expertise-to-patients-in-saudi-arabia/',
    destination: '/ar/'
  },
  {
    source: '/ar/what-happens-when-heart-rhythm-is-disturbed/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/two-workshops-for-neurosurgeons-at-almoosa-specialist-hospital/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/women-and-diabetes-our-right-to-a-healthy-future-the-theme-of-world-diabetes-day-2017/',
    destination: '/ar/'
  },
  {
    source: '/ar/world-hand-hygiene-day/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/world-mental-health-day-2018-50-of-mental-health-conditions-begin-in-adolescence/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/under-the-theme-movement-for-health-almoosa-specialist-hospital-celebrates-world-physical-therapy-day/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/matters-voice-your-almoosa-specialist-hospital-achieves-excellence-in-press-ganey-survey-results-2/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%a5%d9%86%d9%82%d8%a7%d8%b0-%d9%85%d8%b1%d9%8a%d8%b6-%d9%81%d9%8a-%d8%a7%d9%84%d8%b9%d9%82%d8%af-%d8%a7%d9%84%d8%b1%d8%a7%d8%a8%d8%b9-%d9%85%d9%86-%d8%a7%d9%84%d8%b9%d9%85%d8%b1-%d9%85%d9%86-%d8%a7/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%a7%d8%b3%d8%aa%d8%a6%d8%b5%d8%a7%d9%84-%d9%88%d8%b1%d9%85-%d8%a8%d8%a7%d9%84%d8%af%d9%85%d8%a7%d8%ba-%d8%a8%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85-%d8%aa%d9%82%d9%86%d9%8a%d8%a9-%d8%a7%d9%84/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%a7%d9%84%d8%b1%d8%b2-%d8%a7%d9%84%d8%ad%d8%b3%d8%a7%d9%88%d9%8a-%d9%85%d9%81%d9%8a%d8%af-%d8%ad%d9%82%d9%8a%d9%82%d8%a9-%d8%a3%d9%85-%d8%ae%d8%b1%d8%a7%d9%81%d8%a9%d8%9f/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%a7%d9%84%d9%88%d9%82%d8%aa-%d9%8a%d9%82%d8%a7%d8%a8%d9%84-%d8%a7%d9%84%d9%88%d8%b8%d9%8a%d9%81%d8%a9-%d8%a7%d9%84%d8%af%d9%85%d8%a7%d8%ba%d9%8a%d8%a9/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%a7%d9%86%d9%82%d8%a7%d8%b0-%d8%ad%d9%8a%d8%a7%d8%a9-%d9%85%d8%b1%d9%8a%d8%b6-%d8%a8%d8%b9%d8%af-%d8%a7%d9%86%d9%81%d8%ac%d8%a7%d8%b1-%d8%a7%d9%84%d8%b5%d9%85%d8%a7%d9%85-%d8%a7%d9%84%d9%85%d9%8a/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%aa%d8%af%d8%ae%d9%84-%d8%ac%d8%b1%d8%a7%d8%ad%d9%8a-%d8%b3%d8%b1%d9%8a%d8%b9-%d9%8a%d8%b9%d9%8a%d8%af-%d9%84%d8%b3%d8%a8%d8%b9%d9%8a%d9%86%d9%8a-%d8%ad%d8%b1%d9%83%d8%aa%d9%87-%d8%a8%d8%b9%d8%af/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%ac%d8%b1%d8%a7%d8%ad%d8%a9-%d8%a8%d8%a7%d9%84%d9%85%d9%86%d8%b8%d8%a7%d8%b1-%d9%84%d8%a5%d9%86%d9%82%d8%a7%d8%b0-%d8%b1%d8%b6%d9%8a%d8%b9-%d9%85%d8%b5%d8%a7%d8%a8-%d8%a8%d8%a7%d9%84%d8%aa%d9%87/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%ad%d9%83%d8%a7%d9%8a%d8%a7-%d9%85%d9%88%d8%b8%d9%81%d9%8a%d9%86%d8%a7-%d8%a8%d9%8a%d9%86-%d8%a7%d9%84%d9%85%d9%87%d9%86%d8%a9-%d9%88%d8%a7%d9%84%d8%a3%d9%86%d8%b3%d8%a7%d9%86%d9%8a%d8%a9/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d8%ad%d9%8a%d8%ab%d9%85%d8%a7-%d9%88%d9%8f%d8%ac%d9%90%d8%af%d8%aa-%d8%a7%d9%84%d8%a5%d8%b1%d8%a7%d8%af%d8%a9%d9%88%d9%8f%d8%ac%d9%90%d8%af%d8%aa-%d8%a7%d9%84%d8%b7%d8%b1%d9%8a%d9%82%d8%a9/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d9%81%d8%b1%d9%8a%d9%82-%d9%82%d8%b3%d9%85-%d8%a7%d9%84%d8%b7%d9%88%d8%a7%d8%b1%d8%a6-%d9%8a%d9%86%d9%82%d8%b0-%d9%85%d8%b1%d9%8a%d8%b6%d8%a7%d9%8b-%d9%85%d9%86-%d8%ac%d9%84%d8%b7%d8%a9-%d8%b1%d8%a6/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d9%84%d8%a3%d9%88%d9%84-%d9%85%d8%b1%d9%87-%d9%81%d9%8a-%d8%a7%d9%84%d8%a7%d8%ad%d8%b3%d8%a7%d8%a1-%d9%86%d8%ac%d8%a7%d8%ad-%d8%b9%d9%85%d9%84%d9%8a%d8%a9-%d8%aa%d8%ab%d8%a8%d9%8a%d8%aa-%d9%81/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%d9%84%d9%82%d8%a7%d8%ad-%d9%83%d9%88%d8%b1%d9%88%d9%86%d8%a7/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/%e2%80%8foffice-nanoscope-%d8%ab%d9%88%d8%b1%d8%a9-%d9%81%d9%8a-%d8%b9%d9%84%d8%a7%d8%ac-%d8%a7%d9%84%d9%85%d9%81%d8%a7%d8%b5%d9%84-%d8%a8%d8%aa%d9%82%d9%86%d9%8a%d8%a9-%d8%a7%d9%84%d9%86%d8%a7%d9%86/',
    destination: '/ar/'
  },
  {
    source: '/ar/13998/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/7-%d8%a3%d9%81%d9%83%d8%a7%d8%b1-%d9%84%d8%aa%d9%87%d9%8a%d8%a6%d8%a9-%d8%b7%d9%81%d9%84%d9%83-%d9%84%d9%84%d8%aa%d8%b9%d9%84%d9%85-%d8%b9%d9%86-%d8%a8%d8%b9%d8%af/',
    destination: '/ar/'
  },
  {
    source: '/ar/a-60-year-old-woman-is-recovering/',
    destination: '/ar/'
  },
  {
    source: '/ar/a-multidisciplinary-team-saves-a-baby-from-certain-death/',
    destination: '/ar/'
  },
  {
    source: '/ar/almoosa-specialist/',
    destination: '/ar/'
  },
  {
    source: '/ar/bladder-cancer/',
    destination: '/ar/'
  },
  {
    source: '/ar/c-everret-koop/',
    destination: '/ar/'
  },
  {
    source: '/ar/cancer-day/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/ceremony-honoring-for-the-doctors-who-achieved-excellent-compliance-with-asp-principles-2/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/emigration-of-a-young-stomach-to-the-chest-cavity-following-a-horrific-accident/',
    destination: '/ar/'
  },
  {
    source: '/ar/international-award-for-al-mousa-specialized-hospital/',
    destination: '/ar/'
  },
  {
    source: '/ar/knee-replacement-for-a-70-year-old-patient/',
    destination: '/ar/'
  },
  {
    source: '/ar/obgyne-success-story/',
    destination: '/ar/'
  },
  {
    source: '/ar/our-employee-stories/',
    destination: '/ar/'
  },
  {
    source: '/ar/reverse-total-shoulder-replacement-for-a-90-year-old-patient/',
    destination: '/ar/'
  },
  {
    source: '/ar/russia-nodik/',
    destination: '/ar/'
  },
  {
    source: '/ar/saudipsc%e2%80%ac%e2%81%a9app/',
    destination: '/ar/'
  },
  {
    source: '/ar/save-the-lady-from-death/',
    destination: '/ar/'
  },
  {
    source: '/ar/taj-and-zahraa/',
    destination: '/ar/'
  },
  {
    source: '/ar/the-cavity-fills-her-stomach/',
    destination: '/ar/'
  },
  {
    source: '/ar/the-conclusion-of-the-summer-medicine-training-program/',
    destination: '/ar/'
  },
  {
    source: '/ar/the-cosmetic-clinic-will-give-him-hope/',
    destination: '/ar/'
  },
  {
    source:
      '/ar/the-courage-of-a-doctor-saves-a-child-from-suffocation-with-a-piece-of-metal/',
    destination: '/ar/'
  },
  {
    source: '/ar/trigeminal-neuralgia/',
    destination: '/ar/'
  },
  {
    source: '/a-29-year-old-with-a-mysterious-disease/',
    destination: '/en/'
  },
  {
    source: '/aabb-accreditation-2/',
    destination: '/en/'
  },
  {
    source: '/aabb-accreditation/',
    destination: '/en/'
  },
  {
    source: '/abdulaziz-quality-award-2018/',
    destination: '/en/'
  },
  {
    source:
      '/after-successful-therapeutic-cardiac-catheterization-hamza-got-his-smile-back/',
    destination: '/en/'
  },
  {
    source: '/all-you-need-to-know-about-femto-lasik-surgery/',
    destination: '/en/'
  },
  {
    source:
      '/almoosa-cardiac-team-managed-to-save-a-patient-life-after-long-standing-cardiac-arrest-due-to-lad-total-occlusion/',
    destination: '/en/'
  },
  {
    source:
      '/almoosa-pediatric-surgery-team-saves-a-newborn-life-from-a-rare-proximal-esophageal-atresia-and-distal-tracheoesophageal-fistula/',
    destination: '/en/'
  },
  {
    source:
      '/almoosa-specialist-hospital-cardiac-center-teams-successfully-treats-critical-child-with-wolff-parkinson-white-syndrome/',
    destination: '/en/'
  },
  {
    source:
      '/almoosa-specialist-hospital-celebrates-world-hemophilia-day-2018/',
    destination: '/en/'
  },
  {
    source:
      '/almoosa-specialist-hospital-signs-a-two-million-sr-contract-with-turquoise-mountain-to-support-local-crafts/',
    destination: '/en/'
  },
  {
    source: '/an-awareness-booth-rheumatic-diseases/',
    destination: '/en/'
  },
  {
    source:
      '/around-90-of-people-with-epilepsy-live-in-developing-countries-and-70-of-them-are-not-receiving-appropriate-treatment/',
    destination: '/en/'
  },
  {
    source:
      '/ash-achieves-full-institutional-accreditation-by-the-saudi-commission-for-health-specialties-scfhs/',
    destination: '/en/'
  },
  {
    source: '/bacterial-pneumonia/',
    destination: '/en/'
  },
  {
    source: '/bakri-balloon/',
    destination: '/en/'
  },
  {
    source: '/basic-surgical-skills-workshop/',
    destination: '/en/'
  },
  {
    source: '/best-employee-of-1st-quarter-2018/',
    destination: '/en/'
  },
  {
    source: '/breakfast-with-the-bosses/',
    destination: '/en/'
  },
  {
    source: '/breast-cancer-2/',
    destination: '/en/'
  },
  {
    source: '/breast-cancer/',
    destination: '/en/'
  },
  {
    source: '/breastfeeding/',
    destination: '/en/'
  },
  {
    source: '/cheese-and-chocolate/',
    destination: '/en/'
  },
  {
    source: '/clinical-updates/',
    destination: '/en/'
  },
  {
    source: '/coffee-help-you-burn-fat/',
    destination: '/en/'
  },
  {
    source:
      '/collaboration-with-the-american-college-of-healthcare-executives/',
    destination: '/en/'
  },
  {
    source: '/concluding-kidney-disease-awareness-event/',
    destination: '/en/'
  },
  {
    source:
      '/cpr-is-a-real-lifesaver-an-11-month-old-baby-drowned-in-his-bathtub/',
    destination: '/en/'
  },
  {
    source: '/do-you-know-what-to-do-to-save-a-heart/',
    destination: '/en/'
  },
  {
    source:
      '/dreadful-car-accident-moved-a-young-mans-bowel-to-pressure-his-heart/',
    destination: '/en/'
  },
  {
    source: '/early-detection-of-breast-cancer-saves-mariams-life/',
    destination: '/en/'
  },
  {
    source: '/educational-lecture/',
    destination: '/en/'
  },
  {
    source:
      '/eyeglasses-will-miraculously-correct-your-childs-vision-true-or-false/',
    destination: '/en/'
  },
  {
    source: '/guinness-world-record/',
    destination: '/en/'
  },
  {
    source: '/guinness-world-records/',
    destination: '/en/'
  },
  {
    source: '/hand-washing-can/',
    destination: '/en/'
  },
  {
    source: '/heart-microsurgery/',
    destination: '/en/'
  },
  {
    source: '/hemodialysis-center/',
    destination: '/en/'
  },
  {
    source: '/honoring-ceremony/',
    destination: '/en/'
  },
  {
    source: '/honors-hussein-hweikm/',
    destination: '/en/'
  },
  {
    source:
      '/in-the-time-of-corona-what-should-you-do-to-maintain-your-childs-mental-and-emotional-health-development/',
    destination: '/en/'
  },
  {
    source: '/infection-prevention/',
    destination: '/en/'
  },
  {
    source: '/innovation-award/',
    destination: '/en/'
  },
  {
    source:
      '/inspirational-stories-in-celebration-of-world-social-work-day-2018/',
    destination: '/en/'
  },
  {
    source:
      '/intravitreal-injections-a-quantum-leap-in-diabetic-retinopathy-treatment/',
    destination: '/en/'
  },
  {
    source: '/is-it-safe-to-go-to-the-gym/',
    destination: '/en/'
  },
  {
    source: '/jci-accreditation/',
    destination: '/en/'
  },
  {
    source: '/karkayan-night/',
    destination: '/en/'
  },
  {
    source:
      '/khalids-journey-with-coronavirus-what-to-expect-and-what-to-watch-out/',
    destination: '/en/'
  },
  {
    source: '/laparoscopic-surgery-to-treat-ovarian-torsion-for-a-6-year-girl/',
    destination: '/en/'
  },
  {
    source: '/laser-treatment-of-hemorrhoids/',
    destination: '/en/'
  },
  {
    source: '/lets-learn-initiative/',
    destination: '/en/'
  },
  {
    source: '/life-support-atls/',
    destination: '/en/'
  },
  {
    source: '/lunch-with-the-ceo/',
    destination: '/en/'
  },
  {
    source: '/minister-of-health/',
    destination: '/en/'
  },
  {
    source: '/mohammed-salahs/',
    destination: '/en/'
  },
  {
    source: '/musicians-sydnrome-when-arms-or-legs-fall-asleep/',
    destination: '/en/'
  },
  {
    source: '/national-nurses-week/',
    destination: '/en/'
  },
  {
    source: '/nuts-endangered-a-babys-life/',
    destination: '/en/'
  },
  {
    source: '/off-pump-cabg-surgery/',
    destination: '/en/'
  },
  {
    source: '/patients-with-tumors/',
    destination: '/en/'
  },
  {
    source: '/permanent-pacemaker-insertion/',
    destination: '/en/'
  },
  {
    source: '/physiotherapy-team/',
    destination: '/en/'
  },
  {
    source: '/planetree-designation-workshop/',
    destination: '/en/'
  },
  {
    source: '/planetree/',
    destination: '/en/'
  },
  {
    source: '/pulmonary-diseases-and-sleep-disorders/',
    destination: '/en/'
  },
  {
    source: '/rehabilitation/',
    destination: '/en/'
  },
  {
    source: '/removing-tumor-from-head-the-pancreas/',
    destination: '/en/'
  },
  {
    source: '/reversed-heart-arteries/',
    destination: '/en/'
  },
  {
    source: '/rottinger-approach/',
    destination: '/en/'
  },
  {
    source: '/saves-60-year-old/',
    destination: '/en/'
  },
  {
    source: '/sedra-project/',
    destination: '/en/'
  },
  {
    source: '/simulation-training/',
    destination: '/en/'
  },
  {
    source:
      '/smoking-is-silent-killer-a-50-year-old-smoker-ends-up-living-with-half-a-lung/',
    destination: '/en/'
  },
  {
    source:
      '/staying-away-from-stress-and-psychological-pressures-key-messages-celebrating-world-health-day-2018-2/',
    destination: '/en/'
  },
  {
    source:
      '/staying-away-from-stress-and-psychological-pressures-key-messages-celebrating-world-health-day-2018/',
    destination: '/en/'
  },
  {
    source: '/successful-external-disaster/',
    destination: '/en/'
  },
  {
    source: '/successful-interventional/',
    destination: '/en/'
  },
  {
    source:
      '/successful-surgery-ends-the-suffering-of-a-child-with-deep-cystic-brain-stem-mass/',
    destination: '/en/'
  },
  {
    source: '/successful-surgery-for-a-6-day-old-baby/',
    destination: '/en/'
  },
  {
    source: '/the-american-college-accreditation/',
    destination: '/en/'
  },
  {
    source: '/treatment-of-a-child-with-paralysis/',
    destination: '/en/'
  },
  {
    source: '/u-s-consul-general-visits-almoosa-specialist-hospital/',
    destination: '/en/'
  },
  {
    source: '/uchicago-medicine/',
    destination: '/en/'
  },
  {
    source: '/what-happens-when-heart-rhythm-is-disturbed/',
    destination: '/en/'
  },
  {
    source: '/workshops-for-neurosurgeons/',
    destination: '/en/'
  },
  {
    source: '/world-diabetes-day/',
    destination: '/en/'
  },
  {
    source: '/world-hand-hygiene-day/',
    destination: '/en/'
  },
  {
    source: '/world-mental-health-day/',
    destination: '/en/'
  },
  {
    source: '/world-physical-therapy-day/',
    destination: '/en/'
  },
  {
    source: '/your-voice-matters/',
    destination: '/en/'
  },
  {
    source: '/virtual-tour/',
    destination: '/virtual-tour/'
  }
];

/* redirect permanent map status 308*/
const redLinksPermanent =
  links_permanent.length > 0 &&
  links_permanent.map(link => {
    if (link.source.includes('/ar/')) {
      return {
        ...link,
        locale: false,
        permanent: true
      };
    } else {
      return {
        ...link,
        permanent: true
      };
    }
  });

/* redirect temporary map status 307*/
const redLinksTemporary =
  links_temporary.length > 0 &&
  links_temporary.map(link => {
    if (link.source.includes('/ar/')) {
      return {
        ...link,
        locale: false,
        permanent: false
      };
    } else {
      return {
        ...link,
        permanent: false
      };
    }
  });

const redLinks = [...redLinksPermanent, ...redLinksTemporary];

module.exports = {
  minify: true,
  compress: true,
  trailingSlash: true,
  i18n,
  // i18n: nextI18next.config({
  //   localeDetection: false,
  //   defaultLocale: 'ar',
  //   locales: ['ar', 'en']
  // }),
  async redirects() {
    return redLinks;
  },
  images: {
    domains: ['159.65.230.116']
  },
  // rewrites: async () => nextI18NextRewrites(localeSubpaths),
  // publicRuntimeConfig: {
  //   localeSubpaths
  // },
  webpack: config => {
    config.resolve.alias['root'] = path.join(__dirname);
    config.resolve.alias['src'] = path.join(__dirname);
    // config.resolve.alias['public'] = path.join(__dirname, 'public');
    config.plugins.push(
      // other plugins,
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    );
    config.plugins.push(withBundleAnalyzer);
    config.plugins.push(optimizedImages);
    return config;
  }
};
