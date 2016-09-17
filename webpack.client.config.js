const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const hjsConfig = require('hjs-webpack');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist/public');

var config = hjsConfig({
  devtool: 'source-map',
  hostname: 'localhost',
  in: './src/app.js',
  out: './dist/public',
  clearBeforeBuild: true,
  devServer: {
    hot: false,
    port: 4242
  },
  html: function (context) {
    return {
      'index.html': context.defaultTemplate({
        // Add Google Fonts and FA to on the fly generated HTML
        // You can add like this intoi the head tag below VVVVVV
        // <link href="https://fonts.googleapis.com/css?family=Open+Sans|Crimson+Text" rel="stylesheet" type="text/css"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        head:'<link href="https://fonts.googleapis.com/css?family=Bree+Serif|Patua+One|Open+Sans" rel="stylesheet">',
        title: 'Movie Mystic',
        metaTags: {
          'name': 'Movie Mystic',
          'description': 'Predict if movies will be a commerical success.'
        }
      })
    }
  }
})

// CSS modules
const cssModulesNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`;

const matchCssLoaders = /(^|!)(css-loader)($|!)/;

const findLoader = (loaders, match) => {
  const found = loaders.filter(l => l && l.loader && l.loader.match(match))
  return found ? found[0] : null;
}

// existing css loader
const cssloader =
  findLoader(config.module.loaders, matchCssLoaders);

const newloader = Object.assign({}, cssloader, {
  test: /\.module\.css$/,
  include: [src],
  loader: cssloader.loader.replace(matchCssLoaders, `$1$2?modules&localIdentName=${cssModulesNames}$3`)
})
config.module.loaders.push(newloader);
cssloader.test = new RegExp(`[^module]${cssloader.test.source}`)
cssloader.loader = newloader.loader

config.module.loaders.push({
  test: /\.css$/,
  include: [modules],
  loader: 'style!css'
})
// CSS modules

// postcss
config.postcss = [].concat([
  require('precss')({}),
  require('autoprefixer')({}),
  require('cssnano')({})
])
// END postcss

// Roots
config.resolve.root = [src, modules]
config.resolve.alias = {
  'css': join(src, 'styles'),
  'containers': join(src, 'containers'),
  'components': join(src, 'components'),
  'utils': join(src, 'utils'),

  'styles': join(src, 'styles')
}
// end Roots

module.exports = config;
