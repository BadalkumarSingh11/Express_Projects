const UserSc = require('../Model/UserSchema');

exports.getblogs = async (req,res)=>{
    try {

        const dat = await UserSc.find({});
        res.status(200).json(
            {
                succes : true,
                data : dat,
                message : "Fectched Data From The Db"
            }
        )
        
    } catch (error) {
        
        res.status(200).json(
            {
                succes : false,
                data : error.message,
                message : "Fectched Data From The Db"
            }
        )
    }
}