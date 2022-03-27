# Creating Arrays #

Arrays in JavaScript are basically containers that allow us to store more that one piece of data.  *The key thing here is that an array can hold different types of data also (strings, integers, floats, booleans and even lists!)*

To create an array we use define the variable name then use the squared brackets `[]`.  The values within the `[]` are the elements of the array.
```
var luckyNumbers = [4, 8, 15, 16, "twenty", false];
//  indexes:        0  1   2   3     4       5
```
Just as in string indexes, an array index starts from 0.

With array indexes we can access an element and change the value.
```
luckyNumbers[0] = 90;
document.write(luckyNumbers[0] + "<br>");
```

You can also find the length of an array by using the `length` array method.
```
document.write(luckyNumbers.length);
```

There are many more array methods, you can find more [here](https://www.w3schools.com/js/js_array_methods.asp).
