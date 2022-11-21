// @ts-check
/* eslint-disable no-console, no-new */

const boolFlagForTest = true

/*
 * Basic Promise examples
 */

new Promise((res, rej) => {
  // Just declaration, but runned
  console.log("Inside Promise object------------------")

  if (boolFlagForTest) {
    // When status: rejected
    rej(new Error("First reject and Error object!"))
  } else {
    // When status: fulfilled
    res("First resolve!")
  }
})
  .then((resMsg) => {
    console.log("Inside then()")
    console.log(resMsg)
  })
  .catch((errMsg) => {
    console.log("Inside catch()")
    console.log(errMsg)
  })
