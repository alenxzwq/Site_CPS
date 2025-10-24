document.addEventListener('DOMContentLoaded', function () {
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
});
