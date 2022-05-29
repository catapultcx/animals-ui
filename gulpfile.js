import pkg from 'gulp';
import del from 'del'
import nodemon from 'gulp-nodemon'
import gulp_sass from 'gulp-sass'
import sass0 from 'sass'
import node_sass from 'node-sass'
const { dest, parallel, series, src, task } = pkg
const gsass = gulp_sass(sass0)
gsass.compiler = node_sass

function clean () {
  return del(['./public/*', '.port.tmp'])
}

function govUKSass () {
  return src('./public/sass/**/*.scss')
    .pipe(gsass({ includePaths: 'node_modules' }))
    .pipe(dest('./public/css'))
}

function copyAssets () {
  return src(['!src/public/sass{,/**/*}', 'src/public/**']).pipe(dest('public/'))
}

function monapp (next) {
  nodemon({
    script: './src/bin/www'
    , ext: 'js html'
    , env: { 'NODE_ENV': 'local' }
    , done: next
  })
}

task('nodemon', monapp)
task('clean', clean)
task('copy', parallel(copyAssets))
task('sass', parallel(govUKSass))
task('build', series('clean', 'copy', 'sass'))
task('default', series('clean', 'copy', 'sass'))
