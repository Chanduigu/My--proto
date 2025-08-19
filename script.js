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
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

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
  duration: 1200,
  once: true,
  easing: "ease-in-out"
});

// ===================== GSAP Animations =====================
window.addEventListener('load', () => {
  // Page Loader Animation
  gsap.to(".preloader", { opacity: 0, duration: 1, delay: 1, onComplete: () => {
    document.querySelector(".preloader").style.display = "none";
  }});

  // Intro Animations
  gsap.from('.home-content h1', { opacity: 0, y: -50, duration: 1 });
  gsap.from('.home-content h3', { opacity: 0, x: -100, delay: 0.4, duration: 1 });
  gsap.from('.home-content p', { opacity: 0, y: 30, delay: 0.8, duration: 1 });
  gsap.from('.home-img img', { opacity: 0, scale: 0.8, delay: 1.2, duration: 1.2 });

  // Section Stagger Reveal
  gsap.utils.toArray("section").forEach((section, i) => {
    gsap.from(section.querySelectorAll("h2, p, .btn, .project-box"), {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });
});

// ===================== Hover Animations =====================
const projectCards = document.querySelectorAll(".project-box");
projectCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.05, duration: 0.3, boxShadow: "0 8px 25px rgba(0,0,0,0.2)" });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 0.3, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" });
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

// ===================== Dark Mode Toggle =====================
const themeToggle = document.querySelector('#theme-toggle');
themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.classList.toggle("fa-sun");
  themeToggle.classList.toggle("fa-moon");
});
