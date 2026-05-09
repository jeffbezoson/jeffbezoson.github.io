const sound = new Audio('siam.mp3');

function playSound() {
  sound.currentTime = 0; // rewind to start
  sound.play();          // cuts off previous & replays
}

// Trigger on click, keypress, etc.
document.addEventListener('keydown', playSound);
