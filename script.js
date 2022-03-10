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