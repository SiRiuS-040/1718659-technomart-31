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

