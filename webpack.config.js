const path = require('path');

module.exports = {
  entry: [
    './src/rich-text-accordion/rte-accordion.js',
    './src/references-collector/references-collector.js',
    './src/toc-generator/toc-generator.js'
  ],
  output: {
    filename: 'webflow-helpers.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
