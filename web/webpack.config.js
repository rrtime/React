var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var config = require('./web.config.js')
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  devtool: 'source-map',
  entry: [
      // 'webpack-dev-server/client?http://localhost:8080',
      // 'webpack/hot/only-dev-server',
       './src/index.js'
  ],
  output: {
    path: __dirname + '/dist/tplus/dist/',
    publicPath: config.RootPath+'/dist/',
    filename: '[name].bundle.js',
    chunkFilename:'[name].chunk.js'
  },
  module: {
    loaders: [{
      test: /\.js|\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        plugins: ['transform-runtime', 'transform-decorators-legacy', 'antd'],
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.less$/, 
      loader: 'style!css?importLoaders=1!autoprefixer!less'
    },{
      test: /\.(jpg|png|svg)$/,
      exclude: /node_modules/,
      loader: "url-loader?limit=8192"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
     alias: {
            "ag-grid-root" : __dirname + "/node_modules/ag-grid"
        }
  },
devServer: {
    contentBase: './dist/',
    hot: true,
      proxy: {
      '/tplus/ajaxpro/*': 'http://127.0.0.1:8081/'  ,
      '/tplus/CheckCode.aspx': 'http://127.0.0.1:8081/',
      '/tplus/BAPView/*': 'http://127.0.0.1:8081/' ,
      '/tplus/UserFiles/*':'http://127.0.0.1:8081/' ,
      '/tplus/js/*':'http://127.0.0.1:8081/' ,
      '/tplus/App_Themes/*':'http://127.0.0.1:8081/',
      '/tplus/CommonPage/*':'http://127.0.0.1:8081/',
      '/tplus/UFControls/*':'http://127.0.0.1:8081/',
      '/tplus/v/*':'http://127.0.0.1:8081/',
      '/tplus/app/*':'http://127.0.0.1:8081/'
    }
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('shared', 'shared.bundle.js'),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
     new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
    })
  ],

  postcss: function () {
    return [autoprefixer];
  },

};
/*
devServer: {
    contentBase: './dist/',
    hot: true,
    proxy: {
      '/tplus/ajaxpro/*': 'http://127.0.0.1/'  ,
      '/tplus/CheckCode.aspx': 'http://127.0.0.1/'
    }
  },
 


    new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
    })
 */