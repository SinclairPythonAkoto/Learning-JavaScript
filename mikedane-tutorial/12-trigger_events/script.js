alert("Creating Trigger Events");

/*
This will change the text within the button from Click me to Clicked
*/

function handleClick(element){
    element.innerHTML = "Clicked";
}


/*
This will change the properties of the image when the mouse hovers over it.
it will slightly enlarge the image with some shadows along the edges.
*/

var image = document.getElementById("image");

image.addEventListener("mouseover", function(){
    this.style = "box-shadow: 2px 2px 2px grey";
    this.width = 110;
});


/*
Revert the changes once the mouse moves away from the picture
using the mouseout event listener
*/

image.addEventListener("mouseout", function(){
    this.style = "";
    this.width = 100;
});
