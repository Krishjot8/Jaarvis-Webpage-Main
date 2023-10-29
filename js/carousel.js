/**
 * Creator           : Coding's Time
 * Youtube Channel   : https://www.youtube.com/channel/UC6dnKqrImGWqMb9ty1n0Ziw
 * Github Profile    : https://github.com/codingstime
 */

window.addEventListener("load", () => {
    autoSlide();
  });
  
  function autoSlide() {
    setInterval(() => {
      slide(getItemActiveIndex() + 1);
    }, 8500); // slide speed = 8.5s
  }
  
  function slide(toIndex) {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
  
    // check if toIndex exceeds the number of carousel items
    if (toIndex >= itemsArray.length) {
      toIndex = 0;
    }
  
    const newItemActive = itemsArray[toIndex];
  
    // start transition
    newItemActive.classList.add("carousel_item__pos_next");
    setTimeout(() => {
      newItemActive.classList.add("carousel_item__next");
      itemActive.classList.add("carousel_item__next");
    }, 20);
  
    // remove all transition class and switch active class
    newItemActive.addEventListener(
      "transitionend",
      () => {
        itemActive.className = "carousel_item";
        newItemActive.className = "carousel_item carousel_item__active";
      },
      {
        once: true,
      }
    );
  }
  
  function getItemActiveIndex() {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
  }
  
/* 
  let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let initialTranslate = 0;

const carouselInner = document.querySelector('.carousel_inner');

carouselInner.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.pageX;
  initialTranslate = currentTranslate;
  carouselInner.style.cursor = 'grabbing';
});

carouselInner.addEventListener('mouseleave', () => {
  if (isDragging) {
    isDragging = false;
    carouselInner.style.cursor = 'grab';
    currentTranslate = initialTranslate;
  }
});

carouselInner.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    carouselInner.style.cursor = 'grab';
    currentTranslate = initialTranslate;
  }
});

carouselInner.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const dragDistance = e.pageX - startPosition;
    currentTranslate = initialTranslate + dragDistance;
    carouselInner.style.transform = `translateX(${currentTranslate}px)`;
  }
}); */