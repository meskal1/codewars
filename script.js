'use strict';

function lnth(str) {
	let n = str.replace(/\s*,\s*/g, ` `).replace(/\s*!\s*/g, ``).replace(/\s* \s*/g, ` `).replace(/\s*`?`\s*/g, ``);
	console.log(n);
	console.log(n.split(` `));
	let num = str.length;
	for (let i of n.split(` `)) {
		if (i.length < num) {
			num = i.length;
			console.log(num);
		}
	}
}
// lnth('Иии как хорош тот ,новый  мир, где есть    такие   люди!  ');

// Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру 5 и выше на «1». Верните полученную строку.
function fakeBin(x) {
	// return x.split(``).map(n => n < 5 ? 0 : 1).join(``);
	// return x.replace(/\d/g, d => (d < 5) ? 0 : 1);
}
// fakeBin(`243425034918137`);
// console.log(fakeBin(`243425034918137`));

// Первое столетие охватывает период с 1 года по 100 год включительно, второе столетие — с 101 года по 200 год включительно и т. д.
function century(year) {
	// console.log(year / 10);
	// if ((year % 100 !== 0) && ((year / 10 > 100) || (year / 10 < 100))) {
	// 	console.log(`Вы живете в ${Math.floor(year / 100) + 1} веке`);
	// } else {
	// 	console.log(`Вы живете в ${Math.floor(year / 100)} веке`);
	// }
	// return;
	return Math.ceil(year / 100);
}
// console.log(century(2022));

//Джейден Смит, сын Уилла Смита, является звездой таких фильмов, как «Каратэ-пацан» (2010) и «После Земли» (2013). Джейден также известен своей философией, которую он распространяет через Twitter. Когда он пишет в Твиттере, он известен тем, что почти всегда пишет каждое слово с большой буквы. Для простоты вам придется писать каждое слово с заглавной буквы. Посмотрите, какими должны быть сокращения в приведенном ниже примере.
// Ваша задача состоит в том, чтобы преобразовать строки в то, как они были бы написаны Джейденом Смитом. Строки являются настоящими цитатами Джейдена Смита, но они не написаны с заглавной буквы так, как он их изначально напечатал.
// const toJadenCase = function (str) {
// 	return str.split(` `).map(n => {
// 		let [q, ...w] = n;
// 		n = [q.toUpperCase(), ...w].join(``);
// 		return n;
// 	}).join(` `);
// };
// toJadenCase("How can mirrors be real if our eyes aren't real");
// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
// String.prototype.toJadenCase = function () {
// 	return this.split(` `).map(n => {
// 		let [q, ...w] = n;
// 		n = [q.toUpperCase(), ...w].join(``);
// 		return n;
// 	}).join(` `);
// };

// Часы показывают ч часов, m минут и s секунд после полуночи.
// Ваша задача — написать функцию, которая возвращает время с полуночи в миллисекундах.
// function past(h, m, s) {
// 	return h * 3600000 + m * 60000 + s * 1000;
// }
// console.log(past(0, 1, 1));

// Возможно, вы знаете несколько довольно больших идеальных квадратов. Но как насчет СЛЕДУЮЩЕГО?
// Завершите метод findNextSquare, который находит следующий целочисленный идеальный квадрат после квадрата, переданного в качестве параметра. Напомним, что целочисленный совершенный квадрат — это целое число n, такое что sqrt(n) также является целым числом.
// Если параметр сам по себе не является идеальным квадратом, то следует вернуть -1. Вы можете предположить, что параметр неотрицательный.
// function findNextSquare(sq) {
// 	let num = Math.sqrt(sq);
// 	return Number.isInteger(num) ? (num + 1) ** 2 : -1;
// }
// console.log(findNextSquare(120));

// function bmi(weight, height) {
// 	let bmi = weight / height ** 2;
// 	console.log(bmi);
// 	return (bmi <= 18.5) ? "Underweight" : (bmi <= 25.0) ? "Normal" : (bmi <= 30.0) ? "Overweight" : "Obese";
// }
// console.log(bmi(60, 1.40));

// Вам будет дан массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение.
// Массив может содержать числа или строки. Х может быть любым.
// Возвращает true, если массив содержит значение, и false, если нет.
// function check(a, x) {
// 	return a.includes(x);
// }
// console.log(check([1, 5, 2, 5, 9, `ewq`], 2));

// ПРоверка на панграмму
// function isPangram(string) {
// 	return new Set(string.toLowerCase().replace(/[^a-z]/gi, ``)).size == 26;
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// const stringToNumber = function (str) {
// 	return +str;
// }
// console.log(stringToNumber(1212));

//В этой ката вы должны, учитывая строку, заменить каждую букву ее позицией в алфавите.
// Если что-то в тексте не является буквой, игнорируйте это и не возвращайте.
// "a" = 1, "b" = 2, etc.
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
// function alphabetPosition(text) {
// 	let r = text.toLowerCase().replace(/[^a-z]/g, ``);
// 	let a = 'abcdefghijklmnopqrstuvwxyz';
// 	let array = [];
// 	for (let i = 0; i < r.length; i++) {
// 		array.push(r.slice(i, i + 1).replace(r[i], a.indexOf(r[i]) + 1));
// 	}
// 	return array.join(` `);
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// function alphabetPosition1(text) {
// 	console.log(text.toLowerCase());
// 	console.log(text.toLowerCase().match(/[a-z]/gi));
// 	console.log(text.toLowerCase().match(/[a-z]/gi).map((c) => c.charCodeAt() - 96));
// 	console.log(`r`.charCodeAt());
// 	return text
// 		.toUpperCase()
// 		.match(/[a-z]/gi)
// 		.map((c) => c.charCodeAt() - 64)
// 		.join(' ');
// }
// console.log(alphabetPosition1("The sunset sets at twelve o' clock."));

// Реализуйте функцию, которая складывает два числа и возвращает их сумму в двоичном виде. Преобразование может быть выполнено до или после добавления.
// Возвращаемое двоичное число должно быть строкой.
// function addBinary(a, b) {
// 	return (a + b).toString(2);
// }
// console.log(addBinary(5, 9));

// Сможете ли вы найти иголку в стоге сена?
// Напишите функцию findNeedle(), которая принимает массив, полный мусора, но содержащий одну «иглу».
// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится: "найдена игла в положении " плюс индекс, в котором она нашла иглу, поэтому:
// function findNeedle(haystack) {
// 	return `found the needle at position ${haystack.indexOf(`needle`)}`;
// }
// console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

// function positiveSum(arr) {
// 	return arr.filter(x => x > 0).reduce((a, b) => a + b, 0);
// }
// console.log(positiveSum([1, -4, 7, 12]));

// Ваша задача — создать функцию, которая выполняет четыре основные математические операции.
// Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
// Функция должна возвращать числовой результат после применения выбранной операции.
// function basicOp(operation, value1, value2) {
// 	return operation == `*` ? value1 * value2 : operation == `/` ? value1 / value2 : operation == `+` ? value1 + value2 : operation == `-` ? value1 - value2 : operation;
// }
// console.log(basicOp(`*`, 2, 3));

// Учитывая массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.
// Например: [0, 0, 0, 1] обрабатывается как 0001, что является двоичным представлением 1.
// const binaryArrayToNumber = arr => {
// 	return parseInt(`${arr.join(``)}`, 2);
// };
// console.log(binaryArrayToNumber([0, 0, 1, 0]));

// Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.
// function sortArray(array) {
// 	let a = array.filter(x => x % 2 !== 0).sort((a, b) => a - b);
// 	for (let i = 0; i < a.length; i++) {
// 		delete array[array.indexOf(a[i])];
// 	}
// 	qwe: for (let i = 0; i < a.length; i++) {
// 		for (let j = 0; j < array.length; j++) {
// 			if (array[j] == undefined) {
// 				array[j] = a[i];
// 				continue qwe;
// 			}
// 		}
// 	}
// 	return array;
// }
// console.log(sortArray([5, 8, 6, 3, 7, 3, 5, 4]));

// function sortArray(array) {
// 	const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
// 	return array.map((x) => x % 2 ? odd.shift() : x);
// }
// console.log(sortArray([5, 8, 6, 3, 7, 3, 5, 4]));

// Дан список целых чисел, определить, является ли сумма его элементов четной или нечетной.
// Дайте ответ в виде строки, соответствующей «нечетному» или «четному».
// Если входной массив пуст, рассматривайте его как: [0] (массив с нулем).
// function oddOrEven(array) {
// 	return array.reduce((a, b) => a + b, 0) % 2 ? `odd` : `even`;
// }
// console.log(oddOrEven([0, 1, 4]));

// Ваша цель в этом ката — реализовать функцию разности, которая вычитает один список из другого и возвращает результат.
// Он должен удалить все значения из списка a, которые присутствуют в списке b, сохраняя их порядок.
// function arrayDiff(a, b) {
// 	for (let i of b) {
// 		a = a.filter(x => x !== i);
// 	}
// 	return a;
// }
// console.log(arrayDiff([1, 2, 2, 2, 3, 4], [2, 3]));
// function array_diff(a, b) {
// 	return a.filter(e => !b.includes(e));
// }

// Вы, наверное, знаете систему «лайков» из Facebook и других страниц. Люди могут «лайкать» сообщения в блогах, изображения или другие элементы. Мы хотим создать текст, который должен отображаться рядом с таким элементом.
// Реализуйте функцию, которая принимает массив, содержащий имена людей, которым понравился элемент. Он должен возвращать отображаемый текст, как показано в примерах:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// function likes(names) {
// 	switch (names.length) {
// 		case 0: return `no one likes this`;
// 		case 1: return `${names[0]} likes this`;
// 		case 2: return `${names[0] + ` and ` + names[1]} like this`;
// 		case 3: return `${names[0] + `, ` + names[1] + ` and ` + names[2]} like this`;
// 		default:
// 			return `${names[0] + `, ` + names[1] + ` and ` + (names.length - 2)} others like this`;
// 	}
// }
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
// function likes(names) {
// 	return {
// 		0: 'no one likes this',
// 		1: `${names[0]} likes this`,
// 		2: `${names[0]} and ${names[1]} like this`,
// 		3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
// 		4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
// 	}[Math.min(4, names.length)]
// }

// Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорировать регистр букв.
// function isIsogram(str) {
// 	return new Set(str.toLowerCase()).size == str.length;
// }
// console.log(isIsogram("Dermatoglyphics"));
// function isIsogram(str){
// 	return !/(\w).*\1/i.test(str)
//  }

// Ваша задача — отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число и есть позиция, которую должно занимать слово в результате.
// Примечание. Цифры могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0).
// Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только допустимые последовательные числа.
// function order(words) {
// 	return words ? words.split(` `).map(c => c.match(/[1-9]/g) + c).sort().map(c => c.replace(c[0], ``)).join(` `) : ``;
// }
// console.log(order("is2 Thi1s T4est 3a"));
// function order(words) {
// 	return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');
// }
// console.log(order("is2 Thi1s T4est 3a"));

// function find_average(array) {
// 	return array.length !== 0 ? array.reduce((a, b) => a + b, 0) / array.length : 0;
// }
// console.log(find_average([]));

// Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// function solution(str, ending) {
// 	let a = str.split(``);
// 	let b = a.length;
// 	let c = ending.split(``).length;
// 	for (let i = 0; i < (b - c); i++) {
// 		a.shift();
// 	}
// 	return a.join(``) == ending;
// }
// console.log(solution('abcde', 'cde'));
// function solution(str, ending) {
// 	return str.endsWith(ending);
// }
// console.log(solution('abcde', 'cde'));

// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// function reverseWords(str) {
// 	return str.split(` `).map(c => c.split(``).reverse().join(``)).join(` `);
// }
// console.log(reverseWords("This is an example!"));

// В маленьком городке население р0 = 1000 в начале года. Население регулярно увеличивается на 2 процента в год, и более 50 новых жителей ежегодно переезжают в город. Сколько лет нужно городу, чтобы его население стало больше или равно p = 1200 жителей?
// Более общие параметры:
// p0, процент, aug (жители приезжают или уезжают каждый год), p (население, которое должно превзойти)
// функция nb_year должна возвращать n полных лет, необходимых для получения населения, большего или равного p.
// aug — целое число, процент — положительное или нулевое плавающее число, p0 и p — положительные целые числа (> 0)
// Не забудьте преобразовать параметр процента в процент в теле вашей функции: если параметр процента равен 2, вы должны преобразовать его в 0,02.
// function nbYear(p0, percent, aug, p) {
// 	let count = 0;
// 	while (p0 < p) {
// 		p0 = p0 + p0 * percent / 100 + aug;
// 		count++;
// 	}
// 	return count;
// }
// console.log(nbYear(1500, 5, 100, 5000));

// По городу движется автобус, и на каждой остановке он берет и высаживает несколько человек.
// Вам предоставляется список (или массив) целочисленных пар. Элементы каждой пары представляют количество людей, садящихся в автобус (первый элемент) и количество людей, выходящих из автобуса (второй элемент) на автобусной остановке.
// Ваша задача — вернуть количество людей, оставшихся в автобусе после последней автобусной остановки (после последнего массива). Несмотря на то, что это последняя автобусная остановка, автобус не пустой, и некоторые люди все еще в автобусе, и они, вероятно, спят там :D
// Взгляните на тест-кейсы.
// Имейте в виду, что тестовые примеры гарантируют, что количество людей в автобусе всегда >= 0. Таким образом, возвращаемое целое число не может быть отрицательным.
// Второе значение в первом целочисленном массиве равно 0, так как автобус на первой остановке пуст.
// var number = function (busStops) {
// 	return busStops.map(c => c[0] - c[1]).reduce((a, b) => a + b, 0);
// }
// console.log(number([[10, 0], [3, 5], [5, 8]])); // 5

// Дан массив целых чисел.
// Возвращает массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным.
// Если входной массив пуст или нулевой, верните пустой массив.
// function countPositivesSumNegatives(input) {
// 	return (input !== undefined) && (input.toString() !== `0,0`) ? [input.reduce((a, b) => (a < 0 ? 0 : a) + ((b <= 0) ? 0 : 1), 0), input.reduce((a, b) => (a < 0 ? a : 0) + ((b < 0) ? b : 0), 0)] : [];
// }
// console.log(countPositivesSumNegatives([0, 0]));
// [10, -65]
// [8, -50]

// function repeatStr(n, s) {
// 	let a = s;
// 	for (let i = 1; i < n; i++) {
// 		a = s + a;
// 	}
// 	return a;
// }
// console.log(repeatStr(5, `d`));
// function repeatStr(n, s) {
// 	return s.repeat(n);
// }

// Учитывая массив (arr) в качестве аргумента, завершите функцию countSmileys, которая должна вернуть общее количество улыбающихся лиц.
// Правила улыбающегося лица:
// Каждый смайлик должен содержать допустимую пару глаз. Глаза могут быть отмечены как : или ;
// У смайлика может быть нос, но не обязательно. Допустимые символы для носа - или ~
// Каждое улыбающееся лицо должно иметь улыбающийся рот, который должен быть отмечен знаком ) или D.
// Не допускается использование дополнительных символов, кроме упомянутых.
// function countSmileys(arr) {
// 	return arr.length !== 0 ? arr.map(c => {
// 		let a = c[0] == `;` || c[0] == `:`;
// 		let b = c[1] == `-` || c[1] == `~` || c[1] == `D` || c[1] == `)`;
// 		let g = c[2] == `D` || c[2] == `)`;
// 		let d = c.split(``).length;
// 		let z = c.split(``).map(x => (d == 3) && a && b && g ? 1 : (d == 2) && a && b ? 1 : 0).join(``);
// 		return (z == 11 || z == 111) ? 1 : 0;
// 	}).reduce((a1, b2) => a1 + b2) : 0;
// }
// console.log(countSmileys([]));
// console.log(countSmileys([':D', ':~)', ';~D', ':)']));
// console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
// function countSmileys(arr) {
// 	return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }

// let str = "+7(903)-123-45-67";
// let numbers = str.match(/\d{1,}/g);
// console.log(numbers); // 7,903,123,45,67

//На этот раз мы хотим написать вычисления с использованием функций и получить результаты. Давайте посмотрим на некоторые примеры:
// Требования:
// Должна быть функция для каждого числа от 0 ("ноль") до 9 ("девять")
// Должна быть функция для каждой из следующих математических операций: плюс, минус, умножить, разделить на
// Каждое вычисление состоит ровно из одной операции и двух чисел
// Самая внешняя функция представляет левый операнд, самая внутренняя функция представляет правый операнд.
// Деление должно быть целочисленным. Например, это должно возвращать 2, а не 2.667766...:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// function fun(a, b) { return a ? Math.floor(a(b)) : b }
// function zero(a) { return fun(a, 0) }
// function one(a) { return fun(a, 1) }
// function two(a) { return fun(a, 2) }
// function three(a) { return fun(a, 3) }
// function four(a) { return fun(a, 4) }
// function five(a) { return fun(a, 5) }
// function six(a) { return fun(a, 6) }
// function seven(a) { return fun(a, 7) }
// function eight(a) { return fun(a, 8) }
// function nine(a) { return fun(a, 9) }

// function plus(c) { return d => d + c }
// function minus(c) { return d => d - c }
// function times(c) { return d => d * c }
// function dividedBy(c) { return d => d / c }
// console.log(nine(dividedBy(two())));
// console.log(eight(minus(three())));
// const make = (f, n) => f ? f(n) : n;

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// function solution(str) {
// 	return str.split(``).reverse().join(``);
// }
// console.log(solution('world'));

// function a(a, b) {
// 	return a + b
// }
// console.log(a(2, 4));

// Алекс только что получил новый хулахуп, он ему нравится, но он расстроен, потому что его младший брат лучше него.
// Напишите программу, в которой Алекс может ввести (n), сколько раз обруч обойдётся, и она вернёт ему ободряющее сообщение :)
// Если Алекс набирает 10 и более обручей, возвращает строку «Отлично, теперь переходим к трюкам».
// Если он не наберет 10 обручей, верните строку «Продолжай, пока не наберешь».
// function hoopCount(n) {
// 	return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
// }
// console.log(hoopCount(10));

// Создайте функцию, которая выдает персонализированное приветствие. Эта функция принимает два параметра: имя и владелец.
// Используйте условные выражения, чтобы вернуть правильное сообщение:
// function greet(name, owner) {
// 	return name === owner ? 'Hello boss' : 'Hello guest';
// }
// console.log(greet(`Daniel`, `Daniel`));

// В этом простом упражнении вы создадите программу, которая будет принимать два списка целых чисел, a и b. Каждый список будет состоять из 3 положительных целых чисел выше 0, представляющих размеры прямоугольных параллелепипедов a и b. Вы должны найти разницу объемов прямоугольных параллелепипедов независимо от того, какой из них больше.
// Например, если переданы параметры ([2, 2, 3], [5, 4, 1]), громкость a равна 12, а громкость b равна 20. Следовательно, функция должна вернуть 8.
// Ваша функция будет проверена как на готовых примерах, так и на случайных.
// Если можете, попробуйте написать это одной строкой кода.
// function findDifference(a, b) {
// 	return (a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b)) > 0 ? a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b) : -1 * (a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b))
// }
// console.log(findDifference([3, 2, 5], [1, 4, 4]));
// function find_difference(a, b) {
// 	return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
//  }

// Напишите функцию, которая принимает список строк в качестве аргумента и возвращает отфильтрованный список, содержащий те же элементы, но с удаленными «гусями».
// Гуси — это любые строки в следующем массиве, который предварительно заполнен в вашем решении:
// ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// function gooseFilter(birds) {
// 	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// 	return birds.filter((a) => !geese.includes(a))
// };
// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// Напишите простую функцию, которая принимает в качестве параметра объект даты и возвращает логическое значение, указывающее, является ли дата сегодняшней или нет.
// Убедитесь, что ваша функция не возвращает ложное срабатывание, просто проверив только день.
// function isToday(date) {
// 	return (new Date().getDate() === new Date(date).getDate()) && (new Date().getFullYear() === new Date(date).getFullYear())
// }
// console.log(isToday('December 25, 1995 23:15:30'));
// console.log(isToday('2122-03-08T21:13:05.875Z'));
// function isToday(date) {
// 	return new Date().toDateString() === date.toDateString();
// }

// Напишите функцию, которая берет массив слов, объединяет их в предложение и возвращает предложение. Вы можете игнорировать необходимость очистки слов или добавления знаков препинания, но вы должны добавлять пробелы между каждым словом. Будьте внимательны, не должно быть пробела ни в начале, ни в конце предложения!
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
// function smash(words) {
// 	return words.join(` `)
// };
// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

// «Точечное отражение» или «точечная симметрия» — это основное понятие в геометрии, согласно которому данная точка P в заданном положении относительно средней точки Q имеет соответствующую точку P1, которая находится на том же расстоянии от Q, но в противоположное направление.
// Задача
// Даны две точки P и Q, выведите точку, симметричную точке P относительно Q. Каждый аргумент представляет собой двухэлементный массив целых чисел, представляющий координаты X и Y точки. Вывод должен быть в том же формате, предоставляя координаты X и Y точки P1. Вам не нужно подтверждать ввод.
// function symmetricPoint(p, q) {
// 	return [2 * q[0] - p[0], 2 * q[1] - p[1]]
// }
// console.log(symmetricPoint([2, 6], [-2, -6])); //[-6, -18]

// Учитывая число n, вернуть количество положительных нечетных чисел меньше n, ЛЕГКО!
// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
// function oddCount(n) {
// 	return Math.floor(n / 2)
// }
// console.log(oddCount(15));

// Напишите функцию, которая проверяет, является ли заданная строка (без учета регистра) палиндромом.
// function isPalindrome(x) {
// 	if (x == ``) {
// 		return true
// 	}
// 	let a = x.toLowerCase().split(``)
// 	for (let i = a.length; i !== 1; i--) {
// 		if (a[0] === a[a.length - 1]) {
// 			a.shift()
// 			a.pop()
// 		} else return false
// 	}
// 	return true
// }
// console.log(isPalindrome(`Abba`)); //true
// console.log(isPalindrome(`Madam`)); //true
// console.log(isPalindrome(`hello`)); //false
// console.log(isPalindrome(`olllo`)); //false
// console.log(isPalindrome(``)); //true
// const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();

// Учитывая строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// function doubleChar(str) {
// 	return str.split(``).map(a => a + a).join(``)
// }
// console.log(doubleChar(`Adidas`)); //AAddiiddaass

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]
// function greet(name){
// 	return `Hello, ${name} how are you doing today?`
// }

// Ваша задача состоит в том, чтобы сделать две функции (максимум и минимум или максимум и минимум и т. д., в зависимости от языка), которые получают на вход список целых чисел и возвращают, соответственно, наибольшее и наименьшее число в этом списке.
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// var min = function (list) {
// 	return list.sort((a, b) => a - b)[0];
// }
// var max = function (list) {
// 	return list.sort((a, b) => a - b)[list.length - 1]
// }
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// Завершите функцию, которая вычисляет площадь красного квадрата, когда в качестве входных данных задана длина дуги окружности A. Возвращает результат, округленный до двух знаков после запятой.
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
// function squareArea(A) {
// 	let r = 2 * A / Math.PI
// 	return Math.floor(r * r * 100) / 100
// }
// console.log(squareArea(2));

// Завершите функцию, которая принимает два целых числа (a, b, где a < b), и верните массив всех целых чисел между входными параметрами, включая их.
// Например:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
// function between(a, b) {
// 	let z = [];
// 	for (let i = a; i <= b; i++) {
// 		z.push(i);
// 	}
// 	return z;
// }
// console.log(between(1, 4)); //[1, 2, 3, 4]

// Создайте функцию, которая конвертирует доллары США (USD) в китайские юани (CNY). Ввод представляет собой сумму в долларах США в виде целого числа, а вывод должен представлять собой строку, в которой указывается сумма в юанях, за которой следует «китайский юань».
// * 15  -> '101.25 Chinese Yuan'
// * 465 -> '3138.75 Chinese Yuan'
// Коэффициент конверсии, который вы должны использовать, составляет 6,75 китайских юаней за каждый 1 доллар США. Все числа должны быть представлены в виде строки с двумя десятичными знаками. (например, «21.00», НЕ «21.0» или «21»)
// function usdcny(usd) {
// 	return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
// }
// console.log(usdcny(7206));

// В этом ката вы создадите функцию, которая принимает список и возвращает список в обратном порядке.
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]
// function reverseList(list) {
// 	return list.reverse()
// }
// console.log(reverseList([1, 2, 3, 4]));

// Мы реализовали функцию wrap(value), которая принимает значение произвольного типа и заключает его в новый объект JavaScript или Python Dict, устанавливая ключ «value» в новом объекте или Dict в переданное значение.
// Так, например, если мы выполним следующий код:
// wrapper_obj = wrap("my_wrapped_string");
//  # wrapper_obj should be  {"value":"my_wrapped_string"}
//  Тогда мы ожидаем, что следующее утверждение будет истинным:
//  wrapper_obj["value"] == "my_wrapped_string"
// К сожалению, код не работает так, как задумано. Пожалуйста, исправьте код, чтобы он работал как указано.
// function wrap(value) {
// 	let n = { "value": value }
// 	return n
// }
// console.log(wrap("my_wrapped_string"));

// Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина столбов одинаковая. Ваша функция принимает три аргумента:
// 1) количество столбов(≥ 1);
// 2) расстояние между столбами(10 – 30 метров);
// 3) ширина столба(10 – 50 сантиметров).
// Рассчитайте расстояние между первым и последним столбом в сантиметрах (без ширины первого и последнего столба).
// function pillars(num_pill, dist, width) {
// 	let a = Math.round(((num_pill - 1) * dist + (num_pill - 2) * width / 100) * 100)
// 	return a < 0 ? 0 : a
// }
// console.log(pillars(11, 15, 30)); //15270
// console.log(pillars(2, 20, 25)); //2000
// console.log(pillars(1, 10, 10)); //0
// function pillars(num_pill, dist, width) {
// 	return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
//  }

// Создайте функцию, которая принимает список/массив и число n и возвращает список/массив первых n элементов из списка/массива.
// function take(arr, n) {
// 	return arr.splice(0, n)
// }
// console.log(take([0, 1, 2, 3, 5, 8, 13], 3)); //[0, 1, 2] "should return the first 3 items"

// В этом Ката мы передаем число (n) в функцию.
// Ваш код определит, является ли переданное число четным (или нет).
// Функция должна возвращать либо истину, либо ложь.
// Числа могут быть положительными или отрицательными, целыми числами или числами с плавающей запятой.
// Поплавки с десятичной частью, отличной от нуля, считаются НЕчетными для этой ката.
// function testEven(n) {
// 	return n % 2 == 0
// }
// console.log(testEven(0)); //true
// console.log(testEven(0.5)); //false
// console.log(testEven(1)); //false
// console.log(testEven(2)); //true
// console.log(testEven(-4)); //true


// Вы получаете любую карту в качестве аргумента. Ваша задача вернуть масть этой карты.
// Наша колода (предустановлена):
// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'
// function defineSuit(card) {
// 	let a = card[card.length - 1]
// 	return a == '♣' ? 'clubs' : a == '♦' ? 'diamonds' : a == '♥' ? 'hearts' : 'spades'
// }
// console.log(defineSuit(`3♣`));
// function defineSuit(card) {
// 	return {
// 	  '♣' : 'clubs',
// 	  '♦' : 'diamonds',
// 	  '♥' : 'hearts',
// 	  '♠' : 'spades'
// 	}[card.substr(-1)]
//  }

// Создайте функцию, которая принимает 2 целых числа в виде строки в качестве входных данных и выводит сумму (также в виде строки):
// Example: (Input1, Input2-- > Output)
// "4", "5" -- > "9"
// "34", "5" -- > "39"
// "", "" -- > "0"
// "2", "" -- > "2"
// "-5", "3" -- > "-2"
// Примечания:
// Если какой-либо вход является пустой строкой, считайте ее нулевой.
// Входные данные и ожидаемые выходные данные никогда не превысят ограничение на 32-битное целое число со знаком (2^31 - 1).
// function sumStr(a, b) {
// 	return +a + +b + ''
// }
// console.log(sumStr("4", "5")); // "9"

// Завершите функцию, которая принимает неотрицательное целое число n в качестве входных данных и возвращает список всех степеней числа 2 с показателем степени от 0 до n (включительно).
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
// function powersOfTwo(n) {
// 	let a = []
// 	for (let i = 0; i < n + 1; i++) {
// 		a.push(Math.pow(2, i))
// 	}
// 	return a
// }
// console.log(powersOfTwo(2)); //[1, 2, 4, 8, 16]

// Тимми и Сара думают, что они влюблены, но там, где они живут, они узнают об этом, только когда каждый сорвет по цветку.Если у одного из цветов четное количество лепестков, а у другого нечетное количество лепестков, это означает, что они влюблены.
// Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать true, если они влюблены, и false, если нет.
// function lovefunc(flower1, flower2) {
// 	return (flower1 % 2 == 0) && (flower2 % 2 == 0) ? false : !(flower1 % 2 == 0) && !(flower2 % 2 == 0) ? false : true
// }
// console.log(lovefunc(1, 4)) // true
// console.log(lovefunc(2, 2)) // false
// console.log(lovefunc(0, 1)) // true
// console.log(lovefunc(0, 0)) // false
// console.log(lovefunc(307, 867)) // false
// function lovefunc(flower1, flower2){
// 	return flower1 % 2 !== flower2 % 2;
//  }

// Завершите функцию, которая преобразует шестнадцатеричное число (заданное в виде строки) в десятичное число.
// function hexToDec(hexString) {
// 	return parseInt(hexString, 16)
// }
// console.log(hexToDec("FF")); //255

// Бобу нужен быстрый способ вычисления объема прямоугольного параллелепипеда с тремя значениями: длина, ширина и высота прямоугольного параллелепипеда. Напишите функцию, которая поможет Бобу в этом вычислении.
// class Kata {
// 	static getVolumeOfCuboid(length, width, height) {
// 		return length * width * height
// 	}
// }

// Убрать восклицательный знак в конце строки. Для начинающего ката можно считать, что входные данные всегда являются строкой, проверять ее не нужно.
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// function remove(string) {
// 	return string[string.length - 1] === '!' ? string.split(``).splice(0, string.length - 1).join(``) : string
// }
// console.log(remove("!Hi!"));
// const remove = s => s.replace(/!$/, '');
// function remove(s) {
// 	return s.endsWith('!') ? s.slice(0, -1) : s;
//  }

// Наверное, все слышали о проблеме с головами и ногами животных еще в школе. Это идет:
// «На ферме есть куры и коровы. Есть x голов и y ног. Сколько здесь кур и коров?»
// Где х <= 1000 и у <= 1000
// #Задача
// Предполагая, что других видов животных нет, подсчитайте, сколько там каждого животного.
// Если голова и ноги отрицательные, результат вашего вычисления отрицательный или вычисление представляет собой результат с плавающей запятой «Нет решений» (нет допустимых случаев) или [-1, -1] в COBOL.
// В виде:
// [Heads, Legs] = [72, 200]
// VALID - [72, 200] =>             [44 , 28]
//                              [Chickens, Cows]
// INVALID - [72, 201] => "No solutions"
// Однако, если задано 0 голов и 0 ног, всегда возвращайте [0, 0], так как при отсутствии голов должно быть ноль животных.
// Есть много разных способов решить эту проблему, но все они дают один и тот же ответ.
// Вам будут предоставлены только целые типы, однако будут даны отрицательные значения (пограничные случаи).
// Удачного кодирования!
// function animals(heads, legs) {
// 	let a = (legs - 2 * heads) / 2;
// 	let b = [heads - a, a]
// 	return b[0] < 0 || b[1] < 0 ? "No solutions" : b[0] !== Math.round(b[0]) || b[1] !== Math.round(b[1]) ? "No solutions" : b
// }
// console.log(animals(72, 200)); // [44, 28]
// console.log(animals(25, 555)); // "No solutions"
// console.log(animals(-45, 5)); // "No solutions"
// console.log(animals(500, 0)); // "No solutions"
// console.log(animals(5, -55)); // "No solutions"
// console.log(animals(0, 0)); // "No solutions"

// Вам даны длина и ширина четырехугольника. Многоугольник может быть прямоугольным или квадратным.
// Если это квадрат, вернуть его площадь. Если это прямоугольник, верните его периметр.
// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Примечание: для целей этого ката вы будете считать, что это квадрат, если его длина и ширина равны, в противном случае это прямоугольник.
// const areaOrPerimeter = function (l, w) {
// 	return l === w ? l * w : 2 * l + 2 * w
// };
// console.log(areaOrPerimeter(4, 4)); //16
// console.log(areaOrPerimeter(6, 10)); //32

// Определите метод hello, который возвращает "Hello, Name!" на заданное имя или говорит Hello, World! если имя не указано (или передано как пустая строка).
// Предполагая, что это имя является строкой, и оно проверяет пользовательские опечатки, чтобы вернуть имя с первой заглавной буквой (Xxxx).
// Примеры:
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given
//   or `name` = ""        => return "Hello, World!"
// function hello(name = "") {
// 	return name === '' ? `Hello, World!` : `Hello, ${name.split(``)[0].toUpperCase() + name.toLowerCase().split(``).splice(1).join(``)}!`
// }
// console.log(hello());
// const hello = s => `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

// Эй, Матей!
// Добро пожаловать в семь морей.
// Вы капитан пиратского корабля.
// Вы сражаетесь против королевского флота.
// У вас есть пушки наготове... или они?
// Ваша задача проверить, заряжены и готовы ли артиллеристы, если да: Огонь!
// Если они не готовы: Дрожи мне бревнами!
// Ваши стрелки для каждого теста — 2, 3 или 4.
// Когда вы проверяете, готовы ли они, их ответы находятся в словаре и будут либо да, либо нет.
// Стрельба с менее чем всеми готовыми артиллеристами неоптимальна (это не огонь по желанию, это огонь по приказу капитана или иди по доске, грязный морской волк!)
// Если все ответы «да», то огонь! если один или несколько «нет», то дрожь мне в древесине!
// let a = { 'Mike': 'aye', 'Joe': 'aye', 'Johnson': 'aye', 'Peter': 'aye' };
// let b = { 'Mike': 'aye', 'Joe': 'nay', 'Johnson': 'aye', 'Peter': 'aye' };
// const cannonsReady = (gunners) => {
// 	return Object.values(gunners).includes('nay') ? 'Shiver me timbers!' : 'Fire!'
// }
// console.log(cannonsReady(a)); //'Fire!'
// console.log(cannonsReady(b)); //'Shiver me timbers!'

// Вы идете на рынок, когда слышите красивую музыку, исходящую от соседнего уличного артиста. Ноты складываются так, что вы не поверите, когда музыкант складывает воедино образцы мелодий. Когда вы задаетесь вопросом, какой алгоритм вы могли бы использовать для сдвига октав на 8 тонов или что-то в этом роде, до вас доходит, что вы наблюдали за музыкантом в течение каких-то 10 с лишним минут. Вы спросите: «Сколько люди обычно дают чаевые за что-то подобное?» Художник смотрит вверх. «Это всегда будет о деревяшках».
// Именно тогда вы понимаете, что музыкант был зверем высотой 400 футов из эпохи палеолита! Лохнесское чудовище чуть не обмануло вас!
// Есть только 2 гарантированных способа узнать, говорите ли вы с Лохнесским чудовищем: А) это зверь высотой 400 футов из эпохи палеолита; B) он попросит у вас деревянную фидди.
// Поскольку Несси — мастер маскировки, единственный способ точно сказать — найти фразу «tree fiddy». Поскольку вы устали от обмана этого монстра, пришло время закодировать решение для поиска Лохнесского чудовища. Обратите внимание, что фразу также можно записать как «3,50» или «три пятьдесят».
// function isLockNessMonster(s) {
// 	return s.includes('tree fiddy') || s.includes('3.50')
// }
// console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
// console.log(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance. 3.50"));
// const isLockNessMonster = (s) => /tree fiddy|three fifty|3.50/.test(s);

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// "1a2b3c4d5e" <=> "1A2B3C4D5E"
// String.prototype.toAlternatingCase = function () {
// 	return this.split(``).map((r) => /[a-z]/.test(r) ? r.toUpperCase() : r.toLowerCase()).join(``)
// }
// console.log('altERnaTIng cAsE'.toAlternatingCase());

// Добавьте элемент в список:
// Метод AddExtra добавляет новый элемент в список и возвращает список. Новым элементом может быть любой объект, и это не имеет значения. (допустим, вы добавляете целочисленное значение, например 13)
// В нашем тестовом случае мы проверяем, чтобы в возвращаемом списке было на один элемент больше, чем во входном списке. Однако метод нуждается в некоторой модификации, чтобы пройти этот тест.
// P.S. Вы должны создать новый список и добавить в него новый элемент. (Эта Kata изначально разработана для языка C# и показывает, что добавление нового элемента в список ввода не будет работать, даже если параметр передается по значению, но значение указывает на ссылку списка и любое изменение в параметр будет виден вызывающему абоненту)
// function addExtra(listOfNumbers) {
// 	return [...listOfNumbers, null];
// }
// console.log(addExtra([1, 2, 3]).length); // 4
// console.log(addExtra([1, 2, 3])); // 3