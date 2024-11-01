//* 1-8 завдання повинно бути виконане через цикл forEach.

//1. Напишіть цикл, який виводить всі парні числа від 20 до 32.

let arr1 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

arr1.forEach(function (num) {
    if (num % 2 === 0) {
        console.log(num);
    }
})

//2. Створіть масив зі списком:
//вашого улюбленого фрукту,вашого улюбленого кольору,ім'я,рандомного числа,
//вашого віку. Виведіть цей проітерований масив на консоль і визначте його тип даних.


let arr2 = ['banan', 'pink', 'Elena', 33, 43];

arr2.forEach(function (el) {
    console.log(el, typeof (el));

})

//3. Напишіть цикл який виводить всі непарні числа від 17 до 39.

let arr3 = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

arr3.forEach(function (num) {
    if (num % 2 !== 0) {
        console.log(num);
    }
})

//4. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи
let arr4 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

arr4.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
})

//5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи

arr4.forEach(function (el) {
    if (el % 2 !== 0) {
        console.log(el);
    }
})

//6. Даний масив . Виведіть суму всіх  елементів масиву.

let arr5 = [1, 2, 4, 2, 3, 55, 66, 777, 12];

let sum = 0;

arr5.forEach(function (el) {
    sum += el;
})
console.log(sum);

//7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

let arr6 = [1, 2, 4, 2, 3, 5, 6, 7, 1];

let multi = 1;

arr5.forEach(function (el) {
    multi *= el;
})
console.log(multi);

//8 Створіть prompt в якому потрібно проітерувати число з 0. 
//Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
//Якщо це числа 100 і більше, завершити ітерацію.


let enterNum = +prompt("Введіть число");
let arrNum = []
for (let y = 0; y <= enterNum; y++) {
    arrNum[y] = y
}

arrNum.forEach(el => {
    if (el >= 100) {
        return
    }
    if (el >= 5 && el <= 10) {
        return
    };
    console.log(el);
});

//* Використовуємо Math

//9. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до меншого числа і повертає значення.

function roundDown(value) {
    return Math.floor(value);
}
console.log(roundDown(1.34));
console.log(roundDown(55.43));

//10. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до більшого числа і повертає значення.
function roundUp(value) {
    return Math.ceil(value);
}
console.log(roundUp(1.34));
console.log(roundUp(55.43));

//11. Створіть функцію яка генерує рандомне число (випадкове) від 0 до 1000 і повертає його.

function generateRandomNum() {
    return Math.ceil(Math.random() * 1000);
}
console.log(generateRandomNum());

//12. Створіть функцію яка приймає 2 числа та виодить степіть перше число основне, друге сама степіть.

function powerNum(num1, num2) {
    let res = Math.pow(num1, num2);
    return res
}

console.log(powerNum(5, 3));

//13. Створіть функцію яка приймає число, виводить з нього корінь, заокруглює його і повертає.
function roundSquare(value) {
    return Math.round(Math.sqrt(value));
}

console.log(roundSquare(15));
console.log(roundSquare(8));

//* Використовувати методи масивів

//14. Дано масив [1, 5, true], додати в кінець масиву 'Hello'

let arr14 = [1, 5, true];

arr14.push('Hello');
console.log(arr14);

//15. Дано масив [1, 5, true], додати в початок масиву 'HelloArray'

let arr15 = [1, 5, true];

arr15.unshift('HelloArray');
console.log(arr15);

//16. Дано масив [1, 5, true], видалити останній елемент з масиву

let arr16 = [1, 5, true];

arr16.pop();
console.log(arr16);

//17. Дано масив [1, 5, true], видалити перший елемент з масиву

let arr17 = [1, 5, true];

arr17.shift('HelloArray');
console.log(arr17);

//18. Дано масив [5, true, 'hello', false, null, 5] вирізати *в новий масив* з 1 по 5 індекс

let arr18 = [5, true, 'hello', false, null, 5];

let newArr18 = arr18.slice(1, 6);
console.log(arr18);
console.log(newArr18);

//19. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс дані

let arr19 = [5, true, 'hello', false, null, 5];

arr19.splice(1, 5);
console.log(arr19);

//20. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс та вставити 10, 100, 111, 222

let arr20 = [5, true, 'hello', false, null, 5];

arr20.splice(1, 5, 10, 100, 111, 222);
console.log(arr20);

//21. Створені масиви під час виконанняцього завдання об'єднайте в рядок, а потім назад приведіть рядок в масив.
let allArr = [arr14, arr15, arr16, arr17, arr18, arr19]
let strAllArray = allArr.join()
console.log(strAllArray);
let newAllArray = strAllArray.split()
console.log(newAllArray);



