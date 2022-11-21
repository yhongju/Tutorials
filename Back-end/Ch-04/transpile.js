// @ts-check
/* eslint-disable no-console */

/**
 * Support latest features for old versions
 *
 * E.g., Optional chaining ?.
 *
 * "polyfill" could not solve this
 */

const objs = [
  {
    foo: {
      bar: {
        baz: 1,
      },
    },
  },
  {},
  {
    foo: {},
  },
  {
    foo: {
      bar: {},
    },
  },
];

console.log(
  objs.map((obj) => {
    const ret = obj.foo?.bar?.baz;
    return ret;
  }),
);

/**
 * Transpiled codes would be
 */

// console.log(
//   objs.map((obj) => {
//     // Make "foo" variable from object's key
//     const { foo } = obj;
//
//     if (foo) {
//       const { bar } = foo;
//
//       if (bar) {
//         return foo.bar.baz;
//       }
//     }
//
//     return undefined;
//   }),
// );
//
