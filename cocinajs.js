/* Aubrey Eriks
This file accompanies the Index page and satisfies this requirement:
Plan and add a feature to one of the web pages in your personal site that
 incorporates content or functionality created by a series of if, if/else,
 and/or else if statements, or by a switch statement. If your page requires an event listener,
 create one that’s backward compatible with older versions of Internet Explorer. */


// this function adds info about restaurant hours based on what location is selected
function addHoursInfo() { 
	var selectedLocation = document.getElementById("location").value;
	var hoursTable = document.getElementById("locationtable");
	var data = hoursTable.getElementsByTagName("td");
	var heading = document.getElementsByTagName("h3");
	switch(selectedLocation) {
			case "munster":
				data[0].innerHTML = "10am-9pm";
				data[1].innerHTML = "11am-10pm";
				heading[0].innerHTML = "Munster Location";
				break;
			case "hobart":
				data[0].innerHTML = "11am-9pm";
				data[1].innerHTML = "1pm-11pm";
				heading[0].innerHTML = "Hobart Location";
				break;
			case "":
				data[0].innerHTML = " ";
				data[1].innerHTML = " ";
				heading[0].innerHTML = "Both Locations";
				break;
		}
}

// this section calls the addHoursInfo() function when the script is loaded, then whenever
// the location value is changed
if (window.addEventListener) {
	document.getElementById("location").addEventListener("change", addHoursInfo, false);
} else if (window.attachEvent) {
	document.getElementById("location").attachEvent("onchange", addHoursInfo);
}
addHoursInfo();