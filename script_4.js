'use strike'
// ЗАДАЧА 1: Базовый синтаксис функции
// 1. Создай функцию sayHello, которая принимает имя (name) и выводит "Привет, name!"
// 2. Если имя не передано — используй значение по умолчанию "Гость"
// 3. Вызови функцию 3 раза с разными аргументами

//РЕШЕНИЕ К ЗАДАЧЕ 1//
/* function sayHello (name = "Гость") {
    
    console.log(`Привет, ${name}!`)    
}
sayHello("Anna")
sayHello("Bob")
sayHello() */

// ЗАДАЧА 2: Параметры, аргументы и return
// 1. Создай функцию sum(a, b), которая возвращает сумму двух чисел
// 2. Выведи результат её работы в console.log
// 3. Сделай вторую функцию multiply(a, b), где b имеет значение по умолчанию

//РЕШЕНИЕ К ЗАДАЧЕ 2//
function sum(a, b) {
    return a + b  
}

function multiply(a, b = 5) {
    return a * b
}
console.log(sum(5, 3));
console.log(multiply(5));  

// ЗАДАЧА 3: Область видимости
// 1. Создай переменную outside = "Я снаружи"
// 2. Создай функцию testScope(), внутри которой объяви переменную inside = "Я внутри"
// 3. Попробуй вывести inside снаружи функции (ожидаем ошибку)
// 4. Выведи outside внутри функции. Объясни результат

//РЕШЕНИЕ К ЗАДАЧЕ 3//
/* const outside = "Я снаружи"
function testScope() {
    const inside = "Я внутри"
    console.log(outside)
}
//console.log(inside) //не видит переменную, которая объявлена внутри функции, она ограничена
                    //областью видимости функции
testScope()   //но функция может заглядывать наружу и видеть переменную */

// ЗАДАЧА 4: Виды функций — практика
// 1. Создай function declaration
// 2. Создай function expression
// 3. Создай стрелочную функцию
// 4. Все функции должны выводить разные фразы

//РЕШЕНИЕ К ЗАДАЧЕ 4//
/* function declaration() {
    console.log(`Я function declaration`)
}

const expression = function() {
    console.log(`Я function expression`)
}

const arrow = () => {
    console.log(`Я стрелочная функция`)
}
declaration()
expression()
arrow() */

// ЗАДАЧА 5: Callback-функции
// 1. Создай функцию calc(a, b, operation), где operation — callback
// 2. Передай в неё callback для сложения, затем для умножения

//РЕШЕНИЕ К ЗАДАЧЕ 5//
/* function calc(a, b, operation) {
    operation(a, b)
}

function operation1 (a, b) {
    const sum = a + b
    console.log(`Сумма: ${sum}`)
    return sum;
}
function operation2 (a, b) {
    const mult = a * b
    console.log(`Результат умножение: ${mult}`)
    return mult;
}
calc(5, 3, operation1); 
calc(5, 3, operation2); */

// ЗАДАЧА 6: arguments — работа с неизвестным числом аргументов
// 1. Создай функцию logAll(), которая выводит ВСЕ переданные аргументы
// 2. Вызови её с разным количеством аргументов

//РЕШЕНИЕ К ЗАДАЧЕ 6//
/* function logAll() {
    console.log(arguments);
    console.log(`Аргументы: ${arguments}`); //почему он выводит Аргументы: [object Arguments], без згачений после :
}
logAll(1, 2, 3);                    
logAll("a", "b", "c", "d");         
logAll("Привет");                   
logAll();                           
logAll(10, 20, 30, 40, 50, 60);   */ 

// ЗАДАЧА 7: Замыкание — базовая практика
// 1. Создай функцию createCounter(), которая возвращает внутреннюю функцию
// 2. Внутренняя функция должна увеличивать счётчик и выводить его
// 3. Создай два независимых счётчика и протестируй

//РЕШЕНИЕ К ЗАДАЧЕ 7//
/* function createCounter() {
     let count = 0;

    return function() {
        console.log(`Счётчик: ${count}`);
        return count++;
    }
}
const counter1 = createCounter()
counter1()
counter1()
counter1() 

const counter2 = createCounter()
counter2()
counter2()
counter2()

counter1() 
counter2() */

// ЗАДАЧА 8: Замыкание — параметризация
// 1. Создай функцию makeAdder(n), которая возвращает функцию,
//    прибавляющую к числу значение n
// 2. Например: const add5 = makeAdder(5); add5(10) → 15

//РЕШЕНИЕ К ЗАДАЧЕ 8//
/* function makeAdder(n) {

    return function(x) {
        return x + n
    }
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);
const add100 = makeAdder(100);

console.log(add5(10));   
console.log(add5(3));   
console.log(add10(20));  
console.log(add100(1));  */ 

// ЗАДАЧА 9: Рекурсия — факториал
// 1. Создай функцию factorial(n), которая считает факториал рекурсивно
// 2. Вызови её для нескольких значений
// P.S. Формулу факториала можно подгуглить, только формулу, без решения в коде

//РЕШЕНИЕ К ЗАДАЧЕ 9//
/* function factorial(n) {          
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(`Факториал 1 равен: ${factorial(1)}`);   
console.log(`Факториал 2 равен: ${factorial(2)}`);   
console.log(`Факториал 5 равен: ${factorial(5)}`);   
console.log(`Факториал 10 равен: ${factorial(10)}`);  */

// ЗАДАЧА 10: Рекурсия — вывод чисел от N до 1
// 1. Создай функцию printDown(n), которая выводит числа: n, n-1, ..., 1
// 2. Используй только рекурсию

//РЕШЕНИЕ К ЗАДАЧЕ 10//

/* function printDown(n) {
    if (n === 0) {
        return 
    }    
    console.log(n)
    printDown(n - 1);
}
printDown(5)
 */