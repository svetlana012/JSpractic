"use strict"


/* ВАЖНОЕ ПРИМЕЧАНИЕ: DOM API - ЭТО ИНСТРУМЕНТ ДЛЯ РАБОТЫ С DOM ДЕРЕВОМ. 
Это значит, что в местах, где явно не указано создать DOM элемент через JS, это нужно сделать в HTML, 
потому что это правильный подход (с точки зрения оптимизации и нагрузки). Например в последнем задании, 
можно всю верстку через JS сделать, но этого не требуется, через JS добавляем только задачи. 
Верстку делаем в HTML и по необходимости/по заданию через JS. 
Например в первом задании явно указано, что работа идет полностью через JS. */

/*
   ЗАДАЧА 1: Создание элементов через JS
   1. Создай <div> и добавь ему класс "card"
   2. Внутрь div добавь текст: "Это динамически созданный блок"
   3. Добавь этот div в body
*/
//РЕШЕНИЕ К ЗАДАНИЮ 1

/* const newCard = document.createElement("div");
newCard.classList.add('card');
newCard.textContent = 'Это динамически созданный блок';
document.body.appendChild(newCard); */

/* 
   ЗАДАЧА 2: Изменение стилей элемента
   1. Найди созданный .card
   2. Задай ему стили:
        - padding: 20px
        - background: #f0f0f0
        - border-radius: 10px
        - margin-bottom: 20px*/

//РЕШЕНИЕ К ЗАДАНИЮ 2

/* const card = document.querySelector('.card');
card.style.padding = '20px';
card.style.background = '#f0f0f0';
card.style.borderRadius = '10px';
card.style.marginBottom = '20px'; */

/* 
   ЗАДАЧА 3: Работа с атрибутами
   3. Создай <img>
   4. Задай src любому изображению (может быть любой URL)
   5. Задай alt = "Картинка"
   6. Добавь картинку под card
*/

//РЕШЕНИЕ К ЗАДАНИЮ 3

/* const newImg = document.createElement("img");
newImg.src = 'https://via.placeholder.com/150';
newImg.alt = 'Картинка';
document.body.appendChild(newImg); */

/*
   ЗАДАЧА 4: Добавление нескольких элементов из массива
   1. Создай массив строк: ["Пункт 1", "Пункт 2", "Пункт 3"]
   2. Создай <ul>
   3. Для каждого элемента массива создай <li> и добавь текст
   4. Добавь ul в body
*/
//РЕШЕНИЕ К ЗАДАНИЮ 4

/* const newItem = ["Пункт 1", "Пункт 2", "Пункт 3"];
const newUl = document.createElement("ul");
newItem.forEach(item => {
    const newLi = document.createElement("li");
    newLi.textContent = item;
    newUl.appendChild(newLi);
});
document.body.appendChild(newUl); */

/* 
   ЗАДАЧА 5: Навигация по DOM
   1. Найди <ul> в html разметке
   2. Выведи в консоль:
        - первый li (без жёсткой привязки к конкретному элементу. 
          То есть если я добавлю новый li в начало списка, должен отображаться он)
        - последний li
        - всех детей ul одной строчкой
*/
//РЕШЕНИЕ К ЗАДАНИЮ 5

/* const ul = document.querySelector('ul');
const firstLi = ul.firstElementChild;
console.log('Первый li:', firstLi);
const lastLi = ul.lastElementChild;
console.log('Последний li:', lastLi);
const allLi = ul.children;
console.log('Все дети ul:', allLi); */


/* 
   ЗАДАЧА 6: Обработчики событий
   1. Добавь кнопке (создай заранее <button> "Нажми меня") обработчик click
   2. При клике меняй цвет фона card, созданного ранее, на рандомный цвет
*/

//РЕШЕНИЕ К ЗАДАНИЮ 6

/* const buttonElement = document.getElementById('changeColorBtn');
const colors = {
    0: "#FF0000",  
    1: "#00FF00",  
    2: "#0000FF",  
    3: "#FFFF00",  
    4: "#800080",  
    5: "#FFA500", 
    6: "#FFC0CB",  
    7: "#00FFFF",  
    8: "#008080",  
    9: "#FF4500" 
};
buttonElement.addEventListener('click', () => {
    const randomNumber = Math.trunc(Math.random() * 10); 
    const randomColor = colors[randomNumber]; 
    card.style.background = randomColor;             
}); */

/* 
   ЗАДАЧА 7: Удаление элементов
   1. Добавь каждому li кнопку "Удалить" (создавай при добавлении)
   2. При клике на "Удалить" — удалить соответствующий li
*/

//РЕШЕНИЕ К ЗАДАНИЮ 7

/* const liElement = document.querySelectorAll('li');
liElement.forEach(li => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить'; 
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        li.remove();
    });
}); */

/*
   ЗАДАЧА 8: dataset
   1. Каждому li добавь data-id с уникальным номером
   2. Выведи data-id при клике на li в консоль
*/

//РЕШЕНИЕ К ЗАДАНИЮ 8
/* console.log("\nРЕШЕНИЕ К ЗАДАНИЮ 8: нажмите на любой li, чтобы увидеть его data-id в консоли");

const liElements = document.querySelectorAll('li');
liElements.forEach((li, index) => {
    li.dataset.id = index + 1;
    li.addEventListener('click', () => {
        console.log('data-id:', li.dataset.id);
    })
}); */

/*
   ЗАДАЧА 9: Создание модального окна (простая версия)
   1. Реализуй модальное окно с помощью JS. Верстка должна быть в html. На js только управление видимостью.
   2. Как оно выглядит можно посмотреть в интернете, выбрать понравившуюся реализацию и постараться реализовать 
      функционал открытия и закрытия модального окна. Без ИИ и без копипаста с интернета.
*/

//РЕШЕНИЕ К ЗАДАНИЮ 9

/* const openBtn = document.getElementById('open-btn');
const modal = document.getElementById('my-modal');


openBtn.addEventListener('click', () => {
    modal.classList.add('open');
});

document.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('.js-close-modal');
    if (closeBtn && modal.classList.contains('open')) {
        modal.classList.remove('open');
    }
}); */

/*
   ЗАДАЧА 10: Прокрутка и координаты
   1. Создай блок 3000px высотой
   2. Повесь обработчик scroll на окно
   3. При прокрутке выводи количество пикселей, которые проскроллил пользователь
*/

//РЕШЕНИЕ К ЗАДАНИЮ 10
/* console.log("\nРЕШЕНИЕ К ЗАДАНИЮ 10:");

const block = document.createElement('div');
block.style.height = '3000px';
block.style.background = 'gray';
document.body.appendChild(block);

window.addEventListener('scroll', () => {
    console.log('Количество пикселей:', window.scrollY);
}); */

/*
   ЗАДАЧА 11: Работа с классами через classList
   1. Создай блоку .card кнопку "Скрыть"
   2. При клике скрывай card (add hidden)
   3. При повторном клике — показывай (toggle hidden)
*/
//РЕШЕНИЕ К ЗАДАНИЮ 11

/* const myCard = document.querySelector('.card');
const btn = document.createElement('button');

btn.textContent = 'Скрыть';

card.after(btn); 

btn.addEventListener('click', () => {
    myCard.classList.toggle('hidden');

    if (myCard.classList.contains('hidden')) {
        btn.textContent = 'Показать';
    } else {
        btn.textContent = 'Скрыть';
    }
}); */


/*
   ЗАДАЧА 12: Финальное мини-приложение "Список дел". Реализовать через CLASS!
   Создай UI:
     - input
     - button "Добавить"
     - список ul > li
  
   Функционал:
     1. Добавление задач
     2. Удаление задач
     3. Отмечать задачу выполненной (клик по li → добавляется класс "done")
        
   Требования:
     1. Приятная адаптивная верстка
*/

//РЕШЕНИЕ К ЗАДАНИЮ 12


class TodoApp {
    todos = [];


    constructor() {
        this.input = document.getElementById('todo-input');
        this.addButton = document.getElementById('add-btn');
        this.list = document.getElementById('todo-list');

        if (!this.input || !this.addButton || !this.list) {
            console.error('Ошибка: не найдены элементы на странице!');
            return;
        }

        this.addButton.addEventListener('click', () => this.addTask());
        this.input.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                this.addTask();
            }
        });
    }

    addTask() {
        const taskText = this.input.value.trim();
        if (!taskText) {
            return;
        }

        const task = {
            id: crypto.randomUUID(),
            message: taskText,
            isCompleted: false
        };

        this.todos.push(task);
        this.input.value = '';
        this.renderTodos();
    }

    toggleTask(id) {
        this.todos = this.todos.map(item =>
            item.id === id
                ? { ...item, isCompleted: !item.isCompleted }
                : item
        );

        this.renderTodos();
    }

    deleteTask(id) {
        this.todos = this.todos.filter(item => item.id !== id);
        this.renderTodos();
    }

    renderTodos() {
        this.list.innerHTML = '';

        this.todos.forEach(item => {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.isCompleted;
            checkbox.className = 'js-task-checkbox';
            checkbox.addEventListener('change', event => {
                event.stopPropagation();
                this.toggleTask(item.id);
            });

            const taskText = document.createElement('div');
            taskText.textContent = item.message;
            if (item.isCompleted) {
                taskText.classList.add('js-done');
            }
            taskText.addEventListener('click', () => this.toggleTask(item.id));

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Удалить';
            deleteBtn.className = 'js-delete-btn';
            deleteBtn.addEventListener('click', event => {
                event.stopPropagation();
                this.deleteTask(item.id);
            });

            li.appendChild(checkbox);
            li.appendChild(taskText);
            li.appendChild(deleteBtn);
            this.list.appendChild(li);
        });
    }
}

const todo = new TodoApp();