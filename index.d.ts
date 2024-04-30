/**
Check if a file path is a video file.

@example
```
import isVideo from 'is-video';

isVideo('src/unicorn.mp4');
//=> true

isVideo('src/unicorn.txt');
//=> false
```
*/
export default function isVideo(filepath: string): boolean;
