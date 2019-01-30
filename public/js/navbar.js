//make sure that our global object "MYAPP" exists
window.MYAPP = window.MYAPP || {};
(function() {
  // TODO: code for the header goes here

  // NOTE: this "foo" is trapped inside the anonymous function that wraps this entire file
  // it has no relation to any of the other "foo" functions
  let logo =
    "data:image/jpeg;base64,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";
  function loadNavbar() {
    return `
    <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href='/'>
              Home
            </a>
      
            <a class="navbar-item">
              Documentation
            </a>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            
          </div>
        </div>`;
  }

  //   function foo () {
  //     console.log('I am the "foo" function for the header.')
  //   }

  //   function initHeader () {
  //     console.info('Intializing the header now.')
  //     foo()
  //   }
  window.MYAPP.loadNavbar = loadNavbar;
  //   // export the initHeader function so it may be called outside of this module
  //   window.MYAPP.initHeader = initHeader
})();
