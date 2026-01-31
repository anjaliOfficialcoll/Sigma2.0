const express=require("express");
const app=express();
const port=3000;

app.use(express.urlencoded({extended:true})); //to get post req data
app.use(express.json()); // to get json data

app.get("/register",(req,res)=>{
    let {user,password} = req.query;
    res.send("Register page get respose ! Welcome "+user);
})

app.post("/register",(req,res)=>{
    let {user,password} = req.body;
    res.send("Register page post respose ! Welcome "+user);
});
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});