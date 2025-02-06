document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop - 60, // adjust based on your nav height
          behavior: 'smooth'
        });
      });
    });
  
    // Intersection Observer for reveal effect on sections and cards
    const revealElements = document.querySelectorAll('.reveal, .card');
    const options = { threshold: 0.2 };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    revealElements.forEach(el => {
      observer.observe(el);
    });
  
    // Simple contact form submission handler
    document.getElementById('contact-form').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message!');
      this.reset();
    });
  });
  