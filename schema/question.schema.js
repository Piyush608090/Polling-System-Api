import mongoose from "mongoose"
const questionSchema = mongoose.Schema({
    title:{
    type:String,
    required:true,    
    },
    options:[{type:mongoose.Schema.Types.ObjectId,ref:"Option"}],
    totalVote:{
        type:Number,
        default:0,
    }
},
    {
        timestamp:true
    },
)
export const Question = mongoose.model("Question",questionSchema)