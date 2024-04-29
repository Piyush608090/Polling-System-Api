import express from "express"
import { addVote,deleteOption,createOption } from "../controller/option.controller.js"
export const router = express.Router()
router.post("/create-option/:id",createOption)
router.post("/add-Vote/:id",addVote)
router.post("/delete-option/:id",deleteOption)
