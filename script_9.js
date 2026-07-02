"use strict"

// ЗАДАЧА 1
// 1. Создай объект user с полями: name, age, city
// 2. Преобразуй его в JSON строку
// 3. Выведи результат
console.log("РЕШЕНИЕ К ЗАДАНИЮ 1:")

let user = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(JSON.stringify(user));

// ЗАДАЧА 2
// 1. Возьми JSON строку: '{"a":1,"b":2,"c":3}'
// 2. Преобразуй JSON строку обратно в объект
// 3. Выведи объект и доступ к свойству b
console.log("РЕШЕНИЕ К ЗАДАНИЮ 2:")

let jsonStr = '{"a":1,"b":2,"c":3}';
let obj = JSON.parse(jsonStr);
console.log(obj);
console.log(obj.b);

// ЗАДАЧА 3: Глубокое копирование через JSON
// 1. Создай объект original = {a:1, b:{c:2}}
// 2. Создай его глубокую копию через JSON.parse(JSON.stringify())
// 3. Измени свойство original.b.c
// 4. Убедись что копия не изменилась
console.log("РЕШЕНИЕ К ЗАДАНИЮ 3:")

let original = {a:1, b:{c:2}};
let copy = JSON.parse(JSON.stringify(original));
original = {a:1, b:{c:3}};
console.log("Оригинал:", original);
console.log("Копия:", copy);

// ЗАДАЧА 4: Массив объектов → JSON
// 1. Создай массив products = [
//      {id:1, title:"Milk"},
//      {id:2, title:"Bread"},
//      {id:3, title:"Tea"}
//    ]
// 2. Преобразуй массив в JSON строку
// 3. Выведи результат
console.log("РЕШЕНИЕ К ЗАДАНИЮ 4:")

let products = [
    {id:1, title:"Milk"},
    {id:2, title:"Bread"},
    {id:3, title:"Tea"}
];
console.log(JSON.stringify(products));

// ЗАДАЧА 5: JSON → массив объектов
// 1. Пусть есть JSON строка:
//    '[{"id":1,"score":10},{"id":2,"score":20},{"id":3,"score":30}]'
// 2. Преобразуй её в массив объектов
// 3. Выведи сумму всех score

console.log("РЕШЕНИЕ К ЗАДАНИЮ 5:")

let jsonArrayStr = '[{"id":1,"score":10},{"id":2,"score":20},{"id":3,"score":30}]';
let arrayObjects = JSON.parse(jsonArrayStr);
let totalSum = arrayObjects.reduce((sum, item) => sum + item.score, 0);
console.log("Сумма всех score:", totalSum);