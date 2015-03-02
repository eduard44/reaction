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
var reaction = function () {
    return transform(function(filename) {
        var b = browserify(filename);

        b.transform(babelify);

        return b.bundle();
    });
};

module.exports = reaction;
