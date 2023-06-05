//=========when dealing with db =>deal with promises(use async/await), and have to use TRY/CATCH for err handling,
//but instead can use a package(express-async-handler) to handle the error handling
//SYNTAX: wrap the async with asyncHandler() ====================
// ==============================================================================
// -==========================================================================
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Post = require("../models/postModel");
const { post } = require("../routes/Posts");
//@description  get post
//@route        GET/api/posts
//@access       private(after added authentication)
const getUserPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ type: "user" }).populate('image');
  res.json(posts);
});
const getAdminPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ type: "admin" }).populate('image');
  res.json(posts);
});

//@description  create post
//@route        POST/api/posts
//@access       private(after added authentication)
const createPost = asyncHandler(async (req, res) => {
  //=====err handling======
  if (!req.body.location || !req.body.description) {
    //bad request err(if user add a post which is not a text)
    res.status(400);
    //express err handler//will create err difficult to read->so.. create folder(middleware) in server folder for custom error handling that exe during req / res cycle
    throw new Error("Bad request! Please add a text field to your post");
  }
  const post = await Post.create({
    _id: mongoose.Types.ObjectId(),
    location: req.body.location,
    description: req.body.description,
    image: req.body.image,
    authorID: req.body.authorID || "",
    type: req.body.type || "user",
  });
  res.json(post);
});

//@description  update post
//@route        PUT/api/posts/:id
//@access       private(after added authentication)
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedPost);
});

//@description  delete post
//@route        DELETE/api/posts/:id
//@access       private(after added authentication)
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }
  await post.delete();
  res.json({ id: req.params.id });
});
const deletePosts = asyncHandler(async (req, res) => {
  const post = await Post.deleteMany({});
 
  res.json({post});
});



const getPost = asyncHandler(async (req, res) => {
  const id = req.params.id;

  Post.findById(id).populate('image')
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.json({ error: err });
    });
});
const getSingleUserPosts = asyncHandler(async (req, res) => {
  const id = req.params.id;

  Post.find({ authorID: id.toString() }).populate('image')
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.json({ error: err });
    });
});
const getPostCount = asyncHandler(async (req, res) => {
  const postCount = await Post.countDocuments();
  res.json(postCount);
});
//export the function to be used in routes
module.exports = {
  getSingleUserPosts,
  getUserPosts,
  createPost,
  updatePost,
  deletePost,
  getPost,
  getPostCount,
  deletePosts,
  getAdminPosts
};
