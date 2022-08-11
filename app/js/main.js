"use strict";

var accordionBtns = document.querySelectorAll('.accordion__btn');
var currentActive;

var toggleAccordionState = function toggleAccordionState(accordionBtns) {
  accordionBtns.classList.toggle('active');
  accordionBtns.parentNode.classList.toggle('accordion__item--active');
};

if (accordionBtns) {
  var _loop = function _loop(i) {
    var firstElem = accordionBtns[0];

    accordionBtns[i].onclick = function () {
      if (firstElem.classList.contains('active') || !currentActive) {
        firstElem.classList.remove('active');
        firstElem.parentNode.classList.remove('accordion__item--active');
      }

      if (currentActive) {
        toggleAccordionState(currentActive);

        if (firstElem.classList.contains('active') || !currentActive) {
          firstElem.classList.remove('active');
          firstElem.parentNode.classList.remove('accordion__item--active');
        }
      }

      toggleAccordionState(this);
      currentActive = this;
    };
  };

  for (var i = 0; i < accordionBtns.length; i++) {
    _loop(i);
  }
}

;
"use strict";

var menuBtn = document.querySelector('.burger');
var header = document.querySelector('.header');
var openBtnAria = 'Открыть меню';
var closeBtnAria = 'Закрыть меню';

if (menuBtn && header) {
  var toggleMenu = function toggleMenu() {
    header.classList.toggle('header--open-menu');
    document.body.classList.toggle('scroll-lock');
    menuBtn.classList.toggle('burger--active');
  };

  var toggleAria = function toggleAria() {
    var menuBtnLabel = menuBtn.getAttribute('aria-label');

    if (menuBtnLabel == 'Открыть меню') {
      menuBtn.setAttribute('aria-label', closeBtnAria);
    }

    if (menuBtnLabel == 'Закрыть меню') {
      menuBtn.setAttribute('aria-label', openBtnAria);
    }
  };

  menuBtn.addEventListener('click', function () {
    toggleAria();
    toggleMenu();
  });
}
"use strict";

var element = document.querySelector('.select-country');
var choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ''
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
