const express = require("express");
// swagger ui
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require('./config/dbConn.js');
require("dotenv").config
const bodyParser = require("body-parser");
const corsOptions = require("./config/corsOptions.js")

const swaggerSpecs = require("./docs/swagger.js")

const {createClient} = require("redis");


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


app.use("/home", require("./routes/route.js"))


// the route for api documentation.
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerSpecs))


// our server is listening on port 3000
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB")
    app.listen(port, () => console.log(`Server running on Port ${port}`))
})