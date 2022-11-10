// From YouTube Coding apple's video

// // Old syntax
// function Machine(hole) {
//   this.q = hole
//   this.w = "snowball"
// }
//
// const nunu = new Machine("consume")
// const garen = new Machine("strike")
//
// console.log(nunu)
// console.log(garen)

// ES6('16) class syntax
class Hero {
  constructor(hole, w) {
    this.q = hole
    this.w = w
  }
}

const ezreal = new Hero("Injulmi", "hit-again")
console.log(ezreal)
