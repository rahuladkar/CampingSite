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

// carousel

// JavaScript for the carousel section

function openCarousel(imageSrc, title, description) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  modalImage.src = imageSrc;
  modalTitle.textContent = title;
  modalDescription.textContent = description;

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

// Form validation

function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var mobNub = document.forms["myForm"]["mobNub"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  if (email == "") {
    alert("Email must be filled out");
    return false;
  } else {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email format");
      return false;
    }
  }

  if (mobNub != "") {
    var phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(mobNub)) {
      alert(
        "Invalid phone number format (10 digits starting with 6, 7, 8, or 9)"
      );
      return false;
    }
  }

  return true;
}
