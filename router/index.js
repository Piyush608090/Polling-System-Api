import {Home} from "../controller/home.controller.js"
import {router as queRouter} from "../router/question.router.js"
import {router as optionRouter} from "../router/option.router.js"
import express from "express"
export const router = express.Router()
router.get("/",Home)
router.use("/question",queRouter)
router.use("/option",optionRouter)