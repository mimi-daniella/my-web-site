"use strict";

const header = document.querySelector(".header");

const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
    logo.style.color = "orangered";
  } else {
    header.classList.remove("sticky");
    logo.style.color = "";
  }
});

let arr1 = ["Ella", 13, true];
console.log(arr1);
console.log(typeof arr1);
