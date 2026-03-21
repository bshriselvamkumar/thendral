let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));

  index++;
  if (index >= slides.length) index = 0;

  slides[index].classList.add("active");
}

setInterval(showSlide, 3000);
