alert("Creating functions with JavaScript!");

/*
Creating a simple function
*/

function hello(){
    document.write("Hello");
}

hello();
document.write("<br>");

/*
Function with 1x parameter
*/

function greeting(name){
    document.write("Hello " + name);
}

greeting("Sinclair");
document.write("<br>");

/*
Function with 2x parameters
*/

function sayHi(name, age){
    document.write("Hello " + name + ", you are " + age);
}

sayHi("Sinclair", 35);
document.write("<br>");

/*
Creating a function and putting it into a variable
*/

function addNumbers(num1, num2){
    return num1 + num2;
}

var sum = addNumbers(4, 60);
document.write(sum);
