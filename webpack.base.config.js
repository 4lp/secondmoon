var path = require("path")
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = {
  context: __dirname,

  entry: {
    // Add as many entry points as you have container-react-components here
    App: './App',
    vendors: ['react'],
  },

  output: {
      path: path.resolve('./bundles/'),
      // path: ('/bundles'),
      // filename: "[name]-[hash].js"
      filename: "bundle.js"
  },

  externals: [
  ], // add all vendor libs

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlWebpackPlugin({
      template: 'index.ejs'
    }),
    new ScriptExtHtmlWebpackPlugin({
       sync: [/js\//],
       defaultAttribute: 'defer'
    })
  ], // add all common plugins here

  module: {
    loaders: [] // add all common loaders here
  },

  node: {
    fs: "empty"
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
