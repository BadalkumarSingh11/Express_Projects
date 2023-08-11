const  mongoose = require('mongoose');

 require("dotenv").config();
async function dbConnect(){
        mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser:true,
            useUnifiedTopology : true
        }).then(
            ()=>{
                console.log("Connected to DataBase");
            }
        ).catch(
            (err)=>{
                console.error(err);
                console.log("Cannot Connected To DataBase");
            }
        )
}

// dbConnect();

module.exports = dbConnect;