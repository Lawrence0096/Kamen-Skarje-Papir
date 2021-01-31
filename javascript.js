

const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults'); 
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//ustvarimo različne spremenljivke z katero ciljamo na html elemente
// [const newvar = document.querySelector ('#ID')]

let choices = ["Rock", "Paper", "Scissors"];
//ustvarimo spremenljivko, ki ima tri vrednosti
let playerScore = 0;
// zavedati se moramo, da je potrebno razultate shranjevati v določeno spremenljivko
let compScore = 0;

function computerPlay (){
    let result = choices[Math.floor(Math.random() * choices.length)];
    //funkcija z katero naključno izbiramo med spremenljivko | choices.lenght nam omogoča da izberemo celotni niz
    // novo naključno kalkulacijo shranimo v novo spremenljivko
    return result;
    //pri funkcijah moramo vedno moramo vrniti razultat
}


startgame(); //funkcija začne igro

function playRound(playerSelection,computerSelection){  //ustvarimo funkcijo z parametri playerSelection in computerselection
    if(playerSelection=== "rock"){
        if (computerSelection === "Scissors") { //primerjamo različne opcije
            playerPoints.textContent = ++playerScore //dodamo vrednost zmagovalcu
            roundResults.textContent = "Računalnik je izbral Škarje, ti zmagaš!";
        }
        else if (computerSelection === "Paper"){
            computerPoints.textContent = ++ compScore
            roundResults.textContent = "Računalnik je izbral Papir, računalnik je zmagovalec!";
        }
        else if (computerSelection === "Rock") {
            roundResults.textContent = "Oba sta izbrala isto, neodločeno!";
        }
    }
    if (playerSelection==='paper') {
        if (computerSelection==="Scissors"){
            computerPoints.textContent = ++compScore
            roundResults.textContent = "Računalnik je izbral škarje, računalnik je zmagovalec!";
        }
        else if (computerSelection==="Rock"){
            playerPoints.textContent = ++playerScore
            roundResults.textContent = "Računalnik je izbral kamen, ti zmagaš!";
        }
        else if (computerSelection==="Paper"){
            roundResults.textContent= "Oba sta izbrala isto, neodločeno!";
        }
    }

    if (playerSelection==='scissors'){
        if (computerSelection==="Scissors"){
            roundResults.textContent = "Oba sta izbrala isto, neodločeno!"
        }
        else if (computerSelection==="Rock"){
            computerPoints.textContent = ++compScore
            roundResults.textContent = "Računalnik je izbral kamen, računalnik je zmagovalec!";
        }
        else if (computerSelection==="Paper"){
            playerPoints.textContent = ++playerScore
            roundResults.textContent= "Računalnik je izbral papir, ti zmagaš!";
        }
    }
  
    
    checkWinner(); //zaženemo check funkcijo
}

resetGame();

function checkWinner() {
    if (compScore == 5 && playerScore == 5) {
      roundResults.textContent = "Neodločeno, računalnik si želi ponovni dvoboj"; //div pridobi text 
      roundResults.style.color ='white';  //obarva se z poljubno barvo
       optionBtn.forEach(button => {
       button.removeEventListener('click', getPlayerChoice); // odstrani event listener in sprosti event listner
     });
    }else if (compScore == 5) {
       roundResults.textContent = "Ti izgubiš,računalniška inteligenca bo zavzela svet!";
       roundResults.style.color ='white';
        optionBtn.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
      });
    }else if (playerScore == 5) {
      roundResults.textContent =  "Ti si zmagovalec!!!!";
      roundResults.style.color ='white';
       optionBtn.forEach(button => {
       button.removeEventListener('click', getPlayerChoice);
     });
    }
  }

function resetGame(){
    resetBtn.addEventListener('click', () => location.reload()); //resetira stran
}

function startgame() {
    optionBtn.forEach(button => {
    button.addEventListener('click', getPlayerChoice)}); //ustvari event listener za vsak gumb v divu in ko kliknemo gumb ga konzola zabelezi.
}

function getPlayerChoice(e){
    playerSelection = (e.target.id)
    playRound(playerSelection, computerPlay());
}








