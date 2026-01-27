//function practice question 
// function rollDice(){
//     console.log("you got "+(Math.floor(Math.random() * 6) + 1));
//     play=prompt("do you want to roll the dice again? yes/no");
// }

// let play=prompt("do you want to roll the dice? yes/no");
// while(play==="yes"){
//     rollDice();
    
// }



// function table(num){
//     for(let i=1;i<=10;i++){
//         console.log(num+"x"+i+"="+num*i);
//     }
// }

// table(prompt("enter the number you want the table of"));


function concat(arr){
    let result="";
    for(let i=0;i<arr.length;i++){
        result=result+arr[i];
    }
    console.log(typeof(result));
    return result;
}
let arr=["apple","banana","grapes"];
console.log(concat(arr));