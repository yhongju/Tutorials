// @ts-check

/* Simple promise example */

/* eslint-disable no-console */

const flagForTest = false

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (flagForTest) {
      /* 
      Promise objects properties
        state: rejected
        result: Error object
      */
      reject(new Error("Rejected!"))
    } else {
      /* 
      Promise objects properties
        state: fulfilled
        result: argument(in this case, string)
      */
      resolve("Resolved...")
    }
  }, 2000)
})

/*
 * First param for fulfilled state
 * Second param for rejected state
 */
pr.then(
  (valueFromResolve) => console.log("Success message:", valueFromResolve),
  (errFromReject) => console.log("Error message:", errFromReject)
)
