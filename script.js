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