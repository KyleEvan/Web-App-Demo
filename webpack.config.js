const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'app.bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
           fallback:'style-loader',
           use:[
             {
			       loader: 'css-loader',
			       options: {
				           modules: true,
				           localIdentName: '[name]__[local]___[hash:base64:5]'
			          }
             },
             {
               loader:'postcss-loader',
               options: {
                 plugins: function () {
                     return [autoprefixer]
                 }
               }
             }
           ],
           publicPath: "/dist"
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader:"babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  devServer:{
    stats:"errors-only",
    open:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      // minify: {
      //   collapseWhitespace: true
      // },
      hash: true,
      template: './src/index.html'
    }),
    new ExtractTextPlugin({
      filename: "global.bundle.css",
      disable: false,
      allChunks: true
    })
  ]
}
