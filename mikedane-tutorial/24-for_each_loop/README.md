# For Each Loop #

For each loops are special type of for loops that you can use to loop through arrays in JavaScript.

When you create your array, you need to use the `forEach(function(){})` keyword against it, then pass the array as the function parameter.  Inside the curly bracets is where you execute your code block.

***This code block will be executed on each element within the array.***
```
var luckyNums = [4, 8, 15, 16, 23, 42];
luckyNums.forEach(function(luckyNum){
     document.write(luckyNum + "<br>");
});
```

*Notice how we only need to call the array name `luckyNums` instead of it's index to print out the elements.*
