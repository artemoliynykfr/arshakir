document.addEventListener("DOMContentLoaded", () => {
  // gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-98E6VTVE2Z");
  // page loader
  document.body.classList.add("loaded");
});
// header burger menu
const burger = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".nav");
const contact = document.querySelector(".contact");
const body = document.querySelector("body");
const header = document.querySelector(".navbar");
burger.addEventListener("click", () => {
  if (!menu.classList.contains("active")) {
    menu.classList.add("active");
    burger.classList.add("active");
    contact.classList.add("active");
    header.classList.add("active");
    body.classList.add("locked");
  } else {
    menu.classList.remove("active");
    burger.classList.remove("active");
    contact.classList.remove("active");
    header.classList.remove("active");
    body.classList.remove("locked");
  }
});
// business__swiper
new Swiper(".business__swiper > .swiper-container", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 5000,
  spaceBetween: 46,
  slidesPerView: 6,
  breakpoints: {
    1200: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 4,
    },
    480: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 2,
    },
  },
});
// testimonial__swiper
new Swiper(".testimonial__swiper > .swiper-container", {
  direction: "horizontal",
  loop: !0,
  initialSlide: 0,
  speed: 1500,
  slidesPerView: 3.2,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3.2,
    },
    480: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  keyboard: {
    enabled: !0,
    onlyInViewport: !1,
  },
});
// page animations
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
const displayScrollElement = (element) => {
  element.classList.add("animate__animated");
};
const hideScrollElement = (element) => {
  element.classList.remove("animate__animated");
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
document.addEventListener("DOMContentLoaded", () => {
  handleScrollAnimation();
});
