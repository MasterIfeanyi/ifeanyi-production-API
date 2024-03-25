Here are some problems I faced, and how I solved them

### ES6 Imports

**Error**

```javascript
file:///C:/Users/IFEANYI/Documents/2024/production%20API/index.js:7
import corsOptions from "./config/corsOptions.js";
       ^^^^^^^^^^^
SyntaxError: The requested module './config/corsOptions.js' does not provide an export named 'default'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:124:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:190:5)
```

**Solution**

How to properly export a function and import the function in another file.

```javascript
 // export a variable

 export const allowedOrigins = ["joy", "sam"];

 // import a variable

 import {allowedOrigins} from "./allowedOirgins.js"

```

[How to import and export ES6](https://blog.stackademic.com/a-guide-to-es6-import-and-export-usage-in-node-js-b32a707fa103)


### Redis server error

**Error**

```Error Error: connect ECONNREFUSED ::1:6379```

**Solution** 



Remember to turn on the redis server. 


open `redis-cli.exe` 

```
redis-cli ping
```

If it returns "PONG", Redis is running. If it returns "Could not connect to Redis" or "Connection refused", then Redis is not running.

[Redis server error](https://www.dragonflydb.io/error-solutions/could-not-connect-to-redis-at-127-0-0-1-6379-connection-refused)


### Dotenv 

How to handle `dotenv` in your node.js code.

```javascript
import dotenv from 'dotenv';
dotenv.config();
```

Explaining the dockerfile

```dockerfile

FROM node:20-alpine // It instructs Docker to use a pre-built image containing Node.js version 20. This indicates that the base image is built on Alpine Linux, resulting in a smaller and more efficient Docker image.

LABEL maintainer="chimaifeanyi" // provide information about the image

WORKDIR /app // this will create a folder called app inside the image - 

COPY package*.json ./ // It copies the package.json file and potentially other matching files from your local project directory into the root directory (app) of the Docker image being built.

RUN npm install // this will install project dependencies in the container.

COPY . . // copy everything from our local project to work directory (app) in the docker image.

CMD ["node", "index.js"] // this is the command that will be used, when a container is created from the image

// when you start a container from this image, it will run the command (node index.js) to start the application.

EXPOSE 3500 // this tells docker that the nodejs application is running on port 3500 within the container

```