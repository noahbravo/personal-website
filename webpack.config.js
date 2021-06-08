const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    home: './src/index.pug',
    app: './src/js/app.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true
  },

  optimization: {
    minimizer: [new TerserJSPlugin(), new CssMinimizerPlugin()]
  },

  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      },

      {
        test: /\.pug$/,
        type: 'asset/source',
        use: [
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
          }
        ]
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.svg|eot|ttf|woff|woff2$/,
        type: 'asset/inline'
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: './images/[name][ext]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter',
      template: './src/index.pug',
      minify: false
    }),
    new MiniCssExtractPlugin({
      filename: './css/style.css',
      chunkFilename: '[id].css'
    }),
    new CopyPlugin({
      patterns: [{ from: './src/fonts', to: 'fonts' }]
    })
  ]
}

if (process.env.NODE_ENV === 'development') {
  module.exports.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:9000/',
        files: [
          {
            match: ['**/*.pug']
          }
        ]
      },
      {
        reload: false
      }
    )
  )
}
