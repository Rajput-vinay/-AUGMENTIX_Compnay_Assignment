const mongoose = require("mongoose")

const PostModel = mongoose.Schema(
    {
        title:{
            type:String,
            default:"",
            require:[true,"Don't enter empty task."],
        },
        description:{
            type:String,
            default:"",
            required:[true,"Don't enter empty description."],
        },
        author:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Users",
            required:true,
        }
        
    },
    {
        timestamp:true,
    }
)

const Post = mongoose.model("Post", PostModel)
module.exports = Post;