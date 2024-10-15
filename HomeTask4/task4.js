// first task
let a = 'str';
a = Boolean(a);
console.log(a, typeof (a));

let b = 32;
b = Boolean(b);
console.log(b, typeof (b));

let c = 'birthday';
c = Number(c);
console.log(c, typeof (c));

let d = null;
d = Boolean(d);
console.log(d, typeof (d));

let e = undefined;
e = Boolean(e);
console.log(e, typeof (e));

//task 2

let person = {
    fname: 'Svetlana',
    lname: 'Kovalenko',
    age: 43,
    isWife: true,
    husband: {
        fname: 'Sergiy',
        lname: 'Kovalenko',
        age: 45,
        car: {
            model: 'audi',
            year: 2020,
            color: 'white',
        },
        cat: {
            name: 'Sem',
            age: 5,
            kind: 'scotish',
        }
    }

}
console.log(person.husband.age, person.husband.car.color, person.husband.cat.kind)


//task3

let myArr = [5,['one','two','three'],'str',[[33,44,55],[11,22,66],[34,57,12]],'home']
console.log(myArr[1][2])
console.log(myArr[3][2][1])
console.log(myArr[3][0][2])

//task4
for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//task5
let myArr2= ['Banan','green',43]
console.log (myArr2)
console.log (typeof(myArr2))

//task6
let number1 = prompt("Введіть перше число:");
let number2 = prompt("Введіть друге число:");

if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else {
    console.log("Числа рівні.");
}

//task7
for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//task8

let array1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0) {
        console.log(array1[i]);
    }
}

//task9
const array2 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];


for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 !== 0) {
        console.log(array2[i]);
    }
}

//task10
const arrSum = [1, 2, 4, 2, 3, 55, 66, 777, 12];
let sum = 0;

for (let i = 0; i < arrSum.length; i++) {
    sum += arrSum[i];
}
console.log(sum);

//task11

const arrMulti = [1, 2, 4, 2, 3, 5, 6, 7, 1];

let multiplication = 1;

for (let i = 0; i < arrMulti.length; i++) {
    multiplication *= arrMulti[i];
}
console.log(multiplication);
