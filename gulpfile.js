require('./gulp/gulp-pack.js');
// require('./gulp/gulp-dist.js');

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(cb) {
    //temp hack - running tasks twice to ensure files already in place for zipping. We should find a better solution...
    runSequence(
    'pack',
    // 'dist',
    // 'pack',
    // 'dist',
    function() {
        cb();
    }
    );
});
