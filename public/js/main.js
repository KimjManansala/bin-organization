window.MYAPP = window.MYAPP || {};

(function() {
  const MYAPP = window.MYAPP;
  const navbar = document.getElementById("navbar");

  document.addEventListener("DOMContentLoaded", () => {
    navbar.innerHTML = MYAPP.loadNavbar();
    console.log('herro')
   const form = document.getElementById('register-form')
   form.addEventListener('submit', (evt)=>{
    

  })

  });



   
})()


