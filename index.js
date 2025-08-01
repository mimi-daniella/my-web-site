"use strict";

const header = document.querySelector(".header");

const logo = document.querySelector(".logo");

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

const body = document.body;

const writeUps = document.querySelector(".write-up-corner");

const slideShow = document.querySelector(".slideshow-container");

const pics = document.querySelectorAll(".slide-pair");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
    logo.style.color = "orangered";
  } else {
    header.classList.remove("sticky");
    logo.style.color = "";
  }
});

const toggleState = [0, 1];
let current = 0;


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
  writeUps.classList.toggle("hidden");
  slideShow.classList.toggle("hidden");

  if (toggleState[current] === 1) {
    slideShow.style.opacity = "1";
  } else {
    slideShow.style.opacity = "0";
  }

  current = (current + 1) % toggleState.length;
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