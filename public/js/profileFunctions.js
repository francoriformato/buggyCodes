
function showAvatars(userLevel) {

var avid5 = document.getElementById("avatar5link");
var avid6 = document.getElementById("avatar6link");
var avid7 = document.getElementById("avatar7link");


if ( userLevel > 5 ) {
    avid5.style.display = "block";
}

if (userLevel > 8 ) {
    avid6.style.display = "block";
}

if (userLevel > 10) {
    avid7.style.display = "block";
}

}
	
