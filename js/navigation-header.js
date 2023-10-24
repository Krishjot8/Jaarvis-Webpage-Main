let prevScrollPos = window.pageYOffset;
const HeaderNavbar = document.getElementById("navbar");

window.onscroll = function(){
    const currentScrollPos = window.pageYOffset;

    if(currentScrollPos === 0){
    // At the top of the page, make navbar visible with a transparent background
  HeaderNavbar.style.backgroundColor = "transparent";

    }else if (prevScrollPos > currentScrollPos){
 // Scrolling up
        HeaderNavbar.style.backgroundColor = "rgba(0,0,0,7)";
        HeaderNavbar.style.display = "block";
    }else{
 // Scrolling Down

 HeaderNavbar.style.display = "none";
  HeaderNavbar.style.backgroundColor =  "transparent"; //change this
    }
prevScrollPos = currentScrollPos;
    }
