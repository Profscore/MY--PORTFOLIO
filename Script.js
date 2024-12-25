// Navigation Menu
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((otherLink) => {
      otherLink.classList.remove('active');
    });
    link.classList.add('active');
  });
});

// Scroll to Section
const scrollLinks = document.querySelectorAll('nav ul li a');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// Toggle Dark/Light Mode
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark/Light Mode';
toggleButton.classList.add('toggle-button');
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Skills Section
const skills = document.querySelectorAll('.skill');

skills.forEach((skill) => {
  skill.addEventListener('mouseover', () => {
    skill.classList.add('highlight');
  });
  skill.addEventListener('mouseout', () => {
    skill.classList.remove('highlight');
  });
});

// Project Images
const projectImages = document.querySelectorAll('.project img');

projectImages.forEach((image) => {
  image.addEventListener('mouseover', () => {
    image.classList.add('zoom');
  });
  image.addEventListener('mouseout', () => {
    image.classList.remove('zoom');
  });
});

// Contact Form
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea').value;
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  contactForm.reset();
});

// Animate On Scroll
const scrollElements = document.querySelectorAll('.scroll-element');

scrollElements.forEach((element) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  }, { threshold: 0.5 });
  observer.observe(element);
});


