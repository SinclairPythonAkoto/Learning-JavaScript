# Creating Functions #

The use of functions helps your code to be organised and prevents you from continuously rewriting code if you are using it more than once.

There's a principle in software development which all good programmers try to follow called the DRY principle. It stands for *"Don't repeat yourself"*. In other words, it means, **don't write the same code twice!**

To create a fnction we have to invoke the `function` keyword, then give it a *name*, then we can create our code inside of the function.
```
function sayHi(){
    document.write( "Hello" );
}
```
***When creating a function name, it is really important that you give it a good name that is readable and clearly defines the purpose of the function.  This will prevent your code from being misunderstood and less readable.***

When we want to call the function all we need to do is write the name of the function followed by the parenthesis.
```
sayHi();
```

### Parameters and Arguments ###
When creating a function we can add parameters to it; this is basically saying that the function is expecting a value (or a set of values) to be passed into the function where it with then use to execute the code with.  **These values are what we call paraemters.**

For our example, we will pass in a name to the `sayHi()` function so it will return a string with the name included.
```
function sayHi(name){
   document.write( "Hello " + name );
}
```

When calling a function that has a parameter, we have to declare the value (or set of values) that we want to pass through the function.  **This is what we call an argument.**  This will be written inside the parenthesis.
```
function sayHi(name){
    document.write( "Write " + name );
}

sayHi("Sinclair");
```

*In the case above we only specified one single parameter, but you can specify as many as you want (although any more than 4 or 5 is generally considered too many).*

Multiple parameters are separated with a comma, and you can't have two parameters with the same name.

**REMEMBER!!**

When you have a function with multiple parameters, you need to make sure that wthe arguements you call are laid out in the same position as the function parameters.  So for example if the `sayHi` function takes in 2x parameters `(name, age)`, when we call the function we need to make sure that the arguments for the `name` & `age` are in the same place as the function.
***This is very important otherwise your function will not work a you expoect it or may possibly fail!***
```
function sayHi(name, age){
    document.write("Hello " + name + " you are " + age);
}

sayHi("Sinclair", 35);
```

Click [here](https://www.w3schools.com/js/js_functions.asp) to learn more about functions.
