const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 5000,
  },
});

const burger = document.querySelector(".btn_one");
const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  navList.classList.toggle("nav-list");
  navbar.classList.toggle("navbar");
  navList.classList.toggle("nav-list-res");
  navbar.classList.toggle("navbar-res");
  // document.getElementsByClassName(".btn_one").style.display="block";
});
