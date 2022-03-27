/*
Below are a examples of some simple variables.  We will then combine them together in a print statment.
We can also prodcue conditional logic with these statements, but that will be for later in the tutorial!
*/

alert("Creating Variables!");

var name = "Sinclair";				// string with double qoutes
var occupation = 'developer';		// string with single qoutes

var age = 35						// integer
var height = 5.11					// float

var isShort;						// boolean true/false
var isTall;
isShort = false;
isTall = true;

document.write("You name is " + name + "<br/>");
document.write("Your age is: " + age + "<br/>");
document.write("Your height: " + height + " ft <br/><br/>");


/*
Now we will create variables for the example in the README.md.
You will also see how we can change the value of the variables as we please.
*/

characterName = "George";
characterAge = 70

document.write("There once was a man named " + characterName + "<br/>");
document.write("He was " + characterAge + " years old <br/>");
document.write("He really liked the name " + characterName + "<br/>");
document.write("But didn't like being " + characterAge + "<br/>");

characterAge = 18

document.write(characterName + " wished he was " + characterAge + " again! <br/>");
