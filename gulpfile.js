const gulp = require("gulp");
const scss = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

gulp.task("scss-compile", () => {
    return gulp.src("./scss/style.scss")
        .pipe(sourcemaps.init())
        .pipe(scss({
            outputStyle: "compressed"
        }).on("ERROR..", scss.logError))
        .pipe(rename({ "suffix": '.min' }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./css/"));
});

gulp.task("watch", function () {
    gulp.watch("./scss/**/*.scss", gulp.series("scss-compile"));
});