const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: {
       app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ]
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
        template: './index.html'
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
      },
  };