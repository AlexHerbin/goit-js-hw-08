import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');

function addCurrentTime({seconds}) {
    const CurrentTime = localStorage.setItem('videoplayer-current-time', seconds)
};

player.on('timeupdate', throttle(addCurrentTime, 1000));
player.setCurrentTime(currentTime);
