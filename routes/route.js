const express = require('express');
const router = express.Router();
const productsController = require("../controllers/product")




/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *     type: object
 *     required: 
 *      - name
 *      - price
 *      - category     
 *     properties:
 *      name:
 *        type: string
 *        description: The product name
 *      price:
 *         type: number
 *         description: The product price
 *      category:
 *          type: string
 *          description: The category
 *     example: 
 *        name: mango
 *        price: 400
 *        category: fruits
 */






/**
 * @swagger
 * tags:
 *  name: Products
 *  description: A products management API
 * 
 */






/**
 * @swagger
 * /home:
 *  get:
 *    summary: returns all the products
 *    tags: [Products]
 *    responses: 
 *      200:
 *        description: A list of all products
 *        content: 
 *          application/json:
 *             schema:
*                 type: array
*                 $ref: "#/components/schemas/Product"
 * 
 * 
 * 
 */

router.get("/", productsController.getProducts);












/**
 * @swagger
 * /home/{name}:
 *  get:
 *      summary: Get product by name
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: name
 *          schema:
 *              type: string
 *          required: true
 *          description: The product name
 *      responses:
 *          200:
 *              description: The product description by name
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Product"
 *          404:
 *              description: The product was not found
 */

router.get("/:name", productsController.getProductByName);






/**
 * @swagger
 * /home:
 *  post:
 *      summary: create a new product
 *      tags: [Products]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:                 
 *                      $ref: "#/components/schemas/Product"
 * 
 *      responses:
 *         200:
 *              description: The product was inserted successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Product"
 *         500:
 *              description: Internal server error
 * 
 */


router.post("/", productsController.createProduct);


/**
 * @swagger
 * /home/{name}:
 *  put:
 *      summary: Get product by name
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: name
 *          schema:
 *              type: string
 *          required: true
 *          description: The product name
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/Product"
 *      responses:
 *          200:
 *              description: The product was updated
 *          404:
 *              description: The product was not found
 */


router.put("/:name", productsController.updateAProduct);


/**
 * @swagger
 * /home/{name}:
 *  delete:
 *      summary: Delete product by name
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: name
 *          schema:
 *              type: string
 *          required: true
 *          description: The product name
 *      responses:
 *          204:
 *              description: The product was deleted successfully
 *          404:
 *              description: The product was not found
 */

router.delete("/:name", productsController.deleteProductByName);






/**
 * @swagger
 * /home:
 *  delete:
 *      summary: delete products endpoint
 *      tags: [Products]
 *      description: deletes all products in the database
 *      responses:
 *          204: 
 *              decription: All products were deleted successfully
 *          404:
 *              description: No products found
 *          500:
 *              description: Internal server error
 * 
 */



router.delete("/", productsController.deleteAllProducts);


// openapi: 3.0.0
// info:
//   title: Your API
//   description: This is a sample API documentation using Swagger (OpenAPI 3.0)
//   version: 1.0.0



/**
 * 

paths:
  /your-endpoint:
    post:
      summary: Add a new item
      description: Use this endpoint to add a new item.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                itemName:
                  type: string
                itemDescription:
                  type: string
      responses:
        '200':
          description: Item added successfully
        '400':
          description: Bad request
        '500':
          description: Internal server error
 */


// router.post("/insertMany", productsController.createManyProducts);


module.exports = router;