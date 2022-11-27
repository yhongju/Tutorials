// @ts-check
/* eslint-disable no-console, no-new */

/*
 * "Promise.all"
 * Manage time efficiency
 */

/*
 * Same functions with "callbackHeaven.js"
 */

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
        /*
         * If status turned to "rejected",
         * Cannot get returned any values of 3 functions
         *
         * Usage: Show entire web page or NOTHING
         */
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

console.time("Three functions")
// Function arguments as an array
// Get ALL "ret" values in longest waiting time between three functions
Promise.all([fn1(), fn2(), fn3()]).then((ret) => {
  console.log(ret)
  console.timeEnd("Three functions")
})
