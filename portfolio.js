"use strict";

const header = document.querySelector(".header");

const logo = document.querySelector(".logo");

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

const body = document.body;

const writeUps = document.querySelector(".write-up-corner");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
    logo.style.color = "orangered";
  } else {
    header.classList.remove("sticky");
    logo.style.color = "";
  }
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
  writeUps.classList.toggle("hidden");
});

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide-pair");
let currentIndex = 0;
const totalSlides = slides.length;

function moveSlides() {
  currentIndex = (currentIndex + 1) % totalSlides;
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
}

setInterval(moveSlides, 3000); 