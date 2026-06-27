// Main JavaScript for Lawctopus Course Landing Page
// This file is ready for backend integration.

// Example: Contact form handler (connect to backend API)
// fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })

// Example: Dynamic content loading from backend
// fetch('/api/course-data')
//   .then(res => res.json())
//   .then(data => renderCourseData(data))

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
  const nav = document.querySelector('nav .container');
  nav.classList.toggle('mobile-open');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Active section highlight on scroll (optional enhancement)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
});
