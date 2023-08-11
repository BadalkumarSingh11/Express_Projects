const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
   { Name : {
        type : String,
        required : true,
        maxlength: 20
    },
    Pass : {
        type : String,
        required :true,
        maxlength :12
    }
}
)

module.exports = mongoose.model("UserSc",UserSchema);