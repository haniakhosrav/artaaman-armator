/* -------------------------------------------------------------------------- */
  /*                           SINGLRNESPAGE-CAROUSEL                           */
  /* -------------------------------------------------------------------------- */

  $("#relatedNews").owlCarousel({
    rtl: true,
    autoplay: false,
    margin: 50,
    // loop:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      475: {
        items: 2,
      },

      768: {
        items: 3,
      },
      900: {
        items: 4,
      },
    },
  });


  waCurrentPage = function () {
    return encodeURI("whatsapp://send?text=اینو ببین: " + 'http://' + window.location.hostname + window.location.pathname);
  }
