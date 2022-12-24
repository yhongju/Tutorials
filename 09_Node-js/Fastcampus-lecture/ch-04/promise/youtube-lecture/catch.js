// @ts-check

/* catch() method for error handling, not as a second parameter of then() method */

/* eslint-disable no-console */

const flagForTest = true

const promiseExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (flagForTest) {
      reject(new Error("Error occured!"))
    } else {
      resolve("Resolved!")
    }
  }, 1000)
})

// Reject logic as catch(), not as a second parameter of then() method
promiseExample
  .then((value) => console.log(value))
  .catch((err) => console.log(err))
  /* finally() method: Always runned */
  .finally(() => console.log("Finally done..."))
