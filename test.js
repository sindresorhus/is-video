import test from 'ava';
import isVideo from './index.js';

test('main', t => {
	t.true(isVideo('unicorn.mp4'));
	t.true(isVideo('unicorn.mkv'));
	t.true(isVideo('unicorn.MKV'));
	t.false(isVideo('unicorn.jpg'));
	t.false(isVideo('unicorn.txt'));
	t.false(isVideo('unicornzip'));
});
