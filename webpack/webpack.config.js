const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    filename: "js/[name].js"
  },
  module: {
    rules: [
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
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
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
  ]
};
