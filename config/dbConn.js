import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://mongo/instaCartDB', { // ->this line
            useUnifiedTopology: true,
            useNewUrlParser: true
        }) 
    } catch (error) {
        console.error(error)
    }
}


