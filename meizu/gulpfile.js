var gulp = require("gulp");
const uglify = require("gulp-uglify");
// const gulp_minify = require("gulp-minify-css");

const gulp_imagemin = require("gulp-imagemin");

// const gulp_minify = require("gulp-minify-html");

gulp.task("gulp_uglify", function () {
  console.log("这是压缩");
  gulp.src("js/**/*").pipe(uglify()).pipe(gulp.dest("E:/dext"));
  x;
});

// gulp.task("gulp_minify", function () {
//     gulp.src("css/**/*").pipe(gulp_minify()).pipe(gulp.dest("E:/dext"));
// });

gulp.task("gulp_imgmin", function () {
  gulp
    .src("img-shopping/**/*")
    .pipe(gulp_imagemin())
    .pipe(gulp.dest("E:/dext/img-shopping"));
});

// gulp.task("gulp_minify", function () {
//     gulp.src("html/**/*").pipe(gulp_minify()).pipe(gulp.dest("E:/dext"));
// });

// var babel = require("gulp-babel");
// gulp.task("_es", function () {
//   gulp
//     .src("js/**/*")
//     .pipe(babel({ presets: ["es2015"] }))
//     .pipe(gulp.dest("E:/dext"));
// });
