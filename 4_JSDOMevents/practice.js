let btn=document.createElement("button");
btn.innerText="Click Me";
document.body.appendChild(btn);

btn.addEventListener("click",changeColor);
function changeColor(){
    console.log("color changed to green");
    btn.style.backgroundColor="green";
    btn.style.color = "white";
}