const express = require('express');

const router = express.Router();

const { signup  }  = require('../Controller/Auth')
const {login , guest} = require('../Controller/Auth')
const {auth,isStudent,isAdmin}=require('../MiddleWare/auth');

router.post('/signup',signup);
router.post('/login',login);
router.get('/guest',guest);
// router.post('/signup',);

// Protected middleware 

router.post('/test',auth,(req,res)=>{
    return res.status(200).json({
        sucess:true,
        message:"Login to protected test route"
    })
})

router.get('/student',auth,isStudent,(req,res)=>{
    res.status(200).json({
        sucess:true,
        message : "Login to student protected  portal "
    })
});

router.get('/admin',auth,isAdmin,(req,res)=>{
    res.status(200).json({
        sucess:true,
        message:"Welocme to the protected route of the Admin "
    })
})

module.exports = router;