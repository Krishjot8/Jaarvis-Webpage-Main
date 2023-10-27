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
