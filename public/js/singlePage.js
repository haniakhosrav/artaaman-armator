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
  return encodeURI(
    "whatsapp://send?text=اینو ببین: " +
      "https://" +
      window.location.hostname +
      window.location.pathname
  );
};
// telCurrentPage = function () {
  // const url = window.location.href;

  // return encodeURI(
  //   "https://t.me/share/url?url=" +
  //     window.location.hostname +
  //     window.location.pathname +
  //     "&text=%D8%A7%DB%8C%D9%86%D8%AC%D8%A7%20%D8%B1%D9%88%20%D8%A8%D8%A8%DB%8C%D9%86"
  // // );
  // var url = window.location.pathname.split("/");
  // switch (url[1]) {
  //   case "socks":
  //     var str = "tg://socks" + window.location.search;
  //     break;
  //   case "share":
  //     str = "tg://msg_" + url[2] + window.location.search;
  //     break;
  //   case "joinchat":
  //     str = "tg://join?invite=" + url[2];
  //     break;
  //   case "addstickers":
  //     str = "tg://addstickers?set=" + url[2];
  //     break;
  //   case "proxy":
  //     str = "tg://" + url[1] + window.location.search;
  //     break;
  //   default:
  //     str =
  //       "tg://resolve?domain=" +
  //       url[1] +
  //       window.location.search.replace("?start=", "&start=");
  //     url[2] && (str = str + "&post=" + url[2]);
  // }
  // document.getElementById("abc").href = str;
  // setTimeout(function () {
  //   window.location.replace(str);
  // }, 5000);
// };
