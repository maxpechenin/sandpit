module.exports = {
  entry: './Suggest/js_react/app.js',
  output: {
    path: './Suggest/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    contentBase: 'Suggest\\',
    proxy: {
      '/search*': {
        target: 'http://40.127.88.96/search',
        secure: false
      }
    }
  }   
}
