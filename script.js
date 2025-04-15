let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userTurn = document.querySelector(".user");
const compTurn = document.querySelector(".comp");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const genCompChoice=()=>{
    // will choose random choice from ["rock","paper","scissors"]
    const options = ["rock","paper","scissors"];
    const randomIdx =Math.floor(Math.random() * 3); // will generate random number from 0-2
    return options[randomIdx];
};

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText = "Its a Draw 😶‍🌫️";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin)=>{
    if(userWin){
        console.log("you win !");
        msg.innerText = "You Win 😎";
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore
    }
    else{
        console.log("you lose !");
        msg.innerText = "You Lose 😞";
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
};

const playGame=(userChoice)=>{
    console.log("User Clicked : ",userChoice);
    userTurn.innerText = `YOU CHOSE : ${userChoice}`;
    // generate compChoice
    const compChoice=genCompChoice();
    console.log("Computer Clicked : ",compChoice);
    compTurn.innerText = `COMP CHOSE : ${compChoice}`;
    if(userChoice===compChoice){
        // * Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissors"? false : true;
        }
        else if(userChoice==="scissors"){
            userWin = compChoice==="rock"? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",(e)=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});