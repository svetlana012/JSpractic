"use strict"

// ЗАДАЧА 1: Базовый try/catch
// 1. Создай код, который пытается обратиться к несуществующей переменной
// 2. Перехвати ошибку через try/catch
// 3. В catch выведи: "Произошла ошибка"
// 4. После всего выведи "После try/catch"
// console.log(...) в каждом шаге
console.log("РЕШЕНИЕ К ЗАДАНИЮ 1:")


try {
    console.log("Начало");
    console.log(unknownVariable);
} catch (error) {
    console.log("Произошла ошибка");
} finally {
    console.log("После try/catch");
}

// ЗАДАЧА 2: finally
// 1. Создай try/catch/finally
// 2. В try просто выведи "Начало"
// 3. В catch ничего не делай (пусть он не срабатывает)
// 4. В finally выведи "Всегда выполняется"
// Проверь что finally отработал
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 2:");

try {
    console.log("Начало");
} catch (error) {
    console.log("Ошибка обработана");
} finally {
    console.log("Всегда выполняется");
}

// ЗАДАЧА 3: throw — выброс своей ошибки
// 1. Создай функцию checkAge(age)
// 2. Если age < 18 — выброси ошибку через throw "Несовершеннолетним нельзя"
// 3. Иначе выведи "Доступ разрешён"
// 4. Вызови checkAge в try/catch, обработай ошибку
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 3:");

function checkAge(age) {
    if (age < 18) {
        throw new Error("Несовершеннолетним нельзя");
    }
    console.log("Доступ разрешён");
}

try {
    checkAge(15);
} catch (error) {
    console.log(error.message);
}

// ЗАДАЧА 4: создание объекта ошибки
// 1. Внутри try создай и выброси ошибку через:
//      throw new Error("Что-то пошло не так");
// 2. В catch выведи error.message
// 3. После этого выведи "Продолжаем работу"
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 4:");

try {
    throw new Error ("Что-то пошло не так");
}
catch (error) {
    console.log(error.message);
}
console.log("Продолжаем работу");

// ЗАДАЧА 5: finally при ошибке
// 1. Создай try/catch/finally
// 2. В try выброси ошибку
// 3. В catch выведи "Ошибка обработана"
// 4. В finally выведи "Очистка ресурсов"
// 5. Убедись, что finally выполняется даже при ошибке
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 5:");

try {
    throw new Error("Ошибка в try");
}
catch (error) {
    console.log("Ошибка обработана");
}
finally {
    console.log("Очистка ресурсов")
}

// ЗАДАЧА 6: Перехват ошибки в функции
// 1. Создай функцию деления a на b, divide(a, b)
// 2. Если b === 0 — выброси ошибку "Деление на ноль"
// 3. Иначе верни результат
// 4. Вызови divide в try/catch и выведи ошибку
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 6:");

function divide(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль");
    }
    return a / b;
}
try {
    console.log(divide(10, 0));
}
catch (error) {
    console.log(error.message);
}

// ЗАДАЧА 7: Проверка типа ошибки
// 1. Сделай JSON.parse("НЕ JSON")
// Обработай состояния успеха и ошибки при парсинге JSON.
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 7:");

try {
    JSON.parse("НЕ JSON");
    if (typeof JSON.parse("НЕ JSON") === "object") {
        console.log("Парсинг успешен");
    }
}
catch (error) {    
    console.log("Ошибка синтаксиса JSON");    
}
finally {
    console.log("Парсинг завершён");
}

// ЗАДАЧА 8: Мини-проект "Валидатор строки"
// 1. Создай функцию validateString(str)
// 2. Если передано не строка — выброси ошибку "Ожидается строка"
// 3. Если строка пустая — выброси ошибку "Строка пустая"
// 4. Иначе верни str.toUpperCase()
// 5. Вызови функцию несколько раз в try/catch с разными значениями
// 6. Выведи результаты
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 8:");

function validateString(str) {
    if (typeof str !== "string") {
        throw new Error("Ожидается строка");
    }
    if (str.trim() === "") {
        throw new Error("Строка пустая");
    }
    return str.toUpperCase();
}
try {
    console.log(validateString("hello"));
    console.log(validateString(""));
    console.log(validateString(123));
}
catch (error) {
    console.log(error.message);
}

