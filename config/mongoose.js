import mongoose from "mongoose"
export const connectToMongoose = async (req,res) =>{
await mongoose.connect("mongodb+srv://piyush608090:piyush1@piyush.d2bp0tc.mongodb.net/?retryWrites=true&w=majority&appName=Piyush/polling-system")
.then(()=>console.log("Mongoose is Connected"))
}
