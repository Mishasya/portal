let accordionBtns = document.querySelectorAll('.accordion__btn');
let currentActive;
let toggleAccordionState = function(accordionBtns) {
  accordionBtns.classList.toggle('active');
  accordionBtns.parentNode.classList.toggle('accordion__item--active');
};

if (accordionBtns) {
  for (let i = 0; i < accordionBtns.length; i++) {
    let firstElem = accordionBtns[0];

    accordionBtns[i].onclick = function(){
      if (firstElem.classList.contains('active') || !currentActive) {
        firstElem.classList.remove('active');
        firstElem.parentNode.classList.remove('accordion__item--active');
      }

      if(currentActive) {
        toggleAccordionState(currentActive);

        if (firstElem.classList.contains('active') || !currentActive) {
          firstElem.classList.remove('active');
          firstElem.parentNode.classList.remove('accordion__item--active');
        }
      }

      toggleAccordionState(this);
      currentActive = this;
    };
  }
};

