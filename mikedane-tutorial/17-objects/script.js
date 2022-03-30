alert("JavaScript Objects!");

// creating an object
var person = {
    firstName: "Sinclair",
    lastName: "Akoto",
    age: 35,
    height: 5.11,
    isMale: true,
    occupation: "software developer",
    company: "Scalian"
};

// accessing data within objects
document.write( 
    "My name is " + person.firstName + " " + person.lastName + ". I am " + person.age + " years old, and work as a " + person.occupation + " for " + person.company + ". <br>"
);

// chnaging the values of an object
person.firstName = "Jane"
person.lastName = "Doe"
person.age = 32
person.isMale = false
person.occupation = "Senior Buisness Manager"
person.company = "some tech company"

document.write( 
    "My name is " + person.firstName + " " + person.lastName + ". I am " + person.age + " years old, and work as a " + person.occupation + " for " + person.company + ". <br>"
);

