// Function that randomly returns rock
//paper or scissors for cpu
//random number generator to decide between
//rock paper scissor
const weapons =[
    "rock", 
    "paper", 
    "scissors"
];

function computerPlay(){
    //randomly select choice for cpu
    let choice= weapons[Math.floor(Math.random()*weapons.length)];
    return choice;
}

//Function for user to input weapon of choice
function playerPlay(){
    let choice = prompt("Would you like to use rock, paper, or scissors?");
    choice =choice.toLowerCase();
    return choice;
}


//Function that plays round
//Takes 2 parameters
function playRound(){

    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    
    //if both players select same thing then draw
    if (computerSelection === playerSelection){
        console.log('A bloody draw!')
    }

    //if one select rock and other selects scissors
    //whoever selects rock wins
    else if ((computerSelection=='rock') && (playerSelection=='scissors')){
        console.log('Rock beats scissors. CPU wins 1');
        winner ='cpu';
        return winner;
    }
    else if ((computerSelection=='scissors') && (playerSelection=='rock')){
        console.log('Rock beats scissors. Player wins 1');
        winner ='player';
        return winner;
    }

    //if one select scissors and other selects paper
    //whoever selects scissors wins
    else if ((computerSelection=='scissors') && (playerSelection=='paper')){
        console.log('Scissors beat paper. CPU wins 2');
        winner ='cpu';
        return winner;
    }
    else if ((computerSelection=='paper') && (playerSelection=='scissors')){
        console.log('Scissors beat paper. Player wins 2');
        winner ='player';
        return winner;
    }

    //if one select paper and other selects rock
    //whoever selects paper wins
    else if ((computerSelection=='paper') && (playerSelection=='rock')){
        console.log('Paper beats rock. CPU wins 3');
        winner ='cpu';
        return winner;
    }
    else if ((computerSelection=='rock') && (playerSelection=='paper')){
        console.log('Paper beats rock. Player wins 3');
        winner ='player';
        return winner;
    }
}



//Function to keep track of score
//Reports winner and loser at the end of the game
function game(){
    let playerPoints=0;
    let cpuPoints=0;
    while (playerPoints!=5 && cpuPoints!=5){
        //Call round function get winner from round function
        winner =playRound();
        //Add to their points If the winner is the player then 
        //increase user points
        if (winner=='player'){
            playerPoints++;
            
        }
        //If the winner is the cpu then increase cpu points
        else if (winner=='cpu'){
            cpuPoints++;
            
        }
    }
    //Once game gets to five reports winner
    if (playerPoints==5){
        console.log('You won!!')
    }
    else{
         console.log('Loser')
    }
       
    

};

game();