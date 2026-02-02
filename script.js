// easing suave e equilibrado (responde rápido ao clique e desacelera bonito)
function easeSmooth(t) {
  return t * t * (3 - 2 * t);
}

function scrollSuave(target, duration = 2200) {
  const targetEl = document.querySelector(target);
  if (!targetEl) return;

  const startPosition = window.pageYOffset;
  const targetPosition =
    targetEl.getBoundingClientRect().top + startPosition;

  const startTime = performance.now();

  function animationScroll(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const distance =
      startPosition +
      (targetPosition - startPosition) * easeSmooth(progress);

    window.scrollTo(0, distance);

    if (progress < 1) requestAnimationFrame(animationScroll);
  }

  requestAnimationFrame(animationScroll);
}

// aplica scroll suave em todos os links com #
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = link.getAttribute('href');

   
    if (target.length === 1) return;

    e.preventDefault();
    scrollSuave(target, 2200); velocidade aqui
  });
});