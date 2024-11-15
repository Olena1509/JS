const maxNum = Math.max(10, 20, 30, 40);
console.log(maxNum); 

const minNum = Math.min(10, 20, 30, 40);
console.log(minNum); 

const rounded = Math.round(4.6);
console.log(rounded);

const ceilNum = Math.ceil(4.3);
console.log(ceilNum);

const floorNum = Math.floor(4.8);
console.log(floorNum);

const randomNum = Math.random();
console.log(randomNum);

const sqrtNum = Math.sqrt(16);
console.log(sqrtNum);

const result = Math.pow(2, 3);
console.log(result);

let str = 'Hello world,hello js!'

const upperText = str.toUpperCase();
console.log(upperText); 

const lowerText = str.toLowerCase();
console.log(lowerText);

const isFound = str.includes("world");
console.log(isFound);

const replaced = str.replace("world", "Ukraine");
console.log(replaced); 

let array = [1, 5, true, 7, 'hello', 5, false, 22, null, 1, 32, 'iiii', 5, 54, null, 1];

let array1 = array.find(element => element > 10);
console.log(array1);

let array2 = array.findIndex(element => element === null);
console.log(array2);

let array3 = array.indexOf('hello');
console.log(array3);

let array4 = array.lastIndexOf(1);
console.log(array4);

let array5 = ['hello', 'iiii', 'apple', 'banana', 'null'];
array5.sort();
console.log(array5);

array5.reverse();
console.log(array5);

let array8 = array.some(item => typeof item === 'string');
console.log(array8);

let array9 = array.every(item => typeof item === 'string');
console.log(array9);

let array10 = array.includes(5);
console.log(array10);

let arra1 = [1, 2, 3];
let arra2 = [4, 5, 6];
let arra3 = [7, 8, 9];

let array13 = arra1.concat(arra2, arra3);
console.log(array13);

let array14 = array13.entries();
for (let entry of array14) {
    console.log(entry); 
}


let array11 = [1, 2, [3, 4], 5, [6, [7, 8]]];
let array12 = array11.flat(2);
console.log(array12);

let array15 = array.toString();
console.log(array15);





const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);

const arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2); 

const doubled = [1, 2, 3].map(num => num * 2);
console.log(doubled);

const filtered = [1, 2, 3, 4].filter(num => num > 2);
console.log(filtered); 

const obj1 = { a: 1, b: 2 };
console.log(Object.keys(obj1));

const obj2 = { a: 1, b: 2 };
console.log(Object.values(obj2));

const obj3 = { a: 1, b: 2 };
console.log(Object.entries(obj3));

const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target);

const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;
console.log(obj);

