// 1. MUSIC PROGRESS FUNCTION
function updateProgress(slider) {
  // A. Update the Visual Line (CSS Variable)
  let val = slider.value;
  slider.style.setProperty("--progress", val + "%");

  // B. Update the Time Text
  const totalSeconds = 213; // Song is 3:33
  const currentSeconds = Math.floor((val / 100) * totalSeconds);

  const minutes = Math.floor(currentSeconds / 60);
  const seconds = currentSeconds % 60;

  // Format time (e.g., "0:05")
  const formattedTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

  // Find the span and update it
  document.getElementById("currTime").innerText = formattedTime;
}

// 2. VOLUME FUNCTION
function updateVolume(slider) {
  // Only updates the visual line
  let val = slider.value;
  slider.style.setProperty("--progress", val + "%");
}

// 3. INITIALIZE ON LOAD
document.addEventListener("DOMContentLoaded", () => {
  // Set initial state for music bar
  const musicSlider = document.querySelector(".progress-bar");
  if (musicSlider) updateProgress(musicSlider);

  // Set initial state for volume bar
  const volSlider = document.querySelector(".volume-bar-range");
  if (volSlider) updateVolume(volSlider);
});
