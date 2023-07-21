window.addEventListener('DOMContentLoaded', function() {
  var navbar = document.querySelector('.navbar');
  var burger = document.querySelector('.burger');
  var navLinks = document.querySelector('.nav-links');

  function closeMenu() {
    navLinks.classList.remove('active');
  }

  burger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  var menuItems = document.querySelectorAll('.nav-links li a');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', closeMenu);
  }

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
