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

// Создайте функцию, которая принимает 2 строковых аргумента и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом.
// Если вхождений не найдено, должно быть возвращено число 0.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// function strCount(str, letter) {
//   return str.split('').filter(el => el === letter).length
// }
// console.log(strCount('', 'l'))
// function strCount(str, letter) {
//   return str.split(letter).length - 1
// }

// Вдохновившись командой разработчиков Vooza, напишите функцию, которая
// принимает имя программиста и
// возвращает количество световых мечей, принадлежащих этому человеку.
// Кстати, единственный человек, у которого есть световые мечи, это Зак. У него 18 световых мечей, что является огромным количеством световых мечей. Кто-то еще владеет 0.
// Примечание: ваша функция должна иметь параметр по умолчанию.
// "anyone else" --> 0
// "Zach" --> 18
// function howManyLightsabersDoYouOwn(name) {
//   return name === 'Zach' ? 18 : 0
// }
// console.log(howManyLightsabersDoYouOwn('Zach'))

// Теперь вам нужно написать функцию, которая принимает аргумент и возвращает его квадрат.
// function square(num) {
//   return num ** 2
// }
// console.log(square(3))

// Жадность — это игра в кости, в которую играют пятью шестигранными костями. Ваша миссия, если вы решите ее принять, состоит в том, чтобы забить бросок в соответствии с этими правилами. Вам всегда будет дан массив с пятью значениями шестигранных кубиков.
// Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// Один кубик может быть подсчитан только один раз в каждом броске. Например, данная «5» может учитываться только как часть тройки (составляющей 500 баллов) или как отдельные 50 баллов, но не оба в одном броске.
// В некоторых языках можно изменить ввод функции. Это то, что вы никогда не должны делать. Если вы мутируете ввод, вы не сможете пройти все тесты.
// function score(dice) {
//   const obj = {}
//   let total = 0
//   dice.map(el => {
//     !obj[el] ? (obj[el] = 0) : null
//     obj[el] += 1
//   })
//   Object.entries(obj).map(el => {
//     switch (el[0]) {
//       case '1':
//         if (el[1] >= 3) {
//           total += 1000 + 100 * (el[1] - 3)
//         } else total += 100 + 100 * (el[1] - 1)
//         return
//       case '2':
//       case '3':
//       case '4':
//       case '6':
//         if (el[1] >= 3) total += +(el[0] + '00')
//         return
//       case '5':
//         if (el[1] >= 3) {
//           total += 500 + 50 * (el[1] - 3)
//         } else total += 50 + 50 * (el[1] - 1)
//         return
//     }
//   })
//   return total
// }
// console.log(score([2, 3, 4, 6, 2])) //400
// const score = dice =>
//   (dice.sort().join(``).match(/(\d)\1{2}|[15]/g) || []).reduce((pre, val) => pre + 100 * ({111: 10, 1: 1, 5: .5}[val] || val[0]), 0);

// Ваша задача — написать функцию, которая увеличивает строку, чтобы создать новую строку.
// Если строка уже заканчивается числом, число должно быть увеличено на 1.
// Если строка не заканчивается цифрой. число 1 должно быть добавлено к новой строке.
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Внимание: Если в числе есть ведущие нули, следует учитывать количество цифр.
// function incrementString(string) {
//   let startNum = string.split('').reverse()
//   let stringStr = ''
//   for (let i = 0; i < startNum.length; i++) {
//     if (+string) startNum = string
//     if (!(+startNum[i] + 1)) {
//       startNum = string.slice(string.length - i)
//       stringStr = string.slice(0, string.length - i)
//     }
//   }
//   const stringZeros = startNum.length - (+startNum + '').length
//   for (let i = 0; i < stringZeros; i++) {
//     if (string.length <= (stringStr + (+startNum + 1)).length) continue
//     stringStr += 0
//   }
//   stringStr += +startNum + 1
//   return stringStr
// }
// console.log(incrementString('009'))
// console.log(incrementString('foo0142'))
// const incrementString = s => s.replace(/[0-8]?9*$/, m => String(++m))

// Отладка функции sayHello
// Звездолет «Энтерпрайз» столкнулся с проблемой при создании программы для приветствия всех,
// кто поднимается на борт. Ваша задача — исправить код и заставить программу снова работать!
// Example output:
// Hello, Mr. Spock
// function sayHello(name) {
// 	return `Hello, ${name}`
//  }

// Основная идея заключается в подсчете всех встречающихся символов в строке. Если у вас есть строка like aba, то результат должен быть{'a': 2, 'b': 1}.
// Что делать, если строка пуста? Тогда результатом должен быть пустой объектный литерал, {}.
// function count(string) {
//   const map = new Map()
//   string.split('').map(el => {
//     if (!map.has(el)) return map.set(el, 1)
//     map.set(el, map.get(el) + 1)
//   })
//   return Object.fromEntries(map.entries())
// }
// console.log(count('asdasdgfttthkjyuj'))
// function count(string) {
//   const count = {}
//   string.split('').map(s => {
//     count[s] ? count[s]++ : (count[s] = 1)
//   })
//   return count
// }
// console.log(count('asdasdgfttthkjyuj'))

// Для заданной строки s найдите символ c (или C) с самым длинным последовательным повторением и вернитесь:
// [c, l]
// где l (или L) — длина повторения. Если есть два или более символов с одинаковым l, вернуть первый в порядке появления.
// Для возврата пустой строки:
// ["", 0]
// В JavaScript: если вы используете Array.sort в своем решении, у вас могут возникнуть проблемы со случайными тестами, поскольку Array.sort нестабилен в версии Node.js, используемой CodeWars. Это не проблема ката.
// function longestRepetition(s) {
//   const charArray = s.split('')
//   const countArray = []
//   let counter = ''
//   const maxLength = Math.max(...countArray.map(el => el.length))
//   charArray.map((el, index) => {
//     if (el === charArray[index + 1]) {
//       counter === '' ? (counter = el + el) : (counter += el)
//     } else {
//       counter === '' ? (counter = el) : counter === ''
//       countArray.push(counter)
//       counter = ''
//     }
//   })
//   return s ? [countArray.filter(el => el.length === maxLength)[0][0], maxLength] : ['', 0]
// }
// console.log(longestRepetition('bbbaaabaaaa'))
// console.log(longestRepetition('aabb'))
// const longestRepetition = s => s.match(/(.)\1*|$/g).reduce(([c, l], val) => (val.length > l ? [val[0], val.length] : [c, l]), [``, 0])

// Вы можете использовать предварительно загруженный словарь под названием NATO.
// Набор используемых знаков препинания ,.!?.
// В возвращаемой строке должны быть сохранены знаки препинания, но не пробелы.
// Рентген не должен иметь тире внутри.
// Каждое слово и знак препинания должны быть разделены пробелом ' '.
// Не должно быть пробелов в конце
// Input:
// If, you can read?
// Output:
// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
// function to_nato(words) {
//   const alphabetArray = [
//     'Alfa',
//     'Bravo',
//     'Charlie',
//     'Delta',
//     'Echo',
//     'Foxtrot',
//     'Golf',
//     'Hotel',
//     'India',
//     'Juliett',
//     'Kilo',
//     'Lima',
//     'Mike',
//     'November',
//     'Oscar',
//     'Papa',
//     'Quebec',
//     'Romeo',
//     'Sierra',
//     'Tango',
//     'Uniform',
//     'Victor',
//     'Whiskey',
//     'Xray',
//     'Yankee',
//     'Zulu',
//   ]
//   return words
//     .toUpperCase()
//     .replace(/ /g, '')
//     .split('')
//     .map(el => alphabetArray.filter(char => char.split('')[0] === el).toString() || el)
//     .join(' ')
// }
// console.log(to_nato('go for it!'))
// function to_nato(words) {
// 	return words.replace(/\s/g, '').toLowerCase().split('').map(e => NATO[e] ? NATO[e] : e).join(' ');
//  }
