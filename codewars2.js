'use strict'
// Отладка конвертера Цельсия
// Ваш друг едет за границу в Соединенные Штаты, поэтому он написал программу для преобразования Фаренгейта в Цельсий. К сожалению, в его коде есть ошибки.
// Найдите ошибки в коде, чтобы конвертер Цельсия работал правильно.
// Чтобы перевести фаренгейты в градусы Цельсия:
// celsius = (fahrenheit - 32) * (5/9)
// Помните, что обычно температуры в текущих погодных условиях даются целыми числами. Датчики температуры могут сообщать о температуре с более высокой точностью, например, с точностью до десятых. Однако погрешность прибора делает такую точность ненадежной для многих типов датчиков измерения температуры.
// function convertToCelsius(temperature) {
//   const celsius = (temperature - 32) * (5 / 9)
//   return celsius
// }
// function weatherInfo(temp) {
//   const c = convertToCelsius(temp)
//   if (c < 0) return c + ' is freezing temperature'
//   else return c + ' is above freezing temperature'
// }
// console.log(weatherInfo(50))
// console.log(weatherInfo(23))

// Создавая игру, ваш партнер Грег решил создать функцию для проверки того, жив ли пользователь, которая называется checkAlive. К сожалению, Грег допустил несколько ошибок при создании функции.
// checkAlive должнa возвращать true, если здоровье игрока больше 0, или false, если оно равно 0 или ниже.
// Функция получает один параметр здоровья, который всегда будет целым числом от -10 до 10.
// function checkAlive(health) {
//   return health > 0
// }
// console.log(checkAlive(5)) //true

// Напишите функцию, которая будет принимать два параметра: переменную и тип, и проверяйте, соответствует ли тип переменной типу. Возвращает true, если типы совпадают, или false, если нет.
// 42, "number"   --> true
// "42", "number" --> false
// function typeValidation(variable, type) {
//   return typeof variable === type
// }
// console.log(typeValidation(42, 'number')) //true

// Широкоротая лягушка особенно интересуется пищевыми привычками других существ.
// Он просто не может перестать спрашивать существ, которых встречает, что они любят есть. Но затем он встречает аллигатора, который просто ОБОЖАЕТ есть широкоротых лягушек!
// Когда он встречает аллигатора, он делает крошечный рот.
// Ваша цель в этом ката — создать полный метод mouth_size, этот метод принимает один аргумент animal, которое соответствует животному, с которым столкнулась лягушка. Если это alligator (без учета регистра), верните small размер, в противном случае верните wide
// function mouthSize(animal) {
//   return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
// }
// console.log(mouthSize('toucan'))

// Вам дан массив с положительными числами и неотрицательным числом N. Нужно найти N-ю степень элемента в массиве с индексом N. Если N вне массива, то вернуть -1. Не забывайте, что первый элемент имеет индекс 0.
// Давайте рассмотрим несколько примеров:
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
// function index(array, n) {
//   return array[n] ? Math.pow(array[n], n) : -1
// }
// console.log(index([1, 2, 3, 4], 2)) //9

// Простое использование сортировки. Создайте функцию, которая возвращает элементы входного массива/списка, отсортированные в лексикографическом порядке.
// const sortme = names => {
//   return names.sort()
// }
// console.log(sortme(['one', 'two', 'three'])) //["one", "three", "two"]

// Твоя машина старая, легко ломается. Амортизаторы исчезли, и вы думаете, что он может выдержать еще около 15 ударов, прежде чем полностью умрет.
// К сожалению для вас, ваш диск очень ухабистый! Дана строка, показывающая либо ровную дорогу (_), либо неровности (n). Если вы можете благополучно добраться до дома, наткнувшись на 15 ударов или меньше, верните Woohoo!, в противном случае верните Car Dead.
// function bump(x) {
//   return x.replace(/_/gi, '').length < 16 ? 'Woohoo!' : 'Car Dead'
// }
// console.log(bump('__nn_nnnn__n_n___n____nn__nnn')) //"Woohoo!"
// console.log(bump('_nnnnnnn_n__n______nn__nn_nnn')) //"Car Dead"

// Ваша задача — реализовать эти функции на данном языке. Убедитесь, что он не редактирует массив; это вызовет проблемы! Вот шпаргалка:
// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |
// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x
// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]
// const head = arr => arr[0]
// const tail = arr => (arr.length > 1 ? arr.slice(1) : [])
// const init = arr => (arr.length > 1 ? arr.slice(0, arr.length - 1) : [])
// const last = arr => arr.slice(-1)[0]
// console.log(init([1, 2, 3, 4, 5]))
// console.log(init([36]))
// console.log(tail([20, 19, 16, 11, 36]))

// Вам предоставляется словарь/хэш/объект, содержащий несколько языков и результаты вашего теста на данных языках. Верните список языков, на которых ваша тестовая оценка не ниже 60, в порядке убывания результатов.
// Примечание: баллы всегда будут уникальными (поэтому не будет повторяющихся значений).
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
// function myLanguages(results) {
//   const arr = []
//   for (let i of Object.entries(results)) {
//     if (i[1] > 59) arr.push(i)
//   }
//   return arr.sort((a, b) => b[1] - a[1]).map(el => el[0])
// }
// console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }))
// console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }))

// Учитывая строку, состоящую из цифр [0-9], вернуть строку, в которой каждая цифра повторяется количество раз, равное ее значению.
// explode("312")
// should return :
// "333122"
// explode("102269")
// should return :
// "12222666666999999999
// function explode(s) {
//   return s
//     .split('')
//     .map(el => {
//       let a = ''
//       for (let i = 0; i < +el; i++) {
//         a += el
//       }
//       return a
//     })
//     .join('')
// }
// console.log(explode('312'))
// function explode(s) {
// 	return s.split("").map((e) => e.repeat(+e)).join("");
//  }

// Функция проверки палиндрома

// const isPalindrome = (string) => {
// 	return (
// 	  string.toLowerCase() == string.toLowerCase().split("").reverse().join("")
// 	);
//  };

// =========

// Функция поиска самого короткого слова

//  const findShort = (string) => {
// 	return string.split(" ").sort((a, b) => a.length - b.length)[0];
//  };

// =========

// Функция создания инициалов

//  const toInitials = (initials) => {
// 	return initials
// 	  .split(" ")
// 	  .map((el) => el[0].toUpperCase() + ".")
// 	  .join("");
//  };

// =========

// Функция суммирования всех цифр числа

//  const sumDigits = (digits) => {
// 	const num = digits < 0 ? -digits : digits;
// 	return (num + "").split("").reduce((a, b) => +a + +b);
//  };

// =========

// Функция поиска минимального и максимального значений в массиве

//  const minMax = (arr) => {
// 	const sortArr = arr.sort((a, b) => a - b);
// 	return [sortArr[0], sortArr.at(-1)];
//  };

// Функция создания набора дубликатов символов строки

//  const accum = (string) => {
// 	return string
// 	  .split("")
// 	  .map((el, index) => {
// 		 let letters = el.toUpperCase();
// 		 for (let i = 0; i < index; i++) {
// 			letters += el.toLowerCase();
// 		 }
// 		 return letters;
// 	  })
// 	  .join("-");
//  };

// =========

// Функция возврата индексов заглавных букв строки

//  const capitals = (string) => {
// 	const capitalsIndex = [];
// 	string.split("").map((el, i) => {
// 	  //Наверно запушить менее ресурсоемко чем юзать filter, но это не точно))
// 	  if (el === el.toUpperCase()) {
// 		 capitalsIndex.push(i);
// 	  }
// 	  return el;
// 	});
// 	return capitalsIndex;
//  };

// =========

// Функция вывода чисел от 1 до n (n - передаваемый аргумент)

//  const fooBar = (num) => {
// 	const arr = [];
// 	for (let i = 1; i < num; i++) {
// 	  if (i % 5 == 0 && i % 3 == 0) arr.push("foobar");
// 	  else if (i % 5 == 0) arr.push("bar");
// 	  else if (i % 3 == 0) arr.push("foo");
// 	  else arr.push(i);
// 	}
// 	return arr;
//Второй вариант показался страшным))
//   return new Array(num).fill(1).map((el, i) => {
//     return (i + 1) % 5 == 0 && (i + 1) % 3 == 0 ? 'foobar' : (i + 1) % 3 == 0 ? 'foo' : (i + 1) % 5 == 0 ? 'bar' : i + 1
//   })
//  };

// =========

// Функция возврата уникальных значений из нескольких массивов

//  const uniteUnique = (...arr) => {
// 	return [...new Set(arr.flat())];
//  };

// =========

// const arr = ['cat', 'pig', 'dog', 'cat', 'dog', 'cat'] необходимо получить массив с уникальными значениями, и отсортированной по частоте упоминания в массиве.

//  const filterArr = (arr) => {
// 	const objAmount = {};
// 	for (let i = 0; i < arr.length; i++) {
// 	  if (arr[i] in objAmount) {
// 		 objAmount[arr[i]] = objAmount[arr[i]] + 1;
// 	  } else {
// 		 objAmount[arr[i]] = 1;
// 	  }
// 	}
// 	return Object.entries(objAmount)
// 	  .sort((a, b) => b[1] - a[1])
// 	  .map((el) => el[0]);
//  };

// =========

// Про замыкание. Нужно создать функцию inc(), которая будет возвращать число больше предыдущего на 1. При этом запрещено создавать глобальные переменные или другие объекты, в коде должна быть реализована только 1 эта функция

//  const incNum = () => {
// 	let num = 0;
// 	const fun = () => {
// 	  return ++num;
// 	};
// 	return fun;
//  };
//  let inc = incNum();
