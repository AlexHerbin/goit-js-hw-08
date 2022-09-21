import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let getCurrentTime = localStorage.getItem('videoplayer-current-time');
onRefresh();

player.on('timeupdate', throttle(addCurrentTime, 1000));


function addCurrentTime({seconds}) {
    let currentTime = localStorage.setItem('videoplayer-current-time', seconds)
   
};

function onRefresh() {
    if (getCurrentTime) {
        player.setCurrentTime(getCurrentTime);
    };
    return
};





