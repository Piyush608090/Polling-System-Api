import { Option } from "../schema/option.schema.js"
import { Question } from "../schema/question.schema.js";
// Function for create Options 
export const createOption = async (req,res)=>{
  const questionId = req.params.id
  const {text} = req.body
      try{
  if(!text){
     return res.status(400).json({message:"text is required for create option"})
  }
  const question = await Question.findById(questionId)
  if(!question){
      return res.status(400).json({message:"Question not found"})
  }
  const option = await Option.create({
      text,
      question,
  })
  option.save();
  await question.updateOne({ $push: { options: option } });
  return res.status(200).json({
      success: true,
      option,
    });
  }catch(err){
  console.log(err)
  }
  }
  
export const deleteOption = async (req,res)=>{
const optionId = req.params.id
    try{
const option = await Option.findById(optionId)
if(!option){
    res.status(404).Json({
        message:"Option noy found"
    })
}
if(option.votes>0){
    res.status(400).Json({
        message:"Option have atleast one vote"
    })
}
const question = await Question.findById(option.question);

await question.updateOne({ $pull: { options: optionId } });
await Option.findByIdAndDelete(optionId);

return res.status(200).json({
  success: true,
  message: 'option deleted successfully!',
});
} catch (err) {
console.log( err);
}
};

// To increase the count of votes
export const addVote = async (req, res) => {
try {
const optionId = req.params.id;

const option = await Option.findById(optionId);

if (!option) {
  return res.status(400).json({
    message: "option not found",
  });
}

option.votes += 1;

option.save();

const question = await Question.findById(option.question);
question.totalVotes += 1;

question.save();

return res.status(200).json({
  success: true,
  option,
});
} catch (err) {
console.log( err);
}
};