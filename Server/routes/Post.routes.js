const CreatePosts = require("../controllers/Posts/Create.controller");
const DeletePosts = require("../controllers/Posts/Delete.controller");
const UpdatePosts = require("../controllers/Posts/Update.controller");
const AuthHandler = require("../middlewares/Auth.middlewares");



const PostRoutes = require("express").Router()
PostRoutes.route("/create").post(AuthHandler,CreatePosts);
PostRoutes.route("/delete").delete(AuthHandler,DeletePosts);
PostRoutes.route("/update").put(AuthHandler,UpdatePosts);

module.exports = PostRoutes;