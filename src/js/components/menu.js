let menuBtn = document.querySelector('.burger');
let header = document.querySelector('.header');
let openBtnAria = 'Открыть меню';
let closeBtnAria = 'Закрыть меню';

if (menuBtn && header) {
  let toggleMenu = () => {
    header.classList.toggle('header--open-menu');
    document.body.classList.toggle('scroll-lock');
    menuBtn.classList.toggle('burger--active');
  };

  let toggleAria = () => {
    let menuBtnLabel = menuBtn.getAttribute('aria-label');

    if (menuBtnLabel == 'Открыть меню') {
      menuBtn.setAttribute('aria-label', closeBtnAria);
    }

    if (menuBtnLabel == 'Закрыть меню') {
      menuBtn.setAttribute('aria-label', openBtnAria);
    }
  };

  menuBtn.addEventListener('click', () => {
    toggleAria();
    toggleMenu();
  });
}
