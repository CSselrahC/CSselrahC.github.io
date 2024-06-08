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

// cart button

let addedItems = 0;
var numberOfItemsInCart = document.getElementById("cartNumber");

function addToCart() {
	addedItems++;
	numberOfItemsInCart.innerHTML = addedItems;
	
	if (addedItems > 0) {
		document.getElementById("cartNumber").style.visibility = "visible";
	} else {
		document.getElementById("cartNumber").style.visibility = "hidden";
	}
}

