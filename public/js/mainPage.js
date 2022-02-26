/* -------------------------------------------------------------------------- */
/*                                   SWIPER                                   */
/* -------------------------------------------------------------------------- */

var swiper = new Swiper(".mySwiper", {
    // loop: true,
    // spaceBetween: 10,
    slidesPerView: 4,
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
    autoplayHoverPause: true,
    autoplay: true,
    margin: 20,
    merge: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
     425: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });
  