const themeToggle = document.getElementById("themeToggle");
const funFactBtn = document.getElementById("funFactBtn");
const funFactText = document.getElementById("funFactText");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const backToTop = document.getElementById("backToTop");
const rotatingText = document.getElementById("rotatingText");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

const funFacts = [
  "I enjoy creating simple and clean web page layouts.",
  "I like learning step by step and improving my coding skills.",
  "I am interested in design, technology, and creativity."
];

funFactBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  funFactText.textContent = funFacts[randomIndex];
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  formMessage.textContent = "Thank you, " + name + ". Your message has been sent.";
  contactForm.reset();
});

const roles = [
  "Lifelong Learner",
  "Creative Learner",
  "Cybersecurity Enthusiast"
];

let roleIndex = 0;

setInterval(function () {
  roleIndex = (roleIndex + 1) % roles.length;
  rotatingText.textContent = roles[roleIndex];
}, 2000);

window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(function (element) {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });

  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".top-nav a");

  let currentSection = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active-link");
    }
  });
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.dispatchEvent(new Event("scroll"));