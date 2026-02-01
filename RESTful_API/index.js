const express=require("express");
const app=express();
const port=8080;
const path=require("path");

const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


let posts=[
    {
        id:uuidv4(),
        username:"Anjali",
        content:"I love coding",

    },
     {
        id:uuidv4(),
        username:"shraddha",
        content:"hardwork is imp to achieve success",

    },
     {
        id:uuidv4(),
        username:"Aman",
        content:"I got selected for internship",

    },
];

// app.get("/",(req,res)=>{
//     res.redirect("/posts");
// });

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let{username,content}=req.body;
    console.log("Received POST data:", req.body);
    let newId=uuidv4();
    
    posts.push({id:newId,username,content});
    console.log("Total posts now:", posts.length);
    res.redirect("/posts");

});

app.get("/posts/:id",(req,res)=>{
   let {id}=req.params;
   let post=posts.find(p=>id===p.id);
   if(!post){
      return res.send("Post not found");
   }
   res.render("show.ejs",{post});

});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find(p=>id===p.id);
    post.content=newContent;
    console.log("Updated post:", post);
    res.send("Update post logic goes here");
});


app.get("/posts/:id/edit",(req,res)=>{
   let {id}=req.params;
   let post=posts.find(p=>id===p.id);
  res.render("edit.ejs");

});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})