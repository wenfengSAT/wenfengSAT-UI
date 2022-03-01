const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// npm i -D webpack webpack-cli webpack-dev-server babel @babel/core babel-loader clean-webpack-plugin html-webpack-plugin style-loader css-loader
function resolvePath(url) {
  return path.resolve(__dirname, url);
}
module.exports = {
  entry: './index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: resolvePath('dist'),
  },
  mode: 'development',
  devServer: {
    port: 8099,
  },
  resolve: {
    alias: {
      '@': resolvePath('src'),
    },
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};