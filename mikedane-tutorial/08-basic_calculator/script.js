alert("Building a basic calculator with JavaScript!");
alert("We will add two numbers together from a user input");

var num1 = window.prompt("Number 1: ");
var num2 = window.prompt("Number 2: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

alert( "Answer: " + (num1 + num2) );
