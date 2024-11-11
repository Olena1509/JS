//Даний масив: [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20 11, [11, [true]]. Застосувати наступні методи:
//reverse, flat, includes, join, map, reduce

let array = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];
// reverse

array.reverse();
console.log(array);

//flat
let array1 = array.flat(2);
console.log(array1);

//includes Перевірка наявності числа 15

let array2 = array.includes(5);
console.log(array2);

//join 

let array3 = array1.join('_');
console.log(array3);

//map
let array4 = array1.map((el, ind, arr) => {
    if (el % 2 === 0) { return 0 } else { return el }
});
console.log(array4);

//reduce
let array5 = array1.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(array5);


//Даний рядок: 'Hello world and my dear friend ...' Застосувати наступні методи:
//split, trim, toLocaleUpperCase, toLocaleLowerCase, charAt, charCodeAt, includes,
//concat, search, startsWith, endsWith, indexOf, lastIndexOf, replace


let str = '  Hello world and my dear friend and Hello ...  ';

//split
console.log(str.split(' '));

//trim
console.log(str.trim());

//toLocaleUpperCase
console.log(str.toLocaleUpperCase());

//toLocaleLowerCase
console.log(str.toLocaleLowerCase());

//charAt
console.log(str.charAt(6));

//charCodeAt
console.log(str.charCodeAt(6));

//includes
console.log(str.includes('and'));

//concat
console.log(str.concat('-you will be happy'));

//search
console.log(str.search('dear'));

//startsWith
console.log(str.startsWith('dear'));

//endsWith
console.log(str.endsWith('Hello'));

//indexOf
console.log(str.indexOf('and'));

//lastindexOf
console.log(str.lastIndexOf('Hello'));

//replace
console.log(str.replace('Hello', 'Morgen'));

// Застосувати інші методи які були використані в лекції (методи стрічок та методи об'єктів)

//padStart
console.log(str.padStart(100, '_'));

//padEnd
console.log(str.padEnd(100, '_'));

//repeat
console.log(str.repeat(3));


const user = {
    name: "John",
    age: 30,
    profession: "Developer"
};
// Object.values()
console.log(Object.values(user));

//Object.keys()
console.log(Object.keys(user));

//Object.entries()
console.log(Object.entries(user));

//Object.freeze()
Object.freeze(user);
user.age = 20;
user.name = 'Alice';
console.log(user);

//Object.seal()

Object.seal(user);

const person = {
    name: "Alice",
    age: 25
};

console.log(person);

person.age = 40;
console.log(person.age);

delete person.name;
console.log(person.name);

//Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const obj = Object.assign(target, source);
console.log(obj);




