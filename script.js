const audio = new Audio("Scene1.mp3");
const buzz = new Audio("buzzcut.mp3");
audio.loop = true;
audio.volume = 0.1;

// Access the sound button by ID
const soundButton = document.getElementById("sound-button");

// Access the play and mute icons by ID
const playIcon = document.getElementById("sound-icon-play");
const muteIcon = document.getElementById("sound-icon-mute");

function toggleSound() {
  if (audio.paused) {
    audio.play();
    playIcon.style.display = "flex";
    muteIcon.style.display = "none";
  } else {
    audio.pause();
    playIcon.style.display = "none";
    muteIcon.style.display = "flex";
  }
}

window.addEventListener('scroll', function() {
    var image = document.querySelector('#image-container img');
    var scrollPosition = window.scrollY;
    var blurValue = Math.min(55 - scrollPosition / 100); // with min calculation  HERE! var blurValue = Math.min(30 - scrollPosition / 100, 30);
    var audioVolume = Math.min(scrollPosition / 5000, 1); // with min calculation

    image.style.filter = 'blur(' + blurValue + 'px)';
    audio.volume = audioVolume; //0.1 + audioVolume
});
  

  AOS.init();