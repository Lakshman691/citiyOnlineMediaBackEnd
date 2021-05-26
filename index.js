const express = require("express");
const app = express();
var cors =require('cors');

const db = require("./database");

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors());

db.connect();


app.get("/genres",(req,res)=>{
  
 
            
    db.query("SELECT * FROM genre ",function(err,results,fields){
         if(err){
             console.log("Server Down");
         }
         //  console.log(results);
         res.json(results);
         res.status(201)
   
 })
     //console.log(data);
 
     //res.send("hello from express");
 }) 
 app.get('/movieinfo/:id',(req,res)=>{
    let id = req.params.id;
    
    db.query("SELECT * FROM MOVIES where id = ?",[id],function(err,results,fields){
         if(err){
             console.log("Server Down");
         }
         //  console.log(results);
         res.json(results);
         res.status(201)
 
 })

 })
app.get("/",(req,res)=>{
  
 
            
   db.query("SELECT * FROM MOVIES",function(err,results,fields){
        if(err){
            console.log("Server Down");
        }
        //  console.log(results);
        res.json(results);
        res.status(201)
  
})
    //console.log(data);

    //res.send("hello from express");
}) 

app.get("/:genre",(req,res)=>{
    let genre = req.params.genre;
    
   db.query("SELECT * FROM MOVIES where genre = ?",[genre],function(err,results,fields){
        if(err){
            console.log("Server Down");
        }
        //  console.log(results);
        res.json(results);
        res.status(201)

})

    //let movie = req.params.Movie;

})

app.post('/updateGenre', (req, res)=>{
    let genr = req.body.genre
    let uid = req.body.id
    console.log(genr);
    db.query("UPDATE MOVIES SET GENRE = '"+genr+"'WHERE id ="+uid ,function(err,results,fields){
        res.json(results);
    })
    
  })


app.listen(8080,()=>{
    console.log("listening to the port 8080");
});