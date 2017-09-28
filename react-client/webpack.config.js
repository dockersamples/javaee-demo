const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'app-client.js'),
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      // test: path.join(__dirname, 'src'),
      test: /\.jsx?$/,
      use:
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: 'babel_cache',
            presets: ['react', 'es2015']
          }
        }   
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env' : {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_HOST: JSON.stringify(process.env.API_HOST || "localhost:8080")
      }
    })
  ]
};
