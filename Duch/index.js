// let toogleBtn = document.getElementsByClassName("toogle")[0];
// let mobileMenu = document.getElementsByClassName("mobile")[0];

// mobileMenu.addEventListener("click", () => {
//   toogleBtn.classList.toggle("active");
// });

let listItems = document.getElementsByClassName("list_items")[0];
let mobileMenu = document.getElementsByClassName("mobile")[0];

// mobileMenu.addEventListener("click", () => {
//   listItems.classList.toggle("active");
//   mobileMenu.classList.toggle("is.active");
// });
let openMobileMenu = () => {
  listItems.classList.toggle("active");
  mobileMenu.classList.toggle("is-active");
};

mobileMenu.addEventListener("click", openMobileMenu);
