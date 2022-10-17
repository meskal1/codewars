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
