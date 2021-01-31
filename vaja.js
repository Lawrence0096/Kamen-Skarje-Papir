
    //[TOOLS: VARIABLE WITH STRINGS, MATH TO CHOISE BETWEEN RANDOM STRINGS AND NUMBERS, PROMPT = POP UP, (ZA PRENOS VREDNOSTI FUNKCIJE UPORABIMO 
    // UPORABIMO NOVO SPREMENLJIVKO, KI PRENESE VREDNOST, KI JO IZRAČUNA AI), ]




    let AI = ["Rock", "Paper" , "Scissors"] //ustvarimo spremenljivko z tremi nizi [create a variable]
    function computerPlay(){
        let result = AI[Math.floor(Math.random() * AI.length)]; //nova spremenljivka katera z pomočjo matematike izbere izmerd treh nizov
        //[use math function to create a random choise and save it into a new variable]
        Return (result) //računalnik izbere izmed treh nizov poljubni niz in vrne nazaj 
        //[če hočemo naprej uporabljati random razultat ga moramo vrniti]
    }

    function playRound(playerSelection,computerSelection){

            let playerIzbira = prompt ("Choose Rock, Paper or Scissors", ""); // pop up kjer lahko vnesemo določene vrednost
            let computerIzbira = computerPlay; //nova spremenljivka, ki shrani razultat, ki ga izbere math.

            if(playerIzbira.toLocaleLowerCase () === "Scissors".toLocaleLowerCase()){
                if (computerIzbira === "Paper"){
                    return("Player wins!");
                    playerRazultat ++;
                }
                else if (computerIzbira === "Rock"){
                    return("Computer wins!")
                    compRazultat ++;
                }
                else if (computerIzbira === "Scissors"){
                    return("Tie!")
                }
                
            } 

            if(playerIzbira.toLocaleLowerCase () === "Rock".toLocaleLowerCase()){
                if (computerIzbira === "Scissors"){
                    return("Player wins!");
                    playerRazultat ++;
                }
                else if (computerIzbira === "Paper"){
                    return("Computer wins!")
                    compRazultat ++;
                }
                else if (computerIzbira === "Rock"){
                    return("Tie!")
                }
            } 

            if(playerIzbira.toLocaleLowerCase () === "Paper".toLocaleLowerCase()){
                if (computerIzbira === "Rock"){
                    return("Player wins!");
                    playerRazultat ++;
                }
                else if (computerIzbira === "Scissors"){
                    return("Computer wins!")
                    compRazultat ++;
                }
                else if (computerIzbira === "Paper"){
                    return("Tie!")
                }
            } 
    }

    function game(){
        console.log(playRound())
        console.log(playRound())
        console.log(playRound())
        console.log(playRound())
        console.log(playRound())

        if(playerRazultat>compRazultat){
            console.log("player wins")
        }
        else if (playerRazultat<compRazultat){
            console.log("Computer wins")}

        else if (playerRazultat=compRazultat){
            console.log("Its a tie")

    }
    

    const playerSelection = "ROck";
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));




    let compRazultat = 0
    let playerRazultat = 0


    //function game()
