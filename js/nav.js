var expandWidth = false;

var expandSearch = function () {
  if (expandWidth) {
    $("#search-input").addClass("expand").focus();
  } else {
    if ($("#search-input")){
      $("#search-input").removeClass("expand");
    }    
  }
  expandWidth = !expandWidth;
};

var showModal = function () {
  $("#myaccount-modal").css("display", "flex");
};

var hideModal = function () {
  $("#myaccount-modal").css("display", "none");
};

function hideBackground() {
  $("#content-wrapper").css("filter", "brightness(0.5)");
}

function unhideBackground() {
  $("#content-wrapper").css("filter", "brightness(1.0)");
}

function setWomenActiveCategory() {
    $("#women").addClass("active-sub");
    $("#men").removeClass("active-sub");
    $("#kid").removeClass("active-sub");
  
    $("#clothes").attr("src", "images/women_c.jpg");
    $("#footwear").attr("src", "images/women_f.jpg");
    $("#accessories").attr("src", "images/women_a.jpg");

    $("#sub-clothes").attr("href", "./product-list.html?category=women_clothes");
    $("#sub-footwear").attr("href", "./product-list.html?category=women_footwear");
    $("#sub-accessories").attr("href", "./product-list.html?category=women_accessories");
  
    $("#category-image").attr("src", "images/girl.png");
  }
