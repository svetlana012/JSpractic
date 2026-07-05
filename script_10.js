"use strict"

// ЗАДАЧА 1: Базовый класс
// 1. Создай класс Person
// 2. Добавь в него constructor(name, age)
// 3. Сохрани name и age в this
// 4. Создай метод sayHello(), который выводит "Привет, меня зовут <name>"
// 5. Создай экземпляр и вызови метод
console.log("РЕШЕНИЕ К ЗАДАНИЮ 1:")

class Person {

    #salary = 50_000;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Привет, меня зовут ${this.name}`);
    }

    get salary() {
        return this.#salary;
    }

    set salary(value) {
        if (value < 0) {
            console.log("Зарплата не может быть отрицательной");
            return;
        }
        this.#salary = Number(value).toFixed(1);
    }

    introduce() {
        console.log("Я человек.");
    }
}

const person = new Person("Анна", 25);
person.sayHello();

// ЗАДАЧА 2: Наследование + super
// 1. Создай класс Student, который наследуется от Person
// 2. Класс Student, помимо name, age должен принимать еще один параметр - group.
// 3. Добавь метод getInfo(), выводящий "<name>, <age> лет, группа <group>"
// 4. Создай экземпляр Student и вызови getInfo()
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 2:")

class Student extends Person {
    constructor(name, age, group) {
        super(name, age);
        this.group = group;
    }

    getInfo() {
        console.log(`${this.name}, ${this.age} лет, группа ${this.group}`);
    }

    isAdult() {
        if (this.age >= 18) {
            return true;
        }
        return false;
    }

    introduce() {
        console.log(`Я студент ${this.name}.`);
    }
}
const student = new Student("Иван", 20, "313");
student.getInfo();

// ЗАДАЧА 3: Геттеры и сеттеры
// 1. Измени класс Person:
//    - добавь приватное поле #salary (можешь задать любое число)
//    - добавь геттер salary, который возвращает зарплату
//    - добавь сеттер salary, который:
//        - не дает ставить отрицательные числа
//        - делает salary числом с плавающей точкой, до десятых. Например: 
//obj.salary = 33;
//console.log(obj.salary) // 33.0
// Если число уже с плавающей точкой, то его нужно округлить, до десятых по правилам математики.
// 2. Проверь работу: выведи зарплату, измени её, выведи ещё раз
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 3:")

const person2 = new Person("Мария", 30);
console.log(person2.salary);
person2.salary = 60_000.78;
console.log(person2.salary);

// ЗАДАЧА 4: Методы класса
// 1. В класс Student добавь метод isAdult()
//    - возвращает true, если age >= 18
// 2. Создай студента и проверь метод
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 4:")

const student2 = new Student("Андрей", 18, "414");
console.log(student2.isAdult());

// ЗАДАЧА 5: Статические методы
// 1. Создай класс MathUtils
// 2. Добавь в него статический метод sum(a, b)
// 3. Вызови MathUtils.sum(4, 7)
// 4. Выведи результат
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 5:")

class MathUtils {
    static sum(a,b) {
        return a + b;
    }
}

console.log(MathUtils.sum(4, 7));

// ЗАДАЧА 6: Наследование + переопределение метода
// 1. В Person создай метод introduce() → "Я человек."
// 2. В Student переопредели introduce() → "Я студент <name>."
// 3. Создай одного Person и одного Student, вызови их introduce()
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 6:")

const person3 = new Person("Иван", 30);
const student3 = new Student("Мария", 20, "313");

person3.introduce();
student3.introduce();

// ЗАДАЧА 7: Класс с методами, использующими геттеры и сеттеры
// 1. Создай класс Rectangle
// 2. Поля width и height задай через constructor
// 3. Создай геттер area, который возвращает площадь
// 4. Создай сеттер width, который не принимает отрицательные значения
// 5. Создай экземпляр и проверь работу
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 7:")

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get area() {
        return this._width * this._height;
    }
    set width(value) {
        if (value < 0) {
            console.log("Ширина не может быть отрицательной");
            return;
        }
        this._width = value;
    }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area);
rectangle.width = 7;
console.log(rectangle.area);

// ЗАДАЧА 8: Мини-проект "Каталог товаров"
// 1. Создай класс Product с полями title, price
// 2. Добавь метод getInfo() → "<title>: <price>₽"
// 3. Создай класс SaleProduct, наследующий Product
// 4. Добавь поле discount (%)
// 5. Добавь метод getFinalPrice(), уменьшающий price на discount%
// 6. Создай товар и товар со скидкой, выведи их цену и финальную цену
console.log("\n\nРЕШЕНИЕ К ЗАДАНИЮ 8:")

class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    getInfo() {
        console.log(`${this.title}: ${this.price}₽`);
    }
}
 class SaleProduct extends Product {
    constructor(title, price, discount) {
        super(title, price);
        this.discount = discount;
    }

    getFinalPrice() {
        return this.price - (this.price * this.discount / 100);
    }
}

const product = new Product("Телефон", 20_000);
product.getInfo();

const saleProduct = new SaleProduct("Планшет", 15_000, 10);
saleProduct.getInfo();
console.log(`Финальная цена: ${saleProduct.getFinalPrice()}₽`);
