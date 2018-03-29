var webpackConfig = require('../webpack/webpack.config.js');
// var webpackMinConfig = require('../webpack/webpack-min.config.js');
var gulp = require('gulp');
var webpack = require('webpack');
var runSequence = require('run-sequence');

gulp.task('gulp-webpack', function(callback) {
    webpack(webpackConfig
    , function(err, stats) {
        if (err) {
            console.log('ERROR - ',err);
        } else {
            console.log('Stats - ',stats);
        }
        callback();
    });
});

gulp.task('pack', function(cb) {
    runSequence(
    'gulp-webpack',
    function() {
        cb();
    }
    );
});
