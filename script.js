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