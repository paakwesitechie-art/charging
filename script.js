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


// Close menu when a navigation link is clicked

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
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// ---------- DASHBOARD BUTTON ----------

const dashboardButton = document.querySelector(".dashboard-add");

if (dashboardButton) {
  dashboardButton.addEventListener("click", () => {
    dashboardButton.textContent = "Project created ✓";

    setTimeout(() => {
      dashboardButton.textContent = "+ New project";
    }, 2000);
  });
}


// ---------- AI INSIGHTS ----------

const insightsButton = document.querySelector(".ai-card button");

if (insightsButton) {
  insightsButton.addEventListener("click", () => {
    insightsButton.textContent = "Analyzing your workflow...";

    setTimeout(() => {
      insightsButton.textContent = "Productivity increased ↑";
    }, 1500);

    setTimeout(() => {
      insightsButton.textContent = "View insights →";
    }, 3500);
  });
}


// ---------- SMOOTH CTA BUTTON FEEDBACK ----------

const ctaButtons = document.querySelectorAll(
  ".primary-btn, .nav-cta, .price-btn"
);

ctaButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const href = button.getAttribute("href");

    if (href === "#" || !href) {
      event.preventDefault();

      const originalText = button.innerHTML;

      button.innerHTML = "You're on the list ✓";

      setTimeout(() => {
        button.innerHTML = originalText;
      }, 1800);
    }
  });
});


// ---------- FAQ ----------

const faqItems = document.querySelectorAll("details");

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.removeAttribute("open");
        }
      });
    }
  });
});


// ---------- NAVBAR SCROLL EFFECT ----------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});


// ---------- PRODUCTIVITY COUNTER ----------

const counters = document.querySelectorAll(".stat strong");

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = counter.textContent;

      const number = parseFloat(target.replace(/[^\d.]/g, ""));
      const suffix = target.replace(/[\d.]/g, "");

      let current = 0;
      const duration = 1200;
      const increment = number / (duration / 16);

      const updateCounter = () => {
        current += increment;

        if (current >= number) {
          counter.textContent = number + suffix;
          return;
        }

        counter.textContent =
          Math.floor(current * 10) / 10 + suffix;

        requestAnimationFrame(updateCounter);
      };

      counter.textContent = "0";

      updateCounter();

      observer.unobserve(counter);
    });
  },
  {
    threshold: 0.7
  }
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});


// ---------- CURRENT YEAR ----------

const footerYear = document.querySelector(".footer-bottom span");

if (footerYear) {
  footerYear.textContent =
    `© ${new Date().getFullYear()} Nexora AI. All rights reserved.`;
}