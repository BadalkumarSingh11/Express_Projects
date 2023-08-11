// const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const User = require('../Model/User');
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user exists
        const existinguser = await User.findOne({ email });
        if (existinguser) {
            return (res.status(400).
                json(
                    {
                        succes: false,
                        message: " User already existed "
                    }
                )
            )
        }

        // Create a hashed password 
        let haspassword;

        try {
            haspassword = await bcrypt.hash(password, 10);
        } catch (error) {

            console.log(error);
            return res.status(500).json(
                {
                    succes: false,
                    message: "Cannot Hashed The password "
                }
            )

        }

        // Creat user 
        const user = await User.create({
            name, email, password: haspassword, role
        })

        return res.status(200).json(
            {
                succes: true,
                message: user
            }
        )




    } catch (error) {

        console.log(error);
        res.status(500).json(
            {
                sucess: false,
                message: error.message
            }
        )
    }


}

exports.login = async (req, res) => {
    try {
        // Data fetch
        const { email, password } = req.body;

        // Check that email ans pass is given  or Valdidation on that 

        if (!email || !password) {
            res.status(401).json({
                sucess: false,
                message: "One of the field is empty "
            })
        }

        // Check for the existing email in db
        var existinguser = await User.findOne({ email });

        if (!existinguser) {
            res.status(403).json(
                {
                    sucess: false,
                    message: " The existing user does not eists "
                }
            )
        }

        const payload = {
            email: existinguser.email,
            id: existinguser._id,
            role: existinguser.role
        }

        // Compare the password 

        if (await bcrypt.compare(password, existinguser.password)) {
            //          Password matched 
            const token = jwt.sign(payload, process.env.
                JWT_SECRET, {
                expiresIn: "2h"
            });

            // Convert it to toobject to get the unmissing passqword and token 
            existinguser = existinguser.toObject();
            existinguser.token = token;
            existinguser.password = undefined;
            // Cokkie cretae krne k liye teen cheez ki requirement hogin cokkie ka naam , data to jayegin cokkie mein , options like expiry , acces client 

            const options = {
                expires: new Date(Date.now() + 300),
                httpOnly: true
            }

            res.cookie("token", token, options).status(200).json(
                {
                    sucess: true,
                    token,
                    existinguser,
                    message: "User login sucessfully "
                }
            )

            // res.status(200).json(
            //     {
            //         sucess: true,
            //         token,
            //         existinguser,
            //         message: "User login sucessfully "
            //     }
            // )
        } else {
            res.status(400).json(
                {
                    sucess: false,
                    message: "The password is incorrect "
                }
            )
        }

    } catch (error) {
        console.log(error);
        res.status(500).json(
            {
                succes: false,
                message: error.message
            }
        )
    }
}

exports.guest = (req, res) => {
    try {

        const { email } = req.body;
        console.log(email);
        return res.status(200).json({
            sucess: true,
            message: " The home page is ready "
        })

    } catch (error) {
        res.status(500).json({
            succes : false
        })
    }
}