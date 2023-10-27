const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".right-navigation");
const overlay = document.querySelector(".nav-widget-slide");
const content = document.querySelector(".overlay-content");
const menuClose = document.querySelector(".menu-close");
const checkbox1 = document.getElementById("right-menu-item-3");
const backbutton = document.querySelector(".back-toggle");


let currentNav = ''; // Initialize currentNav
let previousNav = ''; // Initialize previousNav


menuToggle.addEventListener('click', () => {
    if (navbar.style.transform === 'translateX(0px)') {
        //the menu is open so we close it
        navbar.style.transform = 'translateX(300px)';
        overlay.style.opacity = 0;
        overlay.style.transition = 'opacity 0.3s, visibility 0s 0.3s'
        content.style.marginRight = '0'; //this
        previousNav = currentNav;
        currentNav = '';
         //the menu is closed so we open it
    } else {
        navbar.style.transform = 'translateX(0)';
        overlay.style.visibility = 'visible';
        overlay.style.opacity = 1;
        overlay.style.transition = 'opacity 0.3s, visibility 0s';
        content.style.marginRight = '250px';
        currentNav = 'Main';
    }
});

// Function to handle the "Back" button click

backbutton.addEventListener('click', () => {
    if (navbar.style.transform === 'translateX(30px)') {
        //the menu is open so we close it
        navbar.style.transform = 'translateX(30px)';
        overlay.style.opacity = 0;
        overlay.style.transition = 'opacity 0.3s, visibility 0s 0.3s'
        content.style.marginRight = '0'; //this
        previousNav = currentNav;
        currentNav = '';
         //the menu is closed so we open it
    } else {
        navbar.style.transform = 'translateX(0)';
        overlay.style.visibility = 'visible';
        overlay.style.opacity = 1;
        overlay.style.transition = 'opacity 0.3s, visibility 0s';
        content.style.marginRight = '250px';
        currentNav = 'Main';
    }
});






















//clicking on black widget slider exits mobile navbar

overlay.addEventListener("click", () => {
  navbar.style.transform = "translateX(300px)";
  overlay.style.opacity = 0;
  overlay.style.transition = "opacity 0.3s, visibility 0s 0.3s";
  content.style.marginRight = "0";
});

//Closing Menu and closing black widget as well
menuClose.addEventListener("click", function () {
  navbar.style.transform = "translateX(300px)"; /* for close menu */
  overlay.style.opacity = 0;
  overlay.style.transition = "opacity 0.3s, visibility 0s 0.3s";
  content.style.marginRight = "0";
});

