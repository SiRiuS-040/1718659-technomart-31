// Auth

const loginLink = document.querySelector(".auth__button--login");
const loginField = document.querySelector(".auth__field--login");
const userField = document.querySelector(".auth__field--user");

const logoutLink = document.querySelector(".auth__button--logout");


loginLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   loginField.classList.add("auth__field--disabled");
   userField.classList.remove("auth__field--disabled");
});


logoutLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   userField.classList.add("auth__field--disabled");
   loginField.classList.remove("auth__field--disabled");
});

