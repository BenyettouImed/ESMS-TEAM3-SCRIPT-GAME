document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      accordionItems.forEach((accItem) => {
        accItem.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});
