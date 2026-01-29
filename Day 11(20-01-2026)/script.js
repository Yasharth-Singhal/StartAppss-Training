let questions = [];

const fetchQuestions = async () => {
    const res = await fetch("https://opentdb.com/api.php?amount=10&category=19&difficulty=easy&type=multiple");
    const data = await res.json();
    questions = data.results;
    loadQuestion(); 
};

let index = 0;
let total = 10;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".option");


const loadQuestion = () => {

    if(index === 10){
        return endQuiz();
    }
    const data = questions[index];

    quesBox.innerHTML = `${index + 1}) ${data.question}`;

    const options = [
        data.correct_answer,
        ...data.incorrect_answers
    ];

    options.sort(() => Math.random() - 0.5);

    optionInputs.forEach((input, i) => {
        input.checked = false;               
        input.value = options[i];            
        input.nextElementSibling.innerText = options[i]; 
    });
};

const submitQuiz =() =>{

    
    const data = questions[index];
    const ans =getAnswer();
    if (ans === "") {
        alert("Please select an option before continuing");
        return;
    }

    if(ans === data.correct_answer){
        right++;
        console.log(index+1 + ". Correct Answer");
    }
    else{
        wrong++;
        console.log(index+1 + ". Wrong Answer");
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer = "";
    optionInputs.forEach(input => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const endQuiz = () =>{
    document.getElementById("box").innerHTML = 
    `<div style="text-align:center; color:red; ">
    <h3>Thank You for playing the Quiz.</h3>
    <h2>${right} / ${total} are correct</h2>
    </div>`;
}

fetchQuestions();
