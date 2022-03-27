alert("Accessing HTML Elements!");

var header = document.getElementById("userName");
header.style.color = "blue";

document.write( header.getElementbyAttribute("nickname") );
header.innerHTML = "Sinclair JavaScript Akoto";
