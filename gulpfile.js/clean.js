const del = require('del');
const gulp = require('gulp');

function clean() {
    return del(['./public/*',
        '.port.tmp'])
}

exports.clean = clean;