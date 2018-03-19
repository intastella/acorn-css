var gulp = require('gulp');

gulp.task('css-clean', function() {
  var clean = require('gulp-clean');
  
  return gulp.src(['./dist/css/*'])
    .pipe(clean())
});

var compileSass = function() {
  var sass = require('gulp-sass');
    
  return gulp.src('./src/css/acorn.scss')
    .pipe(sass({
      includePaths: [ 'node_modules/' ],
      outputStyle: 'expanded',
      sourceMap: false,
      outFile: ''
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

gulp.task('sass', ['css-clean'], function () {
  return compileSass();
});

gulp.task('postcss', ['sass'], function () {
    var postcss = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');
    var focus = require('postcss-focus');
    var discardDuplicates = require('postcss-discard-duplicates');
  
    var plugins = [
        discardDuplicates,
        focus,
        autoprefixer({browsers: [
          'last 2 versions'
        ]})
    ];
    
    return gulp.src('./dist/css/*.css')
      .pipe(postcss(plugins, { map: false }))
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('css', [
  'css-clean',
  'sass', 
  'postcss'
]);

gulp.task('default', [
  'css'
]);