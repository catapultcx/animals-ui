/*
  copy.js
  ===========
  copies images and javascript folders to public
*/
const { parallel, src, dest } = require('gulp')

// https://babeljs.io/setup#installation

function copyAssets () {
  return src(['!src/public/sass{,/**/*}', 'src/public/**']).pipe(dest('public/'))
}

exports.copy = parallel(copyAssets)
