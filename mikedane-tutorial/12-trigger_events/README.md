# Trigger Events #

### Inline Event Listeners ###
Event listeners allow you to monitor certain HTML elements or certain elements of the HTML page; when the user ineteracts with them it performs certain functions.

A JavaScript [event](https://www.w3schools.com/js/js_events.asp) allows you to execute a function when the user interacts with a HTML element.
Here are some of the most common HTML events:
```
onchange
onclick
onmouseover
onmouseout
onkeydown
onload
```
There are more events which you can find [here](https://www.w3schools.com/jsref/dom_obj_event.asp).

Lets say we used the `onlclick` event which was placed in a button HTML tag.  This would mean that everytime the button is clicked we could activate a function like executing an alert message.

#### HTML file ####
```
<button id="myBtn" onclick="alert('You clicked me");">Click Here</button>
```

What we can do is create a function in a `.js` file and pass that in the `onclick` event.  This helps make the code more structured and organised - especially if your code has many events.

#### HTML file ####
```
<button id="myBtn" onclick="handleClick()";">Click Here</button>
<script src="script.js"></script>
```

#### JavaScript file ####
```
function handleClick(){
    alert("You cklickd me!");
}
```

What we will now do is try to change the text on the button.  To be able to do this you will need access to the button; we do this by passing ina parameter inside of the handleClick function.  We can pass in the current element that is getting clicked by using the `this` keyword as a parameter.
In the JavaScript file we will need to change the function so it accepts a parameter (which will be the element that got clicked).  After this we can modify the text of the button by using `innerHTML`.

#### HTML file ####
```
<button id="myBtn" onclick="handleClick(this)">Click Here</button>
<script src="script.js"></script>
```

#### JavaScript file ####
```
function handleClick(element){
    element.innerHTML ="Clicked";
}
```

By having access to the element and it's attributes, we can also modify the button by changing it's colour or adding a range of new attributes to the element.

### Programatically Adding Event Listeners ###
So far we have had to add events into the HTML element where we would like to apply our code; however we can create event listeners in our `.js` file by using the `addEventListener()` method.
This function needs *2x parameters*; the first parameter is the event you want to use, the second parameter is the code.  In our example we will create a function that will change the properties of an image when the mouse is hovering over it.  
When creating a function as the 2nd parameter notice how we only need to invoke the function keyword followed by parenthesis `function()` and do not need to create a function name.
 
To access the element of the picture we can use the `this` keyword because it wil represent the element that has just been moused over

#### HTML file ####
```
<img id="image" src="pic.png" width="100">
<script src="script.js"></script>
```

#### JavaScript file ####
```
var image = document.getElementById("image");
image.addEventListener("mouseover", function(){
    this.style = "box-shadow: 2px 2px 2pc grey";
    this.width = 110;
});
```

If we run this code the function will work but only partially.  When the mouse hovers over the image, the image will get slightly bigger; however when the mouse hovers away from the image, the image stays the same size.  We don't want this!  We want the image to revert back to it's original size, to do this we will need to add an another event listenting - the event we will use for this is `mouseout`.
We can create this in a separate `addEventListener`.

#### JavaScript File ####
```
//adding the mouseout event listener

image.addEventListener("mouseout", function(){
    this.style = "";
    this.width = 100;
});
```

This should now have the desired effect.
