


const carouselInner = document.querySelector('.company-carousel-inner');

carouselInner.addEventListener('animationiteration', () => {
  setTimeout(() => {
    carouselInner.style.animationPlayState = 'paused';
    setTimeout(() => {
      carouselInner.style.animationPlayState = 'running';
    }, 3000); // Pause for 3 seconds
  }, 0);
});
