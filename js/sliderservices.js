// Слайдер - Сервисы
const servicesControls = document.querySelectorAll(".services-controls__button");
const serviceBlocks = document.querySelectorAll(".services-content__item");

servicesControls.forEach((control) => {
   control.addEventListener('click', (event) => {
      const service = event.target.dataset['service'];
      const serviceCurrentblock = document.querySelector(`.services-content__item[data-service="${service}"]`);

      if (control.classList.contains('active-button')) {
         control.classList.remove('active-button');
         serviceCurrentblock.style.display = 'none';
      } else {
         servicesControls.forEach((c) => {
            c.classList.remove('active-button');
         });
         serviceBlocks.forEach((block) => {
            block.style.display = 'none';
         });

         control.classList.add('active-button');
         serviceCurrentblock.style.display = 'block';
      }
   });
});