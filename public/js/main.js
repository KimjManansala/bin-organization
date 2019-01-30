window.MYAPP = window.MYAPP || {};

(function() {
  const MYAPP = window.MYAPP;
  const navbar = document.getElementById("navbar");

  document.addEventListener("DOMContentLoaded", () => {
    navbar.innerHTML = MYAPP.loadNavbar();

  });

  // const logInCont = document.getElementById('log-in-container')
  // const logIn = document.getElementById("signInButton")
  // logIn.addEventListener('click', (evt)=>{
  //   console.log('Hi')
  //   logInCont.style.display = 'block'
  // })
   
})()


