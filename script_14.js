"use strict"

/*
   ЗАДАЧА 1: Базовый addEventListener
   1. Создай кнопку "Нажми меня"
   2. Добавь обработчик click
   3. При клике выводи в консоль "Кнопка нажата!"
*/

//console.log("РЕШЕНИЕ К ЗАДАНИЮ 1:");

/* const button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log("Кнопка нажата!");
}); */

/*
   ЗАДАЧА 2: Несколько обработчиков на один элемент
   1. Добавь к кнопке два обработчика click:
        - Первый выводит "Первый обработчик"
        - Второй — "Второй обработчик"
*/

//console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 2:");

/* const button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log("Первый обработчик");
});
button.addEventListener("click", () => {
    console.log("Второй обработчик");
});
 */
/*
   ЗАДАЧА 3: removeEventListener
   1. Создай функцию handleClick
   2. Добавь её как обработчик click к кнопке
   3. После 3 кликов на эту кнопку, сделай removeEventListener
*/
//console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 3:");

/* function handleClick() {
    console.log("Кнопка нажата!");
}
const button = document.getElementById("btn");

let clickCount = 0;
button.addEventListener("click", () => {
   clickCount++;

   if (clickCount >= 3) {
         button.removeEventListener("click", handleClick);
         console.log("Обработчик удален после 3 кликов");
      }
}); */


/* 
   ЗАДАЧА 4: Всплытие
   1. Создай вложенные div: outer → middle → inner
   2. Добавь каждому обработчик click
   3. Сделайт так, чтобы при клике на inner срабатывал обработчик inner, родители срабатывать не должны
*/
//console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 4:");

/* const outerDiv = document.getElementById("outer");
const middleDiv = document.getElementById("middle");
const innerDiv = document.getElementById("inner");

outerDiv.addEventListener("click", () => {
    console.log("Клик на outer");
});

middleDiv.addEventListener("click", () => {
    console.log("Клик на middle");
});
innerDiv.addEventListener("click", (event) => {
    console.log("Клик на inner");
    event.stopPropagation(); 
}); */

/*
   ЗАДАЧА 5: Делегирование событий (список). Повторение.
   1. Создай ul со списком li (3–5 элементов)
   2. Добавь один обработчик click на ul
   3. Если клик по li — выводи текст li
*/
//console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 5:");

/* const ul = document.getElementById("todo-list");
ul.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`Клик на li: ${event.target.textContent}`);
    }
}); */

/* 
   ЗАДАЧА 6: Комбинации клавиш
   Если нажаты:
    - Ctrl + S → вывести alert "Сохранено"
    - Ctrl + Shift + X → вывести "Комбо!"
*/

//console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 6:");

/* document.addEventListener("keydown", (event) => {

   const ctrlPressed = event.ctrlKey || event.metaKey;
   const shiftPressed = event.shiftKey;

   if (ctrlPressed && event.key === 's') {
      event.preventDefault();
      alert('Сохранено');
   }

   if (ctrlPressed && shiftPressed && (event.key === 'X' || event.key === 'x')) {
      event.preventDefault();
      alert('Комбо!');
   }
}); */

/* 
   ЗАДАЧА 7: Управление объектом с клавиатуры
   1. Создай квадрат 50×50
   2. На стрелки ↑ ↓ ← → двигая квадрат на 10px
*/
//console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 7:");

/* const square = document.getElementById("square");
const step = 10;
let currentTop = parseInt(square.style.top) || 100;
let currentLeft = parseInt(square.style.left) || 100;

document.addEventListener("keydown", (event) => {
   event.preventDefault();

   switch (event.key) {
      case "ArrowUp":
         currentTop -= step;
         break;
      case "ArrowDown":
         currentTop += step;
         break;
      case "ArrowLeft":
         currentLeft -= step;
         break;
      case "ArrowRight":
         currentLeft += step;
         break;
   }
   square.style.top = currentTop + "px";
   square.style.left = currentLeft + "px";
}); */

/* 
   ЗАДАЧА 8: Мини-проект "Калькулятор"
   1. Реализуй верстку калькулятора с основными операциями 
      (ИНТЕРФЕЙС ДОЛЖЕН БЫТЬ АДАПТИВНЫМ И КРАСИВЫМ. Подобие яндекс калькулятора)
   2. Реализуй весь функционал через class Calculator() {}
   3. Обработай нажатия клавиш клавиатуры, 
      чтобы по нажатию enter можно было подтвердить операцию и выполнить ее
*/
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 8:");



class Calculator {
   constructor() {
      this.digits = document.querySelectorAll(".js-btn-digit")
      this.operations = document.querySelectorAll(".js-btn-operator")
      this.clearButton = document.querySelector(".js-btn-clear")

      this.display = document.querySelector(".js-display")
      this.currentValue = "0";
      this.previousValue = null;
      this.operation = null;

      this.init()
   }

   init() {
      this.bindEvents();
      this.updateDisplay();

   }

   bindEvents() {
      this.digits.forEach(button => {
         button.addEventListener('click', () => {
            const value = button.dataset.value;
            this.inputDigit(value);
            this.updateDisplay();
         })
      })

      this.operations.forEach(button => {
         button.addEventListener('click', () => {
            const value = button.dataset.value;
            console.log(`Операция: ${value}`);
         })
      })

      this.clearButton.addEventListener('click', () => {
         this.clear();
      })
   }

   updateDisplay() {
      this.display.value = this.currentValue;
   }

   inputDigit(digit) {
      if (this.currentValue === "0" && digit !== "0") {
         this.currentValue = digit;
         return;
      }
      this.currentValue += digit;
   }
}

clear() {
   this.currentValue = "0";
   this.previousValue = null;
   this.operation = null;
   this.updateDisplay();
}
};
new Calculator();
console.log("калькулятор подключен");