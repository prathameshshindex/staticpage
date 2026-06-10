// Mobile menu toggle and smooth navigation behavior.
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Close the mobile menu after a link is selected.
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Provide a simple success message so the form feels interactive.
if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'Thanks! Your message has been prepared for submission.';
    contactForm.reset();
  });
}
