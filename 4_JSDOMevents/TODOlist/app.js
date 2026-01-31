let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");


btn.addEventListener("click", function(){
    
    let item=document.createElement("li");
    item.innerText=inp.value;
   
    //console.log("task added");
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete")

     item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = ""; // clear input
    
    
    

});

ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        event.target.closest("li").remove();
        console.log("deleted");
    }
});


// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }
