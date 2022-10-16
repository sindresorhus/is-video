import test from 'ava';
import m from './index.js';

test('main', t => {
	t.true(m('unicorn.mp4'));
	t.true(m('unicorn.mkv'));
	t.true(m('unicorn.MKV'));
	t.false(m('unicorn.jpg'));
	t.false(m('unicorn.txt'));
	t.false(m('unicornzip'));
});
