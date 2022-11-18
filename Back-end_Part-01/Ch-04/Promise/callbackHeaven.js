// @ts-check
/* eslint-disable no-console, no-new */

/*
 * Escape callback hell to Promise object
 * "Promise chaining"
 */

const order1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Order 1 complete...")
    }, 1000)
  })
}

const order2 = (valueFromPromise) => {
  console.log(valueFromPromise)
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Order 2 complete...")
    }, 1000)
  })
}

const order3 = (valueFromPromise) => {
  console.log(valueFromPromise)
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Order 3 complete...")
    }, 1000)
  })
}

console.log("Init...")
order1()
  .then((res) => order2(res))
  .then((res) => order3(res))
  .then((res) => console.log(res))
  .catch(console.log)
  .finally(() => {
    console.log("End...")
  })
