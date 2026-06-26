// ЗАДАЧА 1: Создание и базовая работа с массивами
// 1. Создай массив fruits = ["apple", "banana", "orange", "mango"]
// 2. Выведи первый и последний элемент массива
// 3. Добавь новый элемент в конец массива
// 4. Удали первый элемент массива

console.log("РЕШЕНИЕ К ЗАДАНИЮ 1:")

const fruits = ["apple", "banana", "orange", "mango"];
console.log(`Первый элемент массива: ${fruits[0]}`);
console.log(`Последний элемент массива: ${fruits[fruits.length - 1]}`);
fruits.push("grape");
console.log(`Массив после добавления нового элемента: ${fruits}`);
fruits.shift();
console.log(`Массив после удаления первого элемента: ${fruits}`);

// ЗАДАЧА 2
// 1. Создай массив numbers = [1, 2, 3, 4, 5]
// 2. С помощью forEach выведи каждый элемент умноженный на 2

console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 2:")

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num * 2);
});

// ЗАДАЧА 3
// 1. Создай массив numbers = [1, 2, 3, 4, 5]
// 2. Используй map, чтобы создать новый массив, где каждый элемент увеличен на 10
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 3:")

const numbers2 = [1, 2, 3, 4, 5];
console.log("Исходный массив: ", numbers2);
const newNumbers = numbers2.map((num) => num + 10);
console.log("Новый массив: ", newNumbers);

// ЗАДАЧА 4
// 1. Из массива numbers = [5, 10, 15, 20, 25] оставь только числа больше 15
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 4:")

const numbers3 = [5, 10, 15, 20, 25];
const filteredNumbers = numbers3.filter((num) => num > 15);
console.log("Исходный массив: ", numbers3);
console.log("Отфильтрованный массив: ", filteredNumbers);

// ЗАДАЧА 5
// 1. Пусть numbers = [2, 4, 6, 8, 10]
// 2. проверь, есть ли хотя бы одно число больше 8
// 3. проверь, все ли числа чётные
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 5:")

const numbers4 = [2, 4, 6, 8, 10];
const hasNumberGreaterThan8 = numbers4.some((num) => num > 8);
const allNumbersEven = numbers4.every((num) => num % 2 === 0);
console.log("Исходный массив: ", numbers4);
console.log("Есть ли число больше 8: ", hasNumberGreaterThan8);
console.log("Все числа чётные: ", allNumbersEven);

// ЗАДАЧА 6: reduce
// 1. Используя numbers = [1, 2, 3, 4, 5], посчитай сумму всех элементов через reduce
// 2. Посчитай произведение всех элементов через reduce
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 6:")

const numbers5 = [1, 2, 3, 4, 5];
const sum = numbers5.reduce((acc, num) => acc + num, 0);
const product = numbers5.reduce((acc, num) => acc * num, 1);
console.log("Исходный массив: ", numbers5);
console.log("Сумма всех элементов: ", sum);
console.log("Произведение всех элементов: ", product);

// ЗАДАЧА 7: includes и indexOf
// 1. Пусть fruits = ["apple", "banana", "orange"]
// 2. Проверь, содержит ли массив "banana" с помощью includes
// 3. Найди индекс элемента "orange" с помощью indexOf
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 7:")

const fruits2 = ["apple", "banana", "orange"];
const containsBanana = fruits2.includes("banana");
const indexOfOrange = fruits2.indexOf("orange");
console.log("Исходный массив: ", fruits2);
console.log("Содержит ли массив 'banana': ", containsBanana);
console.log("Индекс элемента 'orange': ", indexOfOrange);

// ЗАДАЧА 8: sort
// 1. Пусть numbers = [5, 2, 9, 1, 5, 6]
// 2. Отсортируй массив по возрастанию
// 3. Отсортируй массив по убыванию
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 8:")

const numbers6 = [5, 2, 9, 1, 5, 6];
const sortedAscending = [...numbers6].sort((a, b) => a - b);
const sortedDescending = [...numbers6].sort((a, b) => b - a);
console.log("Исходный массив: ", numbers6);
console.log("Отсортированный по возрастанию: ", sortedAscending);
console.log("Отсортированный по убыванию: ", sortedDescending);

// ЗАДАЧА 9: Комбинированная практика
// 1. Пусть numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 2. Сначала фильтруй числа больше 4
// 3. Потом умножь оставшиеся числа на 2 с помощью map
// 4. Выведи каждое число через метод цикла
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 9:")

const numbers7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filteredAndMapped = numbers7.filter((num) => num > 4).map((num) => num * 2);
console.log("Исходный массив: ", numbers7);
console.log("Отфильтрованные и умноженные числа: ", filteredAndMapped);
filteredAndMapped.forEach((num) => {
  console.log(num);
});
