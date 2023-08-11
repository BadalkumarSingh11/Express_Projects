const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : true,
            maxLenght : 50
        },
        description : {
            type : String,
            required : true,
            maxLenght : 50
        },
        createdate : {
            type : Date,
            required : true,
            default : Date.now(),
        },
        updatedDate : {
            type : Date,
            required : true,
            default : Date.now(),
        }
    }
)


module.exports = mongoose.model("Todo",todoSchema);