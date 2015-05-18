'use strict';
var path = require('path');
var videoExtensions = require('video-extensions');
var exts = Object.create(null);

videoExtensions.forEach(function (el) {
	exts[el] = true;
});

module.exports = function (filepath) {
	var ext = path.extname(filepath).slice(1);

	if (ext === '') {
		return false;
	}

	return ext in exts;
};
