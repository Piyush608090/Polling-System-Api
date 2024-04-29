import express from "express"
import { connectToMongoose } from "./config/mongoose.js"

import {router} from "./router/index.js"
const server = express()
server.use(express.json());
server.use(express.urlencoded({ extended: true }))
server.use("/",router)
server.listen(5000,()=>{
    console.log("Server is Running on Port:5000")
   connectToMongoose();
})