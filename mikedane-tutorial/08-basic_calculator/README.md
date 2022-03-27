# Building A Basic Calculator #

We are going to build a simple calculator that will prompt the user for two numbers then will add them together.

The key thing in this exercise is that we will **convert** a *string* into an *integer* in order to conduct the calculation.

To do this successfully, we can use the `parseInt()` or `parseFloat()` method; in our case we will use the `parseFloat()` method just in case the user would like to add two floats together.

As stated before, this is just a basic calculator app; unfortunately there is nothing stopping the user from entering a string in the user prompts.  So if the user enters a string instead of a string, the calculation will not compute and a `NaN` will be returned.  This means *Not a Number*.
