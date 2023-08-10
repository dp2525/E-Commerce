var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

var productId = getUrlParameter("productId");

getProductById(productId).then(function (product) {
  document.title = product.name + " - SHOPLINE";
  jQuery("#product-name").text(product.name);
  jQuery("#product-description").html(product.description);
  jQuery("#product-price").text("$" + product.price);
  jQuery("#product-quantity").text(product.quantity);
  // var productShortDesc = product.description.replace('<p>','').replace('</p>','').replace('<div>','').replace('</div>','').substring(0,150) + "...";
  jQuery("#product-short-desc").html(product.description);
  var strHover = "";
  var strThumb = "";
  product.images.forEach((element) => {
    strHover +=
      '<div class="single-slide zoom-image-hover" > <img class="img-responsive" src="' +
      element +
      '" alt=""> </div>';
    strThumb +=
      '<div class="single-slide"><img class="img-responsive" src="' +
      element +
      '" alt=""></div>';
  });
  jQuery("#product-images-hover").html(strHover);
  jQuery("#product-images-thumb").html(strThumb);

  var strRating = "";
  for (let i = 0; i < product.rating; i++) {
    strRating += '<i class="ecicon eci-star fill"></i>';
  }
  for (let i = 0; i < 5 - product.rating; i++) {
    strRating += '<i class="ecicon eci-star-o"></i>';
  }
  jQuery("#product-rating").html(strRating);

  var visitor = getRandomInt(20, 50);
  jQuery("#product-visitor").text(visitor);

  /*----------------------------- single product Slider  ------------------------------ */
  jQuery(".single-product-cover").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: ".single-nav-thumb",
  });

  jQuery(".single-nav-thumb").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".single-product-cover",
    dots: false,
    arrows: true,
    focusOnSelect: true,
  });
  /*----------------------------- Product Image Zoom --------------------------------*/
  jQuery(".zoom-image-hover").zoom();
  /*----------------------------- single product countdowntimer  ------------------------------ */
  jQuery("#ec-single-countdown").countdowntimer({
    startDate: "2023/03/01 00:00:00",
    dateAndTime: "2023/05/01 00:00:00",
    labelsFormat: true,
    displayFormat: "DHMS",
  });

  /*----------------------------- Qty Plus Minus Button  ------------------------------ */
  var QtyPlusMinus = jQuery(".qty-plus-minus");
  QtyPlusMinus.prepend('<div class="dec ec_qtybtn">-</div>');
  QtyPlusMinus.append('<div class="inc ec_qtybtn">+</div>');

  jQuery("body").on("click", ".ec_qtybtn", function () {
    // jQuery(".ec_qtybtn").on("click", function() {
    var $qtybutton = jQuery(this);
    var QtyoldValue = $qtybutton.parent().find("input").val();
    if ($qtybutton.text() === "+") {
      var QtynewVal = parseFloat(QtyoldValue) + 1;
    } else {
      if (QtyoldValue > 1) {
        var QtynewVal = parseFloat(QtyoldValue) - 1;
      } else {
        QtynewVal = 1;
      }
    }
    $qtybutton.parent().find("input").val(QtynewVal);
  });
});

jQuery(document).ready(function () {});

function addToCart(){
  var userId = 1;
  var item = {};
  item.id = productId;
  item.name = jQuery('#product-name').text();
  item.price = jQuery('#product-price').text().substring(1);
  item.quantity = Number(jQuery('#product-quantity-selected').val());
  item.image = "images/products/" + productId + "_1.jpg";
  addItemToCart(item);
}

/*------------------------------------------select size--------------------------------------------------**/

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);