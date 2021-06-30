// Goods in Cart

const buyLinks = document.querySelectorAll(".good-options__button--buy");
const buyPopup = document.querySelector(".modal-buy");
const buyClose = buyPopup.querySelector(".modal__close");

buyLinks.forEach(link => {
   link.addEventListener("click", function (evt) {
      evt.preventDefault();
      buyPopup.classList.add("modal__show");
   });
});

buyClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   buyPopup.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
      if (buyPopup.classList.contains("modal__show")) {
         evt.preventDefault();
         buyPopup.classList.remove("modal__show");
      }
   }
});
