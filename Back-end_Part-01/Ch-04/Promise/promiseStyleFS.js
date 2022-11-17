// @ts-check

/* eslint-disable no-console */

const fs = require("fs")

/**
 * @param {string} fileName
 */
function readFileInPromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (error, value) => {
      if (error) reject(error)

      resolve(value)
    })
  })
}

readFileInPromise(".gitignore").then((value) => console.log(value))
