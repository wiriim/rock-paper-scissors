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
