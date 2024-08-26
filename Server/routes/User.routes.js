const FetchMyPosts = require("../controllers/User/FetchMyPosts.controller")
const Login = require("../controllers/User/Login.controller")
const Register = require("../controllers/User/Register.controller")
const AuthHandler = require("../middlewares/Auth.middlewares")

const UserRoutes = require("express").Router()

UserRoutes.route("/").post(Register)

UserRoutes.route("/login").post(Login)


UserRoutes.route("/myPosts").get(AuthHandler,FetchMyPosts);

module.exports = UserRoutes;