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

    
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++
        console.log("human won")
    } else if ((humanChoice == "rock" && computerChoice == "paper") ||
                (humanChoice == "paper" && computerChoice == "scissors") ||
                (humanChoice == "scissors" && computerChoice == "rock")){
            computerScore++;
            console.log("computer won");
    } else if (humanChoice == computerChoice){
            console.log("its a draw");
    }
}


let humanScore = 0
let computerScore = 0

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


playGame()
