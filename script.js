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
// Add an item to the list:
// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)
// In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.
// P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)
// describe("Tests", () => {
// 	it("test", () => {
//  Test.assertEquals(addExtra([1,2,3]).length, 4)
//  Test.assertEquals(addExtra([1,2]).length, 3)
//  Test.assertEquals(addExtra([]).length, 1)

//  var arr = [1,2,3];
//  Test.assertNotEquals(addExtra(arr),arr, "Description: ...You have to create a new list..." )

// 	});
//  });
// function addExtra(listOfNumbers) {
// 	return [...listOfNumbers, null];
// }
// console.log(addExtra([1, 2, 3]).length); // 4
// console.log(addExtra([1, 2, 3])); // 3
// Херня полнейшая

// Напишите функцию, которая принимает два целых числа и возвращает остаток от деления большего значения на меньшее.
// Деление на ноль должно возвращать NaN.
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)
// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)
// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)
// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)
// function remainder(n, m) {
// 	return n > m ? n % m : m % n
// }
// console.log(remainder(17, 5));

// Фокусник в метро показал вам фокус, он положил ледяной кирпич в бутылку, чтобы произвести на вас впечатление. Длина и ширина кирпича равны, образуя квадрат; его высота может быть разной. Ради интереса, а также чтобы произвести впечатление на фокусника и окружающих, вы решили посчитать объем кирпича. Напишите функцию iceBrickVolume, которая будет принимать следующие параметры:
// radius - радиус бутылки (всегда > 0);
// BottleLength - общая длина бутылки (всегда > 0);
// rimLength - длина от верха бутылки до кирпича (всегда < BottleLength);
// И вернуть объем ледяного кирпича, который волшебнику удалось поместить в бутылку.
// Примечание:
// Все входные данные являются целыми числами. Предположим, что прямоугольный кирпич не имеет неровностей. Вы можете предположить, что бутылка имеет форму цилиндра. Кирпич не может войти в обод. Ледяной кирпич, помещенный в бутылку, представляет собой самый большой возможный прямоугольный параллелепипед, который может поместиться во внутреннем объеме.
// radius = 1
// bottle_length = 10
// rim_length = 2
// volume = 16
// //
// radius = 5
// bottle_length = 30
// rim_length = 7
// volume = 1150
// function iceBrickVolume(radius, bottleLength, rimLength) {
// 	return (bottleLength - rimLength) * (radius * radius) * 2
// }
// console.log(iceBrickVolume(1, 10, 2));
// console.log(iceBrickVolume(5, 30, 7));

// Соотношение сторон изображения описывает пропорциональное соотношение между его шириной и высотой. В большинстве видео, демонстрируемых в Интернете, используется соотношение сторон 16:9, что означает, что на каждый пиксель Y приходится примерно 1,77 пикселя X (где 1,77 ~= 16/9). Например, видео 1080p с соотношением сторон 16:9 будет иметь разрешение X, равное 1920, однако видео 1080p с соотношением сторон 4:3 будет иметь разрешение X, равное 1440.
// Напишите функцию, которая принимает произвольные разрешения по осям X и Y и преобразовывает их в разрешения с соотношением сторон 16:9, поддерживающим одинаковую высоту. Округлите ваши ответы до ближайшего целого числа.
// 374 × 280 pixel image with a 4:3 aspect ratio.
// 500 × 280 pixel image with a 16:9 aspect ratio.
// function aspectRatio(x, y) {
// 	return [Math.ceil(y * (16 / 9)), y]
// }
// console.log(aspectRatio(640, 480)); //[854,480]
// console.log(aspectRatio(960, 720)); //[1280,720]
// console.log(aspectRatio(1440, 1080)); //[1920,1080]
// console.log(aspectRatio(1920, 1440))// [2560,1440]

// Найдите сумму всех кратных n меньше m
// n и m - натуральные числа (целые положительные числа)
// m исключается из кратных
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"
// function sumMul(n, m) {
// 	let a = 0
// 	if (n <= 0 || m <= 0) {
// 		return "INVALID"
// 	}
// 	for (let i = 1; i <= (m - (m % n)) / n; i++) {
// 		a += n * i
// 	}
// 	return a
// }
// console.log(sumMul(2, 9));
// console.log(sumMul(3, 13));
// function sumMul(n,m){
// 	if (n >= m) return "INVALID";
//  var sum = 0;
// 	for (var i = n; i < m; i+=n) {
// 	  sum += i;
// 	}
// 	return sum;
//  }

// Завершите решение, чтобы оно перевернуло все слова в переданной строке.
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
// function reverseWords(str) {
// 	return str.split(` `).reverse().join(` `)
// }
// console.log(reverseWords("The greatest victory is that which requires no battle"));

// Создайте функцию, которая проверяет, делится ли число n на два числа x И y. Все входные данные являются положительными, ненулевыми цифрами.
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
// function isDivisible(n, x, y) {
// 	return (n % x) || (n % y) ? false : true
// }
// console.log(isDivisible(3, 3, 4)); //false
// console.log(isDivisible(12, 3, 4)); //true

// На каждую хорошую идею ката приходится немало плохих!
// В этом ката вам нужно проверить предоставленный массив (x) на наличие хороших идей «хорошо» и плохих идей «плохо». Если есть одна или две хорошие идеи, верните «Опубликовать!», если их больше 2, верните «Чую серию!». Если нет хороших идей, как это часто бывает, верните «Fail!».
// function well(x) {
// 	let z = x.filter((a) => a == 'good').length
// 	return z > 2 ? 'I smell a series!' : z ? 'Publish!' : 'Fail!'
// }
// console.log(well(['bad', 'bad', 'bad']));//'Fail!'
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));//'Publish!'
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));//'I smell a series!'

// Это довольно просто. Ваша цель — создать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр, исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.
// function removeChar(str) {
// 	return str.split(``).filter((a, i) => i !== 0 && i !== str.length - 1).join(``)
// };
// console.log(removeChar('eloquent'));//'loquen'
// function removeChar(str) {
// 	return str.slice(1, -1);
// }

// Напишите функцию для преобразования имени в инициалы. Это ката строго состоит из двух слов с одним пробелом между ними.
// На выходе должны быть две заглавные буквы с точкой, разделяющей их.
// Это должно выглядеть так:
// Sam Harris => S.H
// patrick feeney => P.F
// function abbrevName(name) {
// 	let a = name.toUpperCase().split(` `)
// 	return `${a[0].slice(0, 1)}.${a[1].slice(0, 1)}`
// }
// console.log(abbrevName("Sam Harris"));//"S.H"

// Предупреждение: в настоящее время у этого ката нет известных поддерживаемых версий для JavaScript. Это может быть невозможно завершить из-за зависимости от устаревших библиотек/языковых версий.
// Описание:
// Удалите все восклицательные знаки из предложения, но убедитесь, что восклицательный знак стоит в конце строки. Для начинающего ката вы можете предположить, что входные данные всегда представляют собой непустую строку, ее не нужно проверять.
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"
// function remove(string) {
// 	// return string.replaceAll('!', '') + `!`
// 	return string.split(``).filter(a => a !== '!').join(``) + `!`
// }
// console.log(remove('Hi!!!'));
// console.log(remove('Hi! Hi!'));
// function remove(s) {
// 	return s.replace(/!+/g, '') + '!';
//  }

// Наша футбольная команда завершила чемпионат.Результат каждого совпадения выглядит как "x:y".Результаты всех матчей фиксируются в сборнике.
// 	Например: ["3:1", "2:2", "0:1", ...]
// Напишите функцию, которая берет такую ​​коллекцию и считает очки нашей команды в чемпионате.Правила подсчета очков за каждый матч:
// if x > y - 3 points
// if x < y - 0 point
// if x = y - 1 point
// Notes:
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
// function points(games) {
// 	return games.map(a => a[0] > a[2] ? 3 : a[0] == a[2] ? 1 : 0).reduce((a, b) => a + b)
// }
// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));//30

// Если вы уже прошли это ката и хотите более серьезного испытания, вот его 3D-версия.
// Бобу скучно на уроках физики, поэтому он соорудил себе ящик для игрушек, чтобы скоротать время. Ящик особенный, потому что он имеет возможность изменять гравитацию.
// В коробке несколько столбцов игрушечных кубиков, выстроенных в линию. i-й столбец содержит a_i кубов. Сначала гравитация в коробке тянет кубики вниз. Когда Боб переключает гравитацию, он начинает притягивать все кубики к определенной стороне коробки, d, которая может быть либо «L», либо «R» (левая или правая). Ниже приведен пример того, как может выглядеть коробка с кубиками до и после переключения гравитации.
// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Зная начальную конфигурацию кубиков в коробке, узнайте, сколько кубиков окажется в каждом из n столбцов после того, как Боб переключит гравитацию.
// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
// const flip = (d, a) => {
// 	let z = a.sort((a, b) => a - b)
// 	return d === 'R' ? z : z.reverse()
// }
// console.log(flip('R', [3, 2, 1, 2]));// [1, 2, 2, 3]
// console.log(flip('L', [1, 4, 5, 3, 5]));// [5, 5, 4, 3, 1]


// Создайте метод each_cons, который принимает список и число n и возвращает каскадные подмножества списка размера n, например:
// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]
// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
//   Как видите, списки каскадные; т. е. они перекрываются, но никогда не выходят из строя.
// function eachCons(array, n) {
// 	let b = [...array]
// 	let a = []
// 	for (let i = 0; i < array.length; i++) {
// 		if (b.slice(0, n).length === n) {
// 			a.push([...b.slice(0, n)]);
// 			b.shift()
// 		}
// 	}
// 	return a;
// }
// console.log(eachCons([1, 2, 3, 4, 5, 6], 3));// [[1,2,3],[2,3,4]]

// Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.
// n=5 --> [5,4,3,2,1]
// const reverseSeq = n => {
// 	let a = [n]
// 	for (let i = 1; i < n; i++) {
// 		a.push(n - i)
// 	}
// 	return a;
// };
// console.log(reverseSeq(5));//[5,4,3,2,1]
// const reverseSeq = n => {
// 	let arr = [];
// 	  for (let i=n; i>0; i--) {
// 		 arr.push(i);
// 		 } return arr;
// 	};

// Преобразовать число в перевернутый массив цифр
// Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.
// 348597 => [7,9,5,8,4,3]
// 0 => [0]
// function digitize(n) {
// 	return `${n}`.split(``).reverse().map(a => a - 0)
// }
// console.log(digitize(348597)); //[7,9,5,8,4,3]
// function digitize(n) {
// 	return String(n).split('').map(Number).reverse()
//  }

// Напишите функцию get_char() / getChar(), которая принимает число и возвращает соответствующий символ ASCII для этого значения.
// Example:
// get_char(65)
// should return:
// 'A'
// function getChar(c) {
// 	return String.fromCharCode(c)
// }
// console.log(getChar(65)); //'A'
// const getChar = String.fromCharCode;

// Вам даны два отсортированных массива, оба из которых содержат только целые числа. Ваша задача — найти способ объединить их в один, отсортированный по возрастанию. Завершите функцию mergeArrays(arr1, arr2), где arr1 и arr2 — исходные отсортированные массивы.
// Вам не нужно беспокоиться о проверке, так как arr1 и arr2 должны быть массивами с 0 или более целыми числами. Если и arr1, и arr2 пусты, просто верните пустой массив.
// Примечание: arr1 и arr2 могут быть отсортированы в разном порядке. Также arr1 и arr2 могут иметь одинаковые целые числа. Удалить дубликаты в возвращаемом результате.
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// function mergeArrays(arr1, arr2) {
// 	return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b)
// }
// console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
// console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));

// const m = (a, b) => a * b
// console.log(m(2, 3));

// Спросите маленькую девочку - "Сколько тебе лет?". Она всегда говорит странные вещи... Давайте поможем ей!
// Для правильного ответа программа должна вернуть int от 0 до 9.
// Предположим, что тестовая входная строка всегда действительна и может выглядеть как «1 год» или «5 лет» и т. д. Первый символ — это только число.
// function getAge(inputString) {
// 	return inputString[0] - 0
// }
// console.log(getAge("4 years old")); //4
// const getAge = parseInt;

// function maps(x){
// 	return x.map(a=>a*2)
// 	}

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// function remove(string) {
// 	let a = string
// 	for (let i = 0; i < string.length; i++) {
// 		if (a.endsWith('!')) a = a.slice(0, a.length - 1)
// 	}
// 	return a
// }
// console.log(remove("Hi! Hi!"));
// console.log(remove("Hi!!!"));
// console.log(remove("!Hi!!!"));
// console.log(remove("sqwy!!!!!!"));
// function remove(s) {
// 	return s.replace(/!+$/, '');
// }

// Учитывая неотрицательное целое число, например 3, верните строку с бормотанием: «1 овца... 2 овцы... 3 овцы...». Ввод всегда будет действительным, т. е. без отрицательных целых чисел.
// var countSheep = function (num) {
// 	let a = []
// 	for (let i = 1; i <= num; i++) {
// 		a.push(i + ' sheep...')
// 	}
// 	return num === 0 ? '' : a.join('')
// }
// console.log(countSheep(3));
// var countSheep = function (num){
// 	let str = "";
// 	for(let i = 1; i <= num; i++) {
// 		str+= `${i} sheep...`;
// 	}
// 	return str;
//  }

// "Robin Singh" ==> ["Robin", "Singh"]
// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
// function stringToArray(string) {
// 	return string.split(` `)
// }
// console.log(stringToArray("Robin Singh"));

// Следующая формула называется шкалой децибел:
// Формула шкалы децибел
// Шкала децибел используется для определения громкости звука, измеряемой в дБ:
// β — желаемый результат, выраженный в дБ;
// Умножаем результат логарифмической операции на 10, иначе это будет называться «шкала Бела»;
// Мы обеспечиваем I, интенсивность звуковой волны, громкость которой нам нужно найти, которая для целей этого Ката измеряется в двумерном пространстве и, следовательно, в ваттах на квадратный метр;
// Наконец, мы делим интенсивность на порог человеческого слуха, также измеряемый в ваттах на квадратный метр. Это самый тихий звук, который может услышать человеческое ухо;
// Поскольку порог человеческого слуха включает чрезвычайно маленькое длинное число, нам нужно использовать логарифмическую операцию, которая даст нам результат удобным способом.
// Ваша задача состоит в том, чтобы просто рассчитать громкость звуковой волны, учитывая ее интенсивность в качестве параметра функции dBScale/db_scale.
// Результаты автоматически округляются до ближайшего целого числа тестовыми примерами.
// function dBScale(intensity) {
// 	return 10 * Math.log10(intensity / (Math.pow(10, -12)))
// }
// console.log(dBScale((Math.pow(10, -11))));

// Ваша задача — найти первый элемент массива, который не является последовательным.
// Под непоследовательным мы подразумеваем не ровно 1 больше, чем предыдущий элемент массива.
// Например. Если у нас есть массив [1,2,3,4,6,7,8], то 1, затем 2, затем 3, затем 4 — все подряд, а 6 — нет, так что это первое непоследовательное число.
// Если весь массив последовательный, верните null.
// Массив всегда будет иметь как минимум 2 элемента1, и все элементы будут числами. Все числа также будут уникальными и расположены в порядке возрастания. Числа могут быть положительными или отрицательными, и первые непоследовательные тоже могут быть!
// Если вам нравится эта ката, попробуйте следующую: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
// 1 Можете ли вы написать решение, которое будет возвращать null2 как для [], так и для [ x ]? (Это пустой массив с одним числом, и он не тестируется, но вы можете написать свой собственный пример теста.)
// function firstNonConsecutive(arr) {
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		if ((arr[i + 1] - arr[i]) !== 1) return arr[i + 1]
// 	}
// 	return null
// }
// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); //first, 6
// console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //first, 6

// Вы отдыхали с друзьями далеко от дома, но когда пришло время возвращаться, вы понимаете, что топливо на исходе, а ближайшая заправка находится в 50 милях от вас! Вы знаете, что в среднем ваш автомобиль расходует около 25 миль на галлон. Осталось 2 галлона. Учитывая эти факторы, напишите функцию, которая говорит вам, можно ли добраться до насоса или нет. Функция должна возвращать true (1 в Prolog, NASM и COBOL), если это возможно, и false (0 в Prolog, NASM и COBOL), если нет. Входные значения всегда положительны.
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
// 	return distanceToPump / mpg <= fuelLeft
// };
// console.log(zeroFuel(50, 25, 2));// true
// console.log(zeroFuel(100, 50, 1));// false

// Вам будет предоставлена ​​строка, и вы должны будете вернуть сумму всех символов в виде целого числа. Функция должна иметь возможность обрабатывать все символы ASCII.
// Примеры:
// uniTotal("а") == 97 uniTotal("ааа") == 291
// function uniTotal(string) {
// 	return string ? string.split(``).map(a => a.charCodeAt(0)).reduce((a, b) => a + b) : 0
// }
// console.log(uniTotal("Mary Had A Little Lamb"));//1873
// console.log(uniTotal("aaa"));//291
// console.log(uniTotal(""));//0
// const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

// Создайте функцию с именем ярлык для удаления строчных гласных (a, e, i, o, u) в заданной строке.
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// function shortcut(string) {
// 	return [...string].map(a => a.replace(/[oaeiu]/, '')).join(``)
// }
// console.log(shortcut('goodbye'));
// function shortcut(string){
// 	return string.replace(/[aeiou]/g,'')
//  }

// rps('scissors', 'paper') // Player 1 won!
// rps('scissors', 'rock') // Player 2 won!
// rps('paper', 'paper') // Draw!
// const rps = (p1, p2) => {
// 	let a = p1.length - p2.length
// 	return a === 3 || a === -4 || a === 1 ? 'Player 1 won!' : a === 4 || a === -3 || a === -1 ? 'Player 2 won!' : 'Draw!'
// };
// console.log(rps('rock', 'scissors'));
// console.log(rps('scissors', 'paper'));
// console.log(rps('paper', 'rock'));
// console.log(rps('scissors', 'rock'));
// console.log(rps('paper', 'scissors'));
// console.log(rps('rock', 'paper'));
// console.log(rps('paper', 'paper'));
// console.log(rps('scissors', 'scissors'));
// console.log(rps('rock', 'rock'));
// const rps = (p1, p2) => {
// 	if(p1 === p2) {
// 	  return 'Draw!'
// 	};
// 	return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
//  }

// Дезоксирибонуклеиновая кислота, ДНК является основной молекулой хранения информации в биологических системах.Он состоит из четырех оснований нуклеиновых кислот гуанина(«G»), цитозина(«C»), аденина(«A») и тимина(«T»).
// Рибонуклеиновая кислота, РНК, является основной молекулой - мессенджером в клетках.РНК немного отличается от ДНК своей химической структурой и не содержит тимина.В РНК тимин заменен другой нуклеиновой кислотой урацилом(«U»).
// Создайте функцию, которая переводит заданную строку ДНК в РНК.
// "GCAT"  => "GCAU"
// Входная строка может быть произвольной длины, в частности, она может быть пустой.Все входные данные гарантированно верны, т.е.каждая входная строка будет состоять только из букв «G», «C», «A» и / или «T»
// function DNAtoRNA(dna) {
// 	return dna.replace(/T/g, 'U')
// }
// console.log(DNAtoRNA("GCAT"));

// В этом простом упражнении вы создадите программу, которая принимает значение integer и возвращает список его кратных значений до другого значения limit . Если предел кратен целому числу, он также должен быть включен. В функцию всегда будут передаваться только положительные целые числа, не состоящие из 0. Предел всегда будет выше основания.
// Например, если переданы параметры (2, 6), функция должна вернуть [2, 4, 6], поскольку 2, 4 и 6 кратны от 2 до 6.
// Если можете, попробуйте написать это только одной строкой кода.
// function findMultiples(integer, limit) {
// 	let a = integer
// 	let b = []
// 	while (a <= limit) {
// 		b.push(a)
// 		a += integer
// 	}
// 	return Array(Math.floor(limit / integer))
// }
// console.log(findMultiples(5, 25));//[5, 10, 15, 20, 25]
// console.log(findMultiples(5, 7));//[5]
// console.log(findMultiples(4, 27));//[4, 8, 12, 16, 20, 24]
// function findMultiples(int, limit) {
// return Array(Math.floor(limit / int)).fill(1).map((x, i) => int * (i + 1));
// }

// Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.
// Ни один из массивов не будет пустым, так что вам не о чем беспокоиться!
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// function removeEveryOther(arr) {
// 	return arr.map((a, i) => i % 2 ? '' : a).filter(a => a !== '')
// }
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));//['Hello', 'Hello Again']
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));//[1, 3, 5, 7, 9]

// напишите мне функцию stringy, которая принимает размер и возвращает строку из чередующихся «1» и «0».
// строка должна начинаться с 1.
// строка размером 6 должна возвращать: '101010'.
// с размером 4 должно возвращаться: '1010'.
// с размером 12 должен вернуть: «101010101010».
// Размер всегда будет положительным и будет использовать только целые числа.
// function stringy(size) {
// 	return Array(size).fill(1).map((a, i) => i % 2 ? 0 : 1).join(``)
// }
// console.log(stringy(5));
// function stringy(size) {
// 	var str='';
// 	for( var i=1; i<=size; i++ )
// 	  str+=i%2;
// 	return str;
//  }

// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// function stringClean(s) {
// 	return s.replace(/[0-9]/g, '')
// }
// console.log(stringClean('123456789'));
// console.log(stringClean('! !'));
// console.log(stringClean('This looks5 grea8t!'));

// BOPE — это отряд полицейского спецназа, который обычно занимается операциями в фавелах Рио-де-Жанейро.
// В этой Ката вы должны написать функцию, определяющую количество магазинов, которое должен иметь каждый солдат в своей сумке.
// Вы получите оружие и количество улиц, которые они должны пересечь. Учитывая, что на каждой улице офицер стреляет 3 раза. Ниже приведено соотношение оружия:
// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets
// Example:
// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1
// Возврат всегда будет целым числом, так как параметры.
// function magNumber(info) {
// 	switch (info[0]) {
// 		case "PT92":
// 			return Math.ceil(info[1] * 3 / 17)
// 		case "M4A1":
// 			return Math.ceil(info[1] * 3 / 30)
// 		case "M16A2":
// 			return Math.ceil(info[1] * 3 / 30)
// 		case "PSG1":
// 			return Math.ceil(info[1] * 3 / 5)
// 	}
// }
// console.log(magNumber(["PT92", 6]));
// console.log(magNumber(["M4A1", 750]));
// function magNumber(info){
// 	const dict = new Map([
// 	  ["PT92", 17],
// 	  ["M4A1", 30],
// 	  ["M16A2", 30],
// 	  ["PSG1", 5]
// 	]);
// 	return Math.ceil(info[1] * 3 / dict.get(info[0]));
//  }

// Example
// Input: 1,3,5,6,7,8
// Output: 1,2,3,4,5,6,7,8
// function pipeFix(numbers) {
// 	let a = [numbers[0]]
// 	for (let i = 0; i < (numbers[numbers.length - 1] - numbers[0]); i++) {
// 		a.push(a[i] + 1)
// 	}
// 	return a
// }
// console.log(pipeFix([1, 3, 5, 6, 7, 8]));
// console.log(pipeFix([-1, 4]));

// Вы, вероятно, знаете число 42 как «Ответ на жизнь, вселенную и все остальное» согласно «Автостопом по Галактике» Дугласа Адамса. Для Фрейда ответ был совсем другим.
// В обществе, в котором он жил, людям, особенно женщинам, приходилось подавлять свои сексуальные потребности и желания. Таково было общество того времени. Затем Фрейд захотел изучить болезни, вызванные этим, и поэтому он докопался до корня их желаний. Это привело к появлению некоторых из наиболее важных психоаналитических теорий по сей день, причем Фрейд был отцом психоанализа.
// Теперь, в основном, когда человек слышит о Фрейде, он/она слышит слово «секс», потому что для Фрейда все в основном было связано с сексом и объяснялось им.
// В этом ката функция toFreud() принимает строку в качестве аргумента и возвращает строку, в которой каждое слово заменено объяснением всего, согласно Фрейду. Обратите внимание, что пустая строка или отсутствие аргументов должны привести к выводу "" (пустая строка).
// function toFreud(string) {
// 	return string ? string.split(` `).map(a => `sex`).join(` `) : ''
// }
// console.log(toFreud("test"));//"sex"
// console.log(toFreud(""));//"sex"
// console.log(toFreud("This is a test"));//"sex sex sex sex"
// console.log(toFreud("This is a longer test"));//"sex sex sex sex sex"
// var toFreud=s=>s.replace(/[^ ]+/g,'sex')
// let toFreud = s => s.replace(/\w+/g, 'sex');

// Создайте функцию finalGrade, которая вычисляет итоговую оценку студента в зависимости от двух параметров: оценки за экзамен и количества выполненных проектов.
// Эта функция должна принимать два аргумента: exam - оценка за экзамен (от 0 до 100); проекты - количество завершенных проектов (от 0 и выше);
// Эта функция должна возвращать число (итоговая оценка). Существует четыре типа итоговых оценок:
// 100, если оценка за экзамен больше 90 или количество выполненных проектов больше 10.
// 90, если оценка за экзамен выше 75 и количество выполненных проектов не менее 5.
// 75, если оценка за экзамен больше 50 и количество выполненных проектов не менее 2.
// 0, в остальных случаях
// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100
// 85, 5 --> 90
// 55, 3 --> 75
// 55, 0 --> 0
// 20, 2 --> 0
// function finalGrade(exam, projects) {
// 	return (exam > 90 || projects > 10) ? 100 :
// 		(exam > 75 && projects >= 5) ? 90 :
// 			(exam > 50 && projects >= 2) ? 75 : 0
// }
// console.log(finalGrade(10, 15));
// console.log(finalGrade(0, 2));
// console.log(finalGrade(0, 10));
// console.log(finalGrade(75, 5));

// form.onclick = function (event) {
// 	event.currentTarget.style.backgroundColor = 'yellow';
// браузеру нужно некоторое время, чтобы зарисовать всё жёлтым
// setTimeout(() => {
// 	alert("target = " + event.target.tagName + ", this=" + this.tagName);
// 	event.target.style.backgroundColor = ''
// }, 0);
// };

// В вашем классе был тест, и вы его прошли. Поздравляем!
// Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе.
// Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее и сравните свой результат!
// Верните True, если вам лучше, иначе False!
// Примечание:
// Ваши баллы не включены в массив баллов вашего класса. Для расчета среднего балла вы можете добавить свой балл в данный массив!
// function betterThanAverage(classPoints, yourPoints) {
// 	return classPoints.reduce((a, b) => a + b) / classPoints.length < yourPoints
// }
// console.log(betterThanAverage([2, 3], 5));//true
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); //true

// Напишите функцию, которая возвращает строку, в которой имя заменено на фамилию.
// nameShuffler('john McClane'); => "McClane john"
// function nameShuffler(str) {
// 	return str.split(` `).reverse().join(` `)
// }
// console.log(nameShuffler('john McClane'));//"McClane john"

// Создайте несколько функций, которые будут возвращать сумму, разность, модуль, произведение, частное и показатель степени соответственно.
// Пожалуйста, используйте следующие имена функций:
// addition = add
// multiply = multiply
// division = divide (both integer and float divisions are accepted)
// modulus = mod
// exponential = exponent
// subtraction = subt
// Note: All math operations will be: a (operation) b
// function add(a, b) {
// 	return a + b
// }
// function divide(a, b) {
// 	return a / b
// }
// function multiply(a, b) {
// 	return a * b
// }
// function mod(a, b) {
// 	return a % b
// }
// function exponent(a, b) {
// 	return Math.pow(a, b)
// }
// function subt(a, b) {
// 	return a - b
// }

// Учитывая 2 строки, a и b, верните строку формы короткая + длинная + короткая, с более короткой строкой снаружи и более длинной строкой внутри. Строки не будут одинаковой длины, но могут быть пустыми (нулевой длины).
// Подсказка для пользователей R:
// Длина строки не всегда совпадает с количеством символов
// Например: (Ввод1, Ввод2) --> вывод
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
// function solution(a, b) {
// 	return a.length > b.length ? b + a + b : a + b + a
// }
// console.log(solution('45', '1'));//'1451'

// Ваш коллега должен был написать простую вспомогательную функцию, чтобы написать строку(содержащую одно слово) с заглавной буквы перед тем, как уйти в отпуск.
// К сожалению, они ушли, и код, который они вам дали, не работает.Исправьте вспомогательную функцию, которую они написали, чтобы она работала как задумано(т.е.сделать первый символ в строке «слово» прописным).
// Не беспокойтесь о числах, специальных символах или нестроковых типах, которые передаются функции.Длина строки будет от 1 до 10 символов, но она никогда не будет пустой.
// function capitalizeWord(word) {
// 	return word[0].toUpperCase() + word.replace(word[0], '')
// }
// console.log(capitalizeWord('word'));
// function capitalizeWord(word) {
// 	return word[0].toUpperCase() + word.slice(1);
//  }

// Напишите функцию, которая проверяет, имеют ли два заданных символа один и тот же регистр.
// Если какой-либо из символов не является буквой, вернуть -1
// Если оба символа имеют одинаковый регистр, вернуть 1
// Если оба символа являются буквами и имеют разный регистр, вернуть 0
// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1
// function sameCase(a, b) {
// 	return /[A-Z]/g.test(b) && /[A-Z]/g.test(a) || /[a-z]/g.test(a) && /[a-z]/g.test(b) ? 1
// 		: /[^a-zA-Z]/g.test(a) || /[^a-zA-Z]/g.test(b) ? -1 : 0
// }
// console.log(sameCase('C', 'B')); //1
// console.log(sameCase('A', 's')); //0
// console.log(sameCase('\t', 'Z')); //-1

// Напишите метод, который будет получать массив целых чисел в качестве параметра и будет обрабатывать каждое число из этого массива.
// Вернуть новый массив с обработкой каждого числа входного массива следующим образом:
// Если число имеет целый квадратный корень, возьмите его, иначе возведите число в квадрат.
// [4, 3, 9, 7, 2, 1] -> [2, 9, 3, 49, 4, 1]
// function squareOrSquareRoot(array) {
// 	return array.map(a => Number.isInteger(Math.sqrt(a)) ? Math.sqrt(a) : a * a)
// }
// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
// function squareOrSquareRoot(array) {
// 	return array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));
// }

// Цель этого ката — выяснить, сколько бутылок виски из беспошлинной торговли вам придется купить, чтобы экономия по сравнению с обычной ценой в магазинах эффективно покрыла стоимость вашего отпуска.
// Вам будет предоставлена ​​розничная цена (normPrice), скидка беспошлинной торговли (дисконт) и стоимость праздника.
// Например, если бутылка обычно стоит 10 фунтов стерлингов, а скидка в магазинах беспошлинной торговли составляет 10%, вы сэкономите 1 фунт стерлингов за бутылку. Если ваш отпуск стоит 500 фунтов стерлингов, ответ, который вы должны вернуть, будет 500.
// Все входные данные будут целыми. Пожалуйста, верните целое число. Округлить вниз.
// function dutyFree(normPrice, discount, hol) {
// 	return Math.floor(hol / (normPrice * discount / 100))
// }
// console.log(dutyFree(12, 50, 1000));//166
// console.log(dutyFree(17, 10, 500));//294
// console.log(dutyFree(24, 35, 3000));//357
// console.log(dutyFree(10, 10, 500));//500

// История:
// Вы собираетесь делать тосты быстро, вы думаете, что вы должны сделать несколько тостов и один раз. Итак, вы пытаетесь сделать 6 тостов.
// Проблема:
// Вы забыли сосчитать, сколько тостов положили туда, вы не знаете, положили ли вы ровно шесть тостов в тостеры.
// Определите функцию, которая подсчитывает, сколько еще (или меньше) кусочков тостов вам нужно в тостерах. Даже если вам нужно больше или меньше, число все равно будет положительным, а не отрицательным.
// Примеры:
// Вы должны вернуть количество тостов, которое вам нужно положить (или вынуть). В случае 5 вы все еще можете поставить 1 тост в:
// six_toast(5) == 1
// And in case of 12 you need 6 toasts less (but not -6):
// six_toast(12) == 6
// Test.assertEquals(sixToast(6), 0);
// Test.assertEquals(sixToast(17), 11);
// Test.assertEquals(sixToast(3), 3);
// function sixToast(num) {
// 	return 6 - num > 0 ? 6 - num : num - 6
// }
// console.log(sixToast(12));
// function sixToast(num) {
// 	return Math.abs(num-6)
//  }

// Напишите функцию, которая преобразует входную строку в верхний регистр.
// function makeUpperCase(str) {
// 	return str.toUpperCase()
// }
// console.log(makeUpperCase("hello"));

// Вы пишете код для управления светофорами в вашем городе. Вам нужна функция для обработки каждого изменения с зеленого на желтый, на красный, а затем снова на зеленый.
// Завершите функцию, которая принимает строку в качестве аргумента, представляющую текущее состояние источника света, и возвращает строку, представляющую состояние, в которое свет должен измениться.
// Например, update_light('зеленый') должен возвращать 'желтый'.
// assert.strictEqual(updateLight("green"), "yellow");
// assert.strictEqual(updateLight("yellow"), "red");
// assert.strictEqual(updateLight("red"), "green");
// function updateLight(current) {
// 	return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'
// }
// console.log(updateLight("green"));

// Эта функция должна проверять, является ли factor фактором основания.
// Возвратите true, если это фактор или false, если это не так.
// О факторах
// Факторы — это числа, которые вы можете перемножить, чтобы получить другое число.
// 2 и 3 являются делителями 6, потому что: 2 * 3 = 6
// Вы можете найти множитель, разделив числа. Если остаток равен 0, то число является множителем.
// Вы можете использовать оператор мода (%) на большинстве языков для проверки остатка.
// Например, 2 не является коэффициентом 7, потому что: 7 % 2 = 1
// Примечание: основание — неотрицательное число, множитель — положительное число.
// Test.assertEquals(checkForFactor(10,2), true)
// Test.assertEquals(checkForFactor(63,7), true)
// Test.assertEquals(checkForFactor(2450,5), true)
// Test.assertEquals(checkForFactor(24612,3), true)
// Test.assertEquals(checkForFactor(9,2), false)
// Test.assertEquals(checkForFactor(653,7), false)
// Test.assertEquals(checkForFactor(2453,5), false)
// Test.assertEquals(checkForFactor(24617,3), false)
// function checkForFactor(base, factor) {
// 	return !(base % factor)
// }
// console.log(checkForFactor(10, 2));

// Дан месяц как целое число от 1 до 12, вернитесь к тому, к какому кварталу года он принадлежит, как целое число.
// Например: 2-й месяц (февраль) является частью первого квартала; 6 месяц (июнь) входит во второй квартал; и месяц 11 (ноябрь) является частью четвертого квартала.
// assert.strictEqual(quarterOf(3), 1)
// assert.strictEqual(quarterOf(8), 3)
// assert.strictEqual(quarterOf(11), 4)
// const quarterOf = (month) => {
// 	return month <= 12 && month > 9 ? 4 : month <= 9 && month > 6 ? 3 : month <= 6 && month > 3 ? 2 : 1
// }
// console.log(quarterOf(12));
// console.log(quarterOf(2));
// console.log(quarterOf(1));
// const quarterOf = (month) => {
// 	return Math.ceil(month / 3);
// }

// Завершите функцию, чтобы она нашла среднее значение трех переданных ей баллов и вернула буквенное значение, связанное с этой оценкой.
// Все проверенные значения находятся в диапазоне от 0 до 100. Нет необходимости проверять наличие отрицательных значений или значений, превышающих 100.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Test.assertEquals(getGrade(95,90,93), 'A')
// Test.assertEquals(getGrade(100,85,96), 'A')
// Test.assertEquals(getGrade(92,93,94), 'A')
// function getGrade(s1, s2, s3) {
// 	let score = (s1 + s2 + s3) / 3
// 	return score >= 0 && score < 60 ? 'F' : score >= 60 && score < 70 ? 'D' : score >= 70 && score < 80 ? 'C' : score >= 80 && score < 90 ? 'B' : score >= 90 && score <= 100 ? 'A' : score
// }
// console.log(getGrade(95, 90, 93));
// function getGrade (s1, s2, s3) {
// 	avg = (s1+s2+s3)/3;
// 	if (avg < 60)  return "F";
// 	  else if (avg < 70) return "D";
// 	  else if (avg < 80) return "C";
// 	  else if (avg < 90) return "B";
// 	  else return "A";
//  }

// История:
// Боб работает водителем автобуса. Тем не менее, он стал чрезвычайно популярен среди жителей города. С таким количеством пассажиров, желающих сесть в его автобус, ему иногда приходится сталкиваться с проблемой нехватки места в автобусе! Он хочет, чтобы вы написали простую программу, сообщающую ему, сможет ли он разместить всех пассажиров.
// Обзор задачи:
// Вам нужно написать функцию, которая принимает три параметра:
// cap — это количество человек, которое может вместить автобус, не считая водителя.
// on - количество людей в автобусе, не считая водителя.
// ожидание - это количество людей, ожидающих посадки в автобус, исключая водителя.
// Если места достаточно, вернуть 0, а если нет, вернуть количество пассажиров, которых он не может взять.
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
// function enough(cap, on, wait) {
// 	return cap - on - wait > 0 ? 0 : (cap - on - wait) * -1
// }
// console.log(enough(10, 5, 4));//0
// console.log(enough(100, 60, 50));//10

// Ваши одноклассники попросили вас скопировать для них некоторые документы. Вы знаете, что есть «n» одноклассников, а в документах «m» страниц.
// Ваша задача — посчитать, сколько чистых страниц вам нужно. Если n < 0 или m < 0, вернуть 0.
// n= 5, m=5: 25
// n=-5, m=5:  0
// function paperwork(n, m) {
// 	return n < 0 || m < 0 ? 0 : n * m
// }
// console.log(paperwork(5, 5)); 25

// Напишите функцию, которая принимает массив чисел и возвращает сумму чисел. Числа могут быть отрицательными или нецелыми. Если массив не содержит чисел, вы должны вернуть 0.
// Примеры
// Ввод: [1, 5.2, 4, 0, -1]
// Выход: 9,2
// Вход: []
// Выход: 0
// Ввод: [-2,398]
// Выход: -2,398
// Предположения
// Вы можете считать, что вам даны только цифры.
// Вы не можете предположить размер массива.
// Вы можете предположить, что вы получили массив, и если массив пуст, верните 0.
// Что мы тестируем
// Мы тестируем базовые циклы и математические операции. Это для новичков, которые только изучают циклы и математические операции.
// Продвинутым пользователям это может показаться очень простым, и они могут легко записать это в одну строку.
// function sum(numbers) {
// 	return numbers.length !== 0 ? numbers.reduce((a, b) => a + b) : 0
// };
// console.log(sum([1, 5.2, 4, 0, -1]));
// console.log(sum([]));
// function sum(numbers) {
// 	return numbers.reduce((a, b) => a + b, 0);
//  }

// Дан массив целых чисел.
// Возвращает массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным.
// Если вход представляет собой пустой массив или имеет значение null, верните пустой массив.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// function countPositivesSumNegatives(input) {
// 	return input !== null && input !== [] && input.length !== 0 ? [input.filter(a => a > 0).length, input.filter(a => a < 0).length !== 0 ? input.filter(a => a < 0).reduce((a, b) => a + b) : 0] : []
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// console.log(countPositivesSumNegatives([]));
// console.log(countPositivesSumNegatives(null));
// function countPositivesSumNegatives(input) {
// 	return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

// Ваша функция принимает два аргумента:
// текущий возраст отца(лет)
// текущий возраст его сына(лет)
// Подсчитайте, сколько лет назад отец был вдвое старше сына(или через сколько лет он будет вдвое старше).
// function twiceAsOld(dadYearsOld, sonYearsOld) {
// 	return Math.abs((dadYearsOld - sonYearsOld) * 2 - dadYearsOld)
// }
// console.log(twiceAsOld(36, 7)); //22
// console.log(twiceAsOld(55, 30)); //5
// console.log(twiceAsOld(42, 21)); //0
// function twiceAsOld(dadYearsOld, sonYearsOld) {
// 	return Math.abs(dadYearsOld - 2 * sonYearsOld);
//  }

// Простые числа Вильсона удовлетворяют следующему условию. Пусть P представляет собой простое число.
// Тогда ((P-1)! + 1)/(P*P) должно дать целое число.
// Ваша задача — создать функцию, возвращающую истину, если заданное число является простым числом Вильсона.
// Test.assertEquals(amIWilson(5), true)
// Test.assertEquals(amIWilson(9), false)
// Test.assertEquals(amIWilson(6), false)
// function amIWilson(p) {
// 	let a = p - 1
// 	if (a === 0 || a === 1) return 1;
// 	for (let i = a - 1; i >= 1; i--) {
// 		a *= i;
// 	}
// 	return ((a + 1) / (p * p)) % 1 === 0
// }
// console.log(amIWilson(5));
// console.log(amIWilson(9));
// console.log(amIWilson(6));

// Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает наличие).
// [true,  true,  true,  false,
// 	true,  true,  true,  true ,
// 	true,  false, true,  false,
// 	true,  false, false, true ,
// 	true,  true,  true,  true ,
// 	false, false, true,  true]
// Правильный ответ будет 17.
// Подсказка: не забудьте проверить наличие неправильных значений, таких как null/undefined
// const array1 = [true, true, true, false,
// 	true, true, true, true,
// 	true, false, true, false,
// 	true, false, false, true,
// 	true, true, true, true,
// 	false, false, true, true]
// function countSheeps(arrayOfSheep) {
// 	return arrayOfSheep.filter(a => a === true).length
// }
// console.log(countSheeps(array1));//17
// function countSheeps(arrayOfSheeps) {
// 	return arrayOfSheeps.filter(Boolean).length;
//  }

// Герой направляется в замок, чтобы выполнить свою миссию. Однако ему сказали, что замок окружен парочкой могущественных драконов! каждому дракону требуется 2 пули, чтобы быть побежденным, наш герой понятия не имеет, сколько пуль он должен нести.. Предполагая, что он собирается схватить определенное количество пуль и двигаться вперед, чтобы сразиться с другим заданным количеством драконов, выживет ли он?
// Верните True, если да, False в противном случае :)
// assert.strictEqual(hero(10, 5), true);
// assert.strictEqual(hero(7, 4), false);
// assert.strictEqual(hero(4, 5), false);
// assert.strictEqual(hero(100, 40), true);
// assert.strictEqual(hero(1500, 751), false);
// assert.strictEqual(hero(0, 1), false);
// function hero(bullets, dragons) {
// 	return bullets >= dragons * 2
// }
// console.log(hero(10, 5)); //true

// Этот код должен хранить «codewa.rs» как переменную с именем name, но он не работает. Вы можете понять, почему?
// let a = "code";
// let b = "wa.rs";
// let name = a + b;

// Американцы странные люди: в их домах первый этаж фактически является цокольным, а 13 - го этажа нет(из - за суеверия).
// Напишите функцию, которая по заданному нижнему пределу в американской системе возвращает нижний предел в европейской системе.
// Когда 1 - й этаж заменяется цокольным этажом, а 13 - й этаж удаляется, числа перемещаются вниз, чтобы занять свое место.В случае выше 13 они перемещаются вниз на два, потому что под ними есть два пропущенных числа.
// Подвалы(негативы) остаются такими же, как и универсальный уровень.
// 1  => 0
// 0  => 0
// 5  => 4
// 15  => 13
// - 3  => -3
// function getRealFloor(n) {
// 	return n > 0 && n < 13 ? n - 1 : n <= 0 ? n : n - 2
// }
// console.log(getRealFloor(15));
// console.log(getRealFloor(1));
// console.log(getRealFloor(5));
// function getRealFloor(n) {
// 	return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
//  }

// Программное обеспечение для распознавания символов широко используется для оцифровки печатных текстов. Таким образом, тексты можно редактировать, искать и сохранять на компьютере.
// Когда документы (особенно довольно старые, написанные на пишущей машинке) оцифровываются, программы распознавания символов часто допускают ошибки.
// Ваша задача - исправить ошибки в оцифрованном тексте. Вам нужно только исправить следующие ошибки:
// S неверно интерпретируется как 5
// O неверно интерпретируется как 0
// Я неправильно истолкован как 1
// Тестовые случаи содержат числа только по ошибке.
// assert.strictEqual(correct("L0ND0N"),"LONDON");
// assert.strictEqual(correct("DUBL1N"),"DUBLIN");
// assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
// assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
// assert.strictEqual(correct("PAR15"),"PARIS");
// function correct(string) {
// 	return string.replace(/1/g, 'I').replace(/5/g, 'S').replace(/0/g, 'O')
// }
// console.log(correct('PAR15'));// PARIS
// const corrections = {
// 	'5': 'S',
// 	'0': 'O',
// 	'1': 'I',
// };
// const correct = string => (
// 	string.replace(/[501]/g, character => corrections[character])
// );

// Вычесть сумму
// ПРИМЕЧАНИЕ! Это ката может быть сложнее, чем обычные ката 8 кю (скажем, 7 или 6 кю).
// Завершите функцию, которая получит входное число n, такое что n >= 10 и n < 10000, затем:
// Сложите все цифры числа n.
// Вычтите сумму из n, и это будет ваше новое n.
// Если новый n находится в списке ниже, верните связанный фрукт, в противном случае вернитесь к задаче 1.
// Пример
// п = 325
// сумма = 3+2+5 = 10
// n = 325-10 = 315 (нет в списке)
// сумма = 3+1+5 = 9
// n = 315-9 = 306 (нет в списке)
// сумма = 3+0+6 = 9
// n = 306-9 = 297 (нет в списке)
// .
// .
// .
// ... пока не найдете первый n в списке ниже.
// Там нет предварительно загруженного кода, чтобы помочь вам. Речь идет не о навыках кодирования; подумайте, прежде чем кодировать
// Test.assertEquals(SubtractSum(10), "apple");
// function SubtractSum(n) {
// 	const arr = ['kiwi', 'pear', 'kiwi', 'banana', 'melon', 'banana', 'melon', 'pineapple', 'apple', 'pineapple', 'cucumber', 'pineapple', 'cucumber', 'orange', 'grape', 'orange', 'grape', 'apple', 'grape', 'cherry', 'pear', 'cherry', 'pear', 'kiwi', 'banana', 'kiwi', 'apple', 'melon', 'banana', 'melon', 'pineapple', 'melon', 'pineapple', 'cucumber', 'orange', 'apple', 'orange', 'grape', 'orange', 'grape', 'cherry', 'pear', 'cherry', 'pear', 'apple', 'pear', 'kiwi', 'banana', 'kiwi', 'banana', 'melon', 'pineapple', 'melon', 'apple', 'cucumber', 'pineapple', 'cucumber', 'orange', 'cucumber', 'orange', 'grape', 'cherry', 'apple', 'cherry', 'pear', 'cherry', 'pear', 'kiwi', 'pear', 'kiwi', 'banana', 'apple', 'banana', 'melon', 'pineapple', 'melon', 'pineapple', 'cucumber', 'pineapple', 'cucumber', 'apple', 'grape', 'orange', 'grape', 'cherry', 'grape', 'cherry', 'pear', 'cherry', 'apple', 'kiwi', 'banana', 'kiwi', 'banana', 'melon', 'banana', 'melon', 'pineapple', 'apple', 'pineapple',];
// 	let z = n - +(n + '').split(``).reduce((a, b) => +a + +b) - 1
// 	while (z > 100) {
// 		z = z - +(z + '').split(``).reduce((a, b) => +a + +b) - 1
// 	}
// 	return arr[z]
// }
// console.log(SubtractSum(10)); //"apple"
// console.log(SubtractSum(10000)); //"apple"
// console.log(SubtractSum(4165)); //"apple"
// console.log(SubtractSum(415)); //"apple"

// Завершите функцию, которая преобразует двоичное число (заданное в виде строки) в десятичное число.
// function binToDec(bin) {
// 	return parseInt(bin, 2)
// }
// console.log(binToDec("1001001"));

// Ката Задание
// У меня есть кошка и собака.
// Я получил их одновременно с котенком/щенком. Это было по-человечески много лет назад.
// Теперь верните их возраст как [humanYears,catYears,dogYears]
// ПРИМЕЧАНИЯ:
// HumanYears >= 1
// HumanYears - только целые числа
// Кошачьи годы
// 15 кошачьих лет за первый год
// +9 кошачьих лет за второй год
// +4 кошачьих года за каждый последующий год
// Собачьи годы
// 15 собачьих лет за первый год
// +9 собачьих лет за второй год
// +5 собачьих лет за каждый последующий год
// Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
// Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
// Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
// function humanYearsCatYearsDogYears(humanYears) {
// 	const catYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + 4 * (humanYears - 2);
// 	const dogYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + 5 * (humanYears - 2);
// 	return [humanYears, catYears, dogYears];
// }
// console.log(humanYearsCatYearsDogYears(10));
// const humanYearsCatYearsDogYears = function (y) {
// 	if (y == 1) return [1, 15, 15]
// 	if (y == 2) return [2, 24, 24]
// 	return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24]
// }

// Кто помнит свое время на школьном дворе, когда девочки брали цветок и рвали его лепестки, произнося каждую из следующих фраз каждый раз, когда отрывался лепесток:
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// Когда был сорван последний лепесток, раздались крики волнения, мечты, нахлынувшие мысли и эмоции.
// Ваша цель в этом ката — определить, какую фразу девушки сказали бы о цветке с заданным количеством лепестков, где nb_petals > 0.
// assert.strictEqual(howMuchILoveYou(7),"I love you")
// assert.strictEqual(howMuchILoveYou(3),"a lot")
// assert.strictEqual(howMuchILoveYou(6),"not at all")
// function howMuchILoveYou(nbPetals) {
// 	const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
// 	return arr[nbPetals % arr.length ? nbPetals % arr.length - 1 : arr.length - 1]
// }
// console.log(howMuchILoveYou(7));
// function howMuchILoveYou(n) {
// 	return arr[(n - 1) % arr.length]
// }

// Дети пьют тодди.
// Подростки пьют колу.
// Молодые люди пьют пиво.
// Взрослые пьют виски.
// Сделайте функцию, которая получает возраст и возвращает то, что они пьют.
// 	Правила:
// Дети до 14 лет.
// Подростки до 18 лет.
// Молодые до 21 года.
// У взрослых 21 и более.
// 13 -- > "drink toddy"
// 17 -- > "drink coke"
// 18 -- > "drink beer"
// 20 -- > "drink beer"
// 30 -- > "drink whisky"
// function peopleWithAgeDrink(old) {
// 	return old >= 21 ? "drink whisky" : old >= 18 ? "drink beer" : old >= 14 ? "drink coke" : 'drink toddy'
// };
// console.log(peopleWithAgeDrink(15));

// Если указано число от 0 до 9, верните его словами.
// Вход :: 1
// Выход :: "Один".
// Если ваш язык поддерживает это, попробуйте использовать оператор switch.
// function switchItUp(number) {
// 	switch (number) {
// 		case 0: return 'Zero'
// 		case 1: return 'One'
// 		case 2: return 'Two'
// 		case 3: return 'Three'
// 		case 4: return 'Four'
// 		case 5: return 'Five'
// 		case 6: return 'Six'
// 		case 7: return 'Seven'
// 		case 8: return 'Eight'
// 		case 9: return 'Nine'
// 	}
// }
// console.log(switchItUp(1));

// После тяжелой четверти в офисе вы решаете немного отдохнуть в отпуске. Итак, вы забронируете рейс для себя и своей девушки и постараетесь оставить весь беспорядок позади.
// Вам понадобится арендованный автомобиль, чтобы передвигаться в отпуске. Менеджер по аренде автомобилей делает вам несколько хороших предложений.
// Каждый день аренды автомобиля стоит 40 долларов. Если вы арендуете автомобиль на 7 или более дней, вы получаете скидку в размере 50 долларов США. В качестве альтернативы, если вы арендуете автомобиль на 3 или более дней, вы получаете скидку в размере 20 долларов США.
// Напишите код, который выдает общую сумму за разные дни (d).
// assert.strictEqual(rentalCarCost(3), 100);
// assert.strictEqual(rentalCarCost(4), 140);
// assert.strictEqual(rentalCarCost(5), 180);
// function rentalCarCost(d) {
// 	return d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40
// }
// console.log(rentalCarCost(5));

// Ваша задача — создать функцию isDivideBy (или is_divide_by), чтобы проверять, делится ли целое число на оба целых числа a и b.
// Несколько случаев:
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false
// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true
// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true
// function isDivideBy(number, a, b) {
// 	return !(number % a || number % b)
// }
// console.log(isDivideBy(15, -5, 3));

// Таракан – одно из самых быстрых насекомых.Напишите функцию, которая получает скорость в км / ч и возвращает ее в см / с с округлением в меньшую сторону до целого числа(= с точностью до пола).
// 	Например:
// 1, 08 -- > 30
// Примечание! Ввод представляет собой вещественное число(фактический тип зависит от языка) и >= 0. Результат должен быть целым числом.
// assert.strictEqual(cockroachSpeed(1.08), 30);
// assert.strictEqual(cockroachSpeed(1.09), 30);
// assert.strictEqual(cockroachSpeed(0), 0);
// function cockroachSpeed(s) {
// 	return Math.floor(1000 / 36 * s)
// }
// console.log(cockroachSpeed(1.08));
// console.log(cockroachSpeed(1.09));

// Вам даны два внутренних угла (в градусах) треугольника.
// Напишите функцию, возвращающую 3-е число.
// Примечание: будут проверены только положительные целые числа.
// assert.strictEqual(otherAngle(30, 60), 90);
// assert.strictEqual(otherAngle(60, 60), 60);
// assert.strictEqual(otherAngle(43, 78), 59);
// assert.strictEqual(otherAngle(10, 20), 150);
// function otherAngle(a, b) {
// 	return 180 - a - b
// }
// console.log(otherAngle(10, 20));//150

// Вернуть N-е четное число
// Пример (ввод --> вывод)
// 1 --> 0 (первое четное число равно 0)
// 3 --> 4 (третье четное число равно 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// Ввод не будет 0.
// Test.assertEquals(nthEven(1), 0, "Wrong Value!");
// Test.assertEquals(nthEven(2), 2, "Wrong Value!");
// Test.assertEquals(nthEven(3), 4, "Wrong Value!");
// Test.assertEquals(nthEven(100), 198, "Wrong Value!");
// Test.assertEquals(nthEven(1298734), 2597466, "Wrong Value!");
// function nthEven(n) {
// 	return n * 2 - 2
// }
// console.log(nthEven(100));
// console.log(nthEven(1298734));

// Это ката об умножении заданного числа на восемь, если оно четное, и на девять в противном случае.
// assert.strictEqual(simpleMultiplication(2),16,'Should return double given argument..')
// assert.strictEqual(simpleMultiplication(1),9,'Should return double given argument..')
// assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')
// function simpleMultiplication(number) {
// 	return number % 2 ? number * 9 : number * 8
// }
// console.log(simpleMultiplication(8));

// Функция голов Месси
// Месси – футболист, забивший голы в трех лигах:
// Ла Лига
// Копа дель Рей
// Чемпионы
// Завершите функцию, чтобы вернуть его общее количество голов во всех трех лигах.
// 	Примечание: ввод всегда будет действительным.
// 		Например:
// 5, 10, 2  -->  17
// Test.assertEquals(goals(0,0,0), 0)
// Test.assertEquals(goals(43, 10, 5), 58)
// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
// 	return laLigaGoals + copaDelReyGoals + championsLeagueGoals
// }
// console.log(goals(5, 10, 2));

// Код так быстро, как вы можете! Вам нужно удвоить целое число и вернуть его.
// function doubleInteger(i) {
// 	return i * 2
// }
// console.log(doubleInteger(2));

// Назначение переменной
// Исправьте назначения переменных, чтобы этот код сохранял строку «devLab» в имени переменной.
// let a = "dev";
// let b = "Lab";
// let name = a + b;

// Исправить функцию
// Я создал эту функцию, чтобы добавить пять к любому переданному ей числу и вернуть новое значение. Он не выдает никаких ошибок, но возвращает неправильный номер.
// Можете ли вы помочь мне исправить функцию?
// Test.assertEquals(addFive(5), 10)
// Test.assertEquals(addFive(0), 5)
// Test.assertEquals(addFive(-5), 0)
// function addFive(num) {
// 	var total = num + 5
// 	return total
// }
// console.log(addFive(5));

// В этой игре герой движется слева направо. Игрок бросает кубик и два раза передвигается на число клеток, указанное кубиком.
// Создайте функцию для терминальной игры, которая берет текущую позицию героя и бросок (1-6) и возвращает новую позицию.
// Test.assertEquals(move(2, 5), 12);
// function move(position, roll) {
// 	return position + roll * 2
// }
// console.log(move(2, 5));

// Определите функцию, которая удаляет дубликаты из массива чисел и возвращает его в качестве результата.
// Порядок последовательности должен оставаться прежним.
// Test.assertSimilar(distinct([1,1,2]), [1,2]);
// function distinct(a) {
// 	return [...new Set(a)]
// }
// console.log(distinct([1, 1, 2]));

// Вы можете напечатать свое имя на рекламном щите. Узнайте, сколько это будет стоить вам. Каждое письмо имеет цену по умолчанию 30 фунтов стерлингов, но она может быть другой, если вам задано 2 параметра вместо 1.
// Вы не можете использовать оператор множителя "*".
// Если бы вас звали Чон-Хо Аристотелис, реклама стоила бы 600 фунтов стерлингов. 20 букв * 30 = 600 (пробел считается буквой).
// Test.assertEquals(billboard("Paolo Oli"), 270);
// Test.assertEquals(billboard("Hjalmar Liupold",40), 600);
// Test.assertEquals(billboard("Simon Eadwulf"), 390);
// function billboard(name, price = 30) {
// 	let a = 0
// 	for (let i = 0; i < name.split(``).length; i++) {
// 		a += price
// 	}
// 	return a
// }
// console.log(billboard("Paolo Oli"));

// Даны три целых числа a ,b ,c, вернуть наибольшее число, полученное после вставки следующих операторов и скобок: +, *, ()
// Другими словами, попробуйте каждую комбинацию a,b,c с [*+()] и верните максимальное полученное значение.
// Рассмотрим пример:
// С числами 1, 2 и 3 вот несколько способов размещения знаков и скобок:
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// Таким образом, максимальное значение, которое вы можете получить, равно 9.
// Примечания
// Цифры всегда положительные.
// Числа находятся в диапазоне (1  ≤  a, b, c  ≤  10).
// Вы можете использовать одну и ту же операцию более одного раза.
// Необязательно расставлять все знаки и скобки.
// Возможно повторение цифр.
// Вы не можете поменять местами операнды. Например, в данном примере нельзя получить выражение (1 + 3) * 2 = 8.
// expressionsMatter(1,2,3)  ==>  return 9
// function expressionMatter(a, b, c) {
// 	return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c)
// }
// console.log(expressionMatter(1, 2, 3));
// console.log(expressionMatter(2, 1, 2));
// console.log(expressionMatter(1, 3, 1));//5

// Напишите универсальную цепочку функций
// Напишите универсальную цепочку функций, которая принимает начальное значение и массив функций для его выполнения
// Вход для каждой функции является выходом предыдущей функции (за исключением первой функции, которая принимает начальное значение в качестве своего входа). Возвращает окончательное значение после завершения выполнения.
// function add(num) {
// 	return num + 1;
// }
// function mult(num) {
// 	return num * 30;
// }
// chain(2, [add, mult]);
// // returns 90;
// function chain(input, fs) {
// 	let result = input;
// 	for (let i = 0; i < fs.length; i++)
// 		result = fs[i](result);
// 	return result;
// }
// console.log(chain(2, [add, mult]));

// У вас есть компас с 8 ветрами, например:
// Вы получаете направление, в котором смотрите (одно из 8 направлений: С, СВ, В, ЮВ, Ю, ЮЗ, З, СЗ) и определенный градус поворота (кратное 45, между -1080 и 1080); положительный означает по часовой стрелке, а отрицательный означает против часовой стрелки.
// Вернитесь в том направлении, в котором вы столкнетесь после поворота.
// "S",  180  -->  "N"
// "SE", -45  -->  "E"
// "W",  495  -->  "NE"
// function direction(facing, turn) {
// 	const compass = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
// 	const degreesTurn = turn / 45 % 8;
// 	const directionIndex = compass.indexOf(facing);
// 	const b = (directionIndex || 8) + degreesTurn;
// 	return compass[
// 		b < 0 ? 8 + b :
// 			b >= 8 ? b - 8 :
// 				b]
// }
// console.log(direction("W", 495));//"NE"
// console.log(direction("SE", -45));//"E"
// console.log(direction("N", -450));//"W"
// console.log(direction("W", -315));//"NW"
// console.log(direction("S", 180));//"N"
// console.log(direction("S", -540));//"N"

// Функция Math.min перестала работать, поэтому приходится использовать собственную функцию. У нас хорошее начало, но эта функция, похоже, не справляется со всем должным образом. Добавьте соответствующие проверки, чтобы возвращать NaN для всего, что не является фактическим числом, за исключением обработки нулевого значения как 0.
// Примечание. Эта функция min не должна обрабатывать более двух аргументов.
// function min(a, b) {
// 	return isNaN(a) || isNaN(b) ? NaN : ((a < b) ? +a : +b);
// }
// console.log(min(1, -2.5));
// console.log(min(1.5, NaN));
// console.log(min(1.5, undefined));
// console.log(min(-Infinity, Infinity));
// console.log(min(null, 2.5));
// console.log(min(NaN, -1.5));

// Завершите функцию keysAndValues, чтобы она принимала объект и возвращала ключи и значения в виде отдельных массивов.
// Пример:
// keysAndValues({a: 1, b: 2, c: 3}) // должно возвращать [['a', 'b', 'c'], [1, 2, 3]]
// Точки стиля (только JS/CoffeeScript): этот ката проверяет только данные, которые используют литеральную нотацию объекта (простые объекты). Для дополнительного стиля, можете ли вы заставить свой метод проверять объекты, которые расширяют их прототип?
// assert.deepEqual(keysAndValues({ a: 1, b: 2, c: 3 }), [['a', 'b', 'c'], [1, 2, 3]]);
// assert.deepEqual(keysAndValues({}), [[], []]);
// assert.deepEqual(keysAndValues({ 1: 'a', 2: 'b', 3: 'c' }), [['1', '2', '3'], ['a', 'b', 'c']]);
// function keysAndValues(data) {
// 	return [Object.keys(data), Object.values(data)]
// }
// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

// Для этого упражнения вы должны создать класс JavaScript, подобный объекту, с именем «Животное», который принимает аргументы name и type. Он должен иметь метод toString, который возвращает удобочитаемую строку, указывающую переданную информацию аргумента. Он также должен позволять устанавливать свойство имени.
// Ниже приведен пример того, как будет использоваться окончательный код и какими должны быть ожидаемые возвращаемые значения:
// create your Animal class like object here
// class Animal {
// 	constructor(name, type) {
// 		this.name = name;
// 		this.type = type;
// 	}
// 	toString() { return `${this.name} is a ${this.type}` }
// }
// const dog = new Animal('Max', 'dog');
// dog.toString(); // should return 'Max is a dog'
// dog.type; // should == 'dog'
// dog.name; // should == 'Max'
// dog.name = 'Lassie'; // should set name to 'Lassie'

// Есть встроенная функция, называемая повторением строк. Он повторяет заданную строку N раз.
// Пример:
// 'а'.repeat(3) === 'ааа'
// 'по всему миру' .repeat(2) === 'по всему миру по всему миру'
// Это может быть очень полезно для таких вещей, как выравнивание текста.
// console.log('Корневой узел')
// console.log(' '.repeat(4) + 'Поддерево')
// console.log(' '.repeat(8) + 'Углубленное поддерево')
// Теперь представьте, что эта функция не была встроенной. Можете ли вы реализовать это самостоятельно?
// String.prototype.repeat = function (count) {
// 	let str = '' + this;
// 	count = +count;
// 	let rpt = '';
// 	for (let i = 0; i < count; i++) {
// 		rpt += str;
// 	}
// 	return rpt;
// }
// String.prototype.repeat = function(count) {
// 	return new Array(count + 1).join(this);
//  };

// Implement all required functions in order to create the following sentences by calling those functions:
// Adam(has(a(dog()))); // must return "Adam has a dog."
// The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
// function Adam(str = '.') { return str !== '.' ? 'Adam ' + str : 'Adam' + str }
// function has(str = '.') { return str !== '.' ? 'has ' + str : 'has' + str }
// function a(str = '.') { return str !== '.' ? 'a ' + str : 'a' + str }
// function dog(str = '.') { return str !== '.' ? 'dog ' + str : 'dog' + str }
// function The(str = '.') { return str !== '.' ? 'The ' + str : 'The' + str }
// function name(str = '.') { return str !== '.' ? 'name ' + str : 'name' + str }
// function of(str = '.') { return str !== '.' ? 'of ' + str : 'of' + str }
// function the(str = '.') { return str !== '.' ? 'the ' + str : 'the' + str }
// function is(str = '.') { return str !== '.' ? 'is ' + str : 'is' + str }
// function also(str = '.') { return str !== '.' ? 'also ' + str : 'also' + str }
// function getName(args) {
// 	if (args.length==0) {return arguments.callee.caller.name +'.' }
// 		return arguments.callee.caller.name +' '+ args[0];
// 	};
// 	function Adam() {return getName(arguments)}
// 	function has() {return getName(arguments)}
// 	function a() {return getName(arguments)}
// 	function dog() {return getName(arguments)}
// 	function The() {return getName(arguments)}
// 	function name() {return getName(arguments)}
// 	function of() {return getName(arguments)}
// 	function the() {return getName(arguments)}
// 	function is() {return getName(arguments)}
// 	function also() {return getName(arguments)}

// Дезоксирибонуклеиновая кислота (ДНК) представляет собой химическое вещество, находящееся в ядре клеток и несущее «инструкции» по развитию и функционированию живых организмов.
// Если вы хотите узнать больше: http://en.wikipedia.org/wiki/DNA
// В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». Ваша функция получает одну сторону ДНК (строка, кроме Haskell); вам нужно вернуть другую дополнительную сторону. Нить ДНК никогда не бывает пустой или ДНК вообще не существует (опять же, кроме Haskell).
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
// function DNAStrand(dna) {
// 	return dna.split(``).map(a =>
// 		a === 'A' ? 'T' :
// 			a === 'T' ? 'A' :
// 				a === 'C' ? 'G' : 'C'
// 	).join(``)
// }
// console.log(DNAStrand("ATTGC"));
// const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);

// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для заданного массива минимум из 4 положительных целых чисел. Не будут переданы числа с плавающей запятой или неположительные целые числа.
// Например, когда массив передается как [19, 5, 42, 2, 77], вывод должен быть 7.
// [10, 343445353, 3453445, 3453545353453] должен вернуть 3453455.
// function sumTwoSmallestNumbers(numbers) {
// 	let a1 = Math.min(...numbers.filter(a => a !== 0))
// 	let a2 = Math.min(...numbers.filter(a => a !== a1).filter(a => a !== 0))
// 	return a2 + a1
// }
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
// console.log(sumTwoSmallestNumbers([10, 0, 3453445, 3453545353453]));

// Даны два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните a или b.
// Примечание: a и b не упорядочены!
// Примеры (а, б) --> вывод (пояснение)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// function getSum(a, b) {
// 	let d = [a, b].sort((a, b) => a - b);
// 	return a === b ? a : new Array(d[1] - d[0] + 1).fill(1).map((a, i) => d[0] + i).reduce((a, b) => a + b)
// }
// console.log(getSum(-1, 2));
// const GetSum = (a, b) => {
// 	let min = Math.min(a, b),
// 		max = Math.max(a, b);
// 	return (max - min + 1) * (min + max) / 2;
// }

// Обычно, когда вы что-то покупаете, вас спрашивают, верны ли номер вашей кредитной карты, номер телефона или ответ на ваш самый секретный вопрос. Однако, поскольку кто-то может заглянуть вам через плечо, вы не хотите, чтобы это отображалось на вашем экране. Вместо этого мы маскируем его.
// Ваша задача — написать функцию maskify, которая заменяет все символы, кроме последних четырех, на «#».
// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"
// function maskify(cc) {
// 	return cc.length > 4 ? cc.slice(0, cc.length - 4).replace(/./g, "#") + cc.slice(cc.length - 4, cc.length) : cc
// }
// console.log(maskify("4556364607935616"));
// function maskify(cc) {
// 	return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }

// Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.Функция должна возвращать true, если можно построить треугольник со сторонами заданной длины, и false в любом другом случае.
// (В этом случае все треугольники должны иметь поверхность больше 0, чтобы быть принятыми).
// assert.strictEqual(isTriangle(1, 2, 2), true);
// assert.strictEqual(isTriangle(7, 2, 2), false);
// function isTriangle(a, b, c) {
// 	return (a + b <= c) || (b + c <= a) || (a + c <= b) ? false : true;
// }
// console.log(isTriangle(7, 2, 2));
// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(9, 6, 3));//false
// console.log(isTriangle(2, 2, 4));//false
// console.log(isTriangle(1, 2, 3));//false
// function isTriangle(a, b, c) {
// 	return a + b > c && a + c > b && c + b > a;
// }

// Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.
// Если в имени ровно 4 буквы, можете быть уверены, что оно должно быть вашим другом! В противном случае, вы можете быть уверены, что он не..
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Примечание: сохраните исходный порядок имен в выводе.
// function friend(friends) {
// 	return friends.filter(a => a.length === 4)
// }
// console.log(friend(["Ryan", "Kieran", "Mark"]));

// Возьмите 2 строки s1 и s2, содержащие только буквы от a до z. Возвращает новую отсортированную строку, максимально длинную, содержащую различные буквы (каждая из которых взята только один раз) из s1 или s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
// const a = "xyaabbbccccdefww"
// const b = "xxxxyyyyabklmopq"
// function longest(s1, s2) {
// 	return [...new Set(s1 + s2)].sort().join(``)
// }
// console.log(longest(a, b));

// Банкоматы позволяют использовать 4- или 6-значные PIN-коды, а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.
// Если функции передана допустимая строка PIN-кода, верните true, иначе верните false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
// function validatePIN(pin) {
// 	let a = pin.length
// 	if (a === 4 || a === 6) a = pin.replace(/[^0-9]/, '').length
// 	return a === 4 || a === 6
// }
// console.log(validatePIN('123456'));
// console.log(validatePIN('a234'));
// console.log(validatePIN('-1234'));// false
// function validatePIN(pin) {
// 	return /^(\d{4}|\d{6})$/.test(pin)
//  }

// Дан треугольник последовательных нечетных чисел:
// 				1
// 			3     5
// 		7     9    11
// 	13    15    17    19
// 21    23    25    27    29
// Вычислите сумму чисел в n - й строке этого треугольника(начиная с индекса 1), например: (Ввод-- > Вывод)
// 1 -- > 1
// 2 -- > 3 + 5 = 8
// function rowSumOddNumbers(n) {
// 	let a = 0;
// 	for (let i = 0; i < n; i++) {
// 		a += n - i
// 	}
// 	let b = []
// 	for (let i = 0; b.length < a; i++) {
// 		if (i % 2 === 0) b.push(i + 1)
// 	}
// 	return b.slice(a - n).reduce((a, b) => a + b)
// }
// console.log(rowSumOddNumbers(2));//8
// console.log(rowSumOddNumbers(42));//74088
// function rowSumOddNumbers(n) {
// 	return n * n * n
// }

// На заводе принтер печатает этикетки для коробок. Для одного вида коробок принтеру приходится использовать цвета, которые для простоты обозначаются буквами от а до m.
// Цвета, используемые принтером, записываются в управляющую строку. Например, "хорошей" контрольной строкой будет aaabbbbhaijjjm, что означает, что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, а затем один раз цвет a...
// Иногда возникают проблемы: отсутствие цветов, технический сбой и выдается "плохая" управляющая строка, например. aaaxbbbbyyhwawiwjjjwwm с буквами не от a до m.
// Вы должны написать функцию printer_error, которая по заданной строке будет возвращать частоту ошибок принтера в виде строки, представляющей рациональное число, числитель которого — количество ошибок, а знаменатель — длина управляющей строки. Не уменьшайте эту дробь до более простого выражения.
// Строка имеет длину больше или равную единице и содержит только буквы от a до z.
// Examples:
// const s = "aaabbbbhaijjjm"
// printer_error(s) => "0/14"
// const s = "aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"
// function printerError(s) {
// 	return `${s.length - s.match(/[a-m]/gi).length}/${s.length}`
// }
// console.log(printerError(s));
// function printerError(s) {
// 	return `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
// }

// Крокетный клуб Western Suburbs имеет две категории членства: Senior и Open. Им нужна ваша помощь с формой заявки, в которой потенциальным членам будет указано, в какую категорию они будут помещены.
// Чтобы быть Senior, член должен быть не моложе 55 лет и иметь гандикап больше 7. В этом крокетном клубе гандикап варьируется от -2 до +26; чем лучше игрок, тем ниже гандикап.
// Вход
// Ввод будет состоять из списка пар. Каждая пара содержит информацию об одном потенциальном члене. Информация состоит из целого числа для возраста человека и целого числа для инвалидности человека.
// Выход
// Вывод будет состоять из списка строковых значений (в Haskell и C: Open или Senior), указывающих, должен ли соответствующий член быть помещен в категорию Senior или Open.
// Example
// const input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
// function openOrSenior(data) {
// 	return data.map(a => a[0] >= 55 && a[1] > 7 ? "Senior" : "Open")
// }
// console.log(openOrSenior(input));
// console.log(openOrSenior([[85, 7], [62, 6], [15, 19], [85, 18], [62, 24], [61, 15], [33, 2]]));

// Создайте функцию с именем divisors/Divisors, которая принимает целое число n > 1 и возвращает массив со всеми делителями целого числа (кроме 1 и самого числа), от наименьшего до наибольшего. Если число простое, верните строку '(integer) is prime'.
// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
// function divisors(integer) {
// 	const a = []
// 	for (let i = 2; i < integer; i++) {
// 		if (integer % i === 0) a.push(i)
// 	}
// 	return a.length !== 0 ? a : `${integer} is prime`
// };
// console.log(divisors(12));
// console.log(divisors(13));

// Ваша задача — написать функцию, которая возвращает сумму следующих рядов до n-го члена (параметра).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Вам нужно округлить ответ до 2 знаков после запятой и вернуть его как строку.
// Если заданное значение равно 0, оно должно вернуть 0,00.
// В качестве аргументов вам будут предоставлены только натуральные числа.
// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
// function SeriesSum(n) {
// 	let a = 1.25
// 	let b = 4
// 	for (let i = 0; i < n - 2; i++) {
// 		a += 1 / (b + 3)
// 		b += 3
// 	}
// 	switch (n) {
// 		case 0: return 0.00.toFixed(2)
// 		case 1: return 1.00.toFixed(2)
// 		case 2: return 1.25.toFixed(2)
// 		default: return a.toFixed(2)
// 	}
// }
// console.log(SeriesSum(1));
// console.log(SeriesSum(3)); // "1.39"
// console.log(SeriesSum(5));
// function SeriesSum(n) {
// 	let sum = 0;
// 	for (var i = 0; i < n; i++) {
// 		sum += 1 / (3 * i + 1);
// 	}
// 	return sum.toFixed(2);
// }

// Музей невероятно скучных вещей хочет избавиться от некоторых выставок. Мириам, архитектор интерьеров, придумывает план убрать самые скучные выставки. Она дает им рейтинг, а затем удаляет тот, у которого самый низкий рейтинг.
// Однако как только она закончила оценивать все выставки, она направляется на важную ярмарку, поэтому она просит вас написать программу, которая сообщает ей оценки предметов после того, как один из них удалил самый низкий. Справедливо.
// Задача
// Учитывая массив целых чисел, удалите наименьшее значение. Не изменяйте исходный массив/список. Если есть несколько элементов с одинаковым значением, удалите элемент с более низким индексом. Если вы получили пустой массив/список, верните пустой массив/список.
// Не меняйте порядок оставшихся элементов.
// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
// function removeSmallest(numbers) {
// 	let a = numbers.indexOf(Math.min(...numbers))
// 	return [...numbers.slice(0, a), ...numbers.slice(a + 1)]
// }
// console.log(removeSmallest([1, 2, 3, 4, 5]));
// console.log(removeSmallest([2, 3, 1, 4, 5, 1]));

// Ваша задача — разбить плитку шоколада заданного размера n x m на маленькие квадраты. Каждый квадрат имеет размер 1x1 и не ломается. Реализуйте функцию, которая будет возвращать минимальное количество необходимых разрывов.
// Например, если вам дали плитку шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за один раз, но для размера 3 x 1 вы должны сделать два разрыва.
// Если входные данные недействительны, вы должны вернуть 0 (так как разрывы не нужны, если у нас нет шоколада для разделения). Ввод всегда будет неотрицательным целым числом.
// Test.assertEquals(breakChocolate(5, 5) , 24)
// Test.assertEquals(breakChocolate(1, 1) , 0)
// function breakChocolate(n, m) {
// 	let a = n * m - 1
// 	return a < 0 ? 0 : a
// }
// console.log(breakChocolate(5, 5));

// Вам дан массив целых чисел нечетной длины, в котором все они одинаковы, кроме одного единственного числа.
// Завершите метод, который принимает такой массив и возвращает это единственное другое число.
// Входной массив всегда будет действительным! (нечетная длина >= 3)
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
// function stray(numbers) {
// 	let a = numbers.filter(a => a === numbers[0])
// 	return a.length > 1 ? +('' + numbers.filter(a => a !== numbers[0])) : +('' + a)
// }
// console.log(stray([1, 1, 2]));//2
// console.log(stray([17, 17, 3, 17, 17, 17, 17]));//2
// function stray(numbers) {
// 	return numbers.reduce((a, b) => a ^ b);
// }

// Подсчитайте количество делителей натурального числа n.
// Случайные тесты доходят до n = 500000.
// 4 -- > 3(1, 2, 4)
// 5 -- > 2(1, 5)
// 12 -- > 6(1, 2, 3, 4, 6, 12)
// 30 -- > 8(1, 2, 3, 5, 6, 10, 15, 30)
// function getDivisorsCnt(n) {
// 	let a = []
// 	for (let i = 1; i <= n; i++) {
// 		if (n % i === 0) a.push(i)
// 	}
// 	return a.length
// }
// console.log(getDivisorsCnt(5));
// function getDivisorsCnt(n) {
// 	for (var d = 0, i = n; i > 0; i--) {
// 		if (n % i == 0) d++;
// 	}
// 	return d;
// }

// Завершите решение, чтобы оно отсортировало переданный массив чисел. Если функция передает пустой массив или значение null/nil, она должна вернуть пустой массив.
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []
// assert.deepEqual(solution([1,2,3,10,5]), [1,2,3,5,10])
// assert.deepEqual(solution(null), [])
// assert.deepEqual(solution([]), [])
// assert.deepEqual(solution([20, 2, 10]), [2,10,20])
// assert.deepEqual(solution([2, 20, 10]), [2,10,20])
// function solution(nums) {
// 	return nums === null || nums.length === 0 ? [] : nums.sort((a, b) => a - b)
// }
// console.log(solution([1, 2, 10, 50, 5]));
// console.log(solution([]));
// console.log(solution(null));
// function solution(nums) {
// 	return (nums || []).sort((a, b) => a - b)
// }

// Имея два числа и арифметический оператор (его имя в виде строки), верните результат двух чисел, к которым был применен этот оператор.
// a и b оба будут положительными целыми числами, причем a всегда будет первым числом в операции, а b всегда вторым.
// Четыре оператора: «сложить», «вычесть», «делить», «умножить».
// Несколько примеров: (Ввод1, Ввод2, Ввод3 --> Вывод)
// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Попробуйте сделать это без использования операторов if!
// function arithmetic(a, b, operator) {
// 	return operator === "add" ? a + b :
// 		operator === "subtract" ? a - b :
// 			operator === "multiply" ? a * b : a / b
// }
// console.log(arithmetic(8, 2, "subtract")); //6

// У мистера Скруджа есть сумма денег «P», которую он хочет инвестировать. Прежде чем он это сделает, он хочет знать, сколько лет «Y» эта сумма «P» должна храниться в банке, чтобы она составила желаемую сумму денег «D».
// Сумма хранится в течение Y лет в банке, где проценты I выплачиваются ежегодно. После уплаты налогов «Т» за год новая сумма реинвестируется.
// Примечание к налогам: налогом облагается не инвестированная основная сумма, а только начисленные проценты за год.
// Пример:
// Let P be the Principal = 1000.00
//   Let I be the Interest Rate = 0.05
//   Let T be the Tax Rate = 0.18
//   Let D be the Desired Sum = 1100.00
// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Таким образом, г-н Скрудж должен ждать 3 года, чтобы первоначальный основной капитал составил желаемую сумму.
// Ваша задача — завершить предоставленный метод и вернуть количество лет «Y» в целом, чтобы мистер Скрудж получил желаемую сумму.
// Предположение: предположим, что желаемый принципал «D» всегда больше, чем первоначальный принципал. Однако лучше принять во внимание, что если желаемый основной «D» равен основному «P», это должно вернуть 0 лет.
// assert.strictEqual(calculateYears(1000, 0.05, 0.18, 1100), 3)
// assert.strictEqual(calculateYears(1000,0.01625,0.18,1200), 14)
// assert.strictEqual(calculateYears(1000,0.05,0.18,1000), 0)
// function calculateYears(principal, interest, tax, desired) {
// 	let z = principal
// 	let count = 0
// 	while (z < desired) {
// 		let a = z + z * interest;
// 		z = a - (a - z) * tax;
// 		count++
// 	}
// 	return count
// }
// console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3
// function calculateYears(principal, interest, tax, desired) {
// 	let years = 0;
// 	while (principal < desired) {
// 		principal += (principal * interest) * (1 - tax);
// 		years++;
// 	}
// 	return years;
// }

// Ваша команда пишет новый модный текстовый редактор, и вам поручили внедрить нумерацию строк.
// Напишите функцию, которая принимает список строк и возвращает каждую строку с правильным номером перед ним.
// Нумерация начинается с 1. Формат n: строка.Обратите внимание на двоеточие и пробел между ними.
// 	number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
// const number = (array) => {
// 	return array.map((a, i) => `${i + 1}: ${a}`)
// }
// console.log(number(["a", "b", "c"]));

// В математике факториал неотрицательного целого числа n, обозначаемый n!, представляет собой произведение всех положительных целых чисел, меньших или равных n.Например: 5! = 5 * 4 * 3 * 2 * 1 = 120. По соглашению значение 0! 1.
// Напишите функцию для вычисления факториала для заданных входных данных.Если входное значение меньше 0 или больше 12, генерируется RangeError(JavaScript).
// 	Test.assertEquals(factorial(0), 1, "factorial for 0 is 1");
// Test.assertEquals(factorial(1), 1, "factorial for 1 is 1");
// Test.assertEquals(factorial(2), 2, "factorial for 2 is 2");
// Test.assertEquals(factorial(3), 6, "factorial for 3 is 6");
// function factorial(n) {
// 	if (n < 0 || n > 12)
// 		throw new RangeError();
// 	return n <= 1 ? 1 : n * factorial(n - 1);
// }
// console.log(factorial(0));

// Возьмем целое число n (n >= 0) и цифру d (0 <= d <= 9) в качестве целого числа.
// Возведите в квадрат все числа k (0 <= k <= n) между 0 и n.
// Подсчитайте количество цифр d, использованных при написании всех k**2.
// Вызовите nb_dig (или nbDig или...) функцию, принимающую n и d в качестве параметров и возвращающую это значение.
// n = 10, d = 1
// k*k равны 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// Мы используем цифру 1 в: 1, 16, 81, 100. Тогда общее количество равно 4.
// nb_dig(25, 1) возвращает 11, так как k*k, содержащие цифру 1: 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// Таким образом, есть 11 цифр 1 для квадратов чисел от 0 до 25.
// Обратите внимание, что в числе 121 в два раза больше цифры 1.
// assert.strictEqual(nbDig(5750, 0), 4700, "n = 5750, d = 0");
// assert.strictEqual(nbDig(11011, 2), 9481, "n = 11011, d = 2");
// assert.strictEqual(nbDig(12224, 8), 7733, "n = 12224, d = 8");
// assert.strictEqual(nbDig(11549, 1), 11905, "n = 11549, d = 1");
// function nbDig(n, d) {
// 	let count = 0
// 	for (let i = 0; i <= n; i++) {
// 		if (('' + i * i).includes('' + d)) count += ('' + i * i).split(``).filter(a => a == d).length
// 	}
// 	return count
// }
// console.log(nbDig(10, 1));
// console.log(nbDig(5750, 0));
// console.log(nbDig(25, 1)); // 11
// function nbDig(n, d) {
// 	let o = '';
// 	for (let i = 0; i <= n; i++) {
// 		o += i * i;
// 	}
// 	return o.split(d).length - 1
// }

// Не ставь мне пять!
// В этом ката вы получаете начальный номер и конечный номер региона и должны вернуть количество всех чисел, кроме номеров с 5 в нем. Начальный и конечный номер включительно!
// Примеры:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Результат 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Результат 12
// Результат может содержать пятерки. ;-)
// Начальный номер всегда будет меньше конечного. Оба числа могут быть и отрицательными!
// Мне очень любопытны ваши решения и то, как вы их решаете. Возможно, кто-то из вас найдет простое чисто математическое решение.
// Получайте удовольствие от его кодирования и, пожалуйста, не забудьте проголосовать и оценить этот ката! :-)
// Test.assertEquals(dontGiveMeFive(1,9), 8);
// Test.assertEquals(dontGiveMeFive(4,17), 12);
// function dontGiveMeFive(start, end) {
// 	let a = []
// 	for (let i = 0; i < (end - start + 1); i++) {
// 		a.push(start + i)
// 	}
// 	return a.filter(a => !('' + a).split(``).includes('5')).length
// }
// console.log(dontGiveMeFive(1, 9)); // 8
// console.log(dontGiveMeFive(4, 17)); // 12
// function dontGiveMeFive(start, end) {
// 	let count = 0
// 	for (let i = start; i <= end; i++) {
// 	  if (!/5/.test(i)) {
// 		 count++
// 	  }
// 	}
// 	return count
//  }

// Анаграмма — это результат перестановки букв слова для получения нового слова (см. Википедию).
// Примечание: анаграммы нечувствительны к регистру.
// Завершите функцию, чтобы вернуть true, если два заданных аргумента являются анаграммами друг друга; в противном случае вернуть false.
// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"
// .(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
// .(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
// .(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')
// .(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
// .(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
// .(isAnagram("apple", "pale"), false, 'Same letters, but different count')
// function isAnagram(test, original) {
// 	const c = test.toLowerCase().split("").sort().join("");
// 	const d = original.toLowerCase().split("").sort().join("");
// 	return c === d;
// }
// console.log(isAnagram('foefet', 'todfee'));

// Ваша задача — составить функцию, которая возвращает сумму последовательности целых чисел.
// Последовательность определяется тремя неотрицательными значениями: начало, конец, шаг(включительно).
// Если начальное значение больше конечного, функция должна вернуть 0
// Examples
// 2, 2, 2 -- > 2
// 2, 6, 2 -- > 12(2 + 4 + 6)
// 1, 5, 1 -- > 15(1 + 2 + 3 + 4 + 5)
// 1, 5, 3  -- > 5(1 + 4)
// const sequenceSum = (begin, end, step) => {
// 	let a = [];
// 	for (let i = begin; i <= end; i += step) {
// 		a.push(i);
// 	}
// 	return begin < end ? a.reduce((a, b) => a + b) : 0
// };
// console.log(sequenceSum(2, 6, 2)); //12
// console.log(sequenceSum(1, 5, 1)); //15
// console.log(sequenceSum(1, 5, 3)); //5
// console.log(sequenceSum(481, 493, 92)); //481
// console.log(sequenceSum(159, 306, 29)); //1389

// В следующем 6-значном номере:
// 283910
// 91 — это наибольшая последовательность из двух последовательных цифр.
// В следующем 10-значном номере:
// 1234567890
// 67890 — это наибольшая последовательность из 5 последовательных цифр.
// Завершите решение так, чтобы оно возвращало наибольшую последовательность из пяти последовательных цифр, найденных в заданном числе. Число будет передано в виде строки, состоящей только из цифр. Он должен возвращать пятизначное целое число. Передаваемое число может состоять из 1000 цифр.
// function solution(digits) {
// 	let a = +digits.slice(0, 5)
// 	for (let i = 0; i < digits.length; i++) {
// 		a > +digits.slice(i + 1, i + 6) ? a : a = +digits.slice(i + 1, i + 6)
// 	}
// 	return a
// }
// console.log(solution('1234567898765')); // 98765
// console.log(solution('731674765')); // 74765