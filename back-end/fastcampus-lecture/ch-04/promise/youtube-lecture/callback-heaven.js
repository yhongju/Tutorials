// @ts-check
/* eslint-disable no-console, no-new */

/*
 * "Promise chaining"
 * Escape callback hell with Promise object
 */

// No curly-braces
const fn1 = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res("Order 01 complete!")
    }, 1000)
  })

const fn2 = (valueMsg) => {
  console.log(valueMsg)

  const flagForTest = false

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (flagForTest) {
        rej(new Error("!!! Order 02 REJECTED!!!"))
      } else {
        res("Order 02 complete!")
      }
    }, 3000)
  })
}

const fn3 = (valueMsg) => {
  console.log(valueMsg)

  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Order 03 complete!")
    }, 2000)
  })
}

/*
 * Driving codes
 */

console.log("Init...")
console.time("Three functions") // For calculate running time

fn1()
  .then((ret) => fn2(ret)) // "ret" argument == Promise.result value
  .then((ret) => fn3(ret))
  .then((ret) => console.log(ret))
  .catch((err) => console.log(err)) // Error object
  .finally(() => {
    console.log("End...")
    console.timeEnd("Three functions")
  })
