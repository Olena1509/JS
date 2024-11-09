let array = [1, 5, true, 7, 'hello', 5, false, 22, null, 1, 32, 'iiii', 5, 54, null, 1];

//find Знайти перше число більше за 10

let array1 = array.find(element => element > 10);
console.log(array1);

//findIndex Знайти індекс першого значення null

let array2 = array.findIndex(element => element === null);
console.log(array2);

// indexOf Знайти індекс першого входження рядка 'hello'

let array3 = array.indexOf('hello');
console.log(array3);

// lastIndexOf Знайти індекс останнього входження числа 1

let array4 = array.lastIndexOf(1);
console.log(array4);

// sort 

let array5 = ['hello', 'iiii', 'apple', 'banana', 'null'];
array5.sort();
console.log(array5);

//reverse 
array5.reverse();
console.log(array5);

//filter Вибір чисел із масиву

let array7 = array.filter(item => typeof item === 'number');
console.log(array7);

//some Перевірка наявності рядків
let array8 = array.some(item => typeof item === 'string');
console.log(array8);

//every Перевірка рядків
let array9 = array.every(item => typeof item === 'string');
console.log(array9);

//includes  Перевірка наявності числа 5
let array10 = array.includes(5);
console.log(array10);

//flat 
let array11 = [1, 2, [3, 4], 5, [6, [7, 8]]];

let array12 = array11.flat(2);
console.log(array12);

// concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let array13 = arr1.concat(arr2, arr3);
console.log(array13);

//entries

let array14 = array13.entries();
for (let entry of array14) {
    console.log(entry); // Виведе пари [індекс, значення]
}

//tostring

let array15 = array.toString();
console.log(array15);

//map
let array16 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array17 = array16.map(num => num * 2);
console.log(array17);



