document.addEventListener('DOMContentLoaded', function () {
  /*-----------------------btn-showAll----------------------- */
  const showAllBtns = document.querySelectorAll(
    '.main__services--block_information--read_more'
  );

  showAllBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      const targetID = this.getAttribute('data-toggle');
      const targetWrapper = document.querySelector(
        `[data-wrapper="${targetID}"]`
      );

      if (targetWrapper) {
        const isExpanded = targetWrapper.classList.contains('expanded');
        const textElement = this.querySelector(
          '.main__services--block_information--read_more_text'
        );
        const iconElement = this.querySelector('img');

        if (isExpanded) {
          targetWrapper.classList.remove('expanded');
          textElement.textContent = 'Показать всё';
          iconElement.src = '/src/images/icons/expand.svg';
        } else {
          targetWrapper.classList.add('expanded');
          textElement.textContent = 'Скрыть';

          iconElement.src = 'src/images/icons/close.svg';
        }
      }
    });
  });

  /*------------------------------------------------------- */

  /*-----------------------Mobile_side_menu----------------------- */

  const main = document.querySelector('.main');

  function toggleMobileMenu() {
    if (window.innerWidth >= 1369) {
      return;
    }

    const mobileMenu = document.querySelector('.side_menuMobile');

    const header = document.querySelector('.header');

    mobileMenu.classList.toggle('open');
    main.classList.toggle('menu-overlay');
    header.classList.toggle('menu-overlay');
  }

  document
    .querySelector('.header__navigation--link-burger')
    .addEventListener('click', toggleMobileMenu);

  document
    .querySelector('.side_menuMobile__navigation--icon-cross')
    .addEventListener('click', toggleMobileMenu);

  document.addEventListener('keydown', function (event) {
    if (
      event.key === 'Escape' &&
      document.querySelector('.side_menuMobile').classList.contains('open')
    ) {
      toggleMobileMenu();
    }
  });

  document.querySelector('.main').addEventListener('click', function (event) {
    const isMenuOpen = document
      .querySelector('.side_menuMobile')
      .classList.contains('open');

    const isBurgerClick = event.target.closest(
      '.header__navigation--link-burger'
    );

    if (isMenuOpen && !isBurgerClick) {
      toggleMobileMenu();
    }
  });

  /*------------------------------------------------------------------- */

  /*----------------------------Slide_menu----------------------------- */

  const slideMenu = document.querySelector('.main__services--slide_menu');
  const buttons = slideMenu.querySelectorAll(
    '.main__services--slide_menu-button'
  );

  buttons[0]?.classList.add('main__services--slide_menu-button-active');

  slideMenu.addEventListener('click', function (event) {
    const clickeBtn = event.target.closest(
      '.main__services--slide_menu-button'
    );

    if (!clickeBtn) return;

    buttons.forEach((btn) =>
      btn.classList.remove('main__services--slide_menu-button-active')
    );
    clickeBtn.classList.add('main__services--slide_menu-button-active');
  });
});
