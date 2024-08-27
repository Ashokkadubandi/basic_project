let navBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");
let mobileNav = document.getElementById("hide");

navBtn.onclick = function () {
  mobileNav.classList.add("move-right");
};
closeBtn.onclick = function () {
  mobileNav.classList.toggle("move-right");
};
