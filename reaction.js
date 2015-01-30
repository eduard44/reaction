'use strict';

var browserify = require('browserify'),
    transform = require('vinyl-transform'),
    through = require('through'),
    reactTools = require('react-tools');

/**
 * Reaction
 *
 * A simple Gulp helper that combines Browserify and React Tools
 *
 * @param {Object} options - Options to be passed to the React
 * transform
 *
 * @returns {Function} -
 */
var reaction = function (options) {
    return transform(function(filename) {
        var b = browserify(filename);

        b.transform(function () {
            var data = '';

            function write (buffer) {
                data += buffer;
            }

            function end () {
                this.queue(reactTools.transform(data, options));

                this.queue(null);
            }

            return through(write, end);
        });

        return b.bundle();
    });
};

module.exports = reaction;
