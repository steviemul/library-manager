module.exports = {
  entry: './app/app.js',
  devtool: 'sourcemaps',
  cache: true,
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname,
    filename: '../src/main/resources/static/dist/app.js'
  }
};
