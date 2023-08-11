const express = require('express');
const app = express();

// Add enviormnet port 
require("dotenv").config();
const Port = process.env.Port || 4000;

// Add  middleware  parser 
app.use(express.json());

// imports routes
const routes = require('./routes/todos');
// mount to to do 
app.use("/api/v1",routes);

// start Server
app.listen(Port,()=>{
    console.log(`Server is Working on Port No ${Port} `);
})

// Connect to dataBase
const dbConnect = require('./config/database');
dbConnect();

// Add default Rooutes 
app.get('/',(req,res)=>{
    res.send(`<h1>
    What is Going on </h1>`)
})