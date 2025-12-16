// --- NPM (Node Package Manager) and Dependency Management ---

// Node.js:
// Node.js is the JavaScript runtime that allows code execution outside of a 
// browser, primarily used for backend and tooling.

// NPM:
// NPM is the world's largest software registry and the default package manager 
// for Node.js. It's used to manage packages (libraries/modules) in a project.

// 1. // NPM Understanding 

// // Installing and Uninstalling Basics & Advanced
// Basics of managing packages using the command line:
// - npm install <package_name>      // Installs package and adds it to 'dependencies'
// - npm install <package_name> --save-dev // Installs package and adds it to 'devDependencies'
// - npm uninstall <package_name>    // Removes the package

// 2. // Understanding node_modules
// This directory is automatically created by NPM. It contains the code for all 
// the packages (dependencies) that your project relies on. It is typically 
// a very large folder and is usually ignored by version control systems (like Git).

// 3. // Dependencies and DevDependencies 

// Dependencies: 
// Packages listed under the "dependencies" section in the 'package.json' file. 
// These packages are **absolutely required** for your application to run 
// in a production environment (e.g., Express.js, Mongoose).

// DevDependencies: 
// Packages listed under the "devDependencies" section. These are only needed 
// during the **development, testing, or building** phases (e.g., Nodemon, Jest, ESLint).
// They are not required when the application is deployed live.

// 4. // Scripts - Understanding Default and Custom Scripts 

// The "scripts" section in 'package.json' allows developers to define custom 
// commands to automate tasks like starting the server, running tests, or building assets.

// // Default Scripts:
// - `npm start`: A default script name that can be run simply as `npm start` 
//   (e.g., to run your main server file: "start": "node server.js").

// // Custom Scripts:
// Custom scripts are used when you run scripts like `npm run dev` or `npm run concurrent`. 
// They must be executed using the `npm run <script_name>` command.

// Example of a 'package.json' scripts section:
/*
{
    "scripts": {
        "start": "node index.js",       // Run with: npm start
        "dev": "nodemon index.js",      // Run with: npm run dev
        "concurrent": "concurrently 'npm run server' 'npm run client'" // Run with: npm run concurrent
    }
}
*/

// // PATH understanding:
// NPM automatically adds the 'node_modules/.bin' folder to your system's PATH 
// when executing scripts. This allows you to run locally installed executables 
// (like 'nodemon' or 'jest') directly in your scripts without specifying 
// the full path.

// --- Example of a Functionality that would use a Dependency ---

// const _ = require('lodash'); 

// const data = [1, 2, 3, 4];

// // If lodash was installed, this would be a dependency usage
// // const reversedData = _.reverse(data); 
// // console.log("Reversed Data (using dependency):", reversedData);
