// @ts-check

/* eslint-disable no-console */

/* Simple promise example */

const flagForTest = false
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (flagForTest) {
      reject(new Error("Rejected!"))
    } else resolve("Resolved...")

    // flagForTest ? reject(new Error("Rejected!")) : resolve("Resolved...")
  }, 2000)
})
pr.then(
  (valueFromResolve) => console.log("Success message:", valueFromResolve),
  (err) => console.log("Error message:", err)
)

// /** General JavaScript codes */
//
// /* eslint-disable no-new, no-console */
// new Promise((resolve, reject) => {
//   console.log("Inside promise...") // Checking code

//   reject(new Error("First reject")) // Returns(?) here

//   /** Will this method run? */
//   console.log("Test line ------------")
//   resolve("First resolve")
//   console.log("Test line ends -------")
//   /** Yes. Because of call-stack */
// })
//   .catch((err) => {
//     console.log("Error occured::", err)
//   })
//   // Runned. Because error catched
//   // "value" parameter not assigned. "undifined"
//   .then((value) => {
//     console.log("Inside then...")
//     console.log("Value:", value)
//   })

// /** Asynchronous feature in JS example 01 */

// /* eslint-disable no-new, no-console */
// new Promise((resolve, reject) => {
//   console.log("Before setTimeOut() in Promise body") // Checking start code

//   setTimeout(() => {
//     resolve(Math.random())
//   }, 1000) // Return after 1+a second

//   console.log("After setTimeOut() in Promise body") // Checking end code
// })
//   .then((value) => {
//     console.log("then() 00")
//     console.log("then() chain value=", value)
//   })
//   .then(() => {
//     console.log("then() 01")
//   })
//   .then(() => {
//     console.log("then() 02")
//   })

// /** Asynchronous feature in JS example 02 */

// /* eslint-disable no-new, no-console */
// function returnPromiseAfterTimeout() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(Math.random())
//     }, 1000)
//   })
// }

// returnPromiseAfterTimeout()
//   .then((value) => {
//     console.log(value)
//     return returnPromiseAfterTimeout()
//   })
//   .then((value) => {
//     console.log(value)
//     return returnPromiseAfterTimeout()
//   })
//   .then((value) => {
//     console.log(value)
//     return returnPromiseAfterTimeout()
//   })
//   .then((value) => {
//     console.log(value)
//     return returnPromiseAfterTimeout()
//   })
//   .then((value) => {
//     console.log(value)
//     return returnPromiseAfterTimeout()
//   })

// /** If implement this logic without Promise() */
// /** Cross referencing in this method */
// /* eslint-disable no-new, no-console */
// setTimeout(() => {
//   const value1 = Math.random()
//   console.log(value1)

//   setTimeout(() => {
//     const value2 = Math.random()
//     console.log(value2)

//     setTimeout(() => {
//       const value3 = Math.random()
//       console.log(value3)

//       setTimeout(() => {
//         const value4 = Math.random()
//         console.log(value4)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)
