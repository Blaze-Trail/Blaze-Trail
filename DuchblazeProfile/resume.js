let listItems = document.getElementsByClassName("nav-items")[0];
let mobileMenu = document.getElementsByClassName("mobile-menu")[0];

let openMobileMenu = () => {
    listItems.classList.toggle("active");
    mobileMenu.classList.toggle("is-active");
  };
  
mobileMenu.addEventListener("click", openMobileMenu);
  

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-70px";
  }
}