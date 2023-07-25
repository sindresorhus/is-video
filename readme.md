# is-video

> Check if a file path is a video file

It just checks the extension.

## Install

```sh
npm install is-video
```

## Usage

```js
import isVideo from 'is-video';

isVideo('src/unicorn.mp4');
//=> true

isVideo('src/unicorn.txt');
//=> false
```

## Related

- [video-extensions](https://github.com/sindresorhus/video-extensions) - List of video file extensions
