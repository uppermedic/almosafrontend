const path = require('path');
const webpack = require('webpack');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true
});
const optimizedImages = require('next-optimized-images');
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const localeSubpaths = {};

module.exports = {
  target: 'serverless',
  minify: true,
  compress: true,
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  },
  webpack: config => {
    config.resolve.alias['root'] = path.join(__dirname);
    config.resolve.alias['src'] = path.join(__dirname, 'src');
    config.resolve.alias['public'] = path.join(__dirname, 'public');
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
