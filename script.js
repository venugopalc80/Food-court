const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  nav.classList.toggle('mobile-open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('mobile-open'));
});

const style = document.createElement('style');
style.textContent = `@media(max-width:800px){.nav.mobile-open{display:flex;position:absolute;top:70px;left:14px;right:14px;background:#181614;padding:18px 20px;border-radius:16px;flex-direction:column;gap:14px}.nav.mobile-open a{color:#fff}}`;
document.head.appendChild(style);
