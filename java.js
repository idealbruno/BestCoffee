const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");

menuOpen.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuClose.addEventListener("click", () => menuOpen.click());


document.addEventListener("click", function (e) {
  const navMenu = document.querySelector(".nav-menu");
  if (
    document.body.classList.contains("show-mobile-menu") &&
    !navMenu.contains(e.target) &&
    e.target !== menuOpen &&
    e.target !== menuClose
  ) {
    document.body.classList.remove("show-mobile-menu");
  }
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamiBcBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: { 
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});