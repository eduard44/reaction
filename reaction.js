'use strict';

var browserify = require('browserify'),
    transform = require('vinyl-transform'),
    babelify = require('babelify');

/**
 * Reaction
 *
 * A simple Gulp helper that combines Browserify and Babelify
 *
 * @returns {Function} -
 */
var reaction = function (options) {
    return transform(function (filename) {
        var b = browserify(filename);

        b.transform(babelify.configure(options));

        return b.bundle();
    });
};

module.exports = reaction;
