const Comment = require("../Model/commentModel");
// const mongoose = require("mongoose");
// const { findByIdAndUpdate } = require("../Model/likeModel");
const Post = require('../Model/postModel');
// const { ObjectId } = mongoose.Types;

// exports.createComment = async (req, res) => {
//     try {
                                             
//        var {post,  user, body } = req.body;
       

//         post = ObjectId.isValid(post) ? new ObjectId(post) : null;

        
//         //  post  = parseInt(post);
//         //  console.log(post);

//         // Creating a object of comment Schema 
//         const comment = new Comment({
//             post, user, body
//         });

//         // Now save it to db 
//         const savedComment = await comment.save();

//         // Now We want ot fetch the commentid and add it to comments array of post  
// // Find The Post By ID and Update The commment 
//         const updatedpost = await Post.findByIdAndUpdate(Post, {$push : {comment : savedComment._id}}, {new : true})
//                             .populate("comments")
//                             .exec();


//         res.status(200).json({
//             sucees : true,
//             data : savedComment,
//             message : "Post Created Sucessfull"
//         })


//     } catch (error) {

//         console.error(error);
//         res.status(500).json(
//             {
//                 sucees : false,
//                 message : "Post Did not Created",
//                 Error : error.message
//             }
//         )

//     }

// }

//import model
// const Post = require("../models/postModel");
// const Comment = require("../models/commentModel");

//business logic 

exports.createComment = async (req, res) => {
    try{
        //fetch data from req body 
        const {post, user, body} = req.body;
        //create a comment object
        const comment = new Comment({
            post,user,body
        });

        //save the new comment into the database
        const savedComment = await comment.save();

        //find the post by ID, add the new commnet to its comments array
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id} }, {new: true}  )
                            .populate("comments") //populate the comments array with comment documents
                            .exec();

        res.json({
            post: udpatedPost,
        });

    }
    catch(error) {
        return res.status(500).json({
            error: "Error While Creating comment" ,
        });
    }
};


// for Getting Comments 

// exports.getComment = async  ( req, res){
//     try {


        
//     } catch (error) {
        
//     }
// }