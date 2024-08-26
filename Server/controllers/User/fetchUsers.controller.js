const expressAsyncHandler = require("express-async-handler")

const Users = require("../../models/Users.model")

const FetchUser = expressAsyncHandler(async(req,res)=>{
    try{
        const user = await Users.find();
         if(Users.length <1){
            res.json("No users yet");
         }
         else{
            res.json(users);
         }

    }catch(error){
        res.json(error);
    }
})

module.exports = FetchUser;