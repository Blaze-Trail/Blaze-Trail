let listItems = document.getElementsByClassName("navbar")[0];
let mobileMenu = document.getElementsByClassName("mobile-menu")[0];

let openMobileMenu = () => {
    listItems.classList.toggle("active");
    mobileMenu.classList.toggle("is-active");
  };
  
  mobileMenu.addEventListener("click", openMobileMenu);