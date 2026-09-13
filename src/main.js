import './styles.css';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
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
      if (show) {
        visible += 1;
        if (!reduceMotion) {
          project.animate(
            [
              { opacity: 0, transform: 'translateY(12px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: 320, easing: 'cubic-bezier(.2,.8,.2,1)' }
          );
        }
      }
    });

    filterStatus.textContent = `Showing ${visible} project${visible === 1 ? '' : 's'}`;
  });
});

document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    const symbol = detail.querySelector('summary > span:last-child');
    if (symbol) {
      symbol.textContent = detail.open ? '-' : '+';
    }
  });
});

const impactCards = [...document.querySelectorAll('[data-card-tilt]')];
if (impactCards.length && finePointer && !reduceMotion) {
  impactCards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.setProperty('--card-ry', `${x * 3.5}deg`);
      card.style.setProperty('--card-rx', `${y * -3.5}deg`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--card-rx', '0deg');
      card.style.setProperty('--card-ry', '0deg');
    });
  });
}

if (reduceMotion) {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
} else {
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
}

const header = document.querySelector('[data-header]');
const scrollProgress = document.querySelector('[data-scroll-progress]');
const updateScrollEffects = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  header.classList.toggle('scrolled', window.scrollY > 24);
  scrollProgress.style.transform = `scaleX(${progress})`;
};

window.addEventListener('scroll', () => {
  updateScrollEffects();
}, { passive: true });
window.addEventListener('resize', updateScrollEffects, { passive: true });
updateScrollEffects();

const tiltBoard = document.querySelector('[data-tilt]');
if (tiltBoard && finePointer && !reduceMotion) {
  tiltBoard.addEventListener('pointermove', (event) => {
    const bounds = tiltBoard.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    tiltBoard.style.setProperty('--tilt-x', `${x * 5}deg`);
    tiltBoard.style.setProperty('--tilt-y', `${y * -5}deg`);
    tiltBoard.style.setProperty('--glow-x', `${(x + 0.5) * 100}%`);
    tiltBoard.style.setProperty('--glow-y', `${(y + 0.5) * 100}%`);
  });
  tiltBoard.addEventListener('pointerleave', () => {
    tiltBoard.style.setProperty('--tilt-x', '0deg');
    tiltBoard.style.setProperty('--tilt-y', '0deg');
    tiltBoard.style.setProperty('--glow-x', '50%');
    tiltBoard.style.setProperty('--glow-y', '50%');
  });
}

const personalStage = document.querySelector('[data-personal-stage]');
if (personalStage && finePointer && !reduceMotion) {
  const personalCards = [...personalStage.querySelectorAll('[data-depth]')];
  personalStage.addEventListener('pointermove', (event) => {
    const bounds = personalStage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    personalCards.forEach((card) => {
      const depth = Number(card.dataset.depth || 1);
      card.style.setProperty('--parallax-x', `${x * 13 * depth}px`);
      card.style.setProperty('--parallax-y', `${y * 10 * depth}px`);
    });
  });
  personalStage.addEventListener('pointerleave', () => {
    personalCards.forEach((card) => {
      card.style.setProperty('--parallax-x', '0px');
      card.style.setProperty('--parallax-y', '0px');
    });
  });
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    menuButton.click();
    menuButton.focus();
  }
});
