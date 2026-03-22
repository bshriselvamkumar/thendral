// 🔥 1. SMOOTH SCROLL ANIMATION (fade-in)
const elements = document.querySelectorAll('.post-card, .sidebar, .center');

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

// INITIAL STYLE
elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "0.6s";
});


// 🔥 2. AUTO NEWS TICKER PAUSE ON HOVER
const ticker = document.querySelector(".scroll-content");

if (ticker) {
  ticker.addEventListener("mouseenter", () => {
    ticker.style.animationPlayState = "paused";
  });

  ticker.addEventListener("mouseleave", () => {
    ticker.style.animationPlayState = "running";
  });
}


// 🔥 3. BUTTON CLICK EFFECT
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});


// 🔥 4. SIMPLE IMAGE ZOOM (LIKE NEWS SITES)
const images = document.querySelectorAll(".center img");

images.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "0.4s";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});
