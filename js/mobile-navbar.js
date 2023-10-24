const menuToggle = document.querySelector('.menu-toggle')
const navbar = document.querySelector('.right-navigation')
const overlay = document.querySelector('.nav-widget-slide');
const content =  document.querySelector('.overlay-content');        



menuToggle.addEventListener('click', () => {
    if (navbar.style.transform === 'translateX(0px)') {
        //the menu is open so we close it
        navbar.style.transform = 'translateX(300px)';
        overlay.style.opacity = 0;
        overlay.style.transition = 'opacity 0.3s, visibility 0s 0.3s'
        content.style.marginRight = '0';
         //the menu is closed so we open it
    } else {
        navbar.style.transform = 'translateX(0)';
        overlay.style.visibility = 'visible';
        overlay.style.opacity = 1;
        overlay.style.transition = 'opacity 0.3s, visibility 0s';
        content.style.marginRight = '250px';
    }
});

//clicking on black widget slider exits mobile navbar

 overlay.addEventListener('click', () => {
    navbar.style.transform = 'translateX(300px)';
    overlay.style.opacity = 0;
    overlay.style.transition = 'opacity 0.3s, visibility 0s 0.3s';
    content.style.marginRight = '0';
}); 


