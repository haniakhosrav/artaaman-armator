/* -------------------------------------------------------------------------- */
/*                                  PRELOADER                                 */
/* -------------------------------------------------------------------------- */
window.onload = function(){ document.querySelector(".preloader").style.display = "none"; }


/* -------------------------------------------------------------------------- */
/*                                AOS-ANIMATION                               */
/* -------------------------------------------------------------------------- */
AOS.init({
  // disable: "mobile",
  duration: 800,
  anchorPlacement: "center-bottom",
});

/* -------------------------------------------------------------------------- */
/*                                SMOOTH SCROLL                               */
/* -------------------------------------------------------------------------- */
// $(function () {
//   $(".nav-link").on("click", function (event) {
//     var $anchor = $(this);
//     $("html, body")
//       .stop()
//       .animate(
//         {
//           scrollTop: $($anchor.attr("href")).offset().top - 0,
//         },
//         1000
//       );
//     event.preventDefault();
//   });
// });

/* -------------------------------------------------------------------------- */
/*                                  OPENMENU                                  */
/* -------------------------------------------------------------------------- */
  var navbarItems = document.getElementById("myNavbar-contents");
  var icon = document.getElementsByClassName("iconify");
  navbarItems.style.display = "none";
function openNav() {

  if (navbarItems.style.display == "none") {
    navbarItems.style.display = "block";
    icon[0].style.color = "#FEBF50";
  } else {
    navbarItems.style.display = "none";
    icon[0].style.color = "#FFFFFF";
  }
}

