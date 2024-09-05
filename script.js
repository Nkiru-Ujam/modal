"use strict";

const container = document.querySelector(".container");
const modalCont = document.querySelector(".modal-container");
const modalImage = document.querySelector("#modal-img");
const images = document.querySelectorAll("#card-img");
const closeBtn = document.querySelector("#times");
const prevBtn = document.querySelector(".left-arrow");
const nextBtn = document.querySelector(".right-arrow");
// console.log(modalCont, modalImage, images, closeBtn);
// console.log(prevBtn, nextBtn);

// images.forEach((image) => {
//   image.addEventListener("click", () => {
//     modalCont.classList.add("active");
//     modalCont.style.height = container.offsetHeight + "px";
//     modalImage.src = image.getAttribute("src");
//     console.log(image);
//   });
// });

let currentSlide = 0;
for (let i = 0; i < images.length; i++) {
  const image = images[i];
  //   console.log(currentSlide);
  image.addEventListener("click", () => {
    modalCont.classList.add("active");
    currentSlide = i;
    modalImage.src = images[currentSlide].getAttribute("src");
    // console.log(currentSlide);
  });
}

closeBtn.addEventListener("click", () => {
  modalCont.classList.remove("active");
});

modalCont.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-container")) {
    modalCont.classList.remove("active");
  }
  //   console.log(e.target.classList);
});

prevBtn.addEventListener("click", () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : images.length - 1;
  modalImage.src = images[currentSlide].getAttribute("src");
  //   console.log(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide = currentSlide < images.length - 1 ? currentSlide + 1 : 0;
  modalImage.src = images[currentSlide].getAttribute("src");
  //   console.log(currentSlide);
});
