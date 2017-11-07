//docuemnt is ready
var playerTotal;
//this is where the values for each is gernerated
var rock1;
var crystal1;
var rock2;
var crystal2;
var rock3;
var crystal3;
var rock4;
var crystal4;

//win loss variables
var wins = 0;



var losses = 0;
console.log("losses: " + losses);

$(document).ready(function(){

//start the game 
 resetGame();


  

  function resetGame() {
    computerChoices = Math.floor(Math.random() * (120-19+1)) + 19;
    $("#computerTotal").text("The computer chose: " + computerChoices);
    
    rock1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];
    crystal1 = rock1 [Math.floor(Math.random() * 12)]; 
    console.log("Crystal 1: " + crystal1);

    rock2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];
    crystal2 = rock2 [Math.floor(Math.random() * 12)]; 
    console.log("Crystal 2: " +  crystal2);

    rock3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];
    crystal3 = rock3 [Math.floor(Math.random() * 12)]; 
    console.log("Crystal 3: " + crystal3);

    rock4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];
    crystal4 = rock4 [Math.floor(Math.random() * 12)]; 
    console.log("Crystal 4: " + crystal4);

    //Player Total
    playerTotal = 0;
    console.log("player total: " + playerTotal);
    $("#playerTotal").text("Player Total: " + playerTotal); 
  }
  


  //below is a list of the random numbers a computer can choose
  var computerChoices;
  
  
  // console.log("the computer chose: " + computerChoices);
  //  $("#computerTotal").text("Computer Guess: " + computerChoices); 

    
 
  //when Crystal Buttons are clicked they add the crystalValue to the playerTotal  
  $("#crystal1").click(function() {
     console.log("button1-works");
     playerTotal = playerTotal + crystal1;
     $("#playerTotal").text("Player Total: " + playerTotal); 
      winORlose();
  });

  $("#crystal2").click(function() {
     console.log("button2-works");
     playerTotal = playerTotal + crystal2;
     console.log(playerTotal);
     $("#playerTotal").text("Player Total: " + playerTotal); 
        winORlose();


  });

  $("#crystal3").click(function() {
     console.log("button3-works");
     playerTotal = playerTotal + crystal3;
     console.log(playerTotal);
     $("#playerTotal").text("Player Total: " + playerTotal); 
     winORlose();


  });

  $("#crystal4").click(function() {
     console.log("button4-works");
     playerTotal = playerTotal + crystal4;
     console.log(playerTotal); 
     $("#playerTotal").text("Player Total: " + playerTotal); 
     winORlose();

  });

  
  function winORlose() {
    if (playerTotal == computerChoices) {
      alert("You won!")
      wins ++;
      resetGame();
      $("#wins").text("Wins: " + wins); 
    
    }

    if (playerTotal > computerChoices){
      alert("You Lose!")
      losses ++;
      resetGame();
      $("#losses").text("Losses: " + losses); 
    }

  }
    
    
  




});










