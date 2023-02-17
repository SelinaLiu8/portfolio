const navbar = document.querySelector('.nav-bar');
function scrollBarColor (){
    console.log(scrollY);
    if (window.scrollTop >= 100 || window.scrollTop >= 100 ) {
      navbar.classList.add('navbar-scrolled');
      console.log("scrolled");
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }