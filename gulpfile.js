var gulp    = require('gulp'),
    notify  = require('gulp-notify'),
    phpspec = require('gulp-phpspec');

gulp.task('phpspec', function() {
	var options = {notify: true};
	gulp.src('spec/**/*.php')
    	.pipe(phpspec('./bin/phpspec run', options))
    	.on('error', notify.onError({
        	title: "Testing Failed",
        	message: "Error(s) occurred during test..."
    	}))
    	.pipe(notify({
        	title: "Testing Passed",
        	message: "All tests have passed..."
    	}));
});
gulp.task('default', ['phpspec']);