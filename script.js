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