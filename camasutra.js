'use strict';
// console.log(typeof "yo!") // "string"
// console.log(typeof typeof 10) // "number" -> "string"

// const yo = "yo!" // "yo!"
// let hey = yo
// hey = "hey!"
// console.log(typeof yo) // "string"
// const nan = 1 * "string";
// console.log(typeof nan) // "number"
// console.log(Number.isNaN(nan)) // true

// const infinity = 10 / 0 // -> ERROR!
// console.log(typeof infinity) // "number"
// console.log(Number.isFinite(infinity)) // false

// console.log(typeof null) // "object"
// console.log(typeof undefined) // "undefined"

// console.log(typeof {}) //"object"
// console.log(typeof []) //"object"
// console.log(Array.isArray([])) // true
// console.log(typeof (() => { })) // "function"

// console.log(yo, hey)



// const ted = bob // #345
// const alex = ted
// ted.name = "Ted"
// console.log(bob)
//  const ted = {} // new Object()
// ted.name = bob.name
// ted.age = bob.age
// ted.isMarried = bob.isMarried

// const ted = {...bob} // #456 -> ted - это копия  || clone объекта bob
//
// console.log(ted === bob) // false
// console.log(ted.name === bob.name) // true
//
// const arr = [1,2,3,4,5]
// const copyArr = [...arr]

// const donald = {...bob} // friends: #007
// donald.name = "Donald"
// console.log(donald === bob) // false
// console.log(donald)
//
// bob.friends.push("Ann")
// console.log(bob)
// console.log(donald)

// const bob = { // #345
// 	name: "Bob",
// 	age: 23,
// 	isMarried: false,
// 	friends: ["Alex", "Ted", "John"], // #007
// 	technologies: ["HTML", "JS/TS", "CSS/SASS"],
// 	qwert: {
// 		ewq: {
// 			ooo: 2
// 		}
// 	}
// }
// const donald = {...bob, friends: [...bob.friends], technologies: [...bob.technologies]} // #008

// bob.friends.push("Ann")
// console.log(bob)
// donald.name = "Donald"
// console.log(donald)

// При возможности:
// 1. Написать функцию копироваия простого объекта с пом. for-in
// const bob2 = {}
// for (let i in bob) {
// 	bob2[i] = bob[i]
// }
// console.log(bob2);
// 2. Написать рекурсивную функцию копироваия сложного объекта

//Рекурсия самая простая. Рекурсия, это вызов функции самой себя.
// let as = 1;
// function rec() {
// 	as++;
// 	rec();
// }


//Обязательно:
//https://www.youtube.com/watch?v=qMRhXenpz6Q&ab_channel=BoringFrontEnd

// let students = [
// 	{
// 		name: "Bob",
// 		age: 22,
// 		isMarried: true,
// 		scores: 85
// 	},
// 	{
// 		name: "Alex",
// 		age: 21,
// 		isMarried: true,
// 		scores: 89
// 	},
// 	{
// 		name: "Nick",
// 		age: 20,
// 		isMarried: false,
// 		scores: 120
// 	},
// 	{
// 		name: "John",
// 		age: 19,
// 		isMarried: false,
// 		scores: 100
// 	}
// ];
// console.log(students.find(s => s.name === "Alex"));
// const saq = (s) => s.name === "Alex"
// const sar = (arr, fun) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (fun(arr[i]) === true) return arr[i]
// 	}
// }
// console.log(sar(students, saq));

// Посмотреть includes()

