'use strict';
///////////////////////////////////////
//////////// Elements
//// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
//// Mobile Navigation
const navLinks = document.querySelectorAll('.nav__link');
const navLinks1 = document.querySelector('.nav__links');
const navLogo = document.querySelector('.nav__logo');
const navLogoLink = document.querySelector('.nav__logo-link');
const nav = document.querySelector('.nav');

const navButton = document.querySelector('.navigation__button');
const checkbox = document.getElementById('navi-toggle');

//// Scrolling Animation
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('#header');

///////////////////////////////////////
//////////// Functions
//// Modal window
const openModal = function (e) {
  e.preventDefault();
  if (window.innerWidth <= 900) {
    setTimeout(() => {
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    }, 750);
  } else {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

function navBtnTogglePointerEvents() {
  for (const link of navLinks) {
    link.classList.toggle('pointer-events');
  }
  navLogo.classList.toggle('pointer-events');
  nav.classList.toggle('pointer-events');
}

///////////////////////////////////////
//////////// Event Listeners
//// Modal window
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//// Mobile Navigation
// Adding pointer-event:none as default to all links and to logo in mobile
if (window.innerWidth <= 900) {
  navBtnTogglePointerEvents()

  // Toggling pointer-event between: (auto-none)
  navButton.addEventListener('click', navBtnTogglePointerEvents);
  // Selecting every single navLink for toggle pointer-event
  for (const link of navLinks) {
    link.addEventListener('click', navBtnTogglePointerEvents);
  }

  navLogo.addEventListener('click', navBtnTogglePointerEvents);
}
// Toggling checkbox For navigation functionality
// (Functionality created in CSS)
for (const link of navLinks) {
  link.addEventListener('click', function () {
    checkbox.checked = !checkbox.checked;
  });
}

navLogo.addEventListener('click', function () {
  checkbox.checked = !checkbox.checked;
});

//// Scrolling Animation
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });

  // If browser doesn't support, here is an old way to do it
  /* const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset,
  // );

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  }); */
});

//// Page navigation
// navLinks.forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   })
// })

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

navLinks1.addEventListener('click', function (e) {
  // Matching strategy
  if (e.target.classList.contains('nav__link--scroll')) {
    e.preventDefault();
    const id = e.target.getAttribute('id');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

navLogoLink.addEventListener('click', function (e) {
  header.scrollIntoView({ behavior: 'smooth' });
});
