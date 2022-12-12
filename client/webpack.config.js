const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  resolve:
  {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            "noEmit": false
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]']
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
          terserOptions: {
            compress: {},
          }
        }).apply(compiler);
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: './public/favicon.ico'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/index.html',
              '**/robots.txt',
            ]
          }
        },
      ],
    }),
    new Dotenv({
      path: `./.env`
    }),
    // new BundleAnalyzerPlugin(),
  ]
}