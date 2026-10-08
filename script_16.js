"use strict";

/* 
Задача `: Теперь, нужно доработать существующий код и реализовать функциональность сохранения списка дел и его состояний в localStorage. 
          Чтобы при перезагрузке страницы, состояние списка не изменилось.
Задача 2: Реализовать сортировку списка задач по их готовности. 
          То есть мы должны уметь по щелчку кнопки сделать так, чтобы выполненные задачи оказались вверху или внизу. 
          То есть должно быть три состояния:
    1. Все в перемешку, состояние по умолчанию
    2. Состояние когда список отсортирован, сначала идут все невыполненные задачи и в конце все выполненные.
    3. Состояние, когда список отсортирован, сначала идут все выполненные, потом не выполненные.
*/

class TodoApp {
  todos = [];
  sortState = "default";

  constructor() {
    this.input = document.getElementById("todo-input");
    this.addButton = document.getElementById("add-btn");
    this.list = document.getElementById("todo-list");
    this.sortButton = document.getElementById("sort-btn");

    if (!this.input || !this.addButton || !this.list || !this.sortButton) {
      console.error("Ошибка: не найдены элементы на странице!");
      return;
    }

    this.addButton.addEventListener("click", () => this.addTask());

    this.sortButton.addEventListener("click", () => this.changeSortState());

    this.input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.addTask();
      }
    });

    this.loadTodos();
  }

  addTask() {
    const taskText = this.input.value.trim();

    if (!taskText) {
      return;
    }

    const task = {
      id: crypto.randomUUID(),
      message: taskText,
      isCompleted: false,
    };

    this.todos.push(task);

    this.input.value = "";

    this.renderTodos(this.todos);
    this.saveTodos();
  }

  toggleTask(id) {
    this.todos = this.todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
    );

    this.renderTodos(this.todos);
    this.saveTodos();
  }

  deleteTask(id) {
    this.todos = this.todos.filter((item) => item.id !== id);

    this.renderTodos(this.todos);
    this.saveTodos();
  }

  renderTodos(todos = this.todos) {
    this.list.innerHTML = "";

    todos.forEach((item) => {
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = item.isCompleted;
      checkbox.className = "js-task-checkbox";

      checkbox.addEventListener("change", (event) => {
        event.stopPropagation();
        this.toggleTask(item.id);
      });

      const taskText = document.createElement("div");
      taskText.textContent = item.message;

      if (item.isCompleted) {
        taskText.classList.add("js-done");
      }

      taskText.addEventListener("click", () => this.toggleTask(item.id));

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Удалить";
      deleteBtn.className = "js-delete-btn";

      deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.deleteTask(item.id);
      });

      li.appendChild(checkbox);
      li.appendChild(taskText);
      li.appendChild(deleteBtn);

      this.list.appendChild(li);
    });
  }

  saveTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  loadTodos() {
    let savedTodos = null;

    try {
      savedTodos = JSON.parse(localStorage.getItem("todos"));
    } catch (error) {
      console.log("Ошибка JSON:", error);
    }

    if (savedTodos != null) {
      this.todos = savedTodos;
    }

    this.renderTodos();
  }

  changeSortState() {
    if (this.sortState === "default") {
      this.sortState = "ascending";
      this.sortTodos();
      return;
    }

    if (this.sortState === "ascending") {
      this.sortState = "descending";
      this.sortTodos();
      return;
    }

    if (this.sortState === "descending") {
      this.sortState = "default";
      this.sortTodos();
      return;
    }
  }

  sortTodos() {
    if (this.sortState === "default") {
      this.renderTodos(this.todos);
    }

    if (this.sortState === "ascending") {
      const sortedTodos = [...this.todos].sort((a, b) => {
        if (a.isCompleted === false && b.isCompleted === true) {
          return -1;
        }

        if (a.isCompleted === true && b.isCompleted === false) {
          return 1;
        }

        return 0;
      });

      this.renderTodos(sortedTodos);
    }

    if (this.sortState === "descending") {
      const sortedTodos = [...this.todos].sort((a, b) => {
        if (a.isCompleted === true && b.isCompleted === false) {
          return -1;
        }

        if (a.isCompleted === false && b.isCompleted === true) {
          return 1;
        }

        return 0;
      });

      this.renderTodos(sortedTodos);
    }
  }
}

const todo = new TodoApp();
