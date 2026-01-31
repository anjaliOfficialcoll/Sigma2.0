const max=prompt("enter the max number");
let guess=prompt("guess the number between 1 to"+max);
let randomNumber=Math.floor(Math.random()*max)+1;
console.log(randomNumber);
while(true){
    if(guess==="quit"){
    alert("you quit the game");
    break;
    }


if(parseInt(guess)===randomNumber){
    console.log("you win");
    break;
}else if(guess<randomNumber){
    guess=prompt("too low! try again");
    }
    else if(guess>randomNumber){
        guess=prompt("too high! try again");
}
}