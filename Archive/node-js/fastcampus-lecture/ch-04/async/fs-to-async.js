// @ts-check
/* eslint-disable no-console, no-new */

/**
 * "promises.readFile" function is a async function
 *
 * Do errer handling too
 */

const fs = require("fs");

// Async function
const driveCode = async (fimeName) => {
  try {
    // Waits Promise object's return value
    const content = await fs.promises.readFile(fimeName, "utf-8");
    console.log(content);
  } catch (err) {
    console.log("Error!", err);
  }
};

driveCode("../../../.gitignore");
