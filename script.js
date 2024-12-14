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

let humanScore = 0;
let computerScore = 0;


function playRound(e){
    let computerChoice = getComputerChoice();
    if (e.target.id == 'rock'){
        switch(computerChoice){
            case "Rock":
                highlight("#rock", "draw");
                printResult("It's a draw!");
                break;
            case "Paper":
                computerScore++;
                highlight("#rock", "lose");
                printResult("You lost!");
                break;
            case "Scissor":
                humanScore++;
                highlight("#rock", "win");
                printResult("You won!");
                break;
        }

    }else if (e.target.id == 'paper'){
        switch(computerChoice){
            case "Rock":
                humanScore++;
                highlight("#paper", "win");
                printResult("You won!");
                break;
            case "Paper":
                highlight("#paper", "draw");
                printResult("It's a draw!");
                break;
            case "Scissor":
                computerScore++;
                highlight("#paper", "lose");
                printResult("You lost!");
                break;
        }

    }else if (e.target.id == 'scissor'){
        switch(computerChoice){
            case "Rock":
                computerScore++;
                highlight("#scissor", "lose");
                printResult("You lost!");
                break;
            case "Paper":
                humanScore++;
                highlight("#scissor", "win");
                printResult("You won!");
                break;
            case "Scissor":
                highlight("#scissor", "draw");
                printResult("It's a draw!");
                break;
        }
    }

    updateScore();
    if (humanScore === 5 || computerScore === 5){
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.removeEventListener("click", playRound);
        });

        const finalScore = document.createElement("h2");
        const resultContainer = document.querySelector("#resultContainer");

        if (humanScore === 5){
            finalScore.textContent = `WINNER: You`;
            finalScore.style.color = "green";
        }else{
            finalScore.textContent = `WINNER: Computer`;
            finalScore.style.color = "red";
        }
            
        resultContainer.removeChild(document.querySelector("#resultContainer h2"));
        resultContainer.appendChild(finalScore);
        
        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play Again";
        playAgainBtn.style.padding = "10px";
        playAgainBtn.style.border = "3px solid black";
        playAgainBtn.style.margin = "10px 0";
        playAgainBtn.style.background = "white";
        playAgainBtn.style.borderRadius = "10px"
        resultContainer.appendChild(playAgainBtn);

        playAgainBtn.addEventListener("click", playAgain);
    }
    console.log('hi')
}

function playAgain(e){
    humanScore = 0;
    computerScore = 0;

    const buttons = document.querySelectorAll('.buttonContainer button');

    buttons.forEach(button => {
        button.addEventListener('click', playRound);
    });

    const resultContainer = document.querySelector("#resultContainer");
    resultContainer.removeChild(e.target);

    updateScore();
    printResult("");
}

function highlight(id, status){
    const button = document.querySelector(id);
    const buttons = document.querySelectorAll("button");

    switch(status){
        case "win":
            button.style.border = "5px solid rgb(9, 253, 172)";
            break;
        case "lose":
            button.style.border = "5px solid red";
            break;
        case "draw":
            buttons.forEach(button=>{
                button.style.border = "5px solid blue"
            });
            break;
    }

    setTimeout(() => {
        buttons.forEach(button=>{
            button.style.border = "5px solid black"
        });
        
    }, 400);
}

function updateScore(){
    const humanScoreCount = document.createElement("p");
    const computerScoreCount = document.createElement("p");

    humanScoreCount.textContent = `You: ${humanScore}`;
    computerScoreCount.textContent = `Computer: ${computerScore}`;
    console.log(humanScore + " " + computerScore);

    const scoreContainer = document.querySelector("#scoreContainer");

    const scoreContainerNotEmpty = scoreContainer.contains(document.querySelector("#scoreContainer p"));
    if (scoreContainerNotEmpty){
        scoreContainer.removeChild(document.querySelector("#scoreContainer p"));
        scoreContainer.removeChild(document.querySelector("#scoreContainer p"));
    }
    scoreContainer.appendChild(humanScoreCount);
    scoreContainer.appendChild(computerScoreCount);
}

function printResult(winner){
    const result = document.createElement('h2');
    result.textContent = 
    `${winner}`;
    
    const resultContainer = document.querySelector('#resultContainer');
    const resultContainerNotEmpty = resultContainer.contains(document.querySelector("#resultContainer h2"));
    if (resultContainerNotEmpty){
        resultContainer.removeChild(document.querySelector("#resultContainer h2"));
    }
    resultContainer.appendChild(result);
}

const result = document.querySelector('#result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', playRound);
});
