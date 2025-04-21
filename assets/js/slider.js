const testiSlider = new Swiper(".testiSlider", {
  slidesPerView: 3,
  spaceBetween: 30,
  initialSlide: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    150: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const instaGallery = new Swiper(".instaGallery", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    150: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const swiperWrapper = document.querySelector(
    ".trustedSwiper .swiper-wrapper"
  );
  const slide = swiperWrapper.querySelector(".swiper-slide");

  if (slide) {
    for (let i = 0; i < 3; i++) {
      let clone = slide.cloneNode(true);
      swiperWrapper.appendChild(clone);
    }
  }

  const trustedSwiper = new Swiper(".trustedSwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 15000,
  });
});