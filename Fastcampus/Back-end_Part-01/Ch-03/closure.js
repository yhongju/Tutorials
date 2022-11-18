/* eslint-disable */

var bindTarget = 0

function counter() {
  bindTarget += 1

  var result = {
    count: count,
    total: 0,
  }

  function count() {
    result.total += 1
  }

  return result
}

var a = counter()
a.count()
a.count()

var b = counter()
b.count()

console.log(a.total, b.total, bindTarget)
