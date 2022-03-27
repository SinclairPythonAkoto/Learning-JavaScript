alert("Creating Arrays!");

/*
There two ways in which you can create an array.
You can use the 'new Array()' command,
or you can choose to use the square brackets.
*/

var fruits = new Array();		// creating an empty array
var luckyNumbers = [];			// creating an empty array

fruits = Array("bananna", "apple", "peach");
luckyNumbers = [4, 8, 15, 16, "twenty", false];

document.write( fruits[1] + "<br>" );
document.write( luckyNumbers + "<br>" );
document.write( luckyNumbers.length + "<br>" );
document.write( luckyNumbers[4] + "<br>" );

/*
Change the value of an element within the array
*/
luckyNumbers[4] = 20;
document.write( luckyNumbers + "<br><br>" );

/*
We can also change a string into an array by using the split method
*/
var idCard = "name, age, occupation, location";
idCard = idCard.split(",");

document.write( idCard + "<br>" );
document.write( idCard[0] + "<br>" );
document.write( idCard[1] + "<br>" );
document.write( idCard[2] + "<br>" );

