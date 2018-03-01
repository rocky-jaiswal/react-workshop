const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/public/index.html'),
  inject: 'body'
})

module.exports = {
  watch: true,
  devServer: {
    historyApiFallback: true
  },
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['env', { targets: { browsers: ['last 2 versions'] } }],
            'react'
          ]
        }
      }
    ]
  },
  plugins: [htmlPlugin]
}
