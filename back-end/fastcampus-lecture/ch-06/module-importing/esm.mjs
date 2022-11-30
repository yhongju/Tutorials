// @ts-check

/**
 * im/export: ECMAScript style module import, ESM
 *
 * In .mjs(ECMAScript module's extension), both style can be imported
 * Caution for extension to end of file
 */

// Off eslint option for not configured mjs issue
/* eslint-disable-next-line import/extensions */
import animals from "../module-example-modules/animals.mjs"; // Import ESM

console.log(animals); // Ok

// Can import CommonJS module
/* eslint-disable-next-line import/first, import/extensions */
import birds from "../module-example-modules/birds.js";

console.log(birds); // Ok
