const express=require("express");
const app=express();

const path=require("path");


const port=8080;

app.use(express.static( path.join(__dirname,"public/js"))); // to use static files like css,img
app.use(express.static( path.join(__dirname,"public/css"))); 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));



app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/hello",(req,res)=>{
    res.render("hello");
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    //console.log(data);
    if (!data) {
        // 🚫 user not found → go to error.ejs
        return res.render("error");
    }

    // ✅ user found → go to instagram.ejs
    res.render("instagram", { data, username });
});

