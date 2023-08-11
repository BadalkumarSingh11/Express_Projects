const express = require('express');
// const UserSchema = require('../Model/UserSchema');

const router = express.Router();
const {Postblogs} = require('../Controller/Postblog')
const {getblogs} = require('../Controller/GetBlogs')
const {createComment} = require('../Controller/commentController');
const { createLike , unlikePost } = require('../Controller/likeController');
const {createPost , getallPosts} = require('../Controller/postController')

// const {ui} = require('../Controller/getui')

router.post('/Posts/Create',Postblogs);
router.post('/Posts/Create/comments',createComment);
router.get('/Posts',getblogs);
router.post('/Posts/Create/Likes',createLike);
router.post('/Posts/Create/Post',createPost);
router.get('/Posts/Get/Post',getallPosts);
router.post('/Posts/unlike',unlikePost)

// router.get('/getui',ui);

module.exports = router;