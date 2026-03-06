const rows = document.querySelectorAll('.reveal-row');
const carousels = document.querySelectorAll('[data-carousel]');

const observer = new IntersectionObserver(
  (entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  }
);

rows.forEach((row) => observer.observe(row));

carousels.forEach((carousel) => {
  const track = carousel.querySelector('[data-track]');
  const nextButton = carousel.querySelector('.next');
  const prevButton = carousel.querySelector('.prev');
  const cards = track.querySelectorAll('.movie-card');
  const half = cards.length / 2;
  const originalCards = Array.from(cards).slice(0, half);

  let index = 0;

  const getStep = () => {
    const style = window.getComputedStyle(track);
    const gap = Number.parseFloat(style.columnGap || style.gap || '0');
    return cards[0].offsetWidth + gap;
  };

  const getVisibleCards = () => {
    if (window.innerWidth < 768) {
      return 2;
    }

    if (window.innerWidth < 992) {
      return 4;
    }

    return 6;
  };

  const move = (withAnimation = true) => {
    track.style.transition = withAnimation ? 'transform 0.45s ease' : 'none';
    track.style.transform = `translateX(-${index * getStep()}px)`;
  };

  const jumpIfNeeded = () => {
    const maxIndex = originalCards.length;

    if (index >= maxIndex) {
      index -= maxIndex;
      move(false);
    }

    if (index < 0) {
      index += maxIndex;
      move(false);
    }
  };

  nextButton.addEventListener('click', () => {
    index += getVisibleCards();
    move(true);
    window.setTimeout(jumpIfNeeded, 470);
  });

  prevButton.addEventListener('click', () => {
    index -= getVisibleCards();
    move(true);
    window.setTimeout(jumpIfNeeded, 470);
  });

  window.addEventListener('resize', () => {
    index = index % originalCards.length;
    move(false);
  });

  move(false);
});
