//1. Через функцію конструктор створити об'єкт Car з полями:
// name, model, old, price, wheels Вивести об'єкт в консоль.

function Car(name, model, old, price, wheels) {
    this.name = name;
    this.model = model;
    this.old = old;
    this.price = price;
    this.wheels = wheels;
}

let myCar = new Car("Toyota", "Corolla", 5, 15000, 4);
console.log(myCar);

//2. Через прототайп створити власні методи масивів: some, every, splice

// Реалізація some
Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

// Реалізація every
Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

// Реалізація splice
Array.prototype.mySplice = function (start, deleteCount, ...items) {
    const removed = [];
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (i >= start && removed.length < deleteCount) {
            removed.push(this[i]);
        } else {
            newArray.push(this[i]);
        }
    }

    this.length = 0;
    Array.prototype.push.apply(this, [...newArray.slice(0, start), ...items, ...newArray.slice(start)]);

    return removed;
};

let arr = [1, 2, 3, 4, 5];
console.log(arr.mySome(el => el > 3));
console.log(arr.myEvery(el => el > 0));
console.log(arr.mySplice(2, 2, 99, 100));
console.log(arr);

//3. Через функцію конструктор створити об'єкт dog з полями:
// name, model, year, cost Вивести об'єкт в консоль.


function Dog(name, model, year, cost) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.cost = cost;
}

let myDog = new Dog("Bulldog", "Pet", 2020, 500);
console.log(myDog);

//Через функцію конструктор створити об'єкт Parent, створити мінімум 3 поля,
//   та додати через прототайп поведінку для об'єкту (мінімум 2 методи).


function Parent(name, old, job) {
    this.name = name;
    this.old = old;
    this.job = job;
}

Parent.prototype.greet = function () {
    return `Hello, my name is ${this.name}`;
};

Parent.prototype.work = function () {
    return `${this.name} is working as a ${this.job}`;
};

let parent = new Parent("John", 45, "Engineer");
console.log(parent.greet());
console.log(parent.work());

//5. Створити об'єкт Son, через прототип унаслідувати поведінку від об'єкту Parent
//та додати власну поведінку (мінімум 2 методи).

function Son(name, age, job, hobby) {
    Parent.call(this, name, age, job);
    this.hobby = hobby;
}

Son.prototype = Object.create(Parent.prototype);
Son.prototype.constructor = Son;

Son.prototype.play = function () {
    return `${this.name} loves playing ${this.hobby}`;
};

Son.prototype.learn = function () {
    return `${this.name} is learning new skills`;
};

let son = new Son("Alex", 20, "Student", "football");

console.log(son.greet());
console.log(son.play());
console.log(son.learn());

//6. Створити КЛАС People із полями: name, age, isMarried, isChilds, job
//створити 3 інстанси класу People і вивести їхні поля в консоль.

class People {
    constructor(name, age, isMarried, isChilds, job) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
        this.isChilds = isChilds;
        this.job = job;
    }
}

let person1 = new People("Alice", 30, true, true, "Teacher");
let person2 = new People("Bob", 25, false, false, "Developer");
let person3 = new People("Charlie", 40, true, true, "Doctor");

console.log(person1, person2, person3);

//7. Створити КЛАС Tiger із полями: name, kind, age, speed, wight, height
//Додатково створити методи: changeName, addAge, changeSpeed, run
//Вивести поля класу в консоль та використати методи.
class Tiger {
    constructor(name, kind, age, speed, weight, height) {
        this.name = name;
        this.kind = kind;
        this.age = age;
        this.speed = speed;
        this.weight = weight;
        this.height = height;
    }

    changeName(newName) {
        this.name = newName;
    }

    addAge(years) {
        this.age += years;
    }

    changeSpeed(newSpeed) {
        this.speed = newSpeed;
    }

    run() {
        return `${this.name} is running at ${this.speed} km/h`;
    }
}


let tiger = new Tiger("Leo", "Bengal", 5, 50, 200, 90);
console.log(tiger);
tiger.changeName("Max");
tiger.addAge(2);
tiger.changeSpeed(60);
console.log(tiger.run());

//8. Перевірити всі створені об'єкти на те чи вони походять від кожного класу (чи ф-ції конструктора),
//вивести результат в консоль
console.log(myCar instanceof Car);
console.log(myDog instanceof Dog);
console.log(parent instanceof Parent);
console.log(son instanceof Parent);
console.log(person1 instanceof People);
console.log(tiger instanceof Tiger);

