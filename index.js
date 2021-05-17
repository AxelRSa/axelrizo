window.addEventListener("load", function () {
	// loader
	const loader = document.querySelector(".loader");
	loader.className += " loader_out";
	// default #home in URL
	if (!!location.hash) return;
	var link = document.querySelector('.link')
	if (link) link.click();
});

// detect if your phone is rotated in landscape mode
if (window.orientation != 0 && window.orientation !== undefined) {
	alertLandscape.className += (" active");
}
window.addEventListener("orientationchange", function () {
	if (window.orientation != 0) {
		alertLandscape.className += (" active");
	} else if (window.orientation == 0) {
		alertLandscape.className = ("");
	}
})

// check the hash's state
oldTarget = "";
newTarget = "";


setInterval(function () {
	newTarget = location.hash;
	if (newTarget != oldTarget) {
		oldTarget = newTarget;
		menuColor();
		sliderControl.style.display = "none";
		if (oldTarget == "#about") {
			sliderControl.style.display = "flex";
			aboutSlider();
		} //else if (oldTarget == "#projects") {
		//sliderControl.style.display = "flex";
		//projectsSlider()
		//}
	}
}, 100);


// nav's color
function menuColor() {
	// color's reset
	homeLink.style.color = "";
	aboutLink.style.color = "";
	projectsLink.style.color = "";
	contactLink.style.color = "";
	circle.style.borderLeftColor = "";
	circle.style.borderBottomColor = "";
	rizo.style.color = "";
	// colors
	let redColor = "#F5271F";
	let greenColor = "#07F55A";
	let greenColor2 = "#06C248";
	let yellowColor = "#F5D138";
	let yellowColor2 = "#DEBF33";
	let blueColor = "#141AF5";
	// home
	if (oldTarget == "#home") {
		homeLink.style.color = redColor;
		circle.style.borderLeftColor = redColor;
		circle.style.borderBottomColor = redColor;
		rizo.style.color = redColor;
		pageIcon.href = "img/pageIconHome.png"
		//about
	} else if (oldTarget == "#about") {
		aboutLink.style.color = greenColor;
		circle.style.borderLeftColor = greenColor2;
		circle.style.borderBottomColor = greenColor2;
		rizo.style.color = greenColor2;
		pageIcon.href = "img/pageIconAbout.png"
		// projects
	} else if (oldTarget == "#projects") {
		projectsLink.style.color = yellowColor;
		circle.style.borderLeftColor = yellowColor2;
		circle.style.borderBottomColor = yellowColor2;
		rizo.style.color = yellowColor2;
		pageIcon.href = "img/pageIconProjects.png"
		//contact
	} else if (oldTarget == "#contact") {
		contactLink.style.color = blueColor;
		circle.style.borderLeftColor = blueColor;
		circle.style.borderBottomColor = blueColor;
		rizo.style.color = blueColor;
		pageIcon.href = "img/pageIconContact.png"
	};
};


// slider State
slider = 1;
// about slider activator
function aboutSlider() {
	if (window.innerWidth <= 950) {
		slider1();
	}
}
// about media Query listener
var mql = window.matchMedia('(max-width: 950px)');

function screenTest(e) {
	if (e.matches) {
		slider1();
	} else {
		about1.style.opacity = "1";
		about2.style.opacity = "1";
		about3.style.opacity = "1";
	}
}

mql.addListener(screenTest);




// about slider Button 1
function aboutSlider1() {
	circle1.style.r = "70";
	circle2.style.r = "30";
	circle3.style.r = "30";
}

function slider1() {
	about1.style.opacity = "1";
	about2.style.opacity = "0";
	about3.style.opacity = "0";
	sliderArrowLeft.style.opacity = "0";
	sliderArrowRight.style.opacity = "1";
	aboutSlider1()
	slider = 1;
}
// about slider Button 2
function aboutSlider2() {
	circle1.style.r = "30";
	circle2.style.r = "70";
	circle3.style.r = "30";
}

function slider2() {
	about1.style.opacity = "0";
	about2.style.opacity = "1";
	about3.style.opacity = "0";
	sliderArrowLeft.style.opacity = "1";
	sliderArrowRight.style.opacity = "1";
	aboutSlider2();
	slider = 2;
}

// about slider Button 3
function aboutSlider3() {
	circle1.style.r = "30";
	circle2.style.r = "30";
	circle3.style.r = "70";
}

function slider3() {
	about1.style.opacity = "0";
	about2.style.opacity = "0";
	about3.style.opacity = "1";
	aboutSlider3()
	sliderArrowLeft.style.opacity = "1";
	sliderArrowRight.style.opacity = "0";
	slider = 3;
}
// about arrow function
function arrowLeft() {
	if (oldTarget == "#about") {
		if (slider == 2) {
			slider1();
		} else if (slider == 3) {
			slider2();
		}
	} else if (oldTarget == "#projects") {

	}
}

function arrowRight() {
	if (slider == 1) {
		slider2();
	} else if (slider == 2) {
		slider3();
	}
}

// projects slider activator
function projectsSlider() {

}

// dropdown menu
function menu() {
	const menu = document.querySelector(".menu");
	if (menu.className == "menu") {
		menu.className += " active";
	} else {
		menu.className = "menu";
	}
};
// dropdown menu
function menuOut() {
	const menu = document.querySelector(".menu");
	menu.className = "menu";
};

///////////////////
// canvas animation
///////////////////

// about circles Constructor
class circleConstructor {
	constructor(canvasid, color, percentage, imgUrl, imgId) {
		this.id = canvasid;
		this.color = color;
		this.percentage = percentage;
		this.imgUrl = "img/about" + imgUrl + ".png";
		this.img = imgId;
	}
};

// creating objects
cHtml = new circleConstructor(htmlCanvas, "#E96228", "75", "Html");
cCss = new circleConstructor(cssCanvas, "#2173F7", "60", "Css");
cPug = new circleConstructor(pugCanvas, "#EFCCA3", "80", "Pug");
cSass = new circleConstructor(sassCanvas, "#CD669A", "70", "Sass");
cJs = new circleConstructor(jsCanvas, "#EFD81D", "90", "Js");

// searching images
imgHtml = getImage(cHtml, "imgHtml", cHtml.imgUrl)
imgCss = getImage(cCss, "imgCss", cCss.imgUrl)
imgPug = getImage(cPug, "imgPug", cPug.imgUrl)
imgSass = getImage(cSass, "imgSass", cSass.imgUrl)
imgJs = getImage(cJs, "imgJs", cJs.imgUrl)
// searching images function
function getImage(object, variable, imgUrl) {
	variable = new Image();
	variable.src = imgUrl;
	object.img = variable;
}


// creating circles
circlesVariables(cHtml);
circlesVariables(cCss);
circlesVariables(cPug);
circlesVariables(cSass);
circlesVariables(cJs);


// get varibles
function circlesVariables(canvasId) {
	circlesCreation(canvasId.id, canvasId.color, canvasId.percentage, canvasId.img);
};

// circles function
function circlesCreation(canvasId, color, percentage, image) {
	// get context
	let ctx = canvasId.getContext("2d");
	// circles variables
	let x = canvasId.width / 2;
	let y = canvasId.height / 2;
	let r = canvasId.width / 2 - 10;
	let start = (3 * Math.PI) / 2;
	let end = ((percentage * (Math.PI * 2)) / 100) + start;
	ctx.lineWidth = 15;
	ctx.strokeStyle = color;
	// imagen
	image.onload = function () {
		// imagen variables
		let width = 200;
		let height = 200;
		let x = (canvasId.width / 2) - (width / 2);
		let y = (canvasId.height / 2) - (height / 2);
		// imagen drawing
		ctx.drawImage(image, x, y, width, height)
	};
	// draw the circumference
	/////////////////////////

	// for (let i = start; i < end; i += 0.001) {
	// 	setInterval(function () {
	ctx.beginPath();
	ctx.arc(x, y, r, start, end, false);
	ctx.stroke();
	//}, 0)
	// }
}

///////////////////
// canvas animation
///////////////////