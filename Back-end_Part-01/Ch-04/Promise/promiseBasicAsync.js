/** Asynchronous feature in JS example 01 */

/* eslint-disable no-new, no-console */
new Promise((resolve, reject) => {
  console.log("Before setTimeOut() in Promise body") // Checking start code

  setTimeout(() => {
    resolve(Math.random())
  }, 1000) // Return after 1+a second

  console.log("After setTimeOut() in Promise body") // Checking end code
})
  .then((value) => {
    console.log("then() 00")
    console.log("then() chain value=", value)
  })
  .then(() => {
    console.log("then() 01")
  })
  .then(() => {
    console.log("then() 02")
  })

// /** Asynchronous feature in JS example 02 */ /* eslint-disable no-new, no-console */ function returnPromiseAfterTimeout() { return new Promise((resolve) => { setTimeout(() => { resolve(Math.random()) }, 1000) }) } returnPromiseAfterTimeout() .then((value) => { console.log(value) return returnPromiseAfterTimeout() }) .then((value) => { console.log(value) return returnPromiseAfterTimeout() }) .then((value) => { console.log(value) return returnPromiseAfterTimeout() }) .then((value) => { console.log(value) return returnPromiseAfterTimeout()
//   })
//   .then((value) => {
//     console.log(value)
//     return returnPromiseAfterTimeout()
//   })
//
// /** If implement this logic without Promise() */
// /** Cross referencing in this method */
// /* eslint-disable no-new, no-console */
// setTimeout(() => {
//   const value1 = Math.random()
//   console.log(value1)
//
//   setTimeout(() => {
//     const value2 = Math.random()
//     console.log(value2)
//
//     setTimeout(() => {
//       const value3 = Math.random()
//       console.log(value3)
//
//       setTimeout(() => {
//         const value4 = Math.random()
//         console.log(value4)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)
