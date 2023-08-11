// Import the Model 

const Like = require("../Model/likeModel");
const Post = require("../Model/postModel");
//  Now Write The Logic 

// exports.
exports.createLike = async (req, res) => {
    try {
        const { post, user } = req.body;

        const object = new Like({
            post, user
        })

        const savedlike = await object.save();


        const updateliketopost = await Post.findByIdAndUpdate(post , {$push : {likes : savedlike._id } }, { new : true} )
        
        res.status(200).json(
            {
                sucess: true,
                data: updateliketopost,
                message: "Like Posted on Post By a User "
            }
        )

    } catch (err) {
        res.status(500).json(
            {
                sucess : false,
                message:err.message
            }
        )
    }
}




// Export the code 

exports.unlikePost = async ( req,res) =>{
    try{
        const {post,like} = req.body;

        const deletedlikes = await Like.findOneAndDelete({post : post , _id : like});

        // Update Post 
        const updatedpost1 = await Post.findByIdAndUpdate(post, {$pull : {likes : like}}, {new : true});

        res.json(
            {
                updatedpost1,deletedlikes
            }
        )

    }catch(err){
        res.json(
            {
                message : err.message
            }
        )
    }
}