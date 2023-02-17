window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (document.documentElement.scrollTop > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });