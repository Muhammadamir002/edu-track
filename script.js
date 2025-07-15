
// script.js
// This script handles the navigation menu toggle and fade-in animations for elements on the page.

    document.addEventListener('DOMContentLoaded', () => {
      const menuToggle = document.querySelector('.menu-toggle');
      const navLinks = document.querySelector('.nav-links');
      const authButtons = document.querySelector('.auth-buttons');
      const navbar = document.querySelector('.navbar'); // Select the navbar

      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-open');
        authButtons.classList.toggle('nav-open');
        menuToggle.classList.toggle('is-active'); // Add active class for animation
        navbar.classList.toggle('nav-expanded'); // Add class to body to disable scroll
      });

      // Intersection Observer for fade-in animation
      const fadeInElements = document.querySelectorAll('.fade-in');

      const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // callback will be executed when 10% of the element is visible
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      }, observerOptions);

      fadeInElements.forEach(element => {
        observer.observe(element);
      });
    });
