alert("Building A PAssword Checker With JavaScript!");

/*
You can change the password to whatever you like!
*/

var password = "wordpass";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

while(response != password && !error){
     if(entryCount < entryLimit){
          response = window.prompt("Enter Password");
          entryCount++;
     } else {
          error = true;
     }
}

if(error){
     alert("Too many entries");
} else {
     alert("Success");
}
