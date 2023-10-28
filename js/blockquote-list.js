let currentIndex = 0;

function toggleSelected(index) {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelector('.reviews-slider');
    const slideWidth = document.querySelector('blockquote').clientWidth;

    dots[currentIndex].classList.remove('selected');
    dots[index].classList.add('selected');
   dots[index].style.backgroundColor = '#1e83ec';
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
}