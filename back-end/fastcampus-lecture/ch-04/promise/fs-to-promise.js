// @ts-check
/* eslint-disable no-console, no-new */

/**
 * Implement
 */

const fs = require("fs");

const gitignore = "../../../.gitignore";

const readFileImPromise = (fileName) =>
  new Promise((res, rej) => {
    fs.readFile(fileName, "utf-8", (err, content) => {
      if (err) {
        console.log("Error occured...");

        // Returns rejected Promise object
        rej(new Error(err));
      }
      res(content);
    });
  });

readFileImPromise(gitignore).then((content) => console.log(content));

/**
 * Implemented already in JS
 */

console.log("Already exists..."); // Guess printed order

fs.promises
  .readFile(gitignore, "utf-8")
  .then((content) => console.log(content));
