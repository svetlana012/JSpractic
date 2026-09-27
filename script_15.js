"use strict";

// ЗАДАНИЕ 1, fetch.
// Напиши функцию, которая принимает url и делает fetch запрос на этот url.
// При вызове этой функции, мы должны получить результат через then.
// makeFetch(url).then(result = console.log(result))
// Само собой нужно сделать обработку ошибок на случай, если что-то пойдет не так.

function makeFetch(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  });
}

makeFetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((result) => console.log(result))
  .catch((err) => console.error("Ошибка:", err.message));

// ЗАДАНИЕ 2. Подгрузка данных.
/*
1. Сверстай кнопку "Получить данные"
2. Реализуй класс, который в одном методе будет получать данные с https://jsonplaceholder.typicode.com/posts и 
   сохранять их во внутренюю приватную переменную #posts.
3. Далее нужно написать метод, который будет принимать класс, по которому можно будет найти кнопку. 
   То есть код должен быть универсален и я могу подставить туда абсолютно любой класс кнопки и код должен работать. 
   После нахождения этой кнопки, нужно повесить на него обработчик события по клику. По клику мы вызываем метод из пункта 2. 
   Получается при клике на кнопку "Получить данные" мы получаем данные с сервера.
4. Следующим пунктом, нужно реализовать метод, который проверяет, есть ли у нас данные, пустые ли они? 
   Если данные есть и не пустые, то отображаем их в виде карточек постов в body.
 */

class Posts {
  #posts = [];

  getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")    
      .then((response) => response.json())
      .then((data) => {
        this.#posts = data

        this.showPosts();
      })

      .catch((error) => {
      console.log(`Ошибка: ${error}`);
    })
  }

  addButton(buttonClass) {    
    const button = document.querySelector(`.${buttonClass}`)
    button.addEventListener('click', () => {
      this.getPosts();
    })
  }

  showPosts() {
    if (this.#posts.length > 0) {
      this.#posts.forEach((post) => {
        const card = document.createElement("div")
        card.classList.add("js-card")

        card.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `

        document.body.append(card)
      })
    }
  }
}

const posts = new Posts();
posts.addButton("js-get-posts");
