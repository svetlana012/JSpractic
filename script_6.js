"use strict"

//Задание 1.
const str = " javascript is awesome ";

// Сделай следующие преобразования (по одному console.log на шаг): 
// 1. Удали пробелы с краёв 
// 2. Приведи к верхнему регистру 
// 3. Замени все вхождения "A" на "@" 
// 4. Возьми подстроку с 5-го символа до 12-го 
// 5. Повтори строку 3 раза через дефис "-" 
// 6. Добавь в начало и конец строки символы "🔥"

console.log("РЕШЕНИЕ К ЗАДАНИЮ 1:")

function inputStr (input) {
    let result = String(input ?? "")
    console.log("Исходная строка: ", result)
}
inputStr(str)

console.log("Строка без пробелов с краёв: ", str.trim());
console.log("Строка с верхним регистром: ", str.toUpperCase());
console.log("Строка с заменой 'A' на '@': ", str.replaceAll("A", "@"));
console.log("Подстрока с 5-го символа до 12-го: ", str.slice(5, 12));
console.log("Повтор строки 3 раза через дефис: ", (str + "-").repeat(3).slice(0, -1));
console.log("Добавление символа '🔥' в начало и конец: ", "🔥" + str + "🔥");


//Задание 2.
const price = 12345.789;

// Выведи по одному console.log:
// 1. Цена с двумя знаками после запятой
// 2. Цена с разделителем тысяч (например "12 345.79 ₽")
// 3. Проверь, является ли число целым
// 5. Округли до ближайшего десятого вниз и выведи как число, потом снова как строку с "₽" в конце
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 2:")

function inputPrice (input) {
    let result = Number(input ?? "")
    console.log("Исходное число: ", result)
}
inputPrice(price)

console.log("Цена с двумя знаками после запятой: ", price.toFixed(2));
console.log("Цена с разделителем тысяч: ", price.toLocaleString('ru-RU'));
console.log("Проверь, является ли число целым: ", Number.isInteger(price));
console.log("Округли до ближайшего десятого вниз: ", Math.floor(price * 10) / 10);
console.log("Строку с '₽' в конце: ", price + " " + "₽");

//Задание 3.
//function validateUsername(username) { 
// 1. Удали пробелы с краёв 
// 2. Приведи к нижнему регистру 
// 3. Если длина меньше 4 или больше 16 символов — верни false 
// 4. Если начинается не с буквы — верни false
// 5. Если содержит пробел внутри — верни false 
// 6. Если всё ок — верни true и выведи "Логин валиден: cleanedUsername" 
//}
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 3:")

function validateUsername(username) {

    let stroke = String(username ?? "")

    console.log("Исходная строка: ", stroke)
    console.log("Строка без пробелов с краёв: ", stroke.trim());
    console.log("Строка с нижним регистром: ", stroke.toLowerCase());

    if (stroke.length < 4 || stroke.length > 16) {       
        console.log("Если длина меньше 4 или больше 16 символов — верни false: ", false); 
        return false;
    }
    if (!/^[a-zA-Z]/.test(stroke)) {   
        console.log("Если начинается не с буквы — верни false: ", false);      
        return false;
    }
    if (stroke.includes(" ")) {
        console.log("Если содержит пробел внутри — верни false: ", false)
        return false;
    }
    console.log("Логин валиден: ", stroke)
    return true;
}

validateUsername("  JohnDoe123   ");  // true
validateUsername("123John");          // false (начинается не с буквы)
validateUsername("John Doe");         // false (пробел)
validateUsername("ab");               // false (слишком короткий)


//Задание 4.
const rawPhone = "  7 923 456-78-90  ";

// Сделай красивый номер +7 (923) 456-78-90
// Используй ТОЛЬКО методы строк и конкатенацию!
// Запрещено: split(), массивы, регулярные выражения

// Подсказка: убери все пробелы и дефисы, потом собирай по частям
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 4:")

console.log("Исходная строка:", rawPhone);
console.log("Строка без пробелов с краёв: ", rawPhone.trim());
console.log("После удаления пробелов внутри:", rawPhone.trim().replaceAll(" ", ""));
console.log("После удаления дефисов:", rawPhone.trim().replaceAll(" ", "").replaceAll("-", ""));

const clean = rawPhone.trim().replaceAll(" ", "").replaceAll("-", "");

console.log("Красивый номер:", `+${clean[0]} (${clean.slice(1, 4)}) ${clean.slice(4, 7)}-${clean.slice(7, 9)}-${clean.slice(9, 11)}`);

//Задача 5.
const sentence = "Я изучаю JavaScript каждый день";
// Посчитай количество слов в предложении БЕЗ split() и без массивов! 
// Подсказка: перебирай строку посимвольно и считай переходы с пробела на непробел 
// Выведи: "В предложении 6 слов"

console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 5:")
console.log("Исходная строка:", sentence);

function words(sentence) {
    let wordCount = 0;
    let isPreviousSpace = true;

    for (let i = 0; i < sentence.length; i++) {
        const isCurrentSpace = sentence[i] === ' ';

         if (isPreviousSpace && !isCurrentSpace) {
            wordCount++;
        }
        
        isPreviousSpace = isCurrentSpace;
    }
    return wordCount
}
console.log(`В предложении ${words(sentence)} слов`)

//Задание 6.
const fullName = " иванов Сергей Петрович ";

// Сделай аббревиатуру: "Иванов С. П." 
// Правила: 
// - Первая буква фамилии — заглавная, остальное строчные 
// - Инициалы от имени и отчества — заглавные с точкой 
// - Всё без массивов и split!

console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 6:")
console.log("Исходная строка:", fullName);

let name = fullName.trim(); //удаление пробелов по краям
let firstSpace = name.indexOf(' '); //поиск первой позиции пробелов //6
let secondSpace = name.indexOf(' ', firstSpace + 1); //поиск второй позиции пробелов //13
//надо изменить каждое слово отдельно
const surname = name.slice(0, firstSpace); // "иванов"
const formatterSurname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase(); //первая заглавная буква, остальные строчные

const firstName = name.slice(firstSpace + 1, secondSpace); // "Сергей"
const firstNameInitial = firstName.charAt(0).toUpperCase() + "."; // С.

const patronymic = name.slice(secondSpace + 1); // "Петрович"
const patronymicInitial = patronymic.charAt(0).toUpperCase() + "."; //П.

const result = formatterSurname + ' ' + firstNameInitial + ' ' + patronymicInitial;
console.log("Результат: ", result)