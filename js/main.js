debugger;


$('.slider').bxSlider({
  auto: true
});


// let slideIndex = 1;
// showSlides();

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   // debugger;
//   let slides = $(".mySlides");

//   let dots = $(".dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   slides.hide();
//   dots.removeClass("active");
//   slides.eq(slideIndex - 1).show();
//   dots.eq(slideIndex - 1).addClass("active");
// }