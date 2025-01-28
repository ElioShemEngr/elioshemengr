let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * 10);
};


function getAbsoluteDistance(number1, number2){
    return Math.abs(number1 - number2);
};


function compareGuesses(user, computer, numberSecret){
    if (user > 9 || user < 0){
        window.alert('Please enter a number between 0 and 9');
    } else {
        let userDiff = getAbsoluteDistance(numberSecret, user);
        let computerDiff = getAbsoluteDistance(numberSecret, computer);
        if(userDiff <= computerDiff){
            return true;
        }else{
            return false;
        }
    }
};


function updateScore(winner){
    if(winner === 'human'){
        humanScore++;
    }else{
        computerScore++;
    }
};


function advanceRound(){
    currentRoundNumber++;
}


