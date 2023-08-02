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

 function setMenActiveCategory() {
    $("#women").removeClass("active-sub");
    $("#men").addClass("active-sub");
    $("#kid").removeClass("active-sub");
  
    $("#clothes").attr("src", "images/men_c.jpg");
    $("#footwear").attr("src", "images/men_f.jpg");
    $("#accessories").attr("src", "images/men_a.jpg");
  
    $("#sub-clothes").attr("href", "./product-list.html?category=men_clothes");
    $("#sub-footwear").attr("href", "./product-list.html?category=men_footwear");
    $("#sub-accessories").attr("href", "./product-list.html?category=men_accessories");

    $("#category-image").attr("src", "images/boy.jpg");
  }
  
  function setKidActiveCategory() {
    $("#women").removeClass("active-sub");
    $("#men").removeClass("active-sub");
    $("#kid").addClass("active-sub");
  
    $("#clothes").attr("src", "images/kid_c.jpg");
    $("#footwear").attr("src", "images/kid_f.jpg");
    $("#accessories").attr("src", "images/kid_a.png");
  
    $("#sub-clothes").attr("href", "./product-list.html?category=kid_clothes");
    $("#sub-footwear").attr("href", "./product-list.html?category=kid_footwear");
    $("#sub-accessories").attr("href", "./product-list.html?category=kid_accessories");

    $("#category-image").attr("src", "images/kid.jpg");
  }

  function userIconOnHover() {
    $("#user-icon").css("filter", "brightness(1.3)");
    $("#content-wrapper").css("filter", "brightness(0.5)");
  }
  
  function userIconOnLeave() {
    $("#user-icon").css("filter", "brightness(1)");
    $("#content-wrapper").css("filter", "brightness(1.0)");
  }
  
  function cartIconOnHover() {
    $("#cart-icon").css("filter", "brightness(1.5)");
  }
  
  function cartIconOnLeave() {
    $("#cart-icon").css("filter", "brightness(1)");
  }
  
  function loginBtnOnHover() {
    $("#login-btn").css("filter", "brightness(1.2)");
  }
  
  function loginBtnOnLeave() {
    $("#login-btn").css("filter", "brightness(1)");
  }

  $(document).ready(function() {
    expandSearch();
  
    $("#myaccount").hover(userIconOnHover, userIconOnLeave);
    $("#myaccount-modal").hover(userIconOnHover, userIconOnLeave);
  
    $("#cart-wrapper").hover(cartIconOnHover, cartIconOnLeave);
  
    $("#login-btn").hover(loginBtnOnHover, loginBtnOnLeave);
  
    $("#women").mouseover(setWomenActiveCategory);
    $("#men").mouseover(setMenActiveCategory);
    $("#kid").mouseover(setKidActiveCategory);
  
    $("#search-input").blur(expandSearch);
    $("#search").click(expandSearch);
    $("#products, #products-modal").hover(hideBackground, unhideBackground);

    $(".search-bar").submit(function( event ) {
      const keyword = $("#search-input").first().val();
      window.location.href = "product-search.html?search=" + keyword;
      event.preventDefault();
    });
  });
