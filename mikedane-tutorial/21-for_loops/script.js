alert("Creating For Loops!");


for(var i = 0; i < 5; i++){
     document.write(i + "<br>");
}
document.write("<br>");


/* 
iterating through a list
*/
var luckyNums = [4, 8, 15, 16, 23, 42];
luckyNums.forEach(function(luckyNum){
     document.write(luckyNum + "<br>");
});
document.write("<br>");


/*
interating through a list
*/
var friends = ["Jim", "John", "Jane", "Jason", "Jack", "Joseph", "Juliet"]
for(var index = 0; index < friends.length; index++){
	document.write(friends[index] + "<br>");
}
