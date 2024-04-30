import path from 'node:path';
import videoExtensions from 'video-extensions';

const extensions = new Set(videoExtensions);

export default function isVideo(filePath) {
	return extensions.has(path.extname(filePath).slice(1).toLowerCase());
}
