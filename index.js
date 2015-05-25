'use strict';
var path = require('path');
var videoExtensions = require('video-extensions');
var exts = Object.create(null);

videoExtensions.forEach(function (el) {
	exts[el] = true;
});

module.exports = function (filepath) {
	return path.extname(filepath).slice(1).toLowerCase() in exts;
};
