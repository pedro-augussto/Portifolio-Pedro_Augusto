const carousel = document.querySelector(".carousel");
const projects = document.querySelectorAll(".project");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + projects.length) % projects.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % projects.length;
  updateCarousel();
});
