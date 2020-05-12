const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    a: path.resolve(__dirname, "src/a.js"),
    b: path.resolve(__dirname, "src/b.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[name].js",
    publicPath: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}