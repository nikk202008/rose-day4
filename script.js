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
.rose-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.rose {
  position: absolute;
  top: -50px;
  font-size: 24px;
  animation: fall linear forwards;
  opacity: 0.8;
}

@keyframes fall {
  to {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}
