/* -------------------------------------------------------------------------- */
/*                                AOS-ANIMATION                               */
/* -------------------------------------------------------------------------- */
AOS.init({
  disable: "mobile",
  duration: 800,
  anchorPlacement: "center-bottom",
});

/* -------------------------------------------------------------------------- */
/*                                SMOOTH SCROLL                               */
/* -------------------------------------------------------------------------- */
$(function () {
  $(".nav-link").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 0,
        },
        1000
      );
    event.preventDefault();
  });
});

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
/* -------------------------------------------------------------------------- */
/*                                   SWIPER                                   */
/* -------------------------------------------------------------------------- */

var swiper = new Swiper(".mySwiper", {
  loop: true,
  // spaceBetween: 10,
  slidesPerView: 8,
  freeMode: true,
  watchSlidesProgress: true,
  rtl: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

/* -------------------------------------------------------------------------- */
/*                            ACCORDIAN/ QUESTIOMS                            */
/* -------------------------------------------------------------------------- */

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("acordActive");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* -------------------------------------------------------------------------- */
/*                                NEWS-GALLERY                                */
/* -------------------------------------------------------------------------- */
$("#newsSlideShow").owlCarousel({
  rtl: true,
  loop: true,
  // center: true,
  autoplayHoverPause: true,
  autoplay: false,
  margin: 20,
  merge: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    900: {
      items: 3,
    },
  },
});


/* -------------------------------------------------------------------------- */
/*                                GALLERY-PAGE                                */
/* -------------------------------------------------------------------------- */


var lightboxDescription = GLightbox({
  selector: 'glightbox',
});


function call(id) {
  const items = Array.from(document.getElementsByClassName("filter"));
  items.map(function (item, index) {
    console.log(item);
    if (id === "all") {
      item.classList.remove('d-none');
      item.classList.add('fadeIn','glightbox');
      setTimeout(clean,500);
    } else {
      const check = items[index].classList.contains(id);
      console.log(check);

      if (check) {
        item.classList.remove('d-none');
        item.classList.add('fadeIn','glightbox');
      } else {
        item.classList.add('d-none');
        item.classList.remove('fadeIn','glightbox');
      }
    }
  })
}

function clean() {
  const items = Array.from(document.getElementsByClassName("filter"));
  items.map(function (item, index) {
    item.classList.remove('fadeIn');
  })
}


        // Get the container element
        var btnContainer = document.getElementById("myBtn-wrapper");

        // Get all buttons with class="btn" inside the container
        var btns = btnContainer.getElementsByClassName("btn");
        
        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          });
        }