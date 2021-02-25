// date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// NAVBAR TOGGLE
const toggleBtn = document.querySelector(".toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// api call
const url = "";
