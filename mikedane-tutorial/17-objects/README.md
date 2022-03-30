# Objects in JavaScript #

An object in JavaScript is a **collection within a variable where you can store a bunch of named values.**

An object is a little similar to an array, however there are some key differences. With objects, we create them by using *curly brackets* `{}`, then create the *key-value* pairs.

The **key** is assigning a name to your data.

The **value** is assigning the value of your data.

Another key rule is that you need a colon `:` to separate the two; if you are familiar to **Python** you would say this looks a lot like dictionary objects!

```
var student = {
    name: "Jim",
    subject: "Business",
    age: 19,
    height: 5.9
    graduated: false,
};
```
Notice with the example above how we can store different data types.

When creating key-value pairs you cannot have duplicate keys with the same name.
```
// invalid object
var student = {
    name = "Jim",
    name = "Bob"
};
```

**Remember you need a semicolon `;` at the end of the curly brackets to create a successful object!**

To access the data within the object you need to call the *object name* followed by the name of the *object key* (`object.key`).
With this knowledge at hand, once we have created the object, we can use what we know to change the value of keys.
```
student.name = "Andy"

document.write( student.name + "<br>" );
document.write( student.age + "<br>" );
document.write( student.graduated + "<br>" );
```
