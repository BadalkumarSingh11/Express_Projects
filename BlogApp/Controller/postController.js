const Post = require('../Model/postModel');

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;

        const object = new Post({
            title, body
        })

        const savedPost = await object.save();

        res.status(200).json({
            data : savedPost
        })
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                message : error.message
            }
        )
    }

}


exports.getallPosts = async ( req,res)=>{
    try {
        const data = await Post.find().populate("comments").exec();
        res.json({
         data
    })
    } catch (error) {
        res.json({
            message : error.message
        })
    }
}