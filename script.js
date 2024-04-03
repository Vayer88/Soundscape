const audio = new Audio("Scene1.mp3");
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

function changePage(direction) {
    const basePath = "/Sound_Project/";
    let currentPage = window.location.pathname.replace(basePath, "");
  
    if (currentPage === "") {
      // If on the base page
      if (direction === 1) {
        // Go to the first comic page
        window.location.href = basePath + "1";
      }
      // No action for direction -1 since there's no page before the base page
    } else {
      // On a numbered comic page
      let currentPageNumber = parseInt(currentPage, 10); // Convert the path to a number
      let newPageNumber = currentPageNumber + direction;
  
      if (newPageNumber === 0) {
        // Go back to the base page
        window.location.href = basePath;
      } else {
        // Go to the next or previous numbered page
        window.location.href = basePath + newPageNumber;
      }
    }
  }
  