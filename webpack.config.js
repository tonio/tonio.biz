const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/app/index.js')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        },
        exclude: [
          /node_modules/
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/public/index.html'),
      inject: 'body'
    }),
    new FriendlyErrorsWebpackPlugin()
  ],
  devServer: {
    contentBase: './src/public', // source of static assets
    port: 7700,
    quiet: true
  }
}
