// @ts-check
/* eslint-disable no-console */

/**
 * Promise.allSettled() != Promise.all()
 *
 * Caution for "rejected" Promise object
 */

// Returns Promist object
const sleep = (/** @type {number} */ duration) =>
  new Promise((res, rej) => {
    console.log("Start sleeping");

    setTimeout(() => {
      console.log("End sleeping");

      // Dummy for status
      res(duration);
    }, duration);
  });

// Returns always rejected
const returnRejected = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      rej(new Error());
    }, 1000);
  });

Promise.allSettled([
  sleep(1000),
  sleep(1500),
  sleep(2000),
  returnRejected(),
]).then((retVal) => console.log(retVal)); // Prints all Promise objects even if "rejected" objects included

/**
 * Error version using Promise.all()
 */

// Promise.all([sleep(1000), sleep(1500), sleep(2000), returnRejected()]).then(
//   (retVal) => console.log(retVal)
// );
