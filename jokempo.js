let userScore = 0 ;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
};
//console.log(getComputerChoice());

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissor";
}

function win(userChoice, computerChoice){
    userScore++ ;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 1000);
}

function lose(userChoice, computerChoice){
    computerScore++ ;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ". You lost!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 1000);
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = convertToWord(userChoice) + " equal to " + convertToWord(computerChoice) + ". It's a draw!";
    document.getElementById(userChoice).classList.add('yellow-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('yellow-glow'), 1000);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice);
           // console.log("USER WINS");
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, computerChoice);
           // console.log("USER LOSES");
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, computerChoice);
           // console.log("It's a Draw.");
    }
}

function main(){
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissor_div.addEventListener('click', () => game("s"));
}

main();