/* eslint-disable */
import webpack from 'webpack';
import path from 'path';

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.API_HOST': JSON.stringify(process.env.API_HOST || 'http://api.d2.miraimarche.com')
  }),
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ja/)
];
if (process.env.NODE_ENV === 'production') {
  plugins = [
    ...plugins,
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ]
}

const getPlugins = () => {return plugins};

module.exports = {
  entry: {
    dist: './src/client/app/index.jsx',
  },
  output: {
    path: './',
    filename: '[name]/bundle.js',
    publicPath: '/'
  },
  plugins,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus!pleeease?resolve url'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader' },
      { test: /\.svg$/, loader: 'svg-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl', '.png', '.jpg']
  },
  stylus: {
    use: [require('nib')(), require('svg-stylus')()],
    import: ['~nib/lib/nib/index.styl']
  },
  pleeease: {
    autoprefixer: { browsers: ["last 4 versions", "ios 6"]},
    minifier: true,
    mqpacker: true
  },
  devServer: {
    contentBase: './dist',
    port: 8008
  },
};
