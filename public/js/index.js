//hanburger btn- menu
const navbar = document.querySelector('[data-nav-ul]');
const hamburgerBtn = document.querySelector('[data-menu-hamburger]');

hamburgerBtn.addEventListener('click', () => {
  //take the value of the attribute that is applied
  const visibility = navbar.getAttribute('data-visible');
  //change it to the opposite one
  if (visibility === 'false') {
    navbar.setAttribute('data-visible', 'true');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  } else {
    navbar.setAttribute('data-visible', 'false');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
});

// Slider - carousel
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  navigation: {
    nextEl: '#swiper-button-next-unique',
    prevEl: '#swiper-button-prev-unique',
    observer: true,
    observeParents: true,
    parallax: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1.35,
      spaceBetween: 10,
    },
    750: {
      slidesPerView: 2.25,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 3.25,
      spaceBetween: 10,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

//Random image for the hero section
const imageElement = document.querySelector('.final__img');
const heroBtn = document.querySelector('.hero__btn');
const images = [
  'assets/images/tetris_green.png',
  'assets/images/tetris_yellow.png',
  'assets/images/tetris_blue.png',
  'assets/images/tetris_orange.png',
  'assets/images/tetris_red.png',
  'assets/images/tetris_purple.png',
  'assets/images/tetris_brown.png',
];

const colors = [
  'var(--color-tetris-green)',
  'var(--color-tetris-yellow)',
  'var(--color-tetris-blue)',
  'var(--color-tetris-orange)',
  'var(--color-tetris-red)',
  'var(--color-tetris-purple)',
  'var(--color-tetris-brown)',
];

const pickRandomImage = (array) => {
  const index = Math.floor(array.length * Math.random());
  imageElement.setAttribute('src', images[index]);
  heroBtn.style.backgroundColor = colors[index];
};

pickRandomImage(images);

// IntersectionObserver for elements that slide-in on scroll
const slidingItems = document.querySelectorAll('[data-slide-on-scroll]');
const slideOptions = {
  threshold: 0,
  rootMargin: '0px 0px -55% 0px',
};

const slideOnScroll = new IntersectionObserver(function (
  entries,
  slideOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('slide');
      slideOnScroll.unobserve(entry.target);
    }
  });
},
slideOptions);

slidingItems.forEach((slidingItem) => {
  slideOnScroll.observe(slidingItem);
});

// Functionality for back-to-top arrow
const backToTop = document.querySelector('.back-to-top');
backToTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
