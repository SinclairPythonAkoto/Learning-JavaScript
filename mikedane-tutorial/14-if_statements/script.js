alert("Creating If Statements!");

/*
Change the value of these variables to false to see the different responses you get.
*/

var isMale = true;
var isTall = true;

if(isMale && isTall){
    document.write("You are a tall male");
} else if(isMale && !isTall){
    document.write("You are a short male");
} else if(!isMale && isTall){
    document.write("you are not male, but you are tall");
} else {
    document.write("You are not tall and not male");
}
