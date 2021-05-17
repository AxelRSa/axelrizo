// loader
window.addEventListener("load", 
	function () {
 const left = document.querySelector(".left");
 left.className += " loaderLeft";
 
 const right = document.querySelector(".right");
 right.className += " loaderRight";
});
// open galery
function galeriaMovilOpen() {
	const galeria = document.querySelector(".galeriaMovil");
	galeria.className += " galeriaMovilOpen";
};
// close galery
function galeriaMovilClose() {
	const galeria = document.querySelector(".galeriaMovil");
	galeria.className += "galeriaMovilClose";
};
