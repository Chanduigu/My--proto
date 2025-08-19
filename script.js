// ===================== Typing Animation =====================
new Typed('.multiple-text', {
  strings: ['Data Scientist', 'Web Developer', 'Power BI Analyst', 'Innovator'],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1000,
  loop: true
});

// ===================== Responsive Menu Toggle =====================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('fa-xmark');
};

// ===================== Scroll Navigation Active Link =====================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`header nav a[href*="${id}"]`)?.classList.add('active');
      });
    }
  });

  // Sticky Header
  document.querySelector('header').classList.toggle('sticky', scrollY > 100);

  // Close menu when scrolling
  navbar.classList.remove('active');
  menuIcon.classList.remove('fa-xmark');
};

// ===================== Animate on Scroll (AOS) =====================
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out"
});

// ===================== GSAP Intro Animations =====================
window.addEventListener('load', () => {
  gsap.from('.home-content h1', { opacity: 0, y: -40, duration: 1 });
  gsap.from('.home-content h3', { opacity: 0, x: -60, delay: 0.4, duration: 1 });
  gsap.from('.home-content p', { opacity: 0, y: 30, delay: 0.8, duration: 1 });
  gsap.from('.home-img img', { opacity: 0, scale: 0.9, delay: 1.2, duration: 1.2 });
});

// ===================== Hover Animations (Cards & Buttons) =====================
const hoverItems = document.querySelectorAll(".project-box, .btn");
hoverItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    gsap.to(item, { scale: 1.05, duration: 0.3, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" });
  });
  item.addEventListener("mouseleave", () => {
    gsap.to(item, { scale: 1, duration: 0.3, boxShadow: "0 4px 10px rgba(0,0,0,0.08)" });
  });
});

// ===================== Smooth Scroll =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

