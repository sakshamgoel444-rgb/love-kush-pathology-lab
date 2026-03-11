// ===== Love Kush Pathology Lab — Script =====

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

hamburger.addEventListener('click', () => mobileMenu.classList.add('active'));
mobileClose.addEventListener('click', () => mobileMenu.classList.remove('active'));
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('active'));
});

// Report download mock
document.getElementById('reportForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const receipt = document.getElementById('receiptNo').value.trim();
  const phone = document.getElementById('phoneNo').value.trim();
  if (!receipt || !phone) {
    alert('Please fill in both fields.');
    return;
  }
  // Mock success
  alert('Report downloaded successfully!');
  this.reset();
});

// Scroll reveal (fade-up)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
