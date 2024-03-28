import http from "http";
import mongoose from "mongoose";
import app from './app.js'


const server = http.createServer(app)

// port that the server is listening on.
const port = 4000;

// our server is listening on port 3000
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB")
    server.listen(port, () => console.log(`Server running on Port ${port}`))
})