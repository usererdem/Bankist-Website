'use strict';
///////////////////////////////////////
//////////// Elements
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// Mobile Navigation
const navLink = document.querySelector('.nav__links');
const navLogo = document.querySelector('.nav__logo');

const navButton = document.querySelector('.navigation__button');
const checkbox = document.getElementById('navi-toggle');

// Scrolling Animation
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
//////////// Functions
// Modal window
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

///////////////////////////////////////
//////////// Event Listeners
// Modal window
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Mobile Navigation
if (window.innerWidth <= 900) {
  navLink.classList.add('pointer-event');
  navLogo.classList.add('pointer-event');
}
navButton.addEventListener('click', function () {
  navLink.classList.toggle('pointer-event');
  navLogo.classList.toggle('pointer-event');
});

navLink.addEventListener('click', function() {
  navLink.classList.toggle('pointer-event');
  navLogo.classList.toggle('pointer-event');
})

navLogo.addEventListener('click', function() {
  navLink.classList.toggle('pointer-event');
  navLogo.classList.toggle('pointer-event');
})

navLink.addEventListener('click', function () {
  checkbox.checked = !checkbox.checked;
});
navLogo.addEventListener('click', function () {
  checkbox.checked = !checkbox.checked;
});

// Scrolling Animation
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
});
