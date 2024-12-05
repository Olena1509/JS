//Через функцію конструктор створити об'єкт People з полями:
//name, f_name, old, isMarried, hasPossition, children
//Вивести об'єкт в консоль.

function People(name, f_name, old, isMarried, hasPossition, children) {
    this.name = name;              
    this.f_name = f_name;          
    this.old = old;                
    this.isMarried = isMarried;    
    this.hasPossition = hasPossition; 
    this.children = children;    
}

let person = new People("Sveta", "Kovalenkp", 35, true, true, 2);
console.log(person);

//Через прототайп створити власні методи масивів: filter, find, includes, join, slice
// Власний метод filter
Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// Власний метод find
Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

// Власний метод includes
Array.prototype.myIncludes = function(value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }
    return false;
};

// Власний метод join
Array.prototype.myJoin = function(separator = ',') {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        result += this[i];
        if (i < this.length - 1) {
            result += separator;
        }
    }
    return result;
};

// Власний метод slice
Array.prototype.mySlice = function(start = 0, end = this.length) {
    let result = [];
    if (start < 0) start += this.length;
    if (end < 0) end += this.length;

    start = Math.max(0, start);
    end = Math.min(this.length, end);

    for (let i = start; i < end; i++) {
        result.push(this[i]);
    }
    return result;
};

//Через функцію конструктор створити об'єкт Car з полями:
//name, model, year, isNew, cost, wheels
//Вивести об'єкт в консоль.

function Car(name, model, year, isNew, cost, wheels) {
    this.name = name;       
    this.model = model;     
    this.year = year;     
    this.isNew = isNew;   
    this.cost = cost;       
    this.wheels = wheels;   
}

let car = new Car("Toyota", "Corolla", 2023, true, 25000, 4);

console.log(car);

//Через функцію конструктор створити об'єкт Animal, створити мінімум 3 поля,
//та додати через прототайп поведінку для об'єкту (мінімум 2 методи).

function Animal(name, species, age) {
    this.name = name;       
    this.species = species; 
    this.age = age;         
}

Animal.prototype.run = function() {
    console.log(`${this.name} run `);
};

Animal.prototype.eat = function(food) {
    console.log(`${this.name} eat `);
};

let animal1 = new Animal("Bony", "Cat", 3);
let animal2 = new Animal("Marik", "Dog", 5);

animal1.run();
animal2.eat();

//Створити об'єкт Dog, через прототип унаслідувати поведінку від об'єкту Animal
//та додати власну поведінку (мінімум 2 методи).

function Dog(name,age,breed) {
    Animal.call(this,"Dog",name, age)
    this.breed = breed;                 
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; 

Dog.prototype.bark = function() {
    console.log(`${this.name} bark"`);
};

Dog.prototype.fetch = function(item) {
    console.log(`${this.name} fetch ball`);
};

let dog = new Dog("Boss", 4, "Germany");

dog.run();    
dog.eat();
dog.bark();   
dog.fetch();