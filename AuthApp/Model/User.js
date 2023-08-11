const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            trim : true

        },
        email : {
            type : String,
            required : true,
            trim : true
        },
        password : {
            type : String,
            required : true
        },
        role : {
            type : String,
            enum : ["Student","Admin","Vistor"]
            
        }
    }
)

module.exports = mongoose.model("User",UserSchema);