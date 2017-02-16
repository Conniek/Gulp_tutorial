var gulp    = require('gulp'),
    uglify  = require('gulp-uglify')
    sass    = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber'),
    livereload = require ('gulp-livereload'),
    prefix     = require ('gulp-autoprefixer');

// Scripts task
// Uglifies
gulp.task('scripts', function() {
  gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

// Styles task
// Uglifies
gulp.task('styles', function() {
  return sass ('scss/main.scss', {
    style: 'expanded'
  })
  .on('error', console.error.bind(console))
  .pipe(prefix('last 2 versions'))
  .pipe(gulp.dest('css/'))
  .pipe(livereload());
});

//watch task
//watches JS
gulp.task('watch', function() {
  livereload.listen();
  var server = livereload();

  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('scss/main.scss', ['styles', 'reload']);
});


gulp.task('reload', function() {
  gulp.src('scss/main.scss').pipe(livereload());
});


livereload.changed('scss/main.scss');
livereload({ start: true });


gulp.task('default', ['scripts', 'styles', 'watch']);
