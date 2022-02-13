document.write(
 `
 
 <div class="preloader"> 
 <div class="preloader-iconWrapper">
   <img class="preloader-icon" src="/images/pointsIcon-01.svg" alt="My Site Preloader">
   <img class="preloader-icon" src="/images/pointsIcon-03.svg" alt="My Site Preloader">
   <img class="preloader-icon" src="/images/pointsIcon-04.svg" alt="My Site Preloader">
 </div>
</div>

 <nav class="myNavbar">
 <div class="mainWrapper">
   <a href="/" id="myNavbar-logo">
     <svg xmlns="http://www.w3.org/2000/svg" width="37.545" height="55.522" viewBox="0 0 37.545 55.522">
       <g id="Group_1" data-name="Group 1" transform="translate(-297.439 -21.708)">
         <circle id="Ellipse_4" data-name="Ellipse 4" cx="5.581" cy="5.581" r="5.581"
           transform="translate(319.603 21.708)" fill="#fff" />
         <g id="Group_16" data-name="Group 16">
           <path id="Path_22" data-name="Path 22"
             d="M330.765,49.806c0-8.474-1.625-17.274-14.554-17.274-5.727,0-11.5,3.307-13.725,8.057a22.724,22.724,0,0,1,11.3-2.182c7.423.5,9.139,5.373,9.322,8.946l-.075,14.677a8.026,8.026,0,0,1-.437,2.446,10.681,10.681,0,0,1-10.221,7.076c-4.227.1-8.594-3.69-8.292-9.668.175-3.461,2.02-6.2,5.561-9.086A39.032,39.032,0,0,1,321.4,46.073c-6.666.143-13.105,2.364-16.786,5.147a17.5,17.5,0,0,0-7.173,13.867c0,6.115,4.368,12.143,12.929,12.143A15.747,15.747,0,0,0,323.3,70.94l-.074,6.277h11.761c-.188-1.031-4.261-3.648-4.261-3.648Z"
             fill="#fff" />
         </g>
       </g>
     </svg>
   </a>
   <button onclick="openNav()">
     <i class="iconify" data-icon="bx:bx-menu" data-width="30" data-height="30"></i>
   </button>
 </div>
</nav>
<div class="myNavbar-contents" id="myNavbar-contents">
<ul>
  <li class="myNavbar-item">
    <a href="/">
      <span class="iconify" data-icon="carbon:home" data-width="30" data-height="25"></span>
      <p>خانه</p>
    </a>
  </li>
  
  <li class="myNavbar-item">
    <a href="/gallery">
      <span class="iconify" data-width="20" data-icon="grommet-icons:gallery"></span>       
         <p>گالری</p>
    </a>
    <li class="myNavbar-item">
      <a href="/news">
        <span class="iconify" data-icon="emojione-monotone:rolled-up-newspaper" data-width="28"
          data-height="30"></span>
        <p>اخبار و مقالات</p>
      </a>
    </li>
  </li>
  <li class="myNavbar-item">
    <a href="/contact">
      <span class="iconify" data-icon="clarity:phone-handset-line" data-width="25" data-height="30"></span>
      <p>تماس با ما</p>
    </a>
  </li>
  <li class="myNavbar-item">
    <a href="/about">
      <span class="iconify" data-icon="clarity:info-circle-line" data-width="45" data-height="30"></span>
      <p>درباره‌ی ما</p>
    </a>
  </li>
 

</ul>
</div>

 `
  );