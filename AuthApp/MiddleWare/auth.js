const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.auth = (req, res, next) => {
    try {
        // Fetch token 

        console.log("cookie" , req.cookies.token);
        console.log("body" , req.body.token);

        const token =   req.cookies.token|| req.body.token  ; 
        // console.log(name);
        console.log(token);

        if (!token || token === undefined) {
             return  res.status(400).json({
                sucess: false,
                message: "Token Missing "
            })
        }
        // Verify the token 
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);

            req.user = decode;
        } catch (error) {
            return res.status(400).json({
                sucess: false,
                message: "Cannot decode the token or token is invalid  "
            })
        }


        next();


    } catch (error) {
        console.log(error);
       return  res.status(401).json({
            sucess: false,
            message: "Token not "
            , data: error.message
        })
    }
}

exports.isStudent = (req, res, next) => {
    try {
        if (req.user.role !== "Student") {
            return res.status(401).json({
                sucess: false,
                message: "The role is protected for Student "
            })
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            sucess:false,
            message:"Internal server Error ",
            err:error.message
        })
    }
}


exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "Admin") {
            res.status(401).json({
                sucess: false,
                message: "The role is protected for Admin "
            })
        }

        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess:false,
            message:"Internal server Error ",
            err:error.message
        })
    }
}