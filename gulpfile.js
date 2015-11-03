var gulp = require('gulp'),
    jade = require('gulp-jade'),      //Компилятор JADE
    stylus = require('gulp-stylus'),  //Компилятор Stylus
    jeet = require('jeet'),           //Адапитвная сетка
    rupture = require('rupture'),     //Медиа запросы
    csso = require('gulp-csso'),      //Минификатор CSS
    uglify = require('gulp-uglify'),  //Компрессор JS
    concat = require('gulp-concat')   //Конкатенатор файлов
    livereload = require('gulp-livereload');

gulp.task('default', function() {
  console.log('Gulp runing');
  return gulp.src('public/css/screen.css')
        .pipe(csso())
        .pipe(gulp.dest('build/css'));

});

gulp.task('one', function () {
  gulp.src('assets/stylus/*.styl')
    .pipe(stylus({use:[jeet(),rupture()]}))
    .pipe(concat('screen.css'))
    .pipe(gulp.dest('public/css'));
});


gulp.task('compress', function() {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
    .pipe(gulp.dest('build/js'));
});

// Jade
gulp.task('jade', function(){
  gulp.src('assets/template/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('public'))
    .pipe(gulp.dest('build'))
});

// Watch
gulp.task('watch', function(){
 livereload.listen();	
 gulp.watch('assets/template/*.jade',['jade']).on('change', livereload.changed);
 gulp.watch('assets/stylus/*.styl',['one']).on('change', livereload.changed);
 gulp.watch('assets/js/*.js',['compress']).on('change', livereload.changed);
});

