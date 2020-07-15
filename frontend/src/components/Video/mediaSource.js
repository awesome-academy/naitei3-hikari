// const videoTag = document.getElementById('videoTag');
// const mediaSource = new MediaSource();
// const url = URL.createObjectURL(mediaSource);
// videoTag.src = URL.createObjectURL(mediaSource);

// const videoSourceBuffer = myMediaSource
//   .addSourceBuffer('video/mp4; codecs="avc1.64001e"')
import flvjs from 'flv.js';
import sources from './videoSources.json';

const startup = (user, streamKey, cb) => {
  let attemptNum = 0;
  let timeout = null;

  const videoTag = document.getElementById('videoTag');
  if (flvjs.isSupported()) {
    var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${streamKey}.flv`
    });
    flvPlayer.attachMediaElement(videoTag);
    flvPlayer.load();
    flvPlayer.play();
}
};

export default startup;
