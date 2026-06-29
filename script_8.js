"use strict"

// ЗАДАЧА 1: Создание и базовая работа с Map
// 1. Создай Map с ключами "name", "age", "city" и соответствующими значениями
// 2. Выведи значение ключа "name"
// 3. Добавь новую пару ключ-значение "country": "USA"
// 4. Удали ключ "age"
// 5. Проверь, есть ли ключ "city"
// 6. Выведи размер Map

console.log("РЕШЕНИЕ К ЗАДАНИЮ 1:")

const myMap = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"]
]);

console.log(myMap.get("name")); 
myMap.set("country", "USA"); 
myMap.delete("age"); 
console.log(myMap.has("city"));
console.log(myMap.size);

// ЗАДАЧА 2: Очистка Map  
// 1. Создай Map с несколькими элементами  
// 2. Выведи размер Map  
// 3. Очисти Map  
// 4. Снова выведи размер Map  
console.log("\nРЕШЕНИЕ К ЗАДАНИЮ 2:")

const anotherMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"]
]);

console.log(anotherMap.size);
anotherMap.clear();
console.log(anotherMap.size);

// ЗАДАЧА 3: Перебор Map
// 1. Создай Map с несколькими ключами и значениями
// 2. Перебери Map удобным способом и выведи ключи и значения
console.log("\nРЕШЕНИЕ К ЗАДАНИЮ 3:")

const sampleMap = new Map([
  ["fruit", "apple"],
  ["vegetable", "carrot"],
  ["drink", "water"]
]);

for (const [key, value] of sampleMap) {
  console.log(key + ": " + value);
}

// ЗАДАЧА 4: Map из массива и обратно
// 1. Создай массив пар: [["a", 1], ["b", 2], ["c", 3]]
// 2. Преобразуй его в Map
// 3. Преобразуй Map обратно в массив
console.log("\nРЕШЕНИЕ К ЗАДАНИЮ 4:");

const arrayFromMap = [
  ["a", 1],
  ["b", 2],
  ["c", 3]
];

const mapFromArray = new Map(arrayFromMap);
console.log(mapFromArray);

const arrayFromMapBack = Array.from(mapFromArray);
console.log(arrayFromMapBack);  

// ЗАДАЧА 5: Создание и базовая работа с Set
// 1. Создай Set из чисел: 1, 2, 3, 4, 5
// 2. Добавь число 3 (дубликат) и число 6
// 3. Удали число 2
// 4. Проверь, есть ли число 4
// 5. Выведи размер Set
console.log("\nРЕШЕНИЕ К ЗАДАНИЮ 5:");

const mySet = new Set([1, 2, 3, 4, 5]);
mySet.add(3); 
mySet.add(6); 
mySet.delete(2); 
console.log(mySet.has(4)); 
console.log(mySet.size); 

// ЗАДАЧА 6: Перебор Set
// 1. Выведи все элементы Set через любой цикл или метод
console.log("\nРЕШЕНИЕ К ЗАДАНИЮ 6:");

for (const value of mySet) {
  console.log(value); //выводит set из предыдущей задачи
}

// ЗАДАЧА 7: Уникальные значения из массива
// 1. Пусть есть массив numbers = [1, 2, 2, 3, 4, 4, 5]
// 2. Используя Set, создай массив уникальных чисел
console.log("\nРЕШЕНИЕ К ЗАДАНИЮ 7:");

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = Array.from(new Set(numbers));
console.log(uniqueNumbers);

// ЗАДАЧА 8: Получение всех ключей и значений Map  
// 1. Создай Map с несколькими элементами  
// 2. Получи массив всех ключей  
// 3. Получи массив всех значений  
// 4. Выведи оба массива  
console.log("\nРЕШЕНИЕ К ЗАДАНИЮ 8:");

const keysArray = Array.from(myMap.keys());
const valuesArray = Array.from(myMap.values());

console.log("Ключи:", keysArray); //выводит ключи из 1 задачи
console.log("Значения:", valuesArray); //выводит значения из 1 задачи

// ЗАДАЧА 9: Преобразование строки в Set  
// 1. Создай строку "javascript"  
// 2. Преобразуй её в Set  
// 3. Выведи получившийся Set  
// 4. Выведи его размер  
console.log("\nРЕШЕНИЕ К ЗАДАНИЮ 9:");

const str = "javascript";
const strSet = new Set(str);
console.log(strSet);
console.log(strSet.size);
