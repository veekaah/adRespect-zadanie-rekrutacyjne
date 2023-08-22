const dropdownItems = document.querySelectorAll(".hover-dropdown");
dropdownItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) {
      item.querySelector(".dropdown-menu").classList.add("show");
    }
  });
  item.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768) {
      item.querySelector(".dropdown-menu").classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = new bootstrap.Carousel(
    document.getElementById("carouselExampleControls")
  );
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  prevButton.addEventListener("click", () => {
    carousel.prev();
  });
  nextButton.addEventListener("click", () => {
    carousel.next();
  });
});

var elem = document.querySelector("#masonry-container");
var msnry = new Masonry(elem, {
  itemSelector: ".masonry-item",
  gutter: 25,
  percentPosition: true,
});

function openPopup(imageSrc, altText) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");

  const image = document.createElement("img");
  image.classList.add("popup-image");
  image.src = imageSrc;
  image.alt = altText;

  popupContent.appendChild(image);
  overlay.appendChild(popupContent);

  document.body.appendChild(overlay);

  overlay.style.display = "flex";

  overlay.addEventListener("click", closePopup);
}

function closePopup(event) {
  if (event.target.classList.contains("overlay")) {
    event.target.remove();
  }
}

function removeGradient() {
  const gradientOverlay = document.querySelector(".gradient");
  const removeBtn = document.querySelector(".remove-gradient");

  gradientOverlay.classList.add("remove-after");
  removeBtn.style.display = "none";
}
