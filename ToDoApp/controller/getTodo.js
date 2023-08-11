//Imort model from to 
const Todo = require('../model/Todo')


// Define route Handler 
exports.getTodo = async function(req,res){
        try {
            
            // Fetch all data from db
            const todos = await Todo.find({});
            console.log(todos);

            // update response
            res.status(200).json({
                sucess:true,
                data :todos,
                message:"All Data Fectched"
            })
            
        } catch (error) {
            console.error(error);
            console.log(error);
            res.status(500).json({
                sucess:false,
                data:"Bhyia Internal Server Error",
                message:error.message

            });
        }
}

exports.getTodoByid = async function(req,res){

        try {

            const id =   req.params.id;
            const todo = await Todo.find({
                _id : id
            })
        
            if( !id){
                res.status(404).json(
                    {
                        sucess : false,
                        data :"Id Not Found",
                        message :"Data not Found"
                    }
                )
            }
        
            res.status(200)
            .json(
                {
                    sucess:true,
                    data : todo,
                    message : `Sucessfully data fetched for id `
                }
            )
            
        } catch (error) {
            console.error(error);
            console.log(error);
            res.status(500).json({
                sucess:false,
                data:"Bhyia Internal Server Error",
                message:error.message

            });
        }
}