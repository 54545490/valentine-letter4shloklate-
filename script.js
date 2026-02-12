// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const music = document.getElementById("bg-music");

const quizContainer = document.getElementById("quiz-container");
const submitQuiz = document.getElementById("submit-quiz");
const quizFeedback = document.getElementById("quiz-feedback");
const finalPage = document.getElementById("final-page");

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

// YES click → show quiz
yesBtn.addEventListener("click", () => {
  letter.style.display = "none";
  quizContainer.style.display = "block";
});

// Quiz submission
submitQuiz.addEventListener("click", () => {
  const q1 = document.getElementById("q1").value.trim();
  const q2 = document.getElementById("q2").value.trim().toLowerCase();
  const q3 = document.getElementById("q3").value.trim().toLowerCase();

  // ✅ Check answers
  if (q1 === "roses" && q2 === "butterflies" && q3 === "valentine") {
    quizFeedback.style.display = "none";
    quizContainer.style.display = "none";
    finalPage.style.display = "block";

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
  } else {
    quizFeedback.textContent = "Oops! Try again 💔";
    quizFeedback.style.display = "block";
  }
});
