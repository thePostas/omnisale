var gulp = require('gulp'), 
    less = require('gulp-less'),
    del = require('del');

gulp.task('less', function(){
    return gulp.src('app/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'));
});

gulp.task('clean', function() {
   return del('dist'); 
});

gulp.task('watch', function(){
    gulp.watch('app/less/*.less', gulp.series('less'));
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src('app/css/*.css')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', function () {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('js', function () {
    return gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build', gulp.series('clean', 'less', 'html', 'css', 'images', 'fonts', 'js'), function() {
    
});