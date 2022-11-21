"use strict";
(() => {
  // Back-end_Part-01/Ch-05/transpile.js
  var objs = [
    {
      foo: {
        bar: {
          baz: 1
        }
      }
    },
    {},
    {
      foo: {}
    },
    {
      foo: {
        bar: {}
      }
    }
  ];
  console.log(
    objs.map((obj) => {
      var _a, _b;
      const ret = (_b = (_a = obj.foo) == null ? void 0 : _a.bar) == null ? void 0 : _b.baz;
      return ret;
    })
  );
})();
