const mongoose = require("mongoose")
require("dotenv").config();

const dbConnect = async ()=>{
    try{
   mongoose.set("strictQuery",false);
  const connect = await mongoose.connect(process.env.MONGO_URL);
   console.log("db connected");
    }catch(error){
       console.log(`Error : ${error.message}`)
        process.exit();
    }
}

module.exports = dbConnect;