let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 4;

let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

createQuestion = function(question, btn0, btn1, btn2, btn3, correctChoice) {
    let response = document.getElementById("question");
    response.innerText = question;

    let box1 = document.getElementById("btn0");
    box1.innerText = btn0;

    let box2 = document.getElementById("btn1");
    box2.innerText = btn1;

    let box3 = document.getElementById("btn2");
    box3.innerText = btn2;

    let box4 = document.getElementById("btn3");
    box4.innerText = btn3;

    let correct = document.getElementById("correctChoice");
    correctChoice.innerText = btn1;
    
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
    }else{
        let question = document.getElementById("question");
        question.innerText = "You got " + numRight + " correct out of " + numQuestions;
        document.getElementById("buttons").innerHTML = " ";
    }

};

let checkCorrect = function(button){
    if(button === correctOne){
        numRight++;
    }
    count++;
    Questions();
};

