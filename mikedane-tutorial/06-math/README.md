# Mathematics with JavaScript #

When using numbers and math with JavaScript, you need to consider **integers & floats**.

*Integers*

Integers are often used to store thing that can't be broken up, like the number of minutes in the hour (you wouldn't say it 10:42.5). They can also be used for counting the number of times something has happened.

*Floats*

Floats are often used when precision is a factor, like in scientific measurements, or in many cases when representing percentages (0.0 - 1.0).

Any time you're working with numbers in your programs, you always want to be aware of the type of number you're using, be it an integer or a float. Failure to do say may result in aspects of your program not performing as intended, or math calculations not giving precise enough answers.

### Math Operations ###
Like in other programming languages, you can use JavaScript to do math operations (from basic math to more complex operations).
```
document.write( 2 * 3 + "<br>" );       // Basic Arithmetic: +, -, /, *
document.write( 2**3 + "<br>" );        // Exponents
document.write( 10 % 3 + "<br>" );      // Modulus Op. : returns remainder of 10/3
document.write( 1 + 2 * 3 + "<br>" );   // order of operations
document.write(10 / 3.0 + "<br><br>");  // int's and doubles
```

### Modulo Operator ###
This basically divides two numbers against each other and returns the remainder.  To do this operation we must use the `%` sign; so if we do `10 % 3` the answer we would get back is `1` because after 3 is divided into 10 3x times, the remainding value is 1.
```
document.write( 10 % 3 + "<br>" );
// output: 1
```

### Math Object Methods ###
We can use the `Math` object method to help us to simplify our mathematical tasks.  `Math` is not a constructor; this means that all properies/methods of `Math` can be called by using `Math` as an object without creating it.

We will go through a small number of Math methods, but you find a more extensive list [here](https://www.w3schools.com/jsref/jsref_obj_math.asp).

#### Power of ####
To find the power of a number *(like 2 to the power of 3)* we use the `Math.pow()` method.  The example below is the same as typing `2**3`.
```
document.write( Math.pow(2, 3) + "<br>" );
// output: 8
```

#### Square Root ####
We can find the square root of a number by using the `Math.sqrt.()` method.
```
document.write( Math.sqrt(144) + "<br>" );
// output: 12
```

#### Round ####
We can round our value to the nearest integer by using the `Math.round()` method.
```
document.write( Math.round(2.7) + "<br>" );
// output: 3
```
