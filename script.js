let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 0;


createQuestion = function(question, choice1, choice2, choice3, choice4, correctChoice) {

    let response = document.getElementById("question");
    response.innerText = question;

    let box1 = document.getElementById("choice1");
    box1.innerText = choice1;

    let box2 = document.getElementById("choice2");
    box2.innerText = choice2;

    let box3 = document.getElementById("choice3");
    box3.innerText = choice3;

    let box4 = document.getElementById("choice4");
    box4.innerText = choice4;

    let correct = document.getElementById("correctChoice");


};

let Question1 = function() {
    createQuestion("what is the name of the things sims carry on their head", "Plumbob", " simbob", "diasims","Simolions", "choice1");
    progress.innerText ="Question 1 of 4";
    choice1.onclick = Question2 ;
    choice2.onclick = Question2 ;
    choice3.onclick = Question2 ;
    choice4.onclick = Question2 ;


};

let Question2 = function() {
    createQuestion("What year was the first sims released", "2000", " 2002", "2004","2006", "choice1");
    choice1.onclick = Question3 ;
    choice2.onclick = Question3 ;
    choice3.onclick = Question3 ;
    choice4.onclick = Question3 ;
    progress.innerText ="Question 2 of 4";


};

let Question3 = function() {
    createQuestion("What language do sims speak?", "Simlish", " Spanish", "Danish","English","choice1");
    progress.innerText ="Question 3 of 4";

    choice1.onclick = Question4 ;
    choice2.onclick = Question4 ;
    choice3.onclick = Question4 ;
    choice4.onclick = Question4 ;

};

let Question4 = function() {
    createQuestion("what type of money do sims use?", "Simcoins", " Sim Dollars", "Simoleons","Sims Bucks", "choice1") ;
    progress.innerText ="Question 4 of 4";


};
 let checkCorrect = function(button){
     if ( correctOne === choice3){
         numRight++
         createQuestion(" Your score is");
     } else
         numRight
 };

