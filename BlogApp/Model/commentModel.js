const mongoose = require("mongoose");

const comments =  new mongoose.Schema(
    {

        
        post : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Post",
        },
        user:{
            type : String,
            required : true
        },body:{
            type : String,
            required : true,
            maxlength : 150,
        }
    }
)

module.exports = mongoose.model("Comment",comments);