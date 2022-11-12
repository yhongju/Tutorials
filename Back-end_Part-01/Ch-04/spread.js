/**
 * Spread operator
 * Looks like Python's unpacking(*)
 */

/* 1. Array datas */
// const arr = [1, 2, 3, 4, 5]
// const [head, ...body] = arr

// // console.log(head, body)

// // Spread datas again from "body"
// console.log(head, ...body)

/* 2. Object datas */
const personalMe = {
  userName: "Hong-ju",
  userAge: "25",
}

const publicMe = {
  userEmail: "to_hongju@pm.me",
}

// // Comment for overriding
// const me = {
//   ...personalMe,
//   ...publicMe,
// }

// console.log(me)

/* 3. Overriding: Order important */
const overrideEmail = {
  userEmail: "contact.hongju@gmail.com",
}

// const me = {
//   ...personalMe,
//   ...publicMe,
//   ...overrideEmail, // Order!
// }

// console.log(me)

/* 4. Inline spread: Override flags */
const doOverride = true
// const doOverride = false  // Try this
const me = {
  ...{
    userName: "Yi Hong-ju",
    userAge: "25",
  },
  ...{
    userEmail: "to_hongju@pm.me",
  },
  ...(doOverride
    ? {
        userEmail: "contact.hongju@gmail.com",
      }
    : null),
}

// console.log(me)

/* 5. Various use */
function foo(head, ...body) {
  console.log(head)
  console.log(body)
}

foo(1, 2, 3, 4, 5)
