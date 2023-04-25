const express = require('express')
const mysql = require('mysql')

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"yashwant",
    password:"password",
    database:"react",
    multipleStatements:true
})

db.connect((err)=>{
    if(err)
    {
        console.log("Error in connecting to database",err)
    }
    else
    {
        console.log("Connected to database ")
    }
})

app.get("/",(req,res)=>{
    res.send("HELLO")
})

app.get("/data",(req,res)=>{
    db.query("SELECT * FROM react.info;",(err,info)=>{
        res.json(info)
        console.log(info)
    })
})

app.listen(5000,()=>{
    console.log("Running on port 5000")
})