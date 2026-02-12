// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn"); // ✅ simplified selector

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const music = document.getElementById("bg-music"); // ✅ new

let musicStarted = false;

// Envelope click
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// NO button runaway
noBtn.addEventListener("mouseover", () => {
  const distance = 200;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES click
yesBtn.addEventListener("click", () => {
  // 🎵 Start music ONLY ONCE
  if (!musicStarted) {
    music.volume = 0;
    music.play().catch(err => console.log("Music blocked:", err));

    // Smooth fade-in
    let fade = setInterval(() => {
      if (music.volume < 0.8) {
        music.volume = Math.min(music.volume + 0.05, 0.8);
      } else {
        clearInterval(fade);
      }
    }, 200);

    musicStarted = true;
  }

  // 💖 Update letter content
  title.textContent = "Yippeeee!";
  catImg.src = "cat_dance.gif";
  document.querySelector(".letter-window").classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";
});
