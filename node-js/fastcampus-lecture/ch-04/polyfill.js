// @ts-check
/* eslint-disable no-console */

/**
 * "polyfill" practice with Node.js 14.16.0 and version 10.X
 */

// Old syntax
require("core-js");

const targetArr = [1, [2, 3]];

// Actually, implemented already in 14.16.0
const flattendArr = targetArr.flat();
console.log(flattendArr);
