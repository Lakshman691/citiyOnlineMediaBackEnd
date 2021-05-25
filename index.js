const express = require("express");
const app = express();
var cors =require('cors');

const db = require("./database");
db.connect();
app.use(cors());
app.get("/",(req,res)=>{
  
 
    const data =  db.query("SELECT * FROM MOVIES",function(err,results,fields){
        if(err){
            console.log("query error")
        }
        //  console.log(results);
        res.json(results);
    })
    //console.log(data);

    //res.send("hello from express");
}) 
app.get("/genres",(req,res)=>{
    db.query("select * from genre", function(err,results,fields){
        res.json(results);
    })
})

app.listen(8080,()=>{
    console.log("listening to the port 8080");
});