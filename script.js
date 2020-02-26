let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 4;

let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

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

    if(correctChoice === choice1){
        correctOne = btn0;
    }else if(correctChoice === choice2){
        correctOne = btn1;
    }else if(correctChoice === choice3){
        correctOne = btn2;
    }else if(correctChoice === choice4){
        correctOne = btn3;
    }

};

let Questions = function(){

    btn0.onclick = function(){checkCorrect(this)};
    btn1.onclick = function(){checkCorrect(this)};
    btn2.onclick = function(){checkCorrect(this)};
    btn3.onclick = function(){checkCorrect(this)};

    if (count === 0){
        createQuestion("what is the name of the things sims carry on their head", "Plumbob", " simbob", "diasims","Simolions", "Plumbob");
    }else if (count === 1){
        createQuestion("What year was the first sims released", "2000", " 2002", "2004","2006", "2000");
    }else if(count === 2){
        createQuestion("What language do sims speak?", "Simlish", " Spanish", "Danish","English","Simlish");
    }else if( count === 3){
        createQuestion("What sims games are there?", "4", " 1", "2","3","4");
    }else{
        let question = document.getElementById("question");
        question.innerText = "You got " + numRight + " correct out of " + numQuestions;
        document.getElementById("buttons").innerHTML = " ";

    }
    document.getElementById("progress").innerText = "Question " + (count+ 1) + " Of " + numQuestions;
};

let checkCorrect = function(button){
    if(button === correctOne){
        numRight++;
    }
    count++;
    Questions();
};

