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
})();

if (document.getElementById("deleteBin")) {
  const deleteBinForm = document.getElementById("deleteBin");

  if (document.getElementById("deleteInput")) {
    const binName = document.getElementById("deleteInput").value;

    deleteBinForm.addEventListener("submit", evt => {
      evt.preventDefault();
      axios
        .delete("/dashboard/shelve/bins", { data: { bin: binName } })
        .then(res => {
          console.log(res);
        })
        .catch(er => {
          console.log(er);
        });
    });
  }
}

if (document.getElementById("items-list")) {
  const itemList = document.getElementById("items-list");
  itemList.addEventListener("click", e => {
    if (e.target.id === "items-data") {
      console.log("~~~~~~~~~~~~~~~~~~~~~~~");
      console.log(e.target.innerHTML)
      axios.delete(`/dashboard/shelve/bins/items`, {data: { name : e.target.innerHTML}})
      .then(e=>{
        // console.log('HERRO', e)
        location.reload();

      })
      .catch(e=>{
        console.log('this is the e', e)
      })
    }
  });
}
