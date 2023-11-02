let prevScrollPos = window.pageYOffset;
const Hnavbar = document.getElementById("navbar");

// Check if the page is fully loaded
window.onload = function() {
  // Set the initial background to transparent when the page is fully loaded
  Hnavbar.style.backgroundColor = "transparent";
}

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos === 0) {
    // At the top of the page, make navbar visible with a transparent background
    Hnavbar.style.backgroundColor = "transparent";
  } else if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    Hnavbar.style.backgroundColor = "rgba(0, 0, 0, 1)"; // Set the black background when visible
  } else {
    // Scrolling down
    Hnavbar.style.backgroundColor = "rgba(0, 0, 0, 1)"; // Set the background to transparent
  }

  prevScrollPos = currentScrollPos;
}

let prevScrollPos1 = window.pageYOffset;
const Hnavbar1 = document.getElementById("navbar");

window.onload = function() {
  handleScroll(); // Call the function initially to set the initial background color
}

window.onscroll = function() {
  handleScroll(); // Call the function on scroll to update the background color
}

function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  // Check the screen width
  const mediaQuery = window.matchMedia('(max-width: 576px)');
  
  if (mediaQuery.matches) {
    // If screen width is at most 576px, set the background color to black
    Hnavbar.style.backgroundColor = "rgba(0, 0, 0, 1)";
  } else {
    if (currentScrollPos === 0) {
      Hnavbar.style.backgroundColor = "transparent";
    } else if (currentScrollPos > prevScrollPos) {
      // Scrolling down
      Hnavbar.style.backgroundColor = "rgba(0, 0, 0, 1.8)"; // Set the black background when scrolling down
    } else {
      // Scrolling up or not moving (handled as scrolling up for simplicity)
      Hnavbar.style.visibility = 'none'; // Set the background to transparent
    }
  }

  prevScrollPos = currentScrollPos;
}