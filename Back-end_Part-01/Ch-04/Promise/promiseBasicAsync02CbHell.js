// @ts-check
/* eslint-disable no-console, no-new */

/*
 * Implement "promise_basic-async-02.js" logic without Promise object
 *
 * Cross reference occured
 */

const callbackHell = () => {
  setTimeout(() => {
    const randomNum = Math.random();
    console.log(randomNum);

    setTimeout(() => {
      const randomNum2 = Math.random();
      console.log(randomNum2);

      setTimeout(() => {
        const randomNum3 = Math.random();
        console.log(randomNum3);

        setTimeout(() => {
          const randomNum4 = Math.random();
          console.log(randomNum4);

          // ...
          // Can access to other outside variables
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

callbackHell();
