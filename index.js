import path from 'node:path';
import videoExtensions from 'video-extensions' assert { type: "json" };
const exts = Object.create(null);

videoExtensions.forEach(el => exts[el] = true);

const isVideo = filePath => path.extname(filePath).slice(1).toLowerCase() in exts;

export default isVideo;
