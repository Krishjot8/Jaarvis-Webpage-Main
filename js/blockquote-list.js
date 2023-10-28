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

/* 
When Dragging */

let isDragging = false;
let startPosition = 0;
let currentIndex1 = 0;
const slider = document.querySelector('.reviews-slider');
const slideWidth = document.querySelector('blockquote').clientWidth;
const dots = document.querySelectorAll('.dot');

slider.addEventListener('mousedown', startDrag);
slider.addEventListener('touchstart', startDrag);

function startDrag(e) {
    isDragging = true;
    startPosition = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
}

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);

function drag(e) {
    if (!isDragging) return;
    const currentPosition = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const difference = currentPosition - startPosition;

    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${currentIndex * slideWidth - difference}px)`;

    // Highlight corresponding dot while dragging
    const draggedToIndex = Math.round((currentIndex * slideWidth - difference) / slideWidth);
    dots.forEach((dot, index) => {
        if (index === draggedToIndex) {
            dot.classList.add('selected');
        } else {
            dot.classList.remove('selected');
        }
    });
}

document.addEventListener('mouseup', endDrag);
document.addEventListener('touchend', endDrag);

function endDrag(e) {
    if (!isDragging) return;

    const currentPosition = e.type === 'mouseup' ? e.clientX : e.changedTouches[0].clientX;
    const difference = currentPosition - startPosition;

    isDragging = false;

    if (Math.abs(difference) > slideWidth / 4) {
        if (difference > 0 && currentIndex > 0) {
            currentIndex--;
        } else if (difference < 0 && currentIndex < 5) { // Update '5' to the total number of slides - 1
            currentIndex++;
        }
    }

    // Highlight corresponding dot after dragging
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('selected');
        } else {
            dot.classList.remove('selected');
        }
    });

    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}