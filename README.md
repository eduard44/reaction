# reaction

A simple wrapper of Browserify and React for gulp.js

## Changes:

### 0.2.0: Switch to Babelify

- Instead of using react-tools, reaction now uses babelify. The options object
now passes configuration to babelify.

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
            experimental: true,
            playground: true,
            comments: false
        }))
        .pipe(uglify()) // Optional
        .pipe(gulp.dest('./public/js'));
});
```

## API

### reaction(options: Object): Object

Returns a vinyl-transform that will process JS/JSX files using
Browserify and React's transform. Any options are esentially just
passed down to Babel, so you can enable things like experimental language
features or generate a source map. See https://babeljs.io/docs/usage/options/
for more information.
