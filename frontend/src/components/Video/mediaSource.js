import Hls from 'hls.js';
import sources from './videoSources.json';

const startup = (user, streamKey, cb, demo) => {
  let attemptNum = 0;
  let timeout = null;

  const videoTag = document.getElementById('videoTag');
  if (Hls.isSupported()) {
    let hls = new Hls({ enableWorker: false });
    hls.attachMedia(videoTag);
    hls.on(Hls.Events.MEDIA_ATTACHED, function() {
      //Add hls.loadSource her;
      const attempt = () => {
        hls.loadSource(`https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/Poker/index.m3u8`);
      };
      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        if (videoTag != undefined) {
          videoTag.play();
          cb(true);
        }
      });
      attempt();
    });
  }
};

export default startup;
