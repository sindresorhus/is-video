'use strict';
var test = require('ava');
var isVideo = require('./');

test(function (t) {
	t.assert(isVideo('unicorn.mp4'));
	t.assert(isVideo('unicorn.mkv'));
	t.assert(isVideo('unicorn.MKV'));
	t.assert(!isVideo('unicorn.jpg'));
	t.assert(!isVideo('unicorn.txt'));
	t.assert(!isVideo('unicornzip'));
	t.end();
});
