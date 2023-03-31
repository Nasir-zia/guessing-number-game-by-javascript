const randomNumber =Math.floor(Math.random()*10)+1;

let guess = prompt("Enter the guessing number");

let Guess =1;

while (parseInt(guess) !==randomNumber){

    if(guess === null){
        break;
    }
    else{
        guess=prompt("Try again");
        Guess++;
    }
    if(Guess===3){
        alert("you loss");
        break;
    }
    else if(Guess == null)
    {
        alert("you win ")
        break;
    }
}



if(guess === null){

    alert("you give up after==>>  "+Guess+"   Times  "+  "  Number is =>>  "+randomNumber);

}
else{
    alert(Guess+" Only Three  guesses  are valid  "  +"  You failed to guess randomNumber  //  Random number is    " + randomNumber );

}


let A =confirm("Please give us feedback");

if(A){
    let A =prompt("Enter your feedback");
    alert("Thanks for your feedback")
}
else{
    alert("Thanks")
}
alert("Thanks for playing game like idiots")


var button =  createButton ("reset");

  button.mousepressed(randomNumber);


