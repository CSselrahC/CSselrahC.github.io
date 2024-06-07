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

// log in
	// password
function passwordVisibility() {
	var passVisible = document.getElementById("password");
	var visibility = document.getElementById("visibilityOfPassword");
	
	if (passVisible.type === "password") {
		passVisible.type = "text";
		visibilityOfPassword.innerHTML = "Hide Password";
	} else {
		passVisible.type = "password";
		visibilityOfPassword.innerHTML = "Show Password";
	}
}

	// email, password
function validateForm() {
	var emailValidate = document.forms["logInForm"]["email"].value;
	var passwordValidate = document.forms["logInForm"]["password"].value;
	
	if ((passwordValidate == "" || passwordValidate == null) && (emailValidate == "" || emailValidate == null)) {
		document.getElementById("passwordErrorMessage").style.visibility = "visible";
		document.getElementById("emailErrorMessage").style.visibility = "visible";
		return false;
	} else if (emailValidate == "" || emailValidate == null) {
		document.getElementById("emailErrorMessage").style.visibility = "visible";
		return false;
	} else if (passwordValidate == "" || passwordValidate == null) {
		document.getElementById("passwordErrorMessage").style.visibility = "visible";
		return false;
	}
}


// switch
function switchLogInSignUp() {
	var signUpSwitch = document.getElementById("SignUp");
	var logInSwitch = document.getElementById("LogIn");
	if (signUpSwitch.style.display === "none") {
		signUpSwitch.style.display = "block";
		logInSwitch.style.display = "none"
	} else {
		signUpSwitch.style.display = "none";
		logInSwitch.style.display = "block"
	}
}

// sign up
	// password
function passwordVisibilitySignUp() {
	var passVisibleSignUp = document.getElementById("passwordSignUp");
	var visibilitySignUp = document.getElementById("visibilityOfPasswordSignUp");
	
	if (passVisibleSignUp.type === "password") {
		passVisibleSignUp.type = "text";
		visibilityOfPasswordSignUp.innerHTML = "Hide Password";
	} else {
		passVisibleSignUp.type = "password";
		visibilityOfPasswordSignUp.innerHTML = "Show Password";
	}
}

function confirmPasswordVisibilitySignUp() {
	var confirmPassVisibleSignUp = document.getElementById("confirmPasswordSignUp");
	var visibilityconfirmPassSignUp = document.getElementById("visibilityOfConfirmPasswordSignUp");
	
	if (confirmPassVisibleSignUp.type === "password") {
		confirmPassVisibleSignUp.type = "text";
		visibilityOfConfirmPasswordSignUp.innerHTML = "Hide Password";
	} else {
		confirmPassVisibleSignUp.type = "password";
		visibilityOfConfirmPasswordSignUp.innerHTML = "Show Password";
	}
}

	// name, email, password, confirm password
function validateFormSignUp() {
	var nameValidateSignUp = document.forms["signUpForm"]["nameSignUp"].value;
	var emailValidateSignUp = document.forms["signUpForm"]["emailSignUp"].value;
	var passwordValidateSignUp = document.forms["signUpForm"]["passwordSignUp"].value;
	var confirmPasswordValidateSignUp = document.forms["signUpForm"]["confirmPasswordSignUp"].value;
	
	if (nameValidateSignUp == "" || nameValidateSignUp == null) {
		document.getElementById("nameErrorMessageSignUp").style.visibility = "visible";
		return false;
	} else if (emailValidateSignUp == "" || emailValidateSignUp == null) {
		document.getElementById("emailErrorMessageSignUp").style.visibility = "visible";
		return false;
	} else if (passwordValidateSignUp == "" || passwordValidateSignUp == null) {
		document.getElementById("passwordErrorMessageSignUp").style.visibility = "visible";
		return false;
	} else if (confirmPasswordValidateSignUp == "" || confirmPasswordValidateSignUp == null) {
		document.getElementById("confirmPasswordErrorMessageSignUp").style.visibility = "visible";
		return false;
	}
	
	if (passwordValidateSignUp !== confirmPasswordValidateSignUp) {
		alert("Please confirm your password.");
		return false;
	}
}

