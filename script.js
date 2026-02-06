const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const mainContent = document.getElementById("mainContent");
const typingText = document.getElementById("typingText");
const music = document.getElementById("bg-music");

const message =
  "This rose is for someone very special 🌹💖\nMay your life always bloom with love, happiness, and smiles.";

let index = 0;

function typeEffect() {
  if (index < message.length) {
    typingText.innerHTML += message[index] === "\n" ? "<br>" : message[index];
    index++;
    setTimeout(typeEffect, 50);
  }
}

startBtn.addEventListener("click", () => {
  // Hide start
  startScreen.style.display = "none";
  mainContent.classList.remove("hidden");

  // Safe music play (NO CRASH)
  try {
    music.volume = 0.6;
    music.play().catch(() => {
      console.log("Music autoplay blocked, continuing without music");
    });
  } catch (e) {
    console.log("Music not found");
  }

  // Start typing
  typeEffect();
});