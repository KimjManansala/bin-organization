window.MYAPP = window.MYAPP || {};

(function() {
  const MYAPP = window.MYAPP;
  const navbar = document.getElementById("navbar");

  document.addEventListener("DOMContentLoaded", () => {
    navbar.innerHTML = MYAPP.loadNavbar();

  });
})()


