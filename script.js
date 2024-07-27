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

console.log(getHumanChoice())
console.log(getHumanChoice())

    
