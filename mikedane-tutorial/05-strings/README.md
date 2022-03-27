# Creating Strings #

Whenever we create strings in JavaScript we want to surround them with quotation marks. Any text inside the quotation marks is considered part of the string.

A string can contain any characters you want, including spaces, numbers, special characters, and even quotation marks (if you prefix them with a backslash \"). Strings can also be as long as you want, in fact many programs you'll encounter as a developer might have strings with thousands or even millions of characters in them!

All characters in a string have specific indexes associated to them, it's basically their location from the start of the string. Notice above I've labeled each character in the string with it's corresponding index.

```
var greeting = "Hello";
//   indexes:   01234

var phrase = "Strings are cool";
//   indexes: 0123456789.....15
```

***Almost all counting in programming will start with 0 instead of 1, it's just something you have to get used to.***

## String Methods ##

You can use string methods to do things like finding out how many characters are in a string variable, finding the index of a character within a string, slice sections of a string *(substring)* and a few more!  We will cover some of the basics in this part of teh tutorial.


#### Length ####
Find out the length of a string variable.
```
document.write( phrase.length );
```

#### Covert to uppercase/lowercase ####
You can convert your strings to uppercase or lower case by using the keywords below.  This is particularly useful when you want to make sure a tring given by the user is converted into the format you want no matter if they write it in capital letters or not.

