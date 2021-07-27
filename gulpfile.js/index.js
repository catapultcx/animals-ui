const {series} = require('gulp');
const {clean} = require('./clean');
const {copy} = require('./copy');
const {sass} = require('./sass');

exports.build = series(clean, copy, sass);
exports.default = series(clean, copy, sass);
