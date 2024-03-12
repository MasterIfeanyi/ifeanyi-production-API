import swaggerjsdoc from "swagger-jsdoc"

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Products API",
            version: "1.0.0",
            description: 'API Documentation for products API',
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

export const swaggerSpecs = swaggerjsdoc(options);

