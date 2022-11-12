// @ts-check
/* eslint-disable no-restricted-syntax */

/**
 * @typedef Person
 *
 * @property {number} age
 * @property {string} city
 * @property {string | string[]} [pet]
 */

/** @type {Person[]} */
const peoples = [
  {
    age: 20,
    city: "Seoul",
    pet: ["cat", "dog"],
  },
  {
    age: 40,
    city: "Busan",
  },
  {
    age: 31,
    city: "Daegu",
    pet: ["cat", "dog"],
  },
  {
    age: 36,
    city: "Seoul",
  },
  {
    age: 27,
    city: "Busan",
    pet: "cat",
  },
  {
    age: 24,
    city: "Seoul",
    pet: "dog",
  },
]

// /**
//  * A. 30대 미만이 한 명이라도 사는 모든 도시들을 출력하시오
//  */

// // /** Old approach */
// // function solveA() {
// //   /** @type {string[]} */
// //   const retCities = []

// //   for (const p of peoples) {
// //     if (p.age < 30) {
// //       if (!retCities.find((city) => city === p.city)) retCities.push(p.city)
// //     }
// //   }

// //   return retCities
// // }

// // console.log("Solve A old way: ", solveA())

// /** Functional approach(Modern way) */
// function solveAModern() {
//   // const allCandCities = peoples.filter((p) => p.age < 30).map((p) => p.city)  // Works but not good
//   /** @type {string[]} */
//   const allCandCities = peoples
//     .filter(({ age }) => age < 30)
//     .map(({ city }) => city)

//   // Remove duplicates
//   const retCities = new Set(allCandCities)

//   return retCities
// }

// /* eslint-disable-next-line no-console */
// console.log("Solve A modern way: ", solveAModern())

/**
 * B. 각 도시별로 개 또는 고양이를 키우는 사람의 수를 출력하시오
 *
 */

// /** Old way */
// /** @typedef {Object.<string, Object.<string, number>>} PetsOfCities */

// function solveB() {
//   /** @type {PetsOfCities} */
//   const retObj = {}

//   // Get and parse each people information
//   for (const singleP of peoples) {
//     // Get city and pets informations
//     // Maybe rename "pet" to "petOrPets"
//     const { city, pet: petOrPets } = singleP

//     // If has pet
//     if (petOrPets) {
//       const cityOfRetObj = retObj[city] || {}

//       // Has one pet
//       if (typeof petOrPets === "string") {
//         // "petOrPets" to "pet"
//         const pet = petOrPets
//         const nOriginPets = cityOfRetObj[pet] || 0

//         cityOfRetObj[pet] = nOriginPets + 1
//       } else {
//         // Has plural pets

//         // Repeats as # pets
//         for (const pet of petOrPets) {
//           const nOriginPets = cityOfRetObj[pet] || 0

//           cityOfRetObj[pet] = nOriginPets + 1
//         }
//       }

//       retObj[city] = cityOfRetObj
//     }
//   }

//   return retObj
// }

// /* eslint-disable-next-line no-console */
// console.log(solveB())

// TODO...
/** Modern way */
function solveBModern() {}

/* eslint-disable-next-line no-console */
console.log(solveBModern())
