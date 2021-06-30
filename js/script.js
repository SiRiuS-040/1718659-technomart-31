// Слайдер

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
   showSlides(slideIndex += 1);
}

function previousSlide() {
   showSlides(slideIndex -= 1);
}

function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("features-slide");
   let dots = document.getElementsByClassName("slider-selector__button");

   if (n > slides.length) {
      slideIndex = 1
   }
   if (n < 1) {
      slideIndex = slides.length
   }

   for (let slide of slides) {
      slide.style.display = "none";
   }

   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slider-selector__button--current", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " slider-selector__button--current";
}

// Слайдер - Сервисы

let serviceIndex = 1;
showServices(serviceIndex);

function currentService(n) {
   showServices(serviceIndex = n);
}

function showServices(n) {
   let i;
   let services = document.getElementsByClassName("service");
   let servicesSelect = document.getElementsByClassName("services-controls__button");

   if (n > services.length) {
      serviceIndex = 1
   }
   if (n < 1) {
      serviceIndex = services.length
   }

   for (let service of services) {
      service.style.display = "none";
   }

   for (i = 0; i < servicesSelect.length; i++) {
      servicesSelect[i].className = servicesSelect[i].className.replace(" active-button", "");
   }
   services[serviceIndex - 1].style.display = "block";
   servicesSelect[serviceIndex - 1].className += " active-button";
}

// FORM

const formLink = document.querySelector(".about__link--form");
const formPopup = document.querySelector(".modal-form");
const formClose = formPopup.querySelector(".modal__close");

formLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   formPopup.classList.add("modal__show");
});

formClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   formPopup.classList.remove("modal__show");
});

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


