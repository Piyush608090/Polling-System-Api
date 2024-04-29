import mongoose from "mongoose"
const optionSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
      },
      votes: {
        type: Number,
        default: 0,
      },
      link_to_vote: {
        type: String,
      },
      question:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
      }
},
{
    timestamp:true
},
)
export const Option = mongoose.model("Option",optionSchema)