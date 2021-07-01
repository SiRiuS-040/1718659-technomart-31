// FORM

const formLink = document.querySelector(".about__link--form");
const formPopup = document.querySelector(".modal-form");
const formClose = formPopup.querySelector(".modal__close");
const formForm = formPopup.querySelector(".form");
const formName = formPopup.querySelector(".form__input--name");
const formMail = formPopup.querySelector(".form__input--mail");
const formText = formPopup.querySelector(".form__input--textarea");


let isStorageSupport = true;
let storage1 = "";
let storage2 = "";

try {
   storage1 = localStorage.getItem("name");
} catch (err) {
   isStorageSupport = false;
}

try {
   storage2 = localStorage.getItem("mail");
} catch (err) {
   isStorageSupport = false;
}


formLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   formPopup.classList.add("modal__show");

   if (storage1) {
      formName.value = storage1;
      formMail.value = storage2;
      formText.focus();
   } else {
      formName.focus();
   }
});

formClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   formPopup.classList.remove("modal__show");
   formPopup.classList.remove("modal__error");
});

formForm.addEventListener("submit", function (evt) {
   if (!formName.value || !formMail.value || !formText.value) {
      evt.preventDefault();
      formPopup.classList.remove("modal__error");
      formPopup.offsetWidth = formPopup.offsetWidth;
      formPopup.classList.add("modal__error");
   } else {
      if (isStorageSupport) {
         localStorage.setItem("name", formName.value);
         localStorage.setItem("mail", formName.value);
      }
   }

});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
      if (formPopup.classList.contains("modal__show")) {
         evt.preventDefault();
         formPopup.classList.remove("modal__show");
         formPopup.classList.remove("modal__error");
      }
   }
});