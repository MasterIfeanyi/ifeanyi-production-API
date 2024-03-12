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