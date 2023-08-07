let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = $(".mySlides");

  let dots = $(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.hide();
  dots.removeClass("active");
  slides.eq(slideIndex - 1).show();
  dots.eq(slideIndex - 1).addClass("active");
}

function enlargeWomenAnimation() {
  $("#w-image").css("width", "110%");
}

function reduceWomenAnimation() {
  $("#w-image").css("width", "100%");
}

function enlargeMenAnimation() {
  $("#m-image").css("width", "110%");
}

function reduceMenAnimation() {
  $("#m-image").css("width", "100%");
}

function enlargeKidAnimation() {
  $("#k-image").css("width", "110%");
}

function reduceKidAnimation() {
  $("#k-image").css("width", "100%");
}

function topRatedProducts() {
  var topProducts;
  const productList = $("#product-list");

  loadDetail().then(function (products) {
    topProducts = products.filter((value) => value.rating >= 4);

    $.each(topProducts.slice(0,5), function (index, product) {
      // Create a div for the product card
      const productCard = $('<div class="product-card"></div>');

      // Create a div for the product details
      const productLinkStart = $("<a>");
      productLinkStart.attr(
        "href",
        "product-detail.html?productId=" + product.id
      );

      // Create an image element for the product image
      const productImage = $("<img>");
      productImage.attr("src", product.images[0]);
      productImage.attr("alt", product.name);
      productImage.attr("height", "100");
      productImage.attr("width", "100");
      productImage.addClass("product-image");

      // Create a div for the product details
      const productDetails = $('<div class="product-details"></div>');

      // Create a p element for the product price
      const productPrice = $('<p class="product-price"></p>');
      productPrice.text(`$${product.price}`);

      // Create an h2 element for the product name
      const productName = $('<p class="product-name"></p>');
      const name = product.name.split(" ");
      const brand_name = $("<b>" + name[0] + "</b>");
      const product_name = $("<span>" + name.slice(1).join(" ") + "</span>");
      productName.append(brand_name);
      productName.append(product_name);

      // Create a div for the product rating
      const productRating = $('<div class="product-rating"></div>');

      // const productRatingTextContainer = $('<div class="product-rating-text"></div>');
      // Create a span element for the product rating value
      const productRatingValue = $(
        '<span class="product-rating-value"></span>'
      );
      const filledStars = product.rating;
      productRatingValue.text(filledStars);

      // Create filled stars
      for (let j = 0; j < filledStars; j++) {
        const star = $("<i>").addClass("ecicon eci-star fill");
        productRating.append(star);
      }

      // Calculate number of empty stars
      const emptyStars = 5 - filledStars;

      // Create empty stars
      for (let j = 0; j < emptyStars; j++) {
        const star = $("<i>").addClass("ecicon eci-star-o");
        productRating.append(star);
      }

      // Create a span element for the maximum product rating
      const productRatingMax = $('<span class="product-rating-max"></span>');
      productRatingMax.text("/5");

      // productRatingTextContainer.append(productRatingValue);
      // productRatingTextContainer.append(productRatingMax);

      // Add the rating value and maximum to the rating div
      productRating.append(productRatingValue);
      productRating.append(productRatingMax);

      // Add the product name, price, and rating to the product details
      productDetails.append(productName);
      productDetails.append(productPrice);
      productDetails.append(productRating);

      // Add the product image and details to the product card
      productCard.append(productImage);
      productCard.append(productDetails);

      productLinkStart.append(productCard);

      // Add the product card to the product list
      productList.append(productLinkStart);
    });
  });
}

$(document).ready(function () {
  showSlides();
  setInterval(function () {
    plusSlides(1);
  }, 2000);

  $("#w-image").on("mouseover", enlargeWomenAnimation);
  $("#w-image").on("mouseleave", reduceWomenAnimation);
  $("#m-image").on("mouseover", enlargeMenAnimation);
  $("#m-image").on("mouseleave", reduceMenAnimation);
  $("#k-image").on("mouseover", enlargeKidAnimation);
  $("#k-image").on("mouseleave", reduceKidAnimation);

  topRatedProducts();
});
