const questions = [{
    'que': 'Which of the following is the markup language?',
    'a': 'Html',
    'b': 'Css',
    'c': 'javascript',
    'd': 'php',
    'correct': 'a',
},
{
    'que': 'Which year javascript launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'None of the above',
    'correct': 'b',
},
{
    'que': 'What does Css stands for?',
    'a': "hypertext markup language",
    'b': "Casacading style sheet",
    'c': "jason object notation",
    'd': 'None of the above',
    'correct': 'b',
}
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionsInput = document.querySelectorAll('.options');


const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    } 
    reset()

    const data = questions[index];
    
    quesBox.innerText = ` ${index + 1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();

    return;
}

const getAnswer = () => {
    let answer;
    optionsInput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
              
            }
        }
    )
    return answer;
}
const reset = () => {
    optionsInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
        
    
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3>Thank You</h3>
        <h2> ${right}/${total} are correct</h2>
    </div>
    `
}



loadQuestion();
