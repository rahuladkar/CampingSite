function toggleAnswer(questionNumber) {
  const answer = document.getElementById(`answer${questionNumber}`);
  answer.style.display = answer.style.display === "none" ? "block" : "none";
}

// -------------- Gallery ----------------

const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

let slideIndex = 0;

prevBtn.addEventListener("click", () => {
  slideIndex =
    (slideIndex - 1 + carousel.children.length) % carousel.children.length;
  updateCarouselPosition();
});

nextBtn.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % carousel.children.length;
  updateCarouselPosition();
});

function updateCarouselPosition() {
  carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}
