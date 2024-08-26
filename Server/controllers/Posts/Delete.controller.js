const expressAsyncHandler = require("express-async-handler");
const isValid = require("../../utils/isValid");
const Post = require("../../models/Posts.model");
const Users = require("../../models/Users.model");

const DeletePosts = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  isValid(userId);

  const { id } = req.body;
  isValid(id);

  // Check if post exists
  const postExists = await Post.findById(id);
  if (!postExists) {
    res.status(404);
    throw new Error("Post doesn't exist");
  }

  try {
    // Remove the post
    const removedPost = await Post.findByIdAndDelete(id);

    // Update user's post count
    await Users.findByIdAndUpdate(
      userId,
      { $inc: { postCount: -1 } },
      { new: true }
    );

    // Send success response
    res.status(200).json({
      message: "Post deleted successfully",
      removedPost,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = DeletePosts;
