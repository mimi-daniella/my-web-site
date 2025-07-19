const signUpPopup = document.querySelector(".sign-up-popup");

const signUpButton = document.querySelector(".sign-up-btn");

const logInPopup = document.querySelector(".log-in-popup");

const logInButton = document.querySelector(".log-in-btn");

const logInLink = document.querySelector(".log-in-suggestion");

const blurBackDrop = document.querySelector(".blur");

const testimonialSlider = document.querySelector(".testimonial-slider");

const cancel = document.querySelector(".cancel");


signUpButton.addEventListener("click", function () {
  signUpPopup.classList.remove("hidden");
  logInPopup.classList.add("hidden");
  blurBackDrop.classList.remove("hidden");
});

logInButton.addEventListener("click", function () {
  logInPopup.classList.remove("hidden");
  signUpPopup.classList.add("hidden");
  blurBackDrop.classList.remove("hidden");
});

logInLink.addEventListener("click", function(){
    logInPopup.classList.remove("hidden");
    signUpPopup.classList.add("hidden");
})

blurBackDrop.addEventListener("click", function(){
  logInPopup.classList.add("hidden");
  signUpPopup.classList.add("hidden");
  blurBackDrop.classList.add("hidden");
})

cancel.addEventListener("click", function(){
    signUpPopup.classList.add("hidden");
    logInPopup.classList.add("hidden");
    blurBackDrop.classList.add("hidden");
})

const testimonials = [
  {
    name: "Ife O.",
    feedback:
      "Best silk press in Lagos. Clean, professional, and my hair has never looked better!",
  },
  {
    name: "Ada E.",
    feedback:
      "Lovely ambience and top-tier service. My bridal glam was flawless!",
  },
  {
    name: "Chika N.",
    feedback:
      "Friendly staff and timely appointments. The pedicure was divine.",
  },
];

let currentIndex = 0;

function displayTestimonial(index){
  const testimonial = testimonials[index];

  testimonialSlider.innerHTML = '';

  const testimonialElement = document.createElement('div');
  testimonialElement.className = 'testimonial';
  testimonialElement.innerHTML = `<p>${testimonial.feedback}</p>
                                 <strong>${testimonial.name}</strong>`;
  
   testimonialSlider.appendChild(testimonialElement);

   testimonialSlider.classList.remove("show");
   setTimeout(() => testimonialSlider.classList.add("show"), 10
  );
}

function nextTestimonial(){
  currentIndex = (currentIndex + 1) % testimonials.length ;
  displayTestimonial(currentIndex);
}

displayTestimonial(0);
setInterval(nextTestimonial, 5000);