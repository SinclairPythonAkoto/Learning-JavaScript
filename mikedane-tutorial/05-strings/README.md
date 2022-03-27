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
// output: 16
```

#### Covert to uppercase/lowercase ####
You can convert your strings to uppercase or lower case by using the keywords below.  This is particularly useful when you want to make sure a tring given by the user is converted into the format you want no matter if they write it in capital letters or not.
```
document.write( phrase.toUpperCase() );
// output: STRINGS ARE COOL

var shoutHi = "HELLO";
document.write( shoutHi.toLowerCase() );
// output: hello
```

#### Charater at ####
You can get the character of the string by using the `charAt()` method and placing the string index inside the brackets.  This will return the chacter of the given position wihin the string variable.
```
document.write( phrase.charAt(1) );
// output: t
```

#### Index of ####
You can also find the index of a paticular string by using the `indexOf()` method.  This will return the number position of where the given character is within the string variable.
```
document.write( phrase.indexOf("S") );
// output: 0

document.write ( phrase.indexOf("o") );
// output: 13
```

#### Last index of ####
You can find out the last index of a given character by using the `lastIndexOf()` method.  If you have more than one of the same character in a variable, it will give you the position of the *last* character.  In our example, the letter 'o' is in the `phrase` variable twice, so it returns the last instance of the character.  If you try to find an idex of a character that doesn't exist in the variable it will return `-1`.
```
document.write( phrase.lastIndexOf("o") );
// output: 14

document.write( phrase.lastIndexOf("z") );
// output: -1
```

#### Substring ####
You can take sections of a string by using the `substring()` method.  It takes 2x parameters which are the index numbers of where you want to sstart and end the slice of string you want.  This is good if you want to take a section of a string and use it for something else further along in your code.
```
document.write( phrase.substring(0, 3) );
// output: Str

document.write( phrase.substring(phrase.indexOf("c"), phrase.length) );
// output: cool
```

#### Ends with ####
You can also check if a string contains a word or character by using the `endsWith()` method - this returns a boolean.
```
document.write( phrase.endsWith("cool") );
// output: true

document.write( phrase.endsWith("cools") );
// output: false
```

#### Starts with ####
This is similar to the `endsWith()` method, but the `startsWith()` method searches for a value that is at the beginning of the string variable.  It also returns a boolean value.
```
document.write( phrase.startWith("Str") );
// output: true
```

#### Includes ####
This method checks if the parameter is within the string variable, then returns a boolean.
```
document.write( phrase.includes("are") );
// output: true
```


### More String Methods ###
You can find examples of more string methods and how to use them [here](https://www.w3schools.com/jsref/jsref_obj_string.asp).
```
charCodeAt()
concat()
fromCharCode()
localeCompare()
match()
repeat()
search()
slice()
split()
substr()
toLocaleLowerCase()
toLocaleUpperCase()
toString()
trim()
valueOf()
```
