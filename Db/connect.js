// import mongoose from "mongoose";
const mongoose=require("mongoose")
console.log("mongo url is ",process.env.MONGO_URL)
const connectDb=async()=>{

    try {
       const connectionInstance=await mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
      })
        console.log("successfully connected to the database")
    } catch (error) {
        console.log("Error connecting to the database",error)
    }
}

module.exports= {
    connectDb
}