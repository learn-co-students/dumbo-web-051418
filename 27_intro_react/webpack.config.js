const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      }
    ]
  }
  // module: {
  //   loaders: [
  //     {
  //       test: /\.jsx?$/,
  //       exclude: /(node_modules|.cache)/,
  //       loader: 'babel',
  //       query: {
  //         presets: ['react', 'es2016'],
  //         plugins: ['syntax-decorators', 'transform-object-rest-spread']
  //       }
  //     }
  //   ]
  // }
};

module.exports = config;
