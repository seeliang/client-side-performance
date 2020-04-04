const express = require('express');
const path = require('path');
var expressStaticGzip = require("express-static-gzip");

const pathTo = {
  static: path.join(__dirname, 'dist/performance'),
};
const web = express();


console.log(pathTo);

web.use('/', expressStaticGzip(pathTo.static, {
  enableBrotli: true,
  customCompressions: [{
      encodingName: 'deflate',
      fileExtension: 'zz'
  }],
  orderPreference: ['br']
}));


web.listen(8000, () => console.log('start at port localhost:8000'));
