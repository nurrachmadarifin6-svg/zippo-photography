// Simple fade-in animation on scroll
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.8;

    if (top < trigger) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");

// Toggle saat klik hamburger
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Tutup menu saat klik link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Tutup menu saat klik di luar
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Tutup menu saat scroll
window.addEventListener("scroll", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});

// Initial state
sections.forEach((sec) => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "0.8s ease";
});
