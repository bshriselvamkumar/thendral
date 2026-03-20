const slides = document.querySelectorAll('.slide');

window.addEventListener('scroll', () => {
  slides.forEach(slide => {
    const top = slide.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      slide.classList.add('active');
    }
  });
});
