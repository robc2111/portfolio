const burger = document.getElementById('burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('active');
  burger.classList.toggle('open');
});
