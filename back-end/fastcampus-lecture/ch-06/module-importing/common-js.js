// @ts-check
/* eslint-disable no-console */

/**
 * require: CommonJS style
 *
 * In Node.js, each file is seperated module
 */

// CommonJS style module import
console.log(require("../module-example-modules/animals"));

console.log(module.require("../module-example-modules/animals")); // Same works

// Destructuring module object
console.log("\nTeardown module");

const { path, paths, filename } = module;
console.log({ path, paths, filename });
