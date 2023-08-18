/* function getUrlParameter that takes a parameter name as input, searches for that parameter in the URL's query string, 
and returns its value if found. If the parameter is not found, it returns false.*/ 

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1), //extracts the query string from the current URL, excluding the leading ? character.
    sURLVariables = sPageURL.split("?"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("="); // splits the current URL segment into an array containing the parameter name and its value.

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined //if parameter is not provided return true, otherwise decodes the url encoded value and return it 
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};


$(document).ready(function () {
    
  const productList = $('#product-list'); // select the element with product-list
  var searchKeyword = getUrlParameter("search"); // get the search keyword from the url parameter

  //filter products based on the search keyword
  var searchProducts = products.filter(value => value.name.toLowerCase().includes(searchKeyword.toLowerCase()) || value.category.toLowerCase().includes(searchKeyword.toLowerCase()) || value.subcategory.toLowerCase().includes(searchKeyword.toLowerCase()) || value.description.toLowerCase().includes(searchKeyword.toLowerCase()) );
  
  //display number of serch results
  $(".search-result").text(searchProducts.length + " Search results for " + searchKeyword);
  
  searchProducts.forEach((product) => {
    
    // Create a div for the product card
    const productCard = $('<div class="product-card"></div>');

    // Create a div for the product details
    const productLinkStart = $('<a>');
    productLinkStart.attr('href', "product-detail.html?productId="+ product.id)

    // Create an image element for the product image
    const productImage = $('<img>');
    productImage.attr('src', product.images[0]);
    productImage.attr('alt', product.name);
    productImage.attr('height', '200');
    productImage.attr('width', '200');
    productImage.addClass('product-image');

    // Create a div for the product details
    const productDetails = $('<div class="product-details"></div>');

    // Create a p element for the product price
    const productPrice = $('<p class="product-price"></p>');
    productPrice.text(`$${product.price}`);

    // Create an h2 element for the product name
    const productName = $('<p class="product-name"></p>');
    const name = product.name.split(' ')
    const brand_name = $('<b>'+name[0]+'</b>');
    const product_name = $('<span>'+ name.slice(1).join(" ") +'</span>'); 
    productName.append(brand_name);
    productName.append(product_name);

    // Create a div for the product rating
    const productRating = $('<div class="product-rating"></div>');

    // const productRatingTextContainer = $('<div class="product-rating-text"></div>');
    // Create a span element for the product rating value
    const productRatingValue = $('<span class="product-rating-value"></span>');
    const filledStars = product.rating;
    productRatingValue.text(filledStars);

    // Create filled stars
    for (let j = 0; j < filledStars; j++) {
      const star = $('<i>').addClass('ecicon eci-star fill');
      productRating.append(star);
    }

    // Calculate number of empty stars
    const emptyStars = 5 - filledStars;

    // Create empty stars
    for (let j = 0; j < emptyStars; j++) {
      const star = $('<i>').addClass('ecicon eci-star-o');
      productRating.append(star);
    }

    // Create a span element for the maximum product rating
    const productRatingMax = $('<span class="product-rating-max"></span>');
    productRatingMax.text('/5');

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
  }

  )
});
