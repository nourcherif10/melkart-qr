const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
const { query } = require('express');
const app= express();
const cors=require('cors');



// Prepare Response to JSON Object to send to FE
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'recrute'
})

db.connect((err)=>{
    if(err){
        throw err };
        console.log("recrute database is connected ...")
})
app.get('/projet/question/:id',(req,res)=>{
    const id=req.params.id;
    let sql='select * from question where id=1';
    db.query(sql,[id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result)
        }
    })
});
app.post('/projet',(req,res)=>{
    const name=req.body.name
    const mail=req.body.mail
    const first=req.body.first
    const second=req.body.second
    let sql='INSERT into reponse (name,mail,firstRes,secondRes) values (?,?,?,?)';
    db.query(sql,[name,mail,first,second],(err,result)=>{
        if(err){
            console.log(err);
        }
        res.status(200).send('reponse enregistrer')
    })

})
app.post('/marketing',(req,res)=>{
    const name=req.body.name
    const mail=req.body.mail
    const first=req.body.first
    const second=req.body.second
    let sql='INSERT into marketing (name,mail,firstRes,secondRes) values (?,?,?,?)';
    db.query(sql,[name,mail,first,second],(err,result)=>{
        if(err){
            console.log(err);
        }
        res.status(200).send('reponse enregistrer')
    })

})
app.post('/devco',(req,res)=>{
    const name=req.body.name
    const mail=req.body.mail
    const first=req.body.first
    const second=req.body.second
    let sql='INSERT into devco (name,mail,firstRes,secondRes) values (?,?,?,?)';
    db.query(sql,[name,mail,first,second],(err,result)=>{
        if(err){
            console.log(err);
        }
        res.status(200).send('reponse enregistrer')
    })

})
app.get('/projetAdmin',(req,res)=>{
    let sql='select * from devco';
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result)
        }
    })
})
app.get('/markAdmin',(req,res)=>{
    let sql='select * from marketing';
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result)
        }
    })
})
app.get('/devAdmin',(req,res)=>{
    let sql='select * from devco';
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result)
        }
    })
})

module.exports=app;