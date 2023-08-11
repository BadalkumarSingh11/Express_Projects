//Imort model from to 
const Todo = require('../model/Todo')


// Define route Handler 
exports.deleteTodo = async function(req,res){
        try {
            // fetch data from the client
            const id = req.params.id;
            // const idd = "";
            // idd = idd+id;

               await Todo.findByIdAndDelete(`${id}`);

            res.status(200).json(
                {
                    sucess:true,
                    // data : todo,

                    message:"Deleted id sucessfully"
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