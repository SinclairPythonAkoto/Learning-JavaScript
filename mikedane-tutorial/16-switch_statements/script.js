alert("Creatign Switch Statements");

/*
   We will create a function that will use a swtich statement to calculate 
   the day of the week when we pass in a number from 1 - 7.
 */

// 1 -> Monday
// 2 -> Tuesday
// ...
// 6 -> Saturday
// 7 -> Sunday


function getDayName(dayNum){
	var day;

	switch(dayNum){
		case 1:
			day = "Monday";
			break
		case 2:
			day = "Tuesday";
			break
		case 3:
			day = "Wednesday";
			break
		case 4:
			day = "Thursday";
			break
		case 5:
			day = "Friday";
			break
		case 6:
			day = "Saturday";
			break
		case 7:
			day = "Sunday";
			break
		default:
			day = "Day does not exist. " + dayNum + " is not a valid number.";
	}

	return day;
}

/*
Change the values to see what you get back
*/
document.write(getDayName(4));
