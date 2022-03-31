var tag = document.createElement("script");

tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("ytplayer", {
    playerVars: {
			'autoplay': 1,
			'showinfo': 0,
			'autohide': 1,
			'loop': 0,
			'controls': 0,
			'modestbranding': 1,
			'vq': 'hd1080'
		},
      events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady() {
  player.playVideo();
  // Mute Sound Function!
  player.mute();
  setTimeout(endOfVideo,.90000);
}

function endOfVideo() {
    var myElement = document.querySelector(".videooverlay");
    myElement.style.opacity = "1";
    (function fade(){(myElement.style.opacity-=.1)<0?myElement.style.display="none":setTimeout(fade,40)})();
}