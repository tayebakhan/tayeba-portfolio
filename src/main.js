import './styles.css';

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

const filters = [...document.querySelectorAll('.filter')];
const projects = [...document.querySelectorAll('.project-card')];
const filterStatus = document.querySelector('.filter-status');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    let visible = 0;

    filters.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    projects.forEach((project) => {
      const categories = project.dataset.category.split(' ');
      const show = selected === 'all' || categories.includes(selected);
      project.hidden = !show;
      if (show) visible += 1;
    });

    filterStatus.textContent = `Showing ${visible} project${visible === 1 ? '' : 's'}`;
  });
});

document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    const symbol = detail.querySelector('summary span');
    symbol.textContent = detail.open ? '−' : '+';
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const header = document.querySelector('[data-header]');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    menuButton.click();
    menuButton.focus();
  }
});
