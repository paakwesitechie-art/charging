// ========================================
// NEXORA AI
// Interactive JavaScript
// ========================================


// ---------- MOBILE MENU ----------

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-open");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("mobile-open");
  });
});


// ---------- SCROLL REVEAL ----------

const revealElements = document.querySelectorAll(
  ".feature-card, .step, .testimonial-card, .price-card, .stat, .section-heading"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }