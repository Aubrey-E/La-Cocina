/* Aubrey Eriks
This file accompanies the Order page and satisfies the requirements:
Plan and add a feature to one of the web pages in your personal site that
 uses at least one function to perform a mathematical calculation based on 
 user input. Test the page to ensure it works as planned. */
 /* Add exception handling to the code for one of the forms on
 your personal web site. If your site does not include a form, add one
 first. Your code should display one or more relevant error messages in an 
 appropriate location. After you finalize your code, write a summary of the 
 debugging methods from this chapter that you used in this project, 
 describing how you used each one in your code. */
 /*Add validation the code for one of the forms on your individual website. First,
 ensure that your form uses at least three of the following field types: check boxes, text boxes, 
 option buttons, selection lists, and text areas. Then, program validation for your form ensuring 
 that users enter values or make selections in all fields, and verifying at least one other aspect 
 of at least one of the fields. Provide appropriate feedback to users when the form fails validation.
 Test your completed program until all validation works reliably with different combinations of valid 
 and erroneous data.*/
 /*Enhance the feedback form in your project to enable users to choose one or more options from a list
 of at least five options. Include code that adds user selections to either an array or an object, and 
 ensure that if a user deselects one of the options, it is removed from the array or object. 
 Add code to convert the array or object to a string. */
 /*Enhance the personal website you’ve created in the preceding chapters of this book to 
 prevent security issues. To do this, review each form field in your site and identify any 
 additional validation that you could reasonably add. In particular, look for situations where
 you could use a regular expression to limit the allowable characters in order to exclude 
 characters used in creating JavaScript code. */

 
 /* The debugging method that I needed to use most often was opening the web console to check
 for any syntax errors. I make them pretty often and need to fix them. I also used console.log()
 to check the values of variables like "valid" while creating the try/catch/finally statements.
I also validate my html and css with w3 validators. */
 
 //global variable
var cost = 0
var formValidity = true;
var freeSides = [];
var freeSidesString;

function calcOrder() {
	//multiply the value entered in each input by the dollar value *100
	var enc = document.getElementById("enchilada").value * 1199;
	var bur = document.getElementById("burrito").value * 1299;
	var chi = document.getElementById("chimi").value * 1199;
	var fa = document.getElementById("fajita").value * 1299;
	var taco = document.getElementById("taco").value * 1099;
	var bean = document.getElementById("bean").value * 99;
	var rice = document.getElementById("rice").value * 99;
	var que = document.getElementById("queso").value * 99;
	var guac = document.getElementById("guac").value * 99;
	var pico = document.getElementById("pico").value * 99;
	var cof  = document.getElementById("coffee").value * 99;
	var horc = document.getElementById("horchata").value * 199;
	//add up the cost and divide by 100
	cost = (enc + bur + chi + fa + taco + bean + rice + que + guac + pico + cof + horc) / 100
	//display the value on the webpage
	orderdiv.getElementsByTagName("p")[0].innerHTML = "Your order amount before tax is:"
	orderdiv.getElementsByTagName("p")[1].innerHTML = "$" + cost;
}


function verifyOrder() {
	var inputs = document.querySelectorAll("#dishes input");
	var elementCount = inputs.length;
	
	//use try/catch/finally statement to check if entered numbers are negative
	var valid = true;
	var positive = true;
	var under11 = true;
	var number = true;
	orderdiv.getElementsByTagName("p")[2].innerHTML = "";
	
	try {
		for (var i = 0; i < elementCount; i++) {
			currentElement = inputs[i];
			if (currentElement.value < 0) {
				positive = false;
			}
		}
		if (positive === false) {
			throw "Please enter a positive number. <br>";
		}
	}
	catch(message) {
		valid = false;
		orderdiv.getElementsByTagName("p")[2].innerHTML += message;
		orderdiv.getElementsByTagName("p")[0].innerHTML = ""
		orderdiv.getElementsByTagName("p")[1].innerHTML = "";
	}
	finally {
		checkValid(valid);
	}
	//use another try/catch/finally to make sure entered number is 10 or below
	try {
		for (var i = 0; i < elementCount; i++) {
			currentElement = inputs[i];
			if (currentElement.value > 10) {
				under11 = false;
			}
		}
		if (under11 === false) {
			throw "Please enter a number less than 11. <br>"
		}
	}
	catch(message) {
		valid = false;
		orderdiv.getElementsByTagName("p")[2].innerHTML += message;
		orderdiv.getElementsByTagName("p")[0].innerHTML = ""
		orderdiv.getElementsByTagName("p")[1].innerHTML = "";
	}
	finally {
		checkValid(valid);
	}
	//use another try/catch/finally to ensure that input is a number
		try {
		for (var i = 0; i < elementCount; i++) {
			currentElement = inputs[i];
			if (isNaN(currentElement.value) && currentElement.value !== "") {
				number = false;
			}
		}
		if (number === false) {
			throw "Please enter a number value. \n"
		}
	}
	catch(message) {
		valid = false;
		orderdiv.getElementsByTagName("p")[2].innerHTML += message;
		orderdiv.getElementsByTagName("p")[0].innerHTML = ""
		orderdiv.getElementsByTagName("p")[1].innerHTML = "";
	}
	finally {
		checkValid(valid);
	}

	

	//validate phone
	var phone = document.getElementById("phone");
	try {
		if (/^\d{3}-\d{3}-\d{4}$/.test(phone.value) === false && phone.value !== "") {
			throw "Enter a phone number in format ###-###-####<br>";
	  }
		
	}
	catch(message) {
		valid = false;
		orderdiv.getElementsByTagName("p")[2].innerHTML += message;
		orderdiv.getElementsByTagName("p")[0].innerHTML = ""
		orderdiv.getElementsByTagName("p")[1].innerHTML = "";
	}
	finally {
		checkValid(valid);
	}


//validate name
	var name = document.getElementById("name");
	try {
		if (/\W/.test(name.value) === true) {
			throw "Name must contain only letters.<br>";
	  }
		
	}
	catch(message) {
		valid = false;
		orderdiv.getElementsByTagName("p")[2].innerHTML += message;
		orderdiv.getElementsByTagName("p")[0].innerHTML = ""
		orderdiv.getElementsByTagName("p")[1].innerHTML = "";
	}
	finally {
		checkValid(valid);
	} 

	
	//validate message

	var message = document.getElementById("requests");
	try {
		if (/[^A-Za-z0-9 .,!?']/.test(message.value) === true) {
			throw "Your request may not use special characters.<br>";
	  }
		
	}
	catch(message) {
		valid = false;
		orderdiv.getElementsByTagName("p")[2].innerHTML += message;
		orderdiv.getElementsByTagName("p")[0].innerHTML = ""
		orderdiv.getElementsByTagName("p")[1].innerHTML = "";
	}
	finally {
		checkValid(valid);
	}
	
}



function checkValid(valid) {
	if (valid) { 
		calcOrder();
	}
}


/* The above validity checks only show information on the page. The following functions are to
verify the submission of the form. */

function validateSubmit() {
	var inputs = document.querySelectorAll("#dishes input");
	var elementCount = inputs.length;
	var requiredValidity = false;
	var currentElement;
	orderdiv.getElementsByTagName("p")[2].innerHTML = ""; //clear error messages from last submit
	verifyOrder() //rewrite any error messages made by the verify order function
	
	//if an error is already displayed, the form is not valid
	if (orderdiv.getElementsByTagName("p")[2].innerHTML !== "") {
		formValidity = false;
	}
	
	//check that at least one item is ordered
	try {
		for (var i = 0; i < elementCount; i++) {
			currentElement = inputs[i];
			if (currentElement.value !== "") {
				requiredValidity = true;
			}
		}
		if (requiredValidity === false) {
			throw "Please order at least one item. <br>";
		}
	}
	catch (message) {
		orderdiv.getElementsByTagName("p")[2].innerHTML += message;
		formValidity = false;
	}
	
	//check that a name and phone number are entered
	var name = document.getElementById("name").value
	var phone = document.getElementById("phone").value
	if (name === "") {
		orderdiv.getElementsByTagName("p")[2].innerHTML += "Please enter a name. <br>";
		formValidity = false;
	}
if (phone === "") {
		orderdiv.getElementsByTagName("p")[2].innerHTML += "Please enter a phone number. <br>";
		formValidity = false;
	}
	
	//check that a location is entered
	var locations = document.getElementsByName("location");
	if (!locations[0].checked && !locations[1].checked) {
		orderdiv.getElementsByTagName("p")[2].innerHTML += "Please select a location. <br>";
		formValidity = false;
	}
}







function validateForm(evt) {
	//prevent the form from submitting
	if (evt.preventDefault) {
		evt.preventDefault(); 
	} else {
		evt.returnValue = false; 
	}
	formValidity = true;
	//check if form is valid
	validateSubmit();
	
	//if it is valid, then submit the form
	if (formValidity === true) {
		document.getElementsByTagName("form")[0].submit();
	}
}


//create a list from the checkbox inputs
function listSides(event) {
   if (event === undefined) { //get caller element in IE8
    event = window.event;
   }
   var callerElement = event.target || event.srcElement;
   var side = callerElement.value;
   if (callerElement.checked) { 
	freeSides.push(side); //add the side to list
   } else {
		for (var i = 0; i < freeSides.length; i++) {
			if (freeSides[i] === side) {
				freeSides.splice(i, 1); //remove the side from list
				break;
			}
		}
	}
	freeSidesString = freeSides.toString();
}



//creates event listeners for each input
function createListeners() {
	//variables
	var sides = document.getElementsByName("freeSide");
	var dishes = document.getElementsByName("dish");
	//call the verify order to show real time feedback as the user changes the form
	if (window.addEventListener) {
	for (var i = 0; i < dishes.length; i++) {
        dishes[i].addEventListener("change", verifyOrder, false);
    }
	document.getElementById("requests").addEventListener("change", verifyOrder, false);
	document.getElementById("name").addEventListener("change", verifyOrder, false);
	document.getElementById("phone").addEventListener("change", verifyOrder, false);
	
	//validate the form when it is submitted
	document.getElementsByTagName("form")[0].addEventListener("submit", validateForm, false);
	
	//add checkbox items to a list
	for (var i = 0; i < sides.length; i++) {
        sides[i].addEventListener("change", listSides, false);
    }
	
	
	} else if (window.attachEvent) {
	for (var i = 0; i < dishes.length; i++) {
        sides[i].attachEvent("onchange", verifyOrder);
	}
	document.getElementById("requests").attachEvent("onchange", verifyOrder);
	document.getElementById("name").attachEvent("onchange", verifyOrder);
	document.getElementById("phone").attachEvent("onchange", verifyOrder);
	
	document.getElementsByTagName("form")[0].attachEvent("onsubmit", validateForm);
	
	for (var i = 0; i < sides.length; i++) {
        sides[i].attachEvent("onchange", listSides);
	}
	
	
	}
}
//call the functions (calcOrder must be called to initially write 0)
function setUpPage() {
	calcOrder();
	createListeners();
}
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}











/* Original functions that have been changed: */

/*
function verifyOrder() {
	var enc = document.getElementById("enchilada").value;
	var bur = document.getElementById("burrito").value;
	var chi = document.getElementById("chimi").value;
	var fa = document.getElementById("fajita").value;
	var taco = document.getElementById("taco").value;
	var bean = document.getElementById("bean").value;
	var rice = document.getElementById("rice").value;
	var que = document.getElementById("queso").value;
	var guac = document.getElementById("guac").value;
	var pico = document.getElementById("pico").value;
	var cof  = document.getElementById("coffee").value;
	var horc = document.getElementById("horchata").value;
	//use try/catch/finally statement to check if entered numbers are negative
	var valid = true;
	orderdiv.getElementsByTagName("p")[2].innerHTML ="";
	try {
		if (enc < 0 || bur < 0 || chi < 0 || fa < 0 || taco < 0 || bean < 0 || rice < 0 || que < 0 || guac < 0 || pico < 0 || cof < 0 || horc < 0) {
			throw "Please enter a positive number.";
		}
	}
	catch(message) {
		valid = false;
		orderdiv.getElementsByTagName("p")[2].innerHTML = message;
		orderdiv.getElementsByTagName("p")[0].innerHTML = ""
		orderdiv.getElementsByTagName("p")[1].innerHTML = "";
	}
	finally {
		checkValid(valid);
	}
	//use another try/catch/finally to make sure entered number is 10 or below
	try {
		if (enc > 10 || bur > 10 || chi > 10 || fa > 10 || taco > 10 || bean > 10 || rice > 10 || que > 10 || guac > 10 || pico > 10 || cof > 10 || horc > 10) {
			throw "Please enter a number less than 11.";
		}
	}
	catch(message) {
		valid = false;
		orderdiv.getElementsByTagName("p")[2].innerHTML = message;
		orderdiv.getElementsByTagName("p")[0].innerHTML = ""
		orderdiv.getElementsByTagName("p")[1].innerHTML = "";
	}
	finally {
		checkValid(valid);
	}
}

*/


	/*
	document.getElementById("enchilada").addEventListener("change", verifyOrder, false);
	document.getElementById("burrito").addEventListener("change", verifyOrder, false);
	document.getElementById("chimi").addEventListener("change", verifyOrder, false);
	document.getElementById("fajita").addEventListener("change", verifyOrder, false);
	document.getElementById("taco").addEventListener("change", verifyOrder, false);
	document.getElementById("bean").addEventListener("change", verifyOrder, false);
	document.getElementById("rice").addEventListener("change", verifyOrder, false);
	document.getElementById("queso").addEventListener("change", verifyOrder, false);
	document.getElementById("guac").addEventListener("change", verifyOrder, false);
	document.getElementById("pico").addEventListener("change", verifyOrder, false);
	document.getElementById("coffee").addEventListener("change", verifyOrder, false);
	document.getElementById("horchata").addEventListener("change", verifyOrder, false);
	
	*/

	/*
	document.getElementById("enchilada").attachEvent("change", verifyOrder);
	document.getElementById("burrito").attachEvent("change", verifyOrder);
	document.getElementById("chimi").attachEvent("change", verifyOrder);
	document.getElementById("fajita").attachEvent("change", verifyOrder);
	document.getElementById("taco").attachEvent("change", verifyOrder);
	document.getElementById("bean").attachEvent("change", verifyOrder);
	document.getElementById("rice").attachEvent("change", verifyOrder);
	document.getElementById("queso").attachEvent("change", verifyOrder);
	document.getElementById("guac").attachEvent("change", verifyOrder);
	document.getElementById("pico").attachEvent("change", verifyOrder);
	document.getElementById("coffee").attachEvent("change", verifyOrder);
	document.getElementById("horchata").attachEvent("change", verifyOrder);
	*/
