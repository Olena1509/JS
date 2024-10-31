//1.Напишіть 5 прикладів анонімної функції

//1
const add = function (a, b) {
    return a + b;
};
console.log(add(3, 5));
//2
const square = function (x) {
    return x ** 2;
};
console.log(square(6));

//3
const isEven = function (x) {
    return x % 2 === 0;
};
console.log(isEven(6));
console.log(isEven(7));
//4
const isPositive = function (x) {
    return x > 0;
};
console.log(isPositive(5));
console.log(isPositive(-3));
//5
const cube = function (x) {
    return x ** 3;
};
console.log(cube(3));

//Напишіть 5 прикладів самовикликаючої функції

//1
(function () {
    console.log("Hello, world!");
})();
//2
(function (x, y) {
    console.log("Сума:", x + y);
})(5, 10);
//3
const counter = (function () {
    let count = 0;
    return function () {
        return ++count;
    };
})();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
//4
(function (num) {
    console.log(Math.sqrt(num));
})(16);
//5
(function (x, y) {
    console.log(x * y);
})(4, 5);

//Повторіть колбек функцію bubbleSort з лекції 
function bubbleSort(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            const compareRes = callback(arr[j], arr[j + 1])
            if (compareRes) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

let myArray = [-1, 22, 5, -4, 10, 7, 44, 42, -6, 0];

function FuncLeft(a, b) {
    return a > b
}

function FuncRight(a, b) {
    return a < b
}

const arrLeft = bubbleSort(myArray, FuncLeft);


console.log('від меншого до більшого\n', arrLeft);

// Калькурятор.
//Створіть функцію calc(num1, num2, action), яка приймає 2 числа з prompt
//та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)
//Результат повернути (return) і вивести

//Зробіть калькулятор застосовуючи підхід Function in function (1-ий приклад Function in function в лекції)
function calc(num1, num2, action) {
    function add() { return num1 + num2 };
    function min() { return num1 - num2 };
    function mul() { return num1 * num2 };
    function dil() { return num1 / num2 };

    switch (action) {
        case '+': return add();
        case '-': return min();
        case '*': return mul();
        case '/': return dil();
    }
}

const num1 = +prompt('Введіть 1 число');
const num2 = +prompt('Введіть 2 число');
const action = prompt('Оберіть дію(+,-,*,/)');
console.log(calc(num1, num2, action));

//Зробіть калькулятор застосовуючи підхід Function in function (2-ий приклад Function in function в лекції)

function add1() { return num3 + num4 };
function min1() { return num3 - num4 };
function mul1() { return num3 * num4 };
function dil1() { return num3 / num4 };

function calc2(num3, num4, action2) {

    switch (action2) {
        case '+': return add1();
        case '-': return min1();
        case '*': return mul1();
        case '/': return dil1();
    }
}

const num3 = +prompt('Введіть 1 число');
const num4 = +prompt('Введіть 2 число');
const action2 = prompt('Оберіть дію(+,-,*,/)');
console.log(calc2(num3, num4, action2));

//Зробіть калькулятор використовуючи функцію зворотнього виклику (callback function), 
function calculator(a, b, callback) {
    return callback(a, b);
}

function add3(a, b) {
    return a+ b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(calculator(3,6,mult));







