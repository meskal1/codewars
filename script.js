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