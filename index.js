import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { createClient } from "redis/dist/index.js";

import {corsOptions} from "./config/corsOptions.js";
import {connectDB} from "./config/dbConn.js";
import {swaggerSpecs} from "./docs/swagger.js"; // swagger specs
import swaggerui from "swagger-ui-express"; // swagger ui
import swaggerjsdoc from "swagger-jsdoc";

import 'dotenv/config';

import {router} from "./routes/route.js"



// redis port
const REDIS_PORT = 6379;

// create redis client
export const client = createClient();



(async () => { 
    
    await client.on('error', err => console.log('Error ' + err));

    await client.connect(); 

})();



const app = express();

app.use(express.json())


// Connect to MongoDB
connectDB(); 


// port that the server is listening on.
const port = 3500;


// middleware to handle url encoded data
// app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(bodyParser.json());

app.use(cors(corsOptions));


app.use("/home", routes)


// the route for api documentation.
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerSpecs))


// our server is listening on port 3000
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB")
    app.listen(port, () => console.log(`Server running on Port ${port}`))
})