	/* background change */

	let darkMode = document.getElementById("dark-change");
	let content = document.getElementsByTagName("body")[0];

	darkMode.addEventListener("click", bgFunct);
	
	function bgFunct() {
		content.classList.toggle("night");
	}
	
	/* header and footer change */
	let headcontent = document.getElementsByTagName("header")[0];
	let footcontent = document.getElementsByTagName("footer")[0];

	darkMode.addEventListener("click", headFunct);
	darkMode.addEventListener("click", footFunct);
	
	function headFunct() {
		headcontent.classList.toggle("night");
	}
	
	function footFunct() {
		footcontent.classList.toggle("night");
	}
	
	/* background change button */
	let picture = document.getElementById("dark-change");
	let darkID = document.getElementById("darkID");
	picture.addEventListener("click", bgButton);

	function bgButton(){
		darkID.innerHTML == 'Dark Mode';
		if (darkID.innerHTML == 'Dark Mode' ) {
			darkID.innerHTML = 'Light Mode'
			picture.src = 'IMAGES/doge_circle.png'
		}

		else if (darkID != 'Light Mode' ){
			darkID.innerHTML = 'Dark Mode'
			picture.src = "IMAGES/doge_circle_invert.png"
		}
	}
	
	/* logo */
	let logo = document.getElementById("dark-change");
	let logoID = document.getElementById("logoID");
	logo.addEventListener("click", bgLogo);

	function bgLogo(){
		logoID.innerHTML == 'logolight';
		if (logoID.innerHTML == 'logolight' ) {
			logoID.innerHTML = 'logodark'
			fblogo.src = 'IMAGES/fblogo_dark.png'
			iglogo.src = 'IMAGES/iglogo_dark.png'
			twtlogo.src = 'IMAGES/twtlogo_dark.png'
			ytlogo.src = 'IMAGES/ytlogo_dark.png'
		}

		else if (logoID != 'logodark' ){
			logoID.innerHTML = 'logolight'
			fblogo.src = 'IMAGES/fblogo_light.png'
			iglogo.src = 'IMAGES/iglogo_light.png'
			twtlogo.src = 'IMAGES/twtlogo_light.png'
			ytlogo.src = 'IMAGES/ytlogo_light.png'
		}
	}
	
	/* sticky header */
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
	
	/* name */
	let nameFull = document.getElementById("infoName");
	let nameID = document.getElementById("nameID");
	
	nameFull.addEventListener("click", nameFunct);

	function nameFunct() {
		nameID.innerHTML == 'FNWOM';
		if (nameID.innerHTML == 'FNWM' ) {
			nameID.innerHTML = 'FNWOM'
			nameFull.innerHTML = '<p> <div id="infoColor1"> Name: </div> Charles Serrano Carreon </p>'
		}

		else if (nameID != 'FNWM' ){
			nameID.innerHTML = 'FNWM'
			nameFull.innerHTML =  '<p> <div id="infoColor1"> Name: </div> Charles S. Carreon </p>'
		}
	} 
	
	/* age */
	
	var currentYear = new Date().getFullYear();
	var currentMonth = new Date().getMonth() + 1;
	var currentDate = new Date().getDate();
	
	var age = currentYear - 2004;
	
	if (currentMonth < 9 || (currentMonth == 9 && currentDate < 6)) {
        	age = age - 1;
    	}
	
	document.getElementById("myAge").innerHTML = age;
	
	/* intro */
	let introToggle = document.getElementById("aboutMe");
	let ykIntro = document.getElementById("intro");
	let introID = document.getElementById("introID");
	
	introToggle.addEventListener("click", introFunct);

	function introFunct() {
		introID.innerHTML == 'noIntro';
		if (introID.innerHTML == 'noIntro' ) {
			introID.innerHTML = 'withIntro'
			ykIntro.innerHTML = "<p> My name is Charles Carreon. I'm " + age + " years old. My house is in Laguna, where all the villas are, and I am not married. I currently don't work, and I am at home almost every day. I don't smoke, and I don't drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone. </p>"
		}

		else if (introID != 'noIntro' ){
			introID.innerHTML = 'noIntro'
			ykIntro.innerHTML =  '<p> </p>'
		}
	}
