# Switch Statements #

**A switch statement is essentially a specialized version of an if statement which would otherwise have an excessive amount of ELSE IF type statements.**

Sometimes, when infusing logic into your programs you'll run into a situation where given the value of a certain piece of data, you'll want to do something different. Normally this could be covered with an if statement, but what if you want to account for 5, 10 , even 20 possible situations?

Using an if statement, your program would soon become a mess of if statement syntax, and it wouldn't be very read-able or clear what's going on. Programmers realized this and thus Switch Statements were born!

A switch statement takes a single value, then compares it to a bunch of other values using a boolean expression. When one of these boolean expressions is true then a specific piece of code will execute.

This structure allows you to easily map a value to a piece of code that should be executed. Take a look at a simple switch statement below to get a handle on the syntax in JavaScript:
```
var myGrade = "A";
switch(myGrade){
    case "A":
          document.write("You Pass");
          break;
    case "F":
          document.write("You fail");
          break;
    default:
          document.write("Invalid grade");
}
```

As you can see above, we start with a value `myGrade`. Essentially we want to print out whether the student passed or failed given their grade (`A` or `F`).

*Instead of resorting to an if statement we can employ the switch. Unlike if statements which need boolean expressions inside their parenthesis, with the switch statement we're just going to pass in a value. In this case we're passing in `myGrade`.*

Now that we have our value, we want to set up a series of case statements. These case statements are essentially the right side of a boolean expression for equality. JavaScript will compare `myGrade` to each of the values in the case statements (`A` and `F`) for equality. If there's a match then the code directly below the case statement will be executed.

#### Breaks ####

One thing that's important to keep in mind with switch statements is that by default, JavaScript will try to check all of them for equality, even if it gets a match. This is different from an **ELSE IF** structure where once a condition is true it stops checking the ones below.

Because JavaScript will automatically check every case no matter what, we need a way to prevent this (most of the time you want to prevent this). In the case of a match, I want the switch statement to stop checking the other cases.

That's where the **break** keyword comes in. The break keyword tells JavaScript that we're done with the switch statement, and it should *break* out of it and move on.

#### Default ####

If you examine the switch statement above you'll also notice the `default` keyword. This keyword acts a lot like an **ELSE** in an if statement structure. Any code below the default statement will be executed if none of the other cases get a match. Notice also that we don't need a break statement inside the default.

Generally when you have a situation where you're using a switch the default will just catch any situations that you don't want to specify in a case statement.

In the case of the program above it's printing out `Invalid Grade` for any grade that's not an `A` or an `F`.

***Most of the time you'll want to include a default statement.***
