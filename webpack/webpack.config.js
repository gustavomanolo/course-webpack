const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "../src/js/home.js"),
    precios: path.resolve(__dirname, "../src/js/precios.js"),
    contacto: path.resolve(__dirname, "../src/js/contacto.js")
  },
  mode: "development", // production
  watch: true,
  devServer: {
    publicPath: "/assets/",
    compress: true,
    port: 9000
    // contentBase: path.join(__dirname, 'dist'),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "../dist/", // Fix to searh for "video .mp4 files"
    filename: "js/[name].js"
  },
  module: {
    rules: [
      // Rule to be able to include ".CSS"
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: "../"
            }
          },
          "css-loader"
        ]
      },
      // Rule to use "BabelJS"
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
          // options: {
          //   presets: ["@babel/preset-env", "@babel/preset-react"]
          // }
        }
      },
      // Rule to "include images" and other files
      {
        test: /\.(png|jpg|gif|woff|eot|ttf|svg|mp4)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 20192,
              name: "assets/[name].[hash].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    })
    // "@babel/plugin-proposal-object-rest-spread"
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'initial'
    }
  }
};
