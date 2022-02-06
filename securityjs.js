/* Aubrey Eriks.
This script populates the table on the security page with navigator and
screen properties. 
It also adds a map of the user's location and displays location properties.*/

var waitForUser;

function fillTable() {
	document.getElementById("browser").innerHTML = navigator.appName;
	document.getElementById("agent").innerHTML = navigator.userAgent;
	document.getElementById("os").innerHTML = navigator.platform;
	document.getElementById("online").innerHTML = navigator.onLine;
	document.getElementById("screenHeight").innerHTML = screen.height;
	document.getElementById("screenWidth").innerHTML = screen.width;	
}

function geoTest() {
	waitForUser = setTimeout(fail, 10000);
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(createDirections, fail, {timeout: 10000});
	} else { 
		fail();
	}
}
function createDirections(position) {
	clearTimeout(waitForUser);
	var currPosLat = position.coords.latitude;
	var currPosLng = position.coords.longitude;
	var currPosAlti = position.coords.altitude;
	document.getElementById("lat").innerHTML = currPosLat;
	document.getElementById("lon").innerHTML = currPosLng;
	document.getElementById("alti").innerHTML = currPosAlti;
	var mapOptions = {
		center: new google.maps.LatLng(currPosLat, currPosLng),
		zoom: 11
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
function fail() {
	document.getElementById("map").innerHTML = "Cannot access your current location.";
}

function setUpPage() {
	fillTable();
	geoTest();
}

if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}