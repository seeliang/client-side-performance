const express = require('express');
const path = require('path');

const pathTo = {
  static: path.join(__dirname, 'dist/performance'),
};
const web = express();

web.set('view engine', 'ejs');

console.log(pathTo);
web.use('/', express.static(pathTo.static));

web.listen(8000, () => console.log('start at port localhost:8000'));
