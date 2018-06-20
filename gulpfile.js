<<<<<<< HEAD
var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var neat = require('bourbon-neat');
var plumber = require('gulp-plumber');

gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
=======
var gulp=require('gulp');
var watch=require('gulp-watch');
var concat=require('gulp-concat');
var sass=require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify=require('gulp-uglify');
var neat = require('bourbon-neat');
var plumber = require('gulp-plumber');

gulp.task('scripts',function(){
  gulp.src('js/*.js')
  .pipe(concat('script.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
>>>>>>> 84eaf528a04b49fb9f3b448ff23bb0d2be12d5ff
});

/*gulp.task('styles',function(){
  gulp.src('css/*.css')
  .pipe(concat('style.css'))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('watch',function(){
  gulp.watch('js/*.js',[]);
  console.log('opa');
});*/


/*gulp.task('sass',function(){
   gulp.src(['style/sass/main.scss'])
   .pipe(sourcemaps.init())
   .pipe(sass().on('error', sass.logError))
   .pipe(sass({outputStyle: 'compressed', includePaths: [bourbon, neat]}))
   .pipe(sourcemaps.write('.'))
   .pipe(gulp.dest('style/css/'))
});*/

<<<<<<< HEAD
gulp.task('sass', function () {
    gulp.src('style/sass/main.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: require('bourbon-neat').includePaths,
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('style/css'));
=======
gulp.task('sass',function(){
  gulp.src('style/sass/main.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass({
    includePaths:require('bourbon-neat').includePaths, outputStyle: 'compressed'
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('style/css'));
>>>>>>> 84eaf528a04b49fb9f3b448ff23bb0d2be12d5ff
});



<<<<<<< HEAD
gulp.task('watch', function () {
    gulp.watch(['style/sass/*.scss'], ['sass']);
});
=======
gulp.task('watch',function(){
  gulp.watch(['style/sass/*.scss'],['sass']);
});
>>>>>>> 84eaf528a04b49fb9f3b448ff23bb0d2be12d5ff
