import path from 'node:path';
/// import videoExtensions from 'video-extensions' assert {type: 'json'};

// TODO: Inlined until we can import JSON.
const videoExtensions = [
	'3g2',
	'3gp',
	'aaf',
	'asf',
	'avchd',
	'avi',
	'drc',
	'flv',
	'm2v',
	'm3u8',
	'm4p',
	'm4v',
	'mkv',
	'mng',
	'mov',
	'mp2',
	'mp4',
	'mpe',
	'mpeg',
	'mpg',
	'mpv',
	'mxf',
	'nsv',
	'ogg',
	'ogv',
	'qt',
	'rm',
	'rmvb',
	'roq',
	'svi',
	'vob',
	'webm',
	'wmv',
	'yuv',
];

const extensions = new Set(videoExtensions);

export default function isVideo(filePath) {
	return extensions.has(path.extname(filePath).slice(1).toLowerCase());
}
