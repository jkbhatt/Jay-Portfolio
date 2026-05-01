const elements = document.querySelectorAll('.fade-in');

const reveal = () => {
  const height = window.innerHeight;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < height - 100) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', reveal);
reveal();