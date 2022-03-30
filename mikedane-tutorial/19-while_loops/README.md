# While Loops #

A loop is a structure that’s built into all programming languages which tells the computer to execute a certain block of code a certain number of times, or until a certain condition is met. Loops are useful for all types of tasks and like If statements, are used in almost every program you’ll find.

**In the majority of programming languages there are two types of loops, a While Loop and a For Loop.**

#### While Loops ####

While loops execute a block of code as long as the specified condition is true.
```
while (condition){
    // execute code block
}
```

Lets take a closer look at how while loops work:
```
index = 1;
while(index <= 5){
    document.write(index);
    index++;
}
```
As you can see above, on each iteration of the loop a variable is incremented to keep track of how many times we’ve printed to the screen.

The boolean expression, or the *loop guard* is exactly the same as we would write in an if statement, it's just that this boolean expression is evaluated before every iteration of the loop.

**It basically determines whether or not we can keep looping again.**

#### Do While Loops ####

Do While loops are basically while loops but in reverse. In a While loop you check the boolean condition first and then, if it’s true you execute the code in the loop body. But in a Do While Loop you first execute the code in the loop body and then check the boolean expression. Check out an example below
```
index = 1;
do{
  document.write(index);
  index++;
}while(index <= 5);
```
Do While Loops are not used very often, but they can be extremely useful when trying to solve specific problems.
