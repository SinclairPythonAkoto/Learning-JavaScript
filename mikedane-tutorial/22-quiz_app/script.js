alert("Building A Quiz With For Loops!");

// create the questions
var questions = [
     {
           prompt: "What color are apples?\n(a) Red/Green\n\ (b) Purple\n(c) Orange",
           answer: "a"
     },
     {
          prompt: "What color are Bananas?\n(a) Teal\n\ (b) Magenta\n(c) Yellow",
          answer: "c"
     },
     {
          prompt: "What color are strawberries?\n(a) Yellow\n\ (b) Red\n(c) Blue",
          answer: "a"
     }
];

// create variable to count the score
var score = 0;

/*
Create a for loop that will go through each question.
Each question will prompt the user for an answer.
If statement to check if the answer is correct.
Update the score based on whether correct answer or not.
Give the user a score at the end.
*/
for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("WRONG!");
     }
}

// give the user their score.
alert("you got " + score + "/" + questions.length);


/*
You can play with this code and create your own questions!
*/
