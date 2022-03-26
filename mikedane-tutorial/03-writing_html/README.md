# Writing HTML #

Not only can we create instructions for our HTML file, but we can also write HTML within our JavaScript (`.js`) file.

We will print out a silmple `Hello World` statement as a header along with a simple shape, but in reality this enables us to create some complex functions within the websites / programs we will eventually create.

As you can see, I you can create your HTML tags within your `.js` file and then call it your HTML file.  This can be called in your `<head></head>` tag or inside the `<body></body>` tag.

In my example I am using 2x different `.js` files to be executed in both areas of the HTML file.  This further demonstrates the ability to separate your JavaScript code into separate `.js` files, and to control how & where you use them.



**REAMEMBER!!**

You can use `document.write("...")` to write strings into the HTML `<head></head>` tag, but to do this in the `<body></body>` tag you will need to use the HTML tags ie. `document.write("<h1>...<h1>")`
