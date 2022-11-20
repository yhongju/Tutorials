// @ts-check
/* eslint-disable no-console, no-new */

/*
 * "Promise.race"
 * Winner takes it all, even if "rejected"
 * But race WON'T BE FINISHED when all functions were returning
 */

/*
 * Same functions with "callbackHeaven.js"
 */

const fn1 = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res("Order 01 complete!");
    }, 1000); // Maybe returned first order and only one
  });

const fn2 = (valueMsg) => {
  console.log(valueMsg);

  const flagForTest = false;

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (flagForTest) {
        rej(new Error("!!! Order 02 REJECTED!!!"));
      } else {
        res("Order 02 complete!");
      }
    }, 3000);
  });
};

const fn3 = (valueMsg) => {
  console.log(valueMsg);

  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Order 03 complete!");
    }, 2000);
  });
};

/*
 * Driving codes
 */

console.log("Init...");

console.time("Three functions");
// Functions as an array too
// "ret" value will be first returned value
Promise.race([fn1(), fn2(), fn3()]).then((ret) => {
  console.log(ret);
  console.timeEnd("Three functions");
});
