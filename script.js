// ticker pause
const ticker = document.querySelector(".scroll-text");

if (ticker) {
  ticker.addEventListener("mouseenter", () => {
    ticker.style.animationPlayState = "paused";
  });

  ticker.addEventListener("mouseleave", () => {
    ticker.style.animationPlayState = "running";
  });
}// Fade animation
const elements = document.querySelectorAll('.post-card, .sidebar, .center');

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "0.6s";
});

function reveal() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

// Pause ticker
const ticker = document.querySelector(".scroll-content");

if (ticker) {
  ticker.addEventListener("mouseenter", () => {
    ticker.style.animationPlayState = "paused";
  });

  ticker.addEventListener("mouseleave", () => {
    ticker.style.animationPlayState = "running";
  });
}
