const externals = require('@fta/dev-tools/config/externals');

module.exports = {
  output: {
    filename: '[name].js',
  },
  //study externals: https://webpack.docschina.org/configuration/externals/
  externals: externals
};