require('dotenv').config();
const path = require('path');
const dotenv = require('dotenv-webpack');

console.log(process.env.NODE_ENV);
module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: 'raw-loader',
  //   });
  //   return config;
  // },
  env: {
    static_forms_key: process.env.STATIC_FORMS_KEY,
  },

  // exportTrailingSlash: true,

  // exportPathMap: async function () {
  //   console.log('exportPathMap');
  //   const paths = {
  //     '/': { page: '/' },
  //   };
  //   return paths;
  // },

  assetPrefix: process.env.GITHUB_PAGES ? '/propinqua' : '',

  publicRuntimeConfig: {
    basePath: process.env.GITHUB_PAGES ? '/propinqua' : '',
  },
};
