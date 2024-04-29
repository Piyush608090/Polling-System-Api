import { Question } from "../schema/question.schema.js";
import {Option} from "../schema/option.schema.js"
// Function for Create Question 
export const createQuestion = async (req,res) =>{
    const {title} = req.body
    try{
        if (!title){
            return res.status(400).json({
                message: 'title is required for creating question',
              });  
        }
           const question = await Question.create({
                title,
              });
          
              res.status(200).json({
                success: true,
                question,
              });
        }
    catch(err){
console.log(err)
    }
}
// for Delete a Question by its ID
export const deleteQuestion = async (req,res)=>{

    const questionId = req.params.id
    try{
    const question = await Question.findById(questionId)
    if(!question){
        return res.status(400).json({
        message:"Question not found"
        })
    }
    if(question.totalvotes>0){
        return res.status(400).json({
         message:"Atleast one of options has votes"
        })
    }
    await Option.deleteMany({ question: questionId });
    await Question.findByIdAndDelete(questionId);

    return res.status(200).json({
      success: true,
      message: 'question and associated options deleted successfully!',
    });
    }
    catch(err){
        console.log(err)
    } 
}
// for View a Question 
export const viewQuestion = async (req,res) =>{
    const questionId = req.params.id
    try{
        const question = await Question.findById(questionId)
      if(!question){
        return res.status(404).json({
            message:"Question not found"
        })
      }
     return res.status(200).json({
      success: true,
      question,
     })
    }catch(err){
        console.log(err)
    }
}