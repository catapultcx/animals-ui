const nodemon = require('gulp-nodemon');

function monapp(next) {
    nodemon({
        script: "./src/bin/www"
        , ext: 'js html'
        , env: {'NODE_ENV': 'local'}
        , done: next
    })
}

exports.nodemon = monapp;