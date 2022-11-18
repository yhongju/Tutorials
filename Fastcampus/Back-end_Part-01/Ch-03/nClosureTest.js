/* eslint-disable */

function foo() {
  dummy = 42

  function bar() {
    dummy += 1
  }
  function baz() {
    dummy += 1
  }
}

foo()
foo()
