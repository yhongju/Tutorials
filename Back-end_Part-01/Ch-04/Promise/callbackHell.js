// @ts-check
/* eslint-disable no-console */

/* Don't try this at home */

const order1 = (cb) => {
  setTimeout(() => {
    console.log("Order 1 complete...")
    cb()
  }, 1000)
}

const order2 = (cb) => {
  setTimeout(() => {
    console.log("Order 2 complete...")
    cb()
  }, 1000)
}

const order3 = (cb) => {
  setTimeout(() => {
    console.log("Order 3 complete...")
    cb()
  }, 1000)
}

console.log("Init...")
order1(() => {
  order2(() => {
    order3(() => {
      console.log("End...")
    })
  })
})
