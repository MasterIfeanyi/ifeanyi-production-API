import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/instaCartDB', { // ->this line
            useUnifiedTopology: true,
            useNewUrlParser: true
        }) 
    } catch (error) {
        console.error(error)
    }
}


