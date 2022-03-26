# External Files #

When creating your project in web development, it is best practice to separate your JavaScript commands from your HTML file.

We include the `script` tag inside of the `head` tag where we will call the JavaScript file.

```
<script src="script.js"></script>
```

*The source of the file (`src`) should always be the relative path of the file -* **meaning you have to put the location of where the JavaScript file is coming from.  If the HTML file is in the same folder as the JavaScript file, then all you need to do is put the name of the JavaScript file in the source attribute.**

For the remainder of this tutorial we will be using the external files format.
