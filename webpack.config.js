const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['@babel/polyfill', './src/client/index.tsx'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    })
  ]
}