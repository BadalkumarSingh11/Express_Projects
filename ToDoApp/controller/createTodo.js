const { json } = require('express');
const Todo =  require('../model/Todo');

exports.createTodo = async (req,res)=>{
            try{

                const {title,description} = req.body;

                const response = await Todo.create({title,description});

                res.status(200).json({
                    sucess : true,
                    data : response ,
                    message : 'Entry Created Sucessfully'
                })

            }
            catch(err) {
                console.log(err);
                res.status(400),json(
                    {
                        sucess:false,
                        data:"Internal Server Error",
                        message:err.message,

                    }
                )

            }
}