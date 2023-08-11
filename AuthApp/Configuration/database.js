const mongoose = require('mongoose');

const url = process.env.DATABASE;
function dbConnect( ){
    const connection = mongoose.connect(url,{
        // newUrlParser : true,
        // newUnifiedTopology : true
    }).then(
        ()=>{
            console.log("Connected to database succesfully ");
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )
    
}
module.exports = dbConnect;