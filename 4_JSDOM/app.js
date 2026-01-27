// let par=document.createElement('p');

// par.innerText = "hey i am red";
// document.querySelector("body").append(par);
// par.classList.add("red");

// let heading=document.createElement('h3');
// heading.innerText="i am blue h3!";
// document.querySelector("body").append(heading);

// heading.classList.add("blue");

// let div=document.createElement("div");
// let h1=document.createElement('h1');
// let para2=document.createElement('p');

// h1.innerText="I am in a div";
// para2.innerText="ME TOO!";


// div.append(h1);
// div.append(para2);
// div.classList.add("box");
// document.querySelector("body").append(div);

let button=document.createElement('button');
let input=document.createElement('placeholder');
button.innerText="Click me";
document.querySelector("body").append(button);
document.querySelector("body").append(input);


//ans2
button.setAttribute("id","btn");

input.setAttribute("placeholder","username");

//ans3
let btn=document.querySelector("#btn");
btn.classList.add('btnstyle');


//ans4
let h1=document.createElement("h1");
h1.innerHTML="<u>DOM Practice</u>";
document.querySelector("body").append(h1);
h1.classList.add("purple");


//ans5
let para=document.createElement("p");
para.innerHTML="Apna college <b>Sigma</b> Practice";
document.querySelector("body").append(para);
