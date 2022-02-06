/* Aubrey Eriks
This Javascript file accompanies the Time page on the website
It satisfies the project requirement: 
Expand your individual website to include a page that calculates the time elapsed since a date 
entered by a user. The page should include a form that allows users to enter a day, month, and year.
 The page should then calculate and display the elapsed time in years, months, and days. Note that your
 program must include code to convert day values in excess of into months, and months in excess of into years. */
 
 
 /*function to find the elasped time */
function findTime() {
	
	var date = document.getElementById("date");
	var selectedDate = new Date(date.value);
	var todayDate = new Date();
	//to use with the find number of days in month section
	var year = todayDate.getFullYear();
	var month = todayDate.getMonth();
	//run this if statement if the selected date is valid
	if (selectedDate < todayDate) {
		//find the difference between years, months, and days of each date
		var elapsedTime = todayDate.valueOf() - selectedDate.valueOf();
		var years = todayDate.getFullYear() - selectedDate.getFullYear();
		var months = todayDate.getMonth() - selectedDate.getMonth();
		var days = todayDate.getDate() - selectedDate.getDate()
		
		/*At the time of writing this, the selectedDate.getDate() method returns a number one less
		than the date selected on the calendar. I think it's because of a time zone issue with the date
		object, so I'm not going to add one to the selectedDate value to fix it. Unfortunately I don't know
		how to fix the time zone issue, though. :( */
		console.log(selectedDate.getDate()) 

		//if the days value is negative
		if (days < 0) {
		//find number of days in month. The numbers are one greater than they should be because I want the number of days
		//in the month before the current month 
			if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 0) { // jan, mar, may, jul, aug, oct, dec
				daysInMonth = 31;
			} else if (month === 2)	{ //feb
				if (year % 4 === 0) {
					if (year % 100 === 0) {
						// year ending in 00 not a leap year unless divisible by 400
						if (year % 400 === 0) {
						daysInMonth = 29;
						} else {
							daysInMonth = 28;
						}
					} else {
						daysInMonth = 29;
					}
				} else {
					daysInMonth = 28;
				}
			} else if (month === 4 || month === 6 || month === 9 || month === 11) { //apr, jun, sep, nov
				daysInMonth = 30;
			}
			//convert the negative days
			days = daysInMonth + days
			months -= 1;
	
		}
		
		//if the month value is negative
		if (months < 0) {
			months = 12 + months
			years -= 1
		}
	
	document.getElementById("time").innerHTML = years + " years, " + months + " months, " + days + " days."; 
	
	} else { 
	document.getElementById("time").innerHTML = "Please enter a date in the past."; 
	}
}
 

 
 /*create an event listener */
function createEventListener() {
	var calc = document.getElementById("calculate");
	if (calc.addEventListener) {
		calc.addEventListener("click", findTime, false);
	} else if (calc.attachEvent) {
	calc.attachEvent("onclick", findTime);
	}
}
 
 if (window.addEventListener) {
	window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListener);
}