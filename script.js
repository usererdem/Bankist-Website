'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
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

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Mobile Navigation
const navLink = document.querySelector('.nav__links');
const navLogo = document.querySelector('.nav__logo');

const navButton = document.querySelector('.navigation__button');
const checkbox = document.getElementById('navi-toggle');

navLink.addEventListener('click', function () {
  checkbox.checked = !checkbox.checked;
});
navLogo.addEventListener('click', function () {
  checkbox.checked = !checkbox.checked;
});
