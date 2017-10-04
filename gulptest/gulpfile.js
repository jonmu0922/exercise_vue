var gulp = require('gulp'),                 // 載入 gulp
    babel = require('gulp-babel');          // 載入 babel

gulp.task('script', function () {
    gulp.src('src/*.js')            // 指定要處理的原始 JavaScript 檔案目錄
        .pipe(babel({               // babel
            presets: ['es2015']
        }))                                     
        .pipe(gulp.dest('dest'));  // 指定最小化後的 JavaScript 檔案目錄
});
    
