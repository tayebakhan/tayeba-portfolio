import './styles.css';

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
      if (show) {
        visible += 1;
        if (!reduceMotion) {
          project.animate(
            [
              { opacity: 0, transform: 'translateY(9px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: 260, easing: 'cubic-bezier(.2, .8, .2, 1)' }
          );
        }
      }
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
const updateScroll = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  document.documentElement.style.setProperty('--scroll-progress', Math.min(progress, 1));
  header.classList.toggle('scrolled', window.scrollY > 24);
};

window.addEventListener('scroll', updateScroll, { passive: true });
window.addEventListener('resize', updateScroll, { passive: true });
updateScroll();

const tiltBoard = document.querySelector('[data-tilt]');
const finePointer = window.matchMedia('(pointer: fine)').matches;

if (tiltBoard && finePointer && !reduceMotion) {
  tiltBoard.addEventListener('pointermove', (event) => {
    const bounds = tiltBoard.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    tiltBoard.style.setProperty('--tilt-x', `${(0.5 - y) * 5}deg`);
    tiltBoard.style.setProperty('--tilt-y', `${(x - 0.5) * 7}deg`);
    tiltBoard.style.setProperty('--glow-x', `${x * 100}%`);
    tiltBoard.style.setProperty('--glow-y', `${y * 100}%`);
  });

  tiltBoard.addEventListener('pointerleave', () => {
    tiltBoard.style.setProperty('--tilt-x', '0deg');
    tiltBoard.style.setProperty('--tilt-y', '0deg');
    tiltBoard.style.setProperty('--glow-x', '50%');
    tiltBoard.style.setProperty('--glow-y', '50%');
  });
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    menuButton.click();
    menuButton.focus();
  }
});
