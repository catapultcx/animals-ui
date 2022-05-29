const del = require('del')

function clean () {
  return del(['./public/*', '.port.tmp'])
}

exports.clean = clean
