window.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var burger = document.querySelector('.burger');
    var navLinks = document.querySelector('.nav-links');
  
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
});
