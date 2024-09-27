//Выполните задания и прикрепите ссылку на js файл, опубликованный на gitHub/сodepen
//Задание: Работа с функциями в JavaScript

//Задание 1: Определение функций (Function Declaration)
//Напишите функцию greet , которая принимает имя пользователя и выводит сообщение в
//формате: "Привет, [имя]!"

greet("Иван");
function greet(name) {
  console.log("Привет, " + name + "!");
}

//Задание 2: Function Expression
//Создайте функцию multiply , которая принимает два числа и возвращает их произведение.
//Используйте Function Expression.
// Пример вызова функции:
//let result = multiply(3, 4);

 function multiply(a, b) { return a * b; }
 let result = multiply(3, 4);
 console.log(result);

//Задание 3: Анонимные функции
//Создайте анонимную функцию, которая выводит в консоль "Анонимная функция вызвана!" и
//немедленно вызовите её.
//   const greet1 = function(name) {
//   console.log("Анонимная функция вызвана!1"); это один из вариантов
//   };
//    greet1();
 var ananim = function() {
    console.log("Анонимная функция вызвана!");
    };
    ananim();


//Задание 4: Самовызывающаяся функция (IIFE)
//Создайте самовызывающуюся функцию, которая выводит в консоль "IIFE выполнена".
// Пример вызова IIFE:
// ( Вставьте код здесь )();
// самовызыющаяся функция
 (function(){
    console.log("IIFE выполнена");
 }());


//Задание 5: Вложенные функции
//Создайте функцию outer , которая внутри содержит функцию inner . Функция inner
//должна возвращать строку "Внутренняя функция". Функция outer должна вызывать функцию
//inner и возвращать её результат.
// Пример вызова функции:
//let message = outer();

function outer() {
	return function inner () {
		return 'Внутренняя функция';
	};
}
let result1 = outer();
console.log( result1() ); 

//Задание 6: Привязка функции к контексту (bind)
//Создайте объект person с полем name . Добавьте функцию sayName , которая выводит имя
//объекта. Привяжите функцию к объекту с помощью bind .
// Пример вызова:
let person = {
    name: "Андрей"
  };
  
  function sayName() {
    alert(this.name);
  }
//   person.sayName();
  let sayNameperson = sayName.bind(person);
 sayNameperson();


//Задание 7: Замыкания
//Создайте функцию counter , которая возвращает другую функцию. Эта внутренняя функция
//должна увеличивать счетчик на 1 при каждом вызове и выводить текущее значение.
// Пример использования:
//let count = counter();
//count(); // 1
//count(); // 2
function makeCounter() {
    var currentCount = 1;
  
    function counter() {
      return currentCount++;
    }
  
    return counter;
  }
  
  var counter = makeCounter();
  console.log(counter());
  counter()
  counter()
  counter()
  counter()
  counter()
  counter()
  counter()
  counter()
  console.log(counter());

//Задание 8: Передача функции в качестве аргумента
//Создайте функцию execute , которая принимает функцию и два числа в качестве
//аргументов. Выполните переданную функцию с этими числами.
// Пример использования:
//execute(multiply, 2, 5);

// function execute(name) {
    // return function (multiply2) {
    //  }
    //  executemultiply2 (2, 5);

    // console.log(executemultiply2);

