const express = require("express");
var passport = require("passport");
const router = express.Router();
//import controller from controllers folder to be able to use the logic defined there
const {
  getUserPosts,
  createPost,
  updatePost,
  deletePost,
  getPost,
  getSingleUserPosts,
  getPostCount,deletePosts,
  getAdminPosts
} = require("../controllers/postController");

// *********NOTE: FOR ADDING FUNCTIONALITY TO EACH ROUTER, BEST PRACTICE IS TO CREATE A CONTROLLER FOR EACH ROUTER!!!!!!!!!!!!!**************************

//GET REQUEST
// router.get('/', getPosts)

//POST REQUEST(create)
// router.post('/', createPost)

//PUT REQUEST(UPDATE)
// router.put('/:id', updatePost)

//DELETE REQUEST(DELETE)
// router.delete('/:id', deletePost)

//========chaining routers because they have same entry point========
//GET, POST
router.route("/").post(createPost);
router.route("/userposts").get(getUserPosts);
router.route("/adminposts").get(getAdminPosts);
router.route("/singleuserpost/:id").get(getSingleUserPosts);
router.route("/post/:id").get(getPost);
router.route("/postCount").get(getPostCount)
//PUT, DELETE
router.route("/:id").put(updatePost).delete(deletePost);
router.route("/").delete(deletePosts);

module.exports = router;
