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

const newsItem = document.getElementById("newsItem");
const myAside = document.getElementById("relatedNewsWrapper");
const backBtn = document.getElementsByClassName("backBtnWrapper");
if(!newsItem){
  // console.log("first")
  myAside.style.display="none";
  backBtn[0].style.display="flex";

}
waCurrentPage = function () {
  return encodeURI(
    "whatsapp://send?text=artaaman.com: " +
      "https://" +
      window.location.hostname +
      window.location.pathname
  );
};