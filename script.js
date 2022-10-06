'use strict';
///////////////////////////////////////
//////////// Elements
//// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
//// Mobile Navigation - Sticky Navigation
const navLinks = document.querySelectorAll('.nav__link');
const navLinks1 = document.querySelector('.nav__links');
const navLogo = document.querySelector('.nav__logo');
const navLogoLink = document.querySelector('.nav__logo-link');
const nav = document.querySelector('.nav');

const navButton = document.querySelector('.navigation__button');
const checkbox = document.getElementById('navi-toggle');

const headerClass = document.querySelector('.header');
const navigation = document.querySelector('.navigation');

//// Scrolling Animation
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('#header');

//// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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
  navBtnTogglePointerEvents();

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

//// Tabbed component
// tabs.forEach(t => t.addEventListener('click', () => console.log('Tabl')));

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Active tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate content area
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Navigation Menu fade animation
// With Closure
function handleHover(x) {
  return function (e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      siblings.forEach(el => {
        if (el !== link) {
          el.style.opacity = x;
        }
      });
      logo.style.opacity = x;
    }
  };
}
nav.addEventListener('mouseover', handleHover(0.5));

nav.addEventListener('mouseout', handleHover(1));
// With bind method
/* function handleHover(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
}

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1)); */

/* // Sticky navigation
const initialCoords = section1.getBoundingClientRect();
const navigation = document.querySelector('.nav');

window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);

  window.scrollY > initialCoords.top
    ? navigation.classList.add('sticky')
    : navigation.classList.remove('sticky');
}); */

// Sticky navigation: Intersection Observer API

/* const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  })
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1); */

const navHeight = nav.getBoundingClientRect().height;
const navHeight2 = navigation.getBoundingClientRect().height;

function stickyNav(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight2 + 38}px`,
});
headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section');

function revealSection(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');

function loadImg(entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));
