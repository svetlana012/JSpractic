'use strike'

// ЗАДАЧА 1: Создание и базовая работа с объектами
// 1. Создай объект user с полями: name, age, city
// 2. Добавь метод greet(), который выводит "Привет, меня зовут имя"
// 3. Вызови метод greet()

//РЕШЕНИЕ К ЗАДАЧЕ 1//
const user = {
    name: "Анна",
    age: 25,
    city: "Москва",

    greet() {
        console.log(`Привет, меня зовут ${user.name}`);
    }
};

user.greet()

// ЗАДАЧА 2: Перебор ключей и значений
// 1. Создай объект fruits с полями: apple: 3, banana: 5, orange: 2
// 2. Используя for...in, выведи ключи
// 3. Используя for...in, выведи значения

//РЕШЕНИЕ К ЗАДАЧЕ 2//
const fruits = {
    apple: 3,
    banana: 5,
    orange: 2,
}

console.log("Ключи (названия фруктов):");
for (const key in fruits) {
    console.log(key)
}
console.log("Значения (количество):");
for (const key in fruits) {
    console.log(fruits[key])
}

// ЗАДАЧА 3: Сравнение объектов
// 1. Создай два объекта obj1 и obj2 с одинаковыми полями и значениями
// 2. Сравни их через == и === и выведи результат
// 3. Объясни в комментарии почему так происходит

//РЕШЕНИЕ К ЗАДАЧЕ 3//
const obj1 = {
    name: "Света",
    age: 30,
}
const obj2 = {
    name: "Света",
    age: 30,
}

console.log(obj1 == obj2) //значение false, так как объекты это ссылочные типы данных и каждый занимает
console.log(obj1 === obj2)//свою часть памяти, они не будут равны

// ЗАДАЧА 4: Поверхностное копирование
// 1. Создай объект original с вложенным объектом inner = {x: 1, y: 2}
// 2. Скопируй его через Object.assign и через spread {...original}
// 3. Измени original.inner.x и посмотри, что произошло в копиях. Объясни результат

//РЕШЕНИЕ К ЗАДАЧЕ 4//
const original = {
    name: "Original",

    inner: {
        x: 1,
        y: 2
    }
}
const copyAssing = Object.assign({}, original)
const copySpread = { ...original }
original.inner.x = 5

console.log('copyAssing:', copyAssing)//результаты идентичны, копии равны
console.log('copySpread:', copySpread)//х изменится на значение 5

// ЗАДАЧА 5: Рекурсивный вывод свойств объекта

// 1. Создай объект user со свойствами:
// name: 'Alex'
// age: 25
// address: {
//   city: 'Berlin',
//   country: 'Germany'
// }
// 2. Напиши рекурсивную функцию printObject(obj),
// которая принимает объект и выводит все его свойства в консоль.
// Ожидаемый вывод:
// name: Alex
// age: 25
// city: Berlin
// country: Germany

//РЕШЕНИЕ К ЗАДАЧЕ 5//
const user2 = {
    name: 'Alex',
    age: 25,
    address: {
        city: 'Berlin',
        country: 'Germany'
    }
}

function printObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            printObject(obj[key])
        }
        else {
            console.log(key + ': ' + obj[key])
        }
    }
}
printObject(user2)

// ЗАДАЧА 6: Объединение объектов
// 1. Создай два объекта: objA = {a:1, b:2}, objB = {b:3, c:4}
// 2. Объедини их всеми известными способами 
// 3. Выведи результат в console.log

//РЕШЕНИЕ К ЗАДАЧЕ 6//
const objA = {
    a: 1,
    b: 2,
}
const objB = {
    b: 3,
    c: 4,
}
const objC = Object.assign({}, objA, objB)
console.log('Объединение Object.assign:', objC)

const objD = { ...objA, ...objB }
console.log('Объединение Spread:', objD)

// ЗАДАЧА 7: Опциональная цепочка (?.)
// 1. Создай объект user с полем profile = { email: "a@b.com" }
// 2. Попробуй обратиться к user.profile.phone.number
// 3. Выведи результат — убедись, что ошибок нет. Если есть, как исправить?

//РЕШЕНИЕ К ЗАДАЧЕ 7//
const user3 = {
    profile: {
        email: "a@b.com",
    }
}
//console.log(user3.profile.phone.number) //ошибка
console.log(user3.profile?.phone?.number) //undefined, такого свойства не существует, ошибки нет

// ЗАДАЧА 8: Деструктуризация объектов
// 1. Создай объект person = {name: "Alice", age: 25, city: "London"}
// 2. Вытяни name через деструктуризацию, остальное в rest
// 3. Выведи их в console.log

//РЕШЕНИЕ К ЗАДАЧЕ 8//
const person = {
    name: "Alice",
    age: 25,
    city: "London",
}
const { name, ...rest } = person
console.log('name: ', name)
console.log('rest: ', rest)

// ЗАДАЧА 9: Rest и Spread
// 1. Напиши функцию findMax(...nums), которая принимает любое количество чисел и возвращает максимальное.
// 2. Пример ниже:
// console.log(findMax(1, 5, 3));      // 5
// console.log(findMax(10, 2, 8, 15)); // 15
// console.log(findMax(-5, -2, -10));  // -2


//РЕШЕНИЕ К ЗАДАЧЕ 9//

function findMax(...nums) {
    
    let max = nums[0]

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] > max) {
            max = nums[i]
        }
    }
    return max;
}
console.log(findMax(1, 5, 3));      // 5
console.log(findMax(10, 2, 8, 15)); // 15
console.log(findMax(-5, -2, -10));  // -2