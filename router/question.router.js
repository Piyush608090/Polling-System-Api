import {createQuestion,deleteQuestion,viewQuestion} from "../controller/question.controller.js"
import express from "express"
export const router = express.Router()
router.post("/create-question",createQuestion)
router.post("/delete-question/:id",deleteQuestion)
router.post("/view-question/:id",viewQuestion)