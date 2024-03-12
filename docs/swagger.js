const swaggerjsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Simple Products API",
            version: "1.0.0",
            description: 'API Documentation for simple products API',
            contact: {
                name: 'Chima Ifeanyi',
                email: 'chimaifeanyi29@gmail.com'
            },
        },
        servers: [
            {
                url: "http://localhost:3500/",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const swaggerSpecs = swaggerjsdoc(options);

module.exports = swaggerSpecs