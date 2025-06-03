
// ===== BURGER MENU TOGGLE =====
const burger = document.getElementById('burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('active');
  burger.classList.toggle('open');
});

// ===== SIDEBAR SECTION OBSERVER =====
const sections = document.querySelectorAll('.project-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.getElementById(`link-${id}`);

    if (entry.isIntersecting) {
      // Remove active from all
      document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));

      // Add active to the parent <li> of the matching <a>
      const parentLi = link.closest('li');
      if (parentLi) parentLi.classList.add('active');
    }
  });
}, {
  root: null,
  threshold: 0.5
});

sections.forEach(section => observer.observe(section));