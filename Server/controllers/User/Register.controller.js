
const expressAsyncHandler = require("express-async-handler");

const getToken = require("../../config/token/getToken")

const Users = require("../../models/Users.model")

const Register = expressAsyncHandler(async(req,res)=>{
    const {fullname,email,password} = req.body;

    if (!fullname && !email && !password) {
        throw new Error("Please enter your credentials");
      }

      if (!fullname && !email && !password) {
        throw new Error("Please enter your credentials");
      }

      try{
        const user = await Users.create({
            fullname,
            email,
            password,
          });
          let token = getToken(user._id);
          res.json({ token, message: "Registration successful" });
        } catch (error) {
          res.json({ error, message: "Registration unsuccessful" });
        }
})


module.exports = Register