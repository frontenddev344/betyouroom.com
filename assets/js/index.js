
// Menu Toggle Functionality JS Start

$(document).ready(function () {
  $(".menu-icon").click(function () {
    $("header").addClass("menuToggle");
  });
  $(".close-icon").click(function () {
    $("header").removeClass("menuToggle");
  });
});
// Menu Toggle Functionality JS End

// Slick Slider JS Start
$('.home-page-cards-wrapper').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay:true,
  dots:true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
       
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }     
  ]
});
// Slick Slider JS End


// Read More Functionality JS Start 
$('.subpage-readmore-btn').click(function (e) {
  e.preventDefault();
  // console.log('click');
  $(this).parent().prev().slideToggle('slow');
  // $('.subpage-exp-content').slideToggle('slow');
  $(this).text($(this).text() == 'Read Less' ? 'Read More' : 'Read Less');
});
// Read More Functionality JS End 





// //Cookies JS Start

function SetCookie(cookieName, cookieValue, nDays) {
  "use strict";
  var today = new Date();
  var expire = new Date();
  if (nDays == null || nDays == 0) nDays = 1;
  expire.setTime(today.getTime() + 3600000 * 24 * nDays);
  document.cookie =
    cookieName +
    "=" +
    escape(cookieValue) +
    ";expires=" +
    expire.toGMTString() +
    "; path=/";
}
function ReadCookie(cookieName) {
  "use strict";
  var theCookie = " " + document.cookie;
  var ind = theCookie.indexOf(" " + cookieName + "=");
  if (ind == -1) ind = theCookie.indexOf(";" + cookieName + "=");
  if (ind == -1 || cookieName == "") return "";
  var ind1 = theCookie.indexOf(";", ind + 1);
  if (ind1 == -1) ind1 = theCookie.length;
  return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
}
function DeleteCookie(cookieName) {
  "use strict";
  var today = new Date();
  var expire = new Date() - 30;
  expire.setTime(today.getTime() - 3600000 * 24 * 90);
  document.cookie =
    cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
}
function AcceptCookies() {
  SetCookie("sgCookies", true, 30);
  jQuery("#cookie-bar").hide();
}
$(document).ready(function (e) {
  var toTop = $(
    "<div id='cookie-bar'><div id='contentcookie'><p>   BetYouRoom is your premier hotel comparison site for the Czech Republic. To enhance your browsing experience and provide you with tailored services, we use cookies on our website. If you would like to know more information about Cookie Policy, please review our Privacy Policy there you will find a better explanation regarding our cookies.</p><button id='Cookie' tabindex=1 onclick='AcceptCookies();'>Accept </button><div class='clear'></div></div></div>"
  ).appendTo("body");
  if (!ReadCookie("sgCookies")) {
    //If the cookie has not been set
    jQuery("#cookie-bar").show();
  } else {
    jQuery("#cookie-bar").hide();
  }
});


// //Cookies JS Start
