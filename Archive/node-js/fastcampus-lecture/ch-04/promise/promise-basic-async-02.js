// @ts-check
/* eslint-disable no-new, no-console */

/*
 * Basic asynchronous example 2
 */

// Returns random math value
const returnPromiseForTimeout = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(Math.random());
    }, 1000);
  });

returnPromiseForTimeout()
  .then((value) => {
    console.log(value);

    // Get Promise object
    return returnPromiseForTimeout();
  })
  .then((value) => {
    console.log(value);

    return returnPromiseForTimeout();
  })
  .then((value) => {
    console.log(value);

    return returnPromiseForTimeout();
  })
  .then((value) => {
    console.log(value);

    return returnPromiseForTimeout();
  })
  .then((value) => {
    console.log(value);
  });
