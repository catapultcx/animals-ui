'use strict';
const {parallel, src, dest} = require('gulp');
const gsass = require('gulp-sass');
gsass.compiler = require('node-sass');

function govUKSass() {
    return src('./public/sass/**/*.scss')
        .pipe(gsass({
            includePaths: 'node_modules'
        }))
        .pipe(dest('./public/css'));
}

exports.sass = parallel(govUKSass);