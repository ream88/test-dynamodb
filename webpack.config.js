var webpack = require("webpack");

module.exports = {
  entry: ["babel-polyfill", "./index.js"],
  output: {
    path: __dirname + "/bundle",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
      { test: /\.json$/, loader: "json" }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.ACCESS_KEY_ID": JSON.stringify(process.env.ACCESS_KEY_ID),
      "process.env.SECRET_ACCESS_KEY": JSON.stringify(process.env.SECRET_ACCESS_KEY)
    })
  ]
}
