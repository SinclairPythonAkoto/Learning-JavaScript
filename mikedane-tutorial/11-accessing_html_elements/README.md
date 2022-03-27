# Accessing HTML Elements #

With JavaScript we can access elements within our websites by using the `getElementById` method, and also the `getElementbyAttribute` method.

`getElementById` allows you to access all of the attributes wihtin the selected HTML tag.  Having access to all the attributes we can modify the data within the attributes and even add extra attributes to the selected HTML element.

To change the data within an element we can use the `innerHTML` method.  You can also use `getElementbyAttribute` to change the value of a specific attribute within a HTML tag.

As explained before, not only can you change the value of attributes, you can also add extra attributes - by calling the variable name then putting a fullstop, followed by the attribute name you wish to invoke eg. `variableName.style.color`.

#### Code within HTML ####
```
<h1 id="userName" nickname="sakoto">Sinclair Python Akoto</h1>
<a id="link" href="https://www.google.com">Search Internet</a>
<script src="script.js"></script>
```

#### script.js ####
```
var header = document.getElementById("userName");
header.style.color = blue;

document.write( header.getElementbyAttribute("nickname") );
header.innerHTML = "Sinclair JavaScript Akoto";

var link = document.getElementById("link");
link.href = "https://www.amazon.com";
link.innerHTML = "Search products";
```

**REMEMBER!!**

You need to place the `script` tag below the HTML elements you wish to change.  It would be probably easier to place the `script` tag at the botom of the `body` tag so then you will know that the chnages will definately be applied - but this is not compulsory.
