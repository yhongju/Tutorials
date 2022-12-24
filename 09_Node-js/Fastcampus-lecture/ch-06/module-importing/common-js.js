// @ts-check
/* eslint-disable no-console, node/no-unpublished-require */

/**
 * require: CommonJS style
 *
 * In Node.js, each file is seperated module
 */

// CommonJS style module import
console.log(require("./node_modules/animals"));

console.log(module.require("./node_modules/animals")); // Same works

// Destructuring module object
console.log("\nTeardown module object");

const { path, paths, filename } = module;
console.log({ path, paths, filename });

/* Node.js standard lib: Use absolute path */
const http = require("http");

// Print http module info
console.log("\nTeardown http module", http);

/* Can use custom absolute path if modules in node_modules */
const birds = require("birds");

console.log("\nBirds from absolute path:", birds);
