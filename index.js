console.log("HI")

const options=["rock","paper","scissors"];


function getComputerChoise(){
    const choise = options[Math.floor(Math.random() * options.length)];
   
    return choise;
}
function checkWinner(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
        return "Tie"
    }
    else if(
      
        (playerSelection  =="rock" && computerSelection =="scissors")||
        (playerSelection  =="scissors" && computerSelection =="paper")||
        (playerSelection  =="paper" && computerSelection =="rock")
    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}

function playRound(playerSelection,computerSelection){
    const result = checkWinner(playerSelection,computerSelection);
    if(result == "Tie") {
        return "It's a Tie!"
    }
    else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`

    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`

    }

}
function getPlayerChoise(){
    let validatedInput = false;
    while(validatedInput == false){
        const choise = prompt("Rock Paper Scissors");
        if(choise == null){
            continue;
        }
        const choiseInLower = choise.toLowerCase();
        if(options.includes(choiseInLower)){
            validatedInput=true;
            return choiseInLower;
        }
    }
}

function game(){
    let score=0;
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for(let i=0;i<5;i++){
        const playerSelection=getPlayerChoise();
        const computerSelection=getComputerChoise();

        console.log(playRound(playerSelection,computerSelection));
        console.log("-----------");
        if(checkWinner(playerSelection,computerSelection)=="player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection,computerSelection)=="Computer"){
            scoreComputer++;

        }

    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("player was the winner");
    }
    else if(scorePlayer < scoreComputer){
        console.log("computer was the winner");

    }
    else{
        console.log("we have a tie!");
    }


}
game()

