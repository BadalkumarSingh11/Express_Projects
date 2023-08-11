const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT;

const cookieparser = require("cookie-parser")
app.use(cookieparser())

app.use(express.json());

const router = require('./Route/routes');
app.use('/api/v1/',router);



app.listen(port, ()=>{
    console.log("Server initated ");
})


const dbConnect = require('./Configuration/database')
dbConnect();

// const User = require('./Model/User');
// console.log(UserSchema);