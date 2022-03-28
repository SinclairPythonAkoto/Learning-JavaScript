alert("Building A Messaging App!");

// create variables for the elements you want to interact with
var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

// create event listener
button.addEventListener("click", function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    message.appendChild(newMessage);
    textbox.value = "";
});
