# For Loops #

For loops are actually just slightly modified versions of while loops which we looked at in a previous lesson. But for loops can make your life as a programmer a lot easier because they simplify a commonly used while loop structure.

The concept is the same a while loop, you’re checking some boolean expression on each iteration of the loop and executing a block of code if it’s true. However a for loop gives us the added ability of being able to include an index variable.

Let's look at the difference between a *while loop* and a **for loop** below:

##### While loop: #####
```
index = 1;
while(index <= 5){
    document.write(index);
    index++;
}
```

##### For loop: #####
```
for(var index = 0; index < 5; index++){
    docuemnt.write(index);
}
```

First thing you should notice about the above code is the structure. The declaration of a for loop contains three main parts

**How for loops work:**
```
(declaring or specifying a counting variable ; boolean expression ; iterative action)
```
It starts, in the first segment by either declaring or specifying a counting variable. This is called the iterative variable and it is used for that purpose. This is the variable which counts how many times the computer has printed to the screen. It has become practice to name this variable i, which stands for iterator.

The next section of the for loop declaration is the boolean expression. This boolean expression acts the same as it does in the while loop, ultimately this is going to determine whether or not the code inside the loop gets executed on each iteration. Most of the time this boolean expression is going to be checking the value of the iterative variable (i) against some other value.

Finally the last section in the for loop declaration is a piece of code which gets executed at the end of each iteration. 99% of the time this is either going to increment (add to) or decrement (subtract from) the iterative variable.

*In our case we are incrementing the variable by one on each iteration, which makes sense. By placing this in the declaration we save space in the body of the loop and make the whole structure cleaner.*

***It's important to emphasize again that a for loop is just a specialized version of a while loop. There's nothing you can do with a for loop that you can't also do with a while loop.***

*Being able to write efficient and effective loops is a skill all programmers must master.*
