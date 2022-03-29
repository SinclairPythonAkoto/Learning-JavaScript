# If Statements #

 if statements allow our programs to respond to the input that they are given. Depending on the state of the data in the program, JavaScript will be able to respond to it. So when certain data is certain values we can do certain things, and when other data is other values we can do other things.

*With if statements, our programs are able to become a lot smarter and we're able to do more things with them (which is always a good thing)!*

#### If condition ####

If statements are useful because they allow a programmer to build a certain level of intelligence and decision making into a program. When writing programs, there’s a bunch of situations where it can be useful to execute certain code when certain conditions are met, and skip over certain code when conditions aren’t met.

*As our programs get more complex, we'll be dealing with more and more data, and we'll want to use that data to inform the program on what it should do in certain situations.*

#### Else condition ####

An Else statement basically specifies what to do when the if statement returns false.

*So IF a condition is false -> do something else. An else can only exist in combination with an if statement.*

Else statements have the same basic concept as if statements, they just allow you to add more logic to the program.

#### If Else condition ####

We can add even more logic into these by utilizing If Else statements. An if else statement is very similar to an if statement, much like an if statement it will check a boolean expression. If that boolean expression is true it will allow some code to be executed.

If else statement's boolean expressions are only evaluated however after all if statements or if else statements before them have evaluated to false.

Lets look at an example below!
```
var isStudent = true;
var isSmart = true;

if(isStudent && isSmart){
    document.write("You are a smart student");
} else if(isStudent && !isSmart){
    document.write("You are a not smart student");
} else {
    document.write("You are not a student and not smart");
}
document.write("<br>");

// >, <, >=, <=, !=, ==
if(1 > 3){
    document.write("number comparison was true");
}
document.write("<br>");
```

You might be looking at the code and wondering what the symbols mean; don't panic, we shall go through them now!

- The `&&` symbols means that both conditions need to be met.  So for our exmpole, if `isStudent` is `true` **and** `isSmart` is `true`, then we print out the statement.
- We see the exclaimation mark being used before the variable name; this is when we want to declare is **not** what it's defined as.  Basically the **opposite** of the defined variable.  So in our example, when `!isSmart` is actually `false` because we defined it to be `true`.

- There are other comparisons such as `||` which is the **or** comparison.  This means only one out of the conditions needs to be met.
```
if(isStudent || isSmart){
    document.write("You maybe a student or you maybe smart");
}
```

- `>` - Greater than..
- `<` - Less than..
- `>=` - Greater or equal to..
- `<=` - Less or equal to..
- `!=` - Not equal to..
- `==` - Equal to..
