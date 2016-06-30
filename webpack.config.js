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
    contentBase: 'Suggest/',
    proxy: {
      '/search*': {
        target: {
          "host": "54.206.102.181",
          "protocol": 'http:',
          "port": 9200
        },
        secure: false,
        rewrite: function(req) {
          req.url = req.url.replace(/^\/search/, '');
        }
      }
    }
  }   
}
