//ДОМАШКА


let allNames = ['Vasya' , 'Tolya' , 'Igor']; //array
let allNames2 = ['Vasya2' , 'Tolya2' , 'Igor2']; //array

function beta(name) {
	alert (name + '  liked your photo')
}

/* for (let i=0; i< allNames.length; i++) {
  beta(allNames[i]);
}
 */

function betaForCustomArray (namesArray) {
  for (let i=0; i< namesArray.length; i++) {
    beta(namesArray[i]);
  }
}

betaForCustomArray(allNames);



//Напишите функцию hello2(), которая при вызове будет принимать переменную name 
//например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость»//

/*function hello2(name = "Гость") {
	document.write('Privet ,' + name);
}
hello2();*/



//Напишите функцию mul(n,m), которая принимает два аргумента и возвращает произведение этих аргументов. Проверьте ее работу.

/*function mul(n, m) {
	return n + m;
}
let sum = 'Cумма :' + mul(1, 2);
console.log(sum);*/


//NE ZNAJU!!!!!Создайте функцию repeat(str, n), которая возвращает строку, 
//состоящую из n повторений строки str. n — по умолчанию 2, str — пустая строка

/*function repeat(str, n = 2) {
	return str.repeat(n);
}

 console.log(repeat(''));  должен вывести 2-е пустые строки
 console.log(repeat('', 4));  должен вывести 4 пустые строки */

//Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)».
//Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных


function rgb(color1 = 0, color2 = 0, color3 = 0) {
	let mainColors = 'rgb' + '' + ('' + color1 + ',' + color2 + ',' + color3);
	return console.log(mainColors);
}
rgb(1, 2, 3);


/*Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые).*/

function avg(n, a, b) {
	let middle = (n + a + b) / 2;
	return console.log(middle);
}
avg(5, 5, 5);


/*Создайте функцию m(a, b) оболочку для mul().m() должна принимать два аргумента а возвращать результат работы mul() с этими двумя аргументами.
После выполнения задания поэкспериментируйте,
	создайте функцию log(), которая будет принимать одно значение, а вызывать  console.log() с этим значением.*/



function m(a, b) {
	function mul() {
		let sum = a + b;
		return console.log(sum);
	}
	return mul();
}
m(1, 2);



function m(a, b) {
	return mul(a, b);
}
function mul(a, b) {
	return a * b;
}

console.log(m(2, 4));



/*Напишите функцию operation(m,n,o), в которой m и n — числовые переменные, а o — функциональный литерал,
который берет два аргумента и выполняет математическую операцию над ними (например, функция mul() из задания 4.)*/

function operation(m, n, o); {
	function o() {
		let sum = m + n;
		return sum;
	}
	return o;
}



function operation(m, n, o) {
	return o(m, n);
}
console.log(operation(2, 3, (a, b) => a * b));



 Напишите функцию addN(n), которая вернёт другую функцию. 
Возвращенная функция должна складывать получаемый аргумент с аргументом n возвращающей функции.Внимание, эта простая на реализацию замыкания.


function addN(n) {
	return function newN(x) {
		return x+n;
	}
	}
	const add5 = addN(5); - в n
	console.log(add5(10)); в m
	console.log(addN(3)(20)); - такие скобки указывают на замыкание.


addN(3);
addNewN(3);





/* NE PONYAL!!!! function map(f, a) {
	var result = []; // Create a new Array
	var i; // Declare variable
	for (i = 0; i != a.length; i++)
	  result[i] = f(a[i]);
		 return result;
 }
 var f = function(x) {
	 return x * x * x;
 }
 var numbers = [0, 1, 2, 5, 10];
 var cube = map(f,numbers);
 console.log(cube);/*









/*
1. Изучить теорию
2. Решить задачи:


// Задача №1
// Кто попадет в консоль первым Вася или Коля?
function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');

// Задача №2
// Верно ли вызвана функция
showMessage();
function showMessage() {
	console.log('Сообщение');
}
// Задача №3
// Верно ли вызвана функция
showMessage();
let showMessage = function () {
	console.log('Сообщение');
}
// Задача №4
// Как решить проблему?
'use strict'
if (2 > 1) {
	function showMessage() {
		console.log('Сообщение');
	}
}
showMessage(); // Error (showMessage is not defined)

*/

//========================================================================================================================================================
//========================================================================================================================================================
//Объявление функции (Function Declaration)
/*
function имя(параметры) {
	// тело (код) функции
}*/
//===========================================================

//Имя функции и её предназначение
/*
Как правило, в имени используются опеределенные префиксы,
обозначающие действие, после которых следует объект действия.

Например, функции, начинающиеся с
"show..." обычно что-то показывают,
"get..." – возвращают значение,
"calc..." – что-то вычисляют,
"create..." – что-то создают,
"check..." – что-то проверяют и возвращают логическое
значение, и т.д.

Примеры:
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
и т.д.
*/

// Функция вывода сообщения
/*
function showMessage() {
	console.log('Сообщение');
}
*/

/*
Функция должна делать только то,
что явно подразумевается её названием.
И это должно быть одним действием.
Два независимых действия обычно подразумевают две функции,
даже если предполагается, что они будут вызываться вместе (в этом случае мы
можем создать третью функцию, которая будет их вызывать).
*/

//===========================================================
//Запуск функции
/*
showMessage();

// Функция вывода сообщения
function showMessage() {
	console.log('Сообщение!');
}
showMessage();
showMessage();
*/

//===========================================================

/*
function getSumm() {
	let numOne, numTwo;

	function getNumOne() {
		numOne = 1;
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(numSumm);
}
getNumOne();
getSumm();
*/
//-----
/*
// Вложенность и видимость функций
"use strict"
if (2 > 1) {
	function getSumm() {
		let numOne, numTwo;

		function getNumOne() {
			numOne = 1;
		}
		function getNumTwo() {
			numTwo = 2;
		}
		getNumOne();
		getNumTwo();

		let numSumm = numOne + numTwo;
		console.log(numSumm);
	}
}
getSumm();
*/
//===========================================================
//Локальные и внешние переменные
/*
function showMessage() {
	// Локальная переменная
	let message = "Сообщение";
	console.log(message);
}

console.log(message);
*/

//-----
/*
// Внешняя переменная
let message;

function showMessage() {
	// Используется внешняя переменная
	message = "Сообщение";
}
console.log(message);

showMessage();
*/

//-----

/*
// Внешняя переменная
let message = "Сообщение №1";

function showMessage() {
	// Локальная переменная
	let message = "Сообщение №2";
	console.log(message);
}
console.log(message);
showMessage();

*/
//------

/*
// Глобальные переменные
let globalVar = "Я глобальная переменная";

function getSumm() {
	let numOne, numTwo;

	function getNumOne() {
		numOne = 1;
		console.log(globalVar);
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(globalVar);
}
console.log(globalVar);

getSumm();
*/

//===========================================================
/*
// Параметры (аргументы)
function calcSumm(numOne = 1, numTwo = 2) {
	console.log(`Переменная numOne:${numOne}`);
	console.log(`Переменная numTwo:${numTwo}`);

	let numSumm = numOne + numTwo;

	console.log(`Сумма:${numSumm}`);
}

calcSumm(5, 5);
*/



//------
/*
numTwo = numTwo || 2;
*/

/*
// Функции-колбэки
function calcSumm(numOne, numTwo, more, less) {
	let numSumm = numOne + numTwo;

	if (numSumm > 3) {
		more();
	} else {
		less();
	}
}

function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSumm(1, 1, showMoreMessage, showLessMessage);
*/

//===========================================================

/*
// Возврат результата
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	// Возврат
	return numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(`Сумма: ${funcRezult}`);
*/

//------
/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	if (numSumm >= 3) {
		// Возврат
		return numSumm;
	} else {
		return 'Сумма меньше 3';
	}
	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(funcRezult);
*/

//------
/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	return
	numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(funcRezult);
*/
//------
/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	if (numSumm >= 3) {
		// Возврат
		return;
		// Дальше код не выполняется
	}
}
calcSumm(5, 5)
*/
//===========================================================
// Рекурсия
/*
function getSumm(numOne, numTwo) {
	let numSumm = calcSumm(numOne, numTwo);

	console.log(numSumm);
}
function calcSumm(numOne, numTwo) {
	return numOne + numTwo;

}
getSumm(5, 5);
*/

//------
/*
function calcSumm(numOne, numTwo) {
	let result = 1;
	// умножаем result на numOne numTwo раз в цикле
	for (let i = 0; i < numTwo; i++) {
		result *= numOne;
	}
	return result;
}
console.log(calcSumm(2, 3));
*/

//------
/*
function calcSumm(numOne, numTwo) {
	if (numTwo === 1) {
		return numOne;
	} else {
		return numOne * calcSumm(numOne, numTwo - 1);
	}
}
console.log(calcSumm(2, 3));
*/

//========================================================================================================================================================
/*
let showMessage = function () {
	console.log('Привет!');
};

showMessage();
*/
//-----
/*
function getSumm() {
	let summ = 1 + 2;
	console.log(summ);
};

let someVar = getSumm;

someVar();
getSumm();

*/
//-----
/*
//Объявление функции (Function Declaration)
function getSumm() {
	let summ = 1 + 2;
	console.log(summ);
};
getSumm();

// Функциональное выражение (Function Expression)
let showMessage = function () {
	console.log('Привет!');
};
showMessage();
*/

//-----
/*
'use strict'
if (2 > 1) {
	function getSumm() {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm();
*/
/*
let getSumm;

if (2 > 1) {
	getSumm = function () {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm();
*/
//===========================================================
//Функции стрелки(arrow functions)
/*
// Функциональное выражение (Function Expression)
let имя переменной = function (параметр, ...параметр) {
	return выражение;
};

// Cтрелочная функция (arrow function)
let имя переменной = (параметр, ...параметр) => выражение
*/
//-----

// Однострочная стрелочная функция
/*
let getMessage = (text, name) => text + ', ' + name + '!';
console.log(getMessage('Привет', 'Вася'));


// Многострочная стрелочная функция
let getMessage = (text, name) => {
	let message = text + ', ' + name + '!';
	return message;
};
console.log(getMessage('Привет', 'Вася'));
*/
//===========================================================
// Планирование setTimeout и setInterval
/*
Что бы реализовать планирование существуют два метода:
1.	setTimeout позволяет вызвать функцию один раз
	через определённый интервал времени
2.	setInterval позволяет вызывать функцию регулярно,
	повторяя вызов через определённый интервал времени.
*/
/*
setTimeout(функция или код, задержка, параметр, ...параметр);
setInterval(функция или код, задержка, параметр, ...параметр);
*/
/*
function showMessage(text, name) {
	console.log(`${text}, ${name}!`);
	setTimeout(showMessage, 500, text, name);
}
//setInterval(showMessage, 500, 'Привет', 'Вася');
setTimeout(showMessage, 500, 'Привет', 'Вася');
*/
//---
/*
let result = 0;
function showNumber(num) {
	result += num;
	console.log(result);
	if (result === 5) {
		clearInterval(timeId);
	}
}
let timeId = setInterval(showNumber, 1000, 1);
*/
//---
/*
setTimeout(function () {
	console.log('Привет!');
}, 1000);

setTimeout(() => {
	console.log('Привет!');
}, 1000);
*/

//----
/*
function showMessageOne() {
	console.log("А я первый!");
}
function showMessageTwo() {
	console.log("А я второй(");
}

setTimeout(showMessageTwo, 0);

showMessageOne();

*/
//===========================================================
/*
// Применение функций

// Функция соединения строк
function createMassage(text, name) {
	return `${text}, ${name}!`;
}
// Функция вывода в консоль
function showMassage(message) {
	console.log(message);
}
// Объединяющая функция, вызывает обе функции
function initMessage(text, name) {
	showMassage(createMassage(text, name));
}

initMessage('Привет', 'Фрилансер');

*/
//========================================================================================================================================================
//========================================================================================================================================================
