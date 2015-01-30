# reaction

A simple wrapper of Browserify and React for gulp.js

## Usage

First install it:

    npm install --save react-reaction

Then, create a gulp task using it:

```js
// ...
var reaction = require('react-reaction'),
    uglify = require('gulp-uglify'); 

// Process all JSX scripts
gulp.task('scripts', function () {
    return gulp
        .src(['./src/app.jsx'])
        .pipe(reaction({
            harmony: true,
            stripTypes: true
        }))
        .pipe(uglify()) // Optional
        .pipe(gulp.dest('./public/js'));
});
```

## API

### reaction(options: Object): Object

Returns a vinyl-transform that will process JS/JSX files using
Browserify and React's transform. Any options are esentially just
passed down to react-tools, so you can enable things like ES6 support
(`harmony: true`) or process Flow-typed files (`stripTypes: true`).
