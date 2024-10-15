//task1
for (let i = 20; i <= 32; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

const arr1 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
for (let num of arr1) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
for (let i in arr1) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
}

let start=20;
while (start <= 32) {
    if (start % 2 === 0) {
        console.log(start);
    }
    start++;
}

let a = 20;
do {
    if (a % 2 === 0) {
        console.log(a);
    }
    a++;
} while (a <= 32);


//task2

const favorite=['Banan','pink','Elena',777,43];


for (let i = 0; i < favorite.length; i++) {
    console.log(favorite[i], typeof favorite[i]);
}

for (const elem of favorite) {
    console.log(elem, typeof elem);
}

for (const elem in favorite) {
    console.log(favorite[elem],typeof favorite[elem]);
}

let b = 0;
while (b < favorite.length) {
    console.log(favorite[b],typeof favorite[b]);
    b++;
}

let j = 0;
do {
    console.log(favorite[j],typeof favorite[j]);
    j++;
} while (j < favorite.length);

//task3
for (let i = 17; i <= 39; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

const arr2 = [17,18,19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,33,34,35,36,37,38,39];
for (let num of arr2) {
    if (num % 2 !== 0) {
        console.log(num);
    }
}
for (let i in arr2) {
    if (arr2[i] % 2 !== 0) {
        console.log(arr2[i]);
    }
}

let c=17;
while (c <= 39) {
    if (c % 2 !== 0) {
        console.log(c);
    }
    c++;
}

let e = 17;
do {
    if (e % 2 !== 0) {
        console.log(e);
    }
    e++;
} while (e <= 39);

//task4

const arr3 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
        console.log(arr3[i]);
    }
}

for (const elem of arr3) {
    if (elem % 2 === 0) {
        console.log(elem);
    }
}

for (const elem in arr3) {
    if (arr3[elem] % 2 === 0) {
        console.log(arr3[elem]);
    }
}

let f = 0;
while (f < arr3.length) {
    if (arr3[f] % 2 === 0) {
        console.log(arr3[f]);
    }
    f++;
}

let g = 0;
do {
    if (arr3[g] % 2 === 0) {
        console.log(arr3[g]);
    }
    g++;
} while (g < arr3.length);

//task5

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 !== 0) {
        console.log(arr3[i]);
    }
}

for (const elem of arr3) {
    if (elem % 2 !== 0) {
        console.log(elem);
    }
}

for (const elem in arr3) {
    if (arr3[elem] % 2 !== 0) {
        console.log(arr3[elem]);
    }
}

let h = 0;
while (h < arr3.length) {
    if (arr3[h] % 2 !== 0) {
        console.log(arr3[h]);
    }
    h++;
}

let k = 0;
do {
    if (arr3[k] % 2 !== 0) {
        console.log(arr3[k]);
    }
    k++;
} while (k < arr3.length);

//task6
const arr6 = [1, 2, 4, 2, 3, 55, 66, 777, 12];

let sumFor = 0;
for (let i = 0; i < arr6.length; i++) {
    sumFor += arr6[i];
}
console.log(sumFor);

let sumForOf = 0;
for (const elem of arr6) {
    sumForOf += elem;
}
console.log(sumForOf);

let sumForIn = 0;
for (const elem in arr6) {
    sumForIn += arr6[elem];
}
console.log( sumForIn);

let sumWhile = 0;
let m = 0;
while (m < arr6.length) {
    sumWhile += arr6[m];
    m++;
}
console.log(sumWhile);

let sumDoWhile = 0;
let n = 0;
do {
    sumDoWhile += arr6[n];
    n++;
} while (n < arr6.length);
console.log(sumDoWhile);

//task7
const arr7 = [1, 2, 4, 2, 3, 5, 6, 7, 1];

let productFor = 1;
for (let i = 0; i < arr7.length; i++) {
    productFor *= arr7[i];
}
console.log(productFor);

let productForOf = 1;
for (const elem of arr7) {
    productForOf *= elem;
}
console.log(productForOf);

let productForIn = 1;
for (const elem in arr7) {
    productForIn *= arr7[elem];
}
console.log(productForIn);

let productWhile = 1;
let o = 0;
while (o < arr7.length) {
    productWhile *= arr7[o];
    o++;
}
console.log(productWhile);

let productDoWhile = 1;
let q = 0;
do {
    productDoWhile *= arr7[q];
    q++;
} while (q < arr7.length);
console.log(productDoWhile);

//task8
let userNumber = prompt("Введіть число:");

for (let i = 0; i <= userNumber; i++) {
    if (i >= 5 && i <= 10) {
        continue;
    }
    if (i >= 100) {
        break;
    }
    console.log(i);
}

let arr8 = []
for (const num of arr8) {
    if (num >= 5 && num <= 10) {
        continue;
    }
    if (num >= 100) {
        break;
    }
    console.log(num);
}

let arr9=[];
for (const index in arr9) {
    const num = arr9[index];
    if (num >= 5 && num <= 10) {
        continue;
    }
    if (num >= 100) {
        break;
    }
    console.log(num);
}

let s = 0;
while (s <= userNumber) {
    if (s >= 5 && s <= 10) {
        s++;
        continue;
    }
    if (s >= 100) {
        break;
    }
    console.log(s);
    s++;
}


let t = 0;
do {
    if (t >= 5 && t <= 10) {
        t++;
        continue;
    }
    if (t >= 100) {
        break;
    }
    console.log(t);
    t++;
} while (t <= userNumber);

