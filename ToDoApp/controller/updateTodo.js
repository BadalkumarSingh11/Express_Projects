const Todo = require('../model/Todo');


exports.updateTodo = async function(req,res){
        try {
            const {id} = req.params;
            const {title,description}  = req.body;
        
            const todo = await Todo.findByIdAndUpdate({
                _id :id
            }, {
                title,  
                description,
                updatedDate : Date.now()
            })

            res.status(200).json(
                {
                    sucess:true,
                    data :todo,
                    message:`Updated Data for ${title,description}`
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