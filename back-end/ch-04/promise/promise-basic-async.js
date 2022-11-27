// @ts-check
/* eslint-disable no-new, no-console */

/*
 * Basic asynchronous example
 */

new Promise((res, rej) => {
  console.log("Init Promise object...");

  setTimeout(() => {
    res(Math.random());

    console.log("Last statement of setTimeout's callback");
  }, 1000);
})
  .then((retMsg) => console.log(retMsg))
  .then(() => console.log("then() 02"))
  .then(() => console.log("then() 03"));
