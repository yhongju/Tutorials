// Inheritance in JS
// Prototype likes a gene. "Prototype chain"

// 'Machine' likes a parent
function Machine(hole) {
  this.q = hole
  this.w = "snowball"
}

Machine.prototype.name = "Kim"

const nunu = new Machine("consume") // 'nunu' likes a child
const garen = new Machine("strike")

console.log(nunu)
console.log(garen)
