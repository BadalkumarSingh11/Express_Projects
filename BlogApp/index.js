//  Create a instance of the server 
const express = require('express');
const app = express();
 
// Fetch The Port
require("dotenv").config();
const Port = process.env.PORT || 4000;

// Parser 
app.use(express.json());

// Mount
const route = require('./Routes/Blogs')
app.use("/api/v1",route);

// Start The Server
app.listen(Port,()=>{
        console.log(`Server is started at Port ${Port}`);
})

// DataBase 

const dbConnect = require("./Configuration/database")
dbConnect();


app.get('/', (req,res)=>{
    res.send(`<h1> Hello I am a Passionate Learner About The New Tech </h1>`)
})