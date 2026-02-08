// Simple fade-in animation on scroll
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.8;

    if (top < trigger) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

// Initial state
sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "0.8s ease";
});


