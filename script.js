document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.querySelector(".nav-list");

  function toggleMenu() {
    menuIcon.classList.toggle("active");
    navList.classList.toggle("active");

    // Toggle bars to X
    const bars = document.querySelectorAll(".bar");
    if (menuIcon.classList.contains("active")) {
      bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
      bars[1].style.opacity = "0";
      bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
      bars.forEach((bar) => {
        bar.style.transform = "";
        bar.style.opacity = "";
      });
    }
  }

  menuIcon.addEventListener("click", toggleMenu);

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navList.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Add shadow to navbar on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  // Animation on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll(
      ".section-title, .section-subtitle, .project-card, .blog-card"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Set initial state for animation
  document
    .querySelectorAll(
      ".section-title, .section-subtitle, .project-card, .blog-card"
    )
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on load
});
