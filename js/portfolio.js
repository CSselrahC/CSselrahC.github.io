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

// project slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("projectSlides");
	let dots = document.getElementsByClassName("projectDot");
	
	if (n > slides.length) {
		slideIndex = 1;
	}
	
	if (n < 1) {
		slideIndex = slides.length;
	}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" activeDot", "");
	}
	
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " activeDot";
}

// age
var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth() + 1;
var currentDate = new Date().getDate();
var age = currentYear - 2004;

if (currentMonth < 9 || (currentMonth == 9 && currentDate < 6)) {
	age = age - 1;
}

document.getElementById("myAge1").innerHTML = age;
document.getElementById("myAge2").innerHTML = age;

// scroll to about me section
function aboutMeScroll() {
	document.getElementById('aboutMeSection').scrollIntoView();
}

// scroll to projects section
function projectsScroll() {
	document.getElementById('projectsSection').scrollIntoView();
}

function topScroll() {
	window.scrollTo(0, 0);
}