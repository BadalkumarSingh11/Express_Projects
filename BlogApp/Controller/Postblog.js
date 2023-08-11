const UserSc = require('../Model/UserSchema');

exports.Postblogs = async (req,res)=>{
    try {
        const {Name,Pass} = req.body;
        const dat = await UserSc.create({Name,Pass});

        res.status(200).json(
            {
                sucess : true,
                data : dat,
                message : "Post the blog "
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                sucess : false,
                data : error.message,
                message:"Internl Server Error "
            }
        )
        
    }
}