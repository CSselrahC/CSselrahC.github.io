// header
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// sidebar
function showSidebar() {
	const sidebar = document.querySelector('.sidebar');
	sidebar.classList.toggle('closed');
	
	const overlay = document.querySelector('.overlay');
	overlay.classList.toggle('closed');
}

function hideSidebar() {
	const sidebar = document.querySelector('.sidebar');
	sidebar.classList.toggle('closed');
	
	const overlay = document.querySelector('.overlay');
	overlay.classList.toggle('closed');
}

// slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("foodShowcase");
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

