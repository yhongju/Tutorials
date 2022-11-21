// @ts-check
/* eslint-disable no-console */

require("core-js"); // For Node.js old version

const originStr = "abcabc123";
const changedStr = originStr.replaceAll("abc", "___");

console.log(changedStr);
