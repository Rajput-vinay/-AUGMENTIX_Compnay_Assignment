const expressAsyncHandler = require("express-async-handler");
const getToken = require("../../config/token/getToken");
const Users = require("../../models/Users.model");

const Login = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        res.status(400);
        throw new Error("Please enter your credentials");
    }

    // Find user by email
    const user = await Users.findOne({ email });
    if (!user) {
        res.status(404);
        throw new Error("Email does not exist");
    }

    // Check if password matches
    const isMatch = await user.CheckPass(password);
    if (isMatch) {
        res.json({
            name: user.fullname,
            token: getToken(user._id),
            message: "Login Successful",
        });
    } else {
        res.status(401);
        throw new Error("Invalid Password");
    }
});

module.exports = Login;
