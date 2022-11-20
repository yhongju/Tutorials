// @ts-check
/* eslint-disable no-console, no-new */

/**
 * Async function
 *   - Can returns Promise object
 *   - Can wait other async function with "await" keyword
 */

const sleep = async (duration) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(undefined);
    }, duration);
  });

const driveCode = async () => {
  await sleep(1000);
  console.log("Driver fn 1...");

  await sleep(1000);
  console.log("Driver fn 2...");

  await sleep(1000);
  console.log("Driver fn 3...");
};

driveCode();
