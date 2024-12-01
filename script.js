function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*100) + 1;
    
    if (randomNumber <= 33){
        return 'Rock';
    }else if (randomNumber > 33 && randomNumber <= 66){
        return 'Paper';
    }else if (randomNumber <= 100 && randomNumber > 66){
        return 'Scissor';
    }

}

function getHumanChoice(){
    let humanChoice = '';
    
    while (true){
        humanChoice = prompt('Rock, Paper, or Scissor ?').toLowerCase();

        if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissor'){
            break;
        }

        console.log("You're input must be either 'Rock', 'Paper', or 'Scissor' [Case Insensitive]!");
    }
    
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == 'rock'){
        if (computerChoice == 'Rock'){
            console.log('You drawn! Rock meets Rock');
        }else if (computerChoice == 'Paper'){
            console.log('You lose! Paper beats Rock');
            computerScore++;
        }else if (computerChoice == 'Scissor'){
            console.log('You win! Rock beats Scissor');
            humanScore++;
        }

    }else if (humanChoice == 'paper'){
        if (computerChoice == 'Rock'){
            console.log('You win! Paper beats Rock');
            humanScore++;
        }else if (computerChoice == 'Paper'){
            console.log('You draw! Paper meets Paper');
        }else if (computerChoice == 'Scissor'){
            console.log('You lose! Scissor beats Paper');
            computerScore++;
        }

    }else if (humanChoice == 'scissor'){
        if (computerChoice == 'Rock'){
            console.log('You lose! Rock beats Scissor');
            computerScore++;
        }else if (computerChoice == 'Paper'){
            console.log('You win! Scissor beats Paper');
            humanScore++;
        }else if (computerChoice == 'Scissor'){
            console.log('You draw! Scissor meets Scissor');
        }
        
    }

    console.log('Your Score: ' + humanScore);
    console.log('Computer Score: ' + computerScore);
}
