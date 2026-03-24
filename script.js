// Hover animation for cards
document.querySelectorAll(".card, .hero-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.03)";
    card.style.transition = "0.3s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Click effect (small press animation)
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    link.style.opacity = "0.7";
  });
});
