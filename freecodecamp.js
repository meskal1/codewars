// 'use strict'

// // const sum = 10 + 10
// // const difference = 45 - 33
// // const product = 8 * 10
// // const quotient = 66 / 33

// // let myVar = 87
// // Змініть код лише під цим рядком
// // myVar++

// // let myVar = 87
// // Змініть код лише під цим рядком
// // myVar--

// // function checkScope() {
// //   let i = 'function scope'
// //   if (true) {
// //     let i = 'block scope'
// //     console.log('Block scope i is: ', i)
// //   }
// //   console.log('Function scope i is: ', i)
// //   return i
// // }

// // const s = [5, 7, 2]
// // function editInPlace() {
// // Only change code below this line
// // return s.sort((a,b)=> a-b);
// //   s[0] = 2
// //   s[1] = 5
// //   s[2] = 7
// // Using s = [2, 5, 7] would be invalid
// // Only change code above this line
// // }
// // editInPlace()

// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14,
//   }
//   // Only change code below this line
//   Object.freeze(MATH_CONSTANTS)
//   // Only change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99
//   } catch (ex) {
//     console.log(ex)
//   }
//   return MATH_CONSTANTS.PI
// }
// const PI = freezeObj()

// const magic = () => new Date()

// const myConcat = (arr1, arr2) => arr1.concat(arr2)
// console.log(myConcat([1, 2], [3, 4, 5]))

// // Only change code below this line
// const increment = (number, value = 1) => number + value
// // Only change code above this line

// const sum = (...args) => {
//   return args.reduce((a, b) => a + b, 0)
// }

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
// let arr2
// arr2 = [...arr1] // Change this line
// console.log(arr2)

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// }
// // Only change code below this line
// const { today, tomorrow } = HIGH_TEMPERATURES
// // Only change code above this line

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// }
// // Only change code below this line
// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES
// // Only change code above this line

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 },
// }
// // Only change code below this line
// const {
//   today: { low: lowToday, high: highToday },
// } = LOCAL_FORECAST
// // Only change code above this line

// let a = 8,
//   b = 6
// // Only change code below this line
// ;[b, a] = [a, b]

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function removeFirstTwo(list) {
//   // Only change code below this
//   const [a, b, ...arr] = list // Change this line
//   // Only change code above this line
//   return arr
// }
// const arr = removeFirstTwo(source)

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85,
// }
// // Only change code below this line
// const half = ({ max, min }) => (max + min) / 2
// // Only change code above this line

// const result = {
//   success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
//   failure: ['no-var', 'var-on-top', 'linebreak'],
//   skipped: ['no-extra-semi', 'no-dup-keys'],
// }
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = []
//   for (let i of arr) failureItems.push(`<li class="text-warning">${i}</li>`)
//   // Only change code above this line
//   return failureItems
// }
// const failuresList = makeList(result.failure)

// const createPerson = (name, age, gender) => {
//   // Only change code below this line
//   return { name, age, gender }
//   // Only change code above this line
// }

// // Only change code below this line
// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     this.gear = newGear
//   },
// }
// // Only change code above this line
// bicycle.setGear(3)
// console.log(bicycle.gear)

// // Function that returns a string representing a cup of green tea
// const prepareTea = () => 'greenTea'
// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = numOfCups => {
//   const teaCups = []
//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea()
//     teaCups.push(teaCup)
//   }
//   return teaCups
// }
// // Only change code below this line
// const tea4TeamFCC = getTea(40)
// // Only change code above this line

// const ourDecimal = 5.7
// const myDecimal = 5.7
// // Only change code below this line

// const product = 2.0 * 2.5

// const quotient = 4.4 / 2.0 // Change this line

// const remainder = 11 % 3

// let a = 3
// let b = 17
// let c = 12
// // Only change code below this line
// a += 12
// b += 9
// c += 7

// let a = 11
// let b = 9
// let c = 3
// // Only change code below this line
// a -= 6
// b -= 15
// c -= 1

// let a = 5
// let b = 12
// let c = 4.6
// // Only change code below this line
// a *= 5
// b *= 3
// c *= 10

// let a = 48
// let b = 108
// let c = 33
// // Only change code below this line
// a /= 12
// b /= 4
// c /= 11

// const myStr = 'I am a "double quoted" string inside "double quotes".' // Change this line

// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>'

// const myStr = `FirstLine\n\t\\SecondLine\nThirdLine` // Change this line

// const myStr = 'This is the start.' + ' This is the end.' // Change this line

// let myStr = 'This is the first sentence. '
// myStr += 'This is the second sentence.'

// // Only change code below this line
// const myName = 'Daniel'
// const myStr = 'My name is ' + myName + ' and I am well!'

// // Change code below this line
// const someAdjective = '123'
// let myStr = 'Learning to code is '
// myStr += someAdjective

// // Setup
// let lastNameLength = 0
// const lastName = 'Lovelace'
// // Only change code below this line
// lastNameLength = lastName.length

// // Setup
// let firstLetterOfLastName = ''
// const lastName = 'Lovelace'
// // Only change code below this line
// firstLetterOfLastName = lastName[0] // Change this line

// // Setup
// let myStr = 'Jello World'
// // Only change code below this line
// myStr = 'Hello World' // Change this line
// // Only change code above this line

// // Setup
// const lastName = 'Lovelace'
// // Only change code below this line
// const thirdLetterOfLastName = lastName[2] // Change this line

// // Setup
// const lastName = 'Lovelace'
// // Only change code below this line
// const lastLetterOfLastName = lastName[lastName.length - 1] // Change this line

// // Setup
// const lastName = 'Lovelace'
// // Only change code below this line
// const secondToLastLetterOfLastName = lastName[lastName.length - 2] // Change this line

// const myNoun = 'dog'
// const myAdjective = 'big'
// const myVerb = 'ran'
// const myAdverb = 'quickly'
// // Only change code below this line
// const wordBlanks = myAdjective + ' ' + myNoun + ' ' + myVerb + ' ' + myAdverb // Change this line
// // Only change code above this line

// function greet() {
//   return 'hello world!'
// }

// // Only change code below this line
// const myArray = ['1', 2]

// // Only change code below this line
// const myArray = [[], []]

// const myArray = [50, 60, 70]
// const myData = myArray[0]

// // Setup
// const myArray = [18, 64, 99]
// // Only change code below this line
// myArray[0] = 45

// const myArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14],
// ]
// const myData = myArray[2][1]

// // Setup
// const myArray = [
//   ['John', 23],
//   ['cat', 2],
// ]
// // Only change code below this line
// myArray.push(['dog', 3])

// // Setup
// const myArray = [
//   ['John', 23],
//   ['cat', 2],
// ]
// // Only change code below this line
// const removedFromMyArray = myArray.pop()

// // Setup
// const myArray = [
//   ['John', 23],
//   ['dog', 3],
// ]
// // Only change code below this line
// const removedFromMyArray = myArray.shift()

// // Setup
// const myArray = [
//   ['John', 23],
//   ['dog', 3],
// ]
// myArray.shift()
// // Only change code below this line
// myArray.unshift(['Paul', 35])

// const myList = [
//   ['Chocolate Bar', 15],
//   ['Chocolate Bar', 15],
//   ['Chocolate Bar', 15],
//   ['Chocolate Bar', 15],
//   ['hocolate Bar', 15],
// ]
