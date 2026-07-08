"use strict"

// ЗАДАЧА 1: Создание простого промиса
// 1. Создай промис, который через 1 секунду resolve-ит строку "Готово!"
// 2. Обработай его и выведи результат

//РЕШЕНИЕ К ЗАДАНИЮ 1

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Готово!")
    }, 1000);
});

promise
    .then((result) => {
        console.log(result);
    });

// ЗАДАЧА 2: Промис с ошибкой
// 1. Создай промис, который через 3 секунды падает с ошибкой (ОШИБКА!)
// 2. Обработай его и выведи сообщение об ошибке

// РЕШЕНИЕ К ЗАДАНИЮ 2

const promiseWithError = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("ОШИБКА!");
    }, 3000);
});

promiseWithError
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// ЗАДАЧА 3: Цепочки промисов
// 1. Создай промис, который возвращает число 5
// 2. Дальше нужно умножить результат промиса на 10 и снова обернуть это в промис (в одну строчку! Никаких new Promise()))
// 3. Далее повтори то же самое, только к полученному числу прибавь 2 и выведи результат

//РЕШЕНИЕ К ЗАДАНИЮ 3

const promise2 = new Promise((resolve) => {
    resolve(5);
});
const result = promise2
    .then((result) => {
        return result * 10;
    })
    .then((result) => {
        return result + 2;
    })
    .then((result) => {
        console.log(result);
    });

// ЗАДАЧА 4: async/await базовый
// 1. Создай функцию delay(ms), которая возвращает промис, 
//    resolve-ящийся через ms миллисекунд
// 2. Создай async функцию run()
// 3. Внутри run подожди 1 секунду с помощью функции delay и потом выведи "Прошло N секунд"
// 4. Вызови run()

//РЕШЕНИЕ К ЗАДАНИЮ 4


function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
async function run() {
    await delay(1000);
    console.log("Прошло 1 секунда");
}
run();

// ЗАДАЧА 5: try/catch в async/await
// 1. Создай функцию getError(), которая возвращает промис с reject("Ошибка!")
// 2. Создай async функцию test()
// 3. Внутри функции test() вызови await getError() и посмотри на результат. Если будет ошибка, обработай ее

//РЕШЕНИЕ К ЗАДАНИЮ 5

function getError() {
    return new Promise((resolve, reject) => {
        reject("Ошибка!");
    });
}
async function test() {
    try {
        await getError()
    } catch (error) {
        console.log(error);
    }
}
test();

// ЗАДАЧА 6: Знания async/await
// 1. Создай async функцию f(), которая возвращает число 42
// 2. Почему если обратиться к f(), то у нее можно вызвать .then()?

//РЕШЕНИЕ К ЗАДАНИЮ 6

async function f() {
    return 42;
}
f().then((result) => {
    console.log("Потому что, async функция возвращает promise");
});


// ЗАДАЧА 7: Мини-проект "Имитация запроса"
// 1. Создай функцию fakeFetch(url), которая:
//      - если url === "/success", то через 1с resolve {status: 200, data: "ОК"}
//      - иначе через 1с reject({status: 404, message: "Не найдено"})
// 2. Создай функцию request(url), которая использует наш fakeFetch
// 3. Используй try/catch
// 4. Выведи либо успешный результат, либо ошибку
// 5. Проверь работу с "/success" и "/error"

//РЕШЕНИЕ К ЗАДАНИЮ 7

function fakeFetch(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "/success") {
                resolve({ status: 200, data: "ОК" });
            } else {
                reject({ status: 404, message: "Не найдено" });
            }
        }, 1000);
    });
}
async function request(url) {
    try {
        const response = await fakeFetch(url);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

request("https://www.twitch.tv/9impulse");
//request("/success");
//request("/error");

// ЗАДАЧА 8: Event Loop
// Объясни, почему ошибка не ловится?
try {
  setTimeout(() => { throw new Error("Boom") }, 0);// Ошибка не ловится, потому что setTimeout выполняется асинхронно, 
  // и ошибка выбрасывается в стек вызовов, который не связан с этим блоком. 
  } catch(e) {
  console.log("Caught!", e);
}
// И расскажи про подходы, как можно такие ошибки ловить?
// Надо, чтобы ошибка выбрасывалась в том же стеке вызовов, что и try/catch. Для этого можно:
//1. Обернуть try/catch внутрь setTimeoutе.
//2. Обернуть setTimeout в промис.

// ЗАДАЧА 9: Предсказать порядок вывода в консоль, без подсмотра в консоль. И объяснить результат:
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

console.log(4);
// 1 - выполнится сразу
// 4 - выполнится сразу
// 3 - (Microtask) выполнится после синхронного кода, потому что промисы имеют более высокий приоритет, чем setTimeout
// 2 - (Macrotask Queue) выполнится последним, потому что setTimeout имеет низкий приоритет и будет выполнен после всех синхронных операций и промисов

// ЗАДАЧА 10: Напиши функцию, которая принимает СИНХРОННУЮ операцию, но выполняет ее всегда асинхронно. 
// То есть:
addToQueue(() => console.log("A")); // вторым
console.log("B"); // оно должно быть первым

//РЕШЕНИЕ К ЗАДАНИЮ 10

function addToQueue(callback) {
    Promise
    .resolve()
    .then(callback);
}

// ЗАДАЧА 11: Что выведется и почему?
setTimeout(() => console.log(1));
setTimeout(() => console.log(2), 10);
setTimeout(() => console.log(3), 0);

console.log(4);

//РЕШЕНИЕ К ЗАДАНИЮ 11

//4 - выполнится сразу
//1 - задержка 0 мс
//3 - задержка 0 мс, но будет выполнен после 1, потому что setTimeout с одинаковой задержкой выполняются в порядке их вызова
//2 - задержка 10 мс, выполнится последним, потому что имеет наибольшую задержку