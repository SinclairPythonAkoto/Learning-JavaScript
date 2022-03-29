alert("Using Comparison Operators With If Statements!");

function max(num1, num2, num3){
    if(num1 >= num2 && num1 && num3){
        return num1;
    } else if (num2 >= num1 && num2 >= num3){
        return num2;
    } else {
        return num3;
    }
}

document.write("The largest number is: " + max(30, 10, 5));
