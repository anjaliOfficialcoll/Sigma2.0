const express=require('express');
const app=express();

//console.dir(app);
let port=3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})               //sunta hai ki server chal raha hai ya nahi

app.use((req,res)=>{
    console.log("request received");
});