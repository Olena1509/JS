//1. Через клас створити об'єкт People який всі дані отримує ззовні з полями:
//name, f_name, old, isMarried, hasPossition, children
//Вивести об'єкт в консоль.

class People {
    constructor(name, f_name, old, isMarried, hasPosition, children) {
        this.name = name; 
        this.f_name = f_name; 
        this.old = old; 
        this.isMarried = isMarried; 
        this.hasPosition = hasPosition; 
        this.children = children; 
    }
}

let inputData = {
    name: "Alice",
    f_name: "Smith",
    old: 28,
    isMarried: false,
    hasPosition: "Designer",
    children: 0
};

let person = new People(
    inputData.name,
    inputData.f_name,
    inputData.old,
    inputData.isMarried,
    inputData.hasPosition,
    inputData.children
);

console.log(person);

//Через клас shortWork створити власні методи масивів всередині класу: filter, find, includes, join, slice

class ShortWork {
    constructor(array) {
        this.array = array; 
    }

    // Реалізація методу filter
    filter(callback) {
        let result = [];
        for (let element of this.array) {
            if (callback(element)) {
                result.push(element);
            }
        }
        return result;
    }

    // Реалізація методу find
    find(callback) {
        for (let element of this.array) {
            if (callback(element)) {
                return element;
            }
        }
        return undefined;
    }

    // Реалізація методу includes
    includes(value) {
        for (let element of this.array) {
            if (element === value) {
                return true;
            }
        }
        return false;
    }

    // Реалізація методу join
    join(separator = ',') {
        let result = '';
        for (let i = 0; i < this.array.length; i++) {
            result += this.array[i];
            if (i < this.array.length - 1) {
                result += separator;
            }
        }
        return result;
    }

    // Реалізація методу slice
    slice(start = 0, end = this.array.length) {
        let result = [];
        for (let i = start; i < end && i < this.array.length; i++) {
            result.push(this.array[i]);
        }
        return result;
    }
}


let myArray = new ShortWork([1, 2, 3, 4, 5, 6]);
console.log(myArray.filter(num => num > 3)); 
console.log(myArray.find(num => num === 3)); 
console.log(myArray.includes(4)); 
console.log(myArray.join('-')); 
console.log(myArray.slice(2, 5)); 

//3. Через клас створити об'єкт Car який всі дані отримує ззовні  з полями:
//name, model, year, isNew, cost, wheels Вивести об'єкт в консоль.

class Car {
    constructor(name, model, year, isNew, cost, wheels) {
        this.name = name;       
        this.model = model;   
        this.year = year;       
        this.isNew = isNew;     
        this.cost = cost;       
        this.wheels = wheels;   
    }
}

const myCar = new Car('Tesla', 'Model S', 2023, true, 79999, 4);
console.log(myCar);

//Через клас створити об'єкт Animal який отримує дані ззвоні, створити мінімум 3 поля,
//та додати через прототайп поведінку для об'єкту (мінімум 2 методи).

class Animal {
    constructor(name, species, age) {
        this.name = name;       
        this.species = species; 
        this.age = age;         
    }
}

Animal.prototype.eat = function () {
    console.log(`${this.name} is eating.`);
};

Animal.prototype.sleep = function () {
    console.log(`${this.name} is sleeping.`);
};

const lion = new Animal('Leo', 'Lion', 5);
console.log(lion);
lion.eat();
lion.sleep();


//Створити клас Dog, через прототип унаслідувати поведінку від класу Animal
//  та додати власну поведінку (мінімум 2 методи).


class Dog extends Animal {
    constructor(name, breed, age) {
        super(name, 'Dog', age); 
        this.breed = breed;     
    }
}


Dog.prototype.bark = function () {
    console.log(`${this.name} is barking.`);
};

Dog.prototype.fetch = function () {
    console.log(`${this.name} is fetching the ball.`);
};

const dog = new Dog('Buddy', 'Golden Retriever', 3);
console.log(dog);
dog.eat();    
dog.sleep();  
dog.bark();   
dog.fetch();  

//Створити клас Poli Який в консоль буде виводити короткий опис того що таке поліморфізм.

class Poli {
    static explain() {
        console.log("Поліморфізм — це концепція об'єктно-орієнтованого програмування, яка дозволяє використовувати один інтерфейс для різних типів об'єктів. Це дає змогу створювати гнучкі та масштабовані системи.");
    }
}

Poli.explain();

//Привести приклад поліморфізму.

class BigAnimal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog2 extends BigAnimal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends BigAnimal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}


const animals = [
    new Dog2('Buddy'),
    new Cat('Whiskers'),
    new BigAnimal('Generic Animal')
];

animals.forEach(animal => animal.speak());

//Створити клас Inc Який в консоль буде виводити короткий опис того що таке інкапсуляція.
class Inc {
    static explain() {
        console.log("Інкапсуляція — це концепція об'єктно-орієнтованого програмування, яка дозволяє приховувати внутрішню реалізацію об'єкта та забезпечувати доступ до його даних лише через публічні методи. Це допомагає створювати безпечні та зрозумілі об'єкти.");
    }
}

Inc.explain();

//Створити клас калькурятор на геттерах і сеттерах з діями *, /, +, -, вираховувати степінь, факторіал, корінь
//Клас повинен містити поле date яке буде обновляти конкретну дату і час використання калькулятора.

class Calculator {
    constructor() {
        this._value = 0; 
        this.date = new Date(); 
    }


    get value() {
        return this._value;
    }


    set value(newValue) {
        if (typeof newValue === 'number') {
            this._value = newValue;
            this.updateDate();
        } else {
            throw new Error("Значення має бути числом.");
        }
    }


    updateDate() {
        this.date = new Date();
    }

    // Додавання
    add(num) {
        this._value += num;
        this.updateDate();
    }

    // Віднімання
    subtract(num) {
        this._value -= num;
        this.updateDate();
    }

    // Множення
    multiply(num) {
        this._value *= num;
        this.updateDate();
    }

    // Ділення
    divide(num) {
        if (num === 0) {
            throw new Error("Ділення на нуль неможливе.");
        }
        this._value /= num;
        this.updateDate();
    }

    // Обчислення степеня
    power(exp) {
        this._value = Math.pow(this._value, exp);
        this.updateDate();
    }

    // Обчислення факторіалу
    factorial() {
        if (this._value < 0 || !Number.isInteger(this._value)) {
            throw new Error("Факторіал можливий лише для невід'ємних цілих чисел.");
        }
        this._value = this.calculateFactorial(this._value);
        this.updateDate();
    }

    calculateFactorial(num) {
        return num === 0 ? 1 : num * this.calculateFactorial(num - 1);
    }

    // Обчислення кореня
    sqrt() {
        if (this._value < 0) {
            throw new Error("Корінь з від'ємного числа неможливий.");
        }
        this._value = Math.sqrt(this._value);
        this.updateDate();
    }
}


const calc = new Calculator();


calc.value = 5; 
calc.add(10); 
calc.multiply(2); 
calc.divide(3); 
calc.power(3); 
calc.sqrt(); 

console.log("Результат:", calc.value); 
console.log("Дата останнього використання:", calc.date);

