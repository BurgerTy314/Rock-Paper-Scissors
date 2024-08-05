function getComputerChoice(){
    randomInt = Math.floor(Math.random() * 3)
    if (randomInt == 0){
        return "rock";
    }
    else if (randomInt == 1){
        return "paper";
    }
    else if (randomInt == 2){
        return "scissors";
    }
}

function getHumanChoice(){

        while(true){
            let choice = prompt("enter your choice rock, paper, or scissors?")
            if (choice == "rock" || choice == "paper" || choice == "scissors") {
                return choice;
                
            }
        }
    
}




function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()

    const result = document.querySelector("#result")
    const score = document.querySelector("#score")
    
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++

        result.textContent = "human won"
    } else if ((humanChoice == "rock" && computerChoice == "paper") ||
                (humanChoice == "paper" && computerChoice == "scissors") ||
                (humanChoice == "scissors" && computerChoice == "rock")){
            computerScore++;
            result.textContent = "computer won"
    } else if (humanChoice == computerChoice){
            result.textContent = "its a draw"
    }

    score.textContent = "human: " + humanScore + " cpu: " + computerScore;
    if (humanScore >= 5) {
        result.textContent = "human won overall"
        humanScore = 0
        computerScore = 0
    } else if (computerScore >= 5) {
        result.textContent = "computer won overall"
        humanScore = 0;
        computerScore = 0;
    }
}


let humanScore = 0
let computerScore = 0
let turns = 0


/*
function playGame(){
    for (let i = 0; i < 4;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    if (humanScore>computerScore){
        console.log("human wins with score" + humanScore)
    } else if (humanScore<computerScore){
        console.log("human loses with score" + humanScore)
    } else if (humanScore == computerScore){
        console.log("its a tie")
    }
}





playGame()  */





const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")



rock.addEventListener("click", () => {playRound("rock", getComputerChoice())})
paper.addEventListener("click", () => {playRound("paper", getComputerChoice())})
scissors.addEventListener("click", () => {playRound("scissors", getComputerChoice())})







