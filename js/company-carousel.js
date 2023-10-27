

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".company-carousel-inner");
  const companies = document.querySelectorAll(".company-carousel img");
  const companyWidth = 260; // Width of each company item
  let currentIndex = 0;
  let carouselInterval;
  const carouselSpeed = 4000; // Adjust the speed as needed (milliseconds)

  // Function to show next set of companies
  const showNextCompanies = () => {
    if (currentIndex < companies.length - 4) {
      currentIndex += 1;
      carousel.style.transform = `translateX(-${currentIndex * companyWidth}px)`;
    } else {
      // Restart from the beginning if all companies have been shown
      currentIndex = 0;
      carousel.style.transform = "translateX(0)";
    }
  };

  // Start the carousel auto-play
  const startCarousel = () => {
    carouselInterval = setInterval(showNextCompanies, carouselSpeed);
  };

  // Pause the carousel on company hover
  companies.forEach(function (company) {
    company.addEventListener("mouseover", function () {
      clearInterval(carouselInterval);
    });

    company.addEventListener("mouseout", function () {
      startCarousel();
    });
  });

  // Start the carousel initially
  startCarousel();
}); 

