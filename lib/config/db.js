import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://abdus251:WwXA5RsNJljWFmLz@cluster0.oytvl.mongodb.net/blog-app');
    console.log("DB Connected")
}