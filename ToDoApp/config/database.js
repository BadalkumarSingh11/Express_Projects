const mongoose = require('mongoose');

require("dotenv").config();

const url = "mongodb://127.0.0.1:27017/mydatabase";
const dbConnect = () =>{
     mongoose.connect(url,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Connected To DataBase");
    }).catch((err)=>{
        console.log(err);
        console.error();
        console.log("Bhai Error");
        process.exit(1);
    })
}

// export default dbConnect;
module.exports = dbConnect;