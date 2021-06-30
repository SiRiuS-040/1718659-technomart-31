// MAP

const mapLink = document.querySelector(".about__link--map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal__close");

mapLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   mapPopup.classList.add("modal__show");
});

mapClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   mapPopup.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal__show")) {
         evt.preventDefault();
         mapPopup.classList.remove("modal__show");
      }
   }
});