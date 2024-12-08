//1.1
//Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

let num = 55;

if (num < 0) {
    console.log("Число отрицательное.");
} else {
    console.log("Число не отрицательное.");
}

//Дана строка. Выведите в консоль длину этой строки.

let str = "Введите строку";

console.log("Длина строки:", str.length);

//Дана строка. Выведите в консоль последний символ строки.

let str1 = "строку";

console.log("последний символ строки:", str1[str1.length - 1]);

//Дано число. Проверьте, четное оно или нет.

let num1 = 6389;
if (num1 % 2 === 0) {
    console.log("Число четное .");
} else {
    console.log("Число не четное .");
}

//Даны два слова. Проверьте, что первые буквы этих слов совпадают.
let word = prompt("Введите слово:");
let word2 = prompt("Введите слово:");

if (word[0] === word2[0]) {
    console.log("первые буквы этих слов совпадают.");
} else {
    console.log("первые буквы этих слов  не совпадают.");
}

//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

let word3 = prompt("Введите слово:");
if (word3[word3.length - 1] === 'ь') {
    console.log(word3[word3.length - 2]);
} else {
    console.log(word3[word3.length - 1]);
}

//1.2
console.log('Level 1.2');
//Дано число. Выведите в консоль первую цифру этого числа.
let num4 = 7836;

console.log(num4[0]);

//Дано число. Выведите в консоль последнюю цифру этого числа.
let num5 = 7836;
console.log(num5[num5.length - 1]);

//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

let num6 = 7836;

let numSum = parseInt(num6[0]) + parseInt(num6[num6.length - 1]);

console.log(numSum);

//Дано число. Выведите количество цифр в этом числе.

let num7 = 60377;

console.log("Количество цифр в числе:", num7.toString().length);

//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
let num8 = 60377;
let num9 = 60377;

if (num8.toString[0] === num9.toString[0]) {
    console.log("совпадают");
} else {
    console.log(" не совпадают .");
}

//1.3

console.log('Level 1.3');

//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

let string2 = 'Введите';

if (string2.length > 0) {
    console.log(string2[string2.length - 2]);
}

//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
let num10 = 66;
let num11 = 14;

if (num10 % num11 === 0) {
    console.log('без остатка делится на второе');
} else {
    console.log(" не делится без остатка .");
}

//1.4
console.log('Level 1.4');

//Выведите в консоль все целые числа от 1 до 100.

for (i = 1; i <= 100; i++) {
    console.log(i);
}

//Выведите в консоль все целые числа от -100 до 0.

for (i = -100; i <= 0; i++) {
    console.log(i);
}

//Выведите в консоль все целые числа от 100 до 1.
for (i = 100; i >= 1; i--) {
    console.log(i);
}

//Выведите в консоль все четные числа из промежутка от 1 до 100.
for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//1.5
console.log('Level 1.5');

//Найдите сумму всех целых чисел от 1 до 100.
let sum = 0;

for (i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
let sum2 = 0;
for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}
console.log(sum2);

//Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
let sum3 = 0;
for (i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        sum3 += i;
    }
}
console.log(sum3);

//Даны два целых числа. Найдите остаток от деления первого числа на второе.
let num12 = 66;
let num13 = 14;

console.log(num12 % num13);

//Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

let str13 = 'Hello world!';

for (let i = 0; i < str13.length; i++) {
    console.log(str13[i]);
}

//1.6
console.log('Level 1.6');

//Дан массив с числами. Найдите сумму квадратов элементов этого массива.
let arr = [1, 2, 3, 4, 5, 6]

let sum4 = 0;
for (i = 0; i < arr.length; i++) {
    sum4 += arr[i] ** 2;
}
console.log(sum4);

//Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

let numbers = [1, 4, 9, 16, 25];
let sum5 = 0;
for (i = 0; i < numbers.length; i++) {
    sum5 += Math.sqrt(numbers[i]);
}
console.log(sum5);

//Дан массив с числами. Найдите сумму положительных элементов этого массива.

let numbers2 = [1, -4, 9, 16, 25, -33, 56, -22];
let sum6 = 0;
for (i = 0; i < numbers2.length; i++) {

    if (numbers2[i] > 0) {
        sum6 += numbers2[i];
    }
}
console.log(sum6);

//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

let numbers3 = [1, -4, 9, 16, 7, -3, 0, 6, -2];
let sum7 = 0;
for (i = 0; i < numbers3.length; i++) {

    if (numbers3[i] > 0 && numbers3[i] < 10) {
        sum7 += numbers3[i];
    }
}
console.log(sum7);

//1.7
console.log('Level 1.7');

//Дана строка: 'abcde'  Получите массив букв этой строки.

let str15 = 'abcde';

console.log([...'abcde']);

//Дано некоторое число: 12345 Получите массив цифр этого числа.

let numbers4 = 12345;
let arrayNums = numbers4.toString().split('').map(Number);
console.log(arrayNums);

//Дано некоторое число: 12345  Переверните его: 54321
let number5 = 12345;

let reversedNumber = parseInt(number5.toString().split('').reverse().join(''));

console.log(reversedNumber);

//Дано некоторое число:12345  Найдите сумму цифр этого числа.
let number6 = 12345;

let sum9 = number6.toString().split('').map(Number).reduce((sum, num) => sum + num, 0);

console.log(sum9);

//1.8
console.log('Level 1.8');

//Заполните массив целыми числами от 1 до 10.
let arr11 = [];

for (i = 1; i <= 10; i++) {
    arr11.push(i);
}
console.log(arr11);

//Заполните массив четными числами из промежутка от 1 до 100.
let arr12 = [];

for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        arr12.push(i);
    }
}
console.log(arr12);

//Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части.

let arr14 = [1.456, 2.125, 3.32, 4.1, 5.34];

let roundedNumbers = arr14.map(num => parseFloat(num.toFixed(1)));

console.log(roundedNumbers);

//1.9
console.log('Level 1.9');

//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

let urls = [
    "http://example.com",
    "https://secure.com",
    "http://openai.com",
    "ftp://fileserver.com",
    "http://github.com"
];

let filteredUrls = urls.filter(url => url.startsWith("http://"));

console.log(filteredUrls);

//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
let urls2 = [
    "http://example.html.",
    "https://secure.com",
    "http://openai.com",
    "ftp://fileserver.html.",
    "http://github.com"
];

let filteredUrls2 = urls2.filter(url => url.endsWith(".html."));

console.log(filteredUrls2);

//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
let numbers8 = [100, 200, 300, 400, 500];

let increasedNumbers = numbers8.map(num => num * 1.1);

console.log(increasedNumbers);

//1.9
console.log('Level 1.9');

//Заполните массив случайными числами из промежутка от 1 до 100.
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

let randomNumbers = Array.from({ length: 10 }, getRandomNumber);

console.log(randomNumbers);

//Дано некоторое число:12345  Выведите в консоль все его символы с конца.
let number17 = 12345;

let reversenumber17 = number17.toString().split('').reverse();

reversenumber17.forEach(char => console.log(char));

//Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
//[1, 2]
//[3, 4]
//[5, 6]

let arr19 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr19.length; i += 2) {
    console.log(arr19.slice(i, i + 2));
}

//Даны два массива:
//let arr1 = [1, 2, 3];
//let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6]
let arr21 = [1, 2, 3];
let arr22 = [4, 5, 6];

let arr23 = arr21.concat(arr22);

console.log(arr23);


//2.1
console.log('Level 2.1');

//Дана некоторая строка. Найдите позицию первого нуля в строке.
let str21 = "120305040";

let position = str21.indexOf('0');

console.log(position);

//Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

for (i = 1; i < 1000; i++) {
    let numStr = i.toString();
    if ((Number(numStr[0]) + Number(numStr[1])) === 5) {
        console.log(numStr);
    }
}

//Дан массив. Удалите из него элементы с заданным значением.
let arr25 = [1, 2, 3, 4, 5, 2, 6, 2, 7];
let valueToRemove = 2;

for (let i = 0; i < arr25.length; i++) {
    if (arr25[i] === valueToRemove) {
        arr25.splice(i, 1);
        i--;
    }
}

console.log(arr25);

//Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
//Найдите сумму первой половины элементов этого массива.
let arr26 = [1, 2, 3, 4, 5, 6];

let middleIndex = Math.floor(arr26.length / 2);
let sumFirstHalf = arr26.slice(0, middleIndex).reduce((sum, num) => sum + num, 0);

console.log(sumFirstHalf);

//2.2
console.log('Level 2.2');

//Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве
let arr27 = [1, -4, 9, 16, 7, -3, 0, 6, -2];
let negativeCount = arr27.filter(num => num < 0).length;
console.log(negativeCount);

//Дан массив с числами. Оставьте в нем только положительные числа.
let positiveArr = arr27.filter(num => num > 0);
console.log(positiveArr);

//Дана строка. Удалите предпоследний символ из этой строки.
let str27 = "Hello, World";

let delStr = str27.slice(0, -2) + str27.slice(-1);

console.log(delStr);
//Дан некоторый массив, например, вот такой:[1, 2, 3, 4, 5, 6]
//Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

let arr28 = [1, 2, 3, 4, 5, 6];

let middleIndex1 = Math.floor(arr28.length / 2);
let sumFirstHalf1 = arr26.slice(0, middleIndex1).reduce((sum, num) => sum + num, 0);

let sumLastHalf = arr26.slice(middleIndex1).reduce((sum, num) => sum + num, 0);

let result = sumFirstHalf1 / sumLastHalf;
console.log(result);

//2.3
console.log('Level 2.3');

//Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

let wordfirst = 'first';
let wordsecond = 'third';

if (wordfirst[wordfirst.length - 1] === wordsecond[0]) {
    console.log("Остання буква першого слова збігається з першою буквою другого.");
} else {
    console.log("Букви не збігаються.");
}

//Дана некоторая строка. Найдите позицию третьего нуля в строке.

let str26 = "100200300400";
let count1 = 0;

for (let i = 0; i < str26.length; i++) {
    if (str26[i] === "0") {
        count1++;
        if (count1 === 3) {
            console.log(`Позиція третього нуля: ${i}`);
            break;
        }
    }
}

// Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.

let str30 = '12,34,56';

let sum8 = str30
    .split(',')
    .map(Number)
    .reduce((acc, num) => acc + num, 0);

console.log(sum8);

//Дана дата в следующем формате: '2025-12-31'
// Преобразуйте эту дату в следующий объект: { year: '2025', month: '12',day: '31',}


let dateStr = '2025-12-31';

let [year, month, day] = dateStr.split('-');

let dateObj = {
    year: year,
    month: month,
    day: day
};
console.log(dateObj);

//2.4
console.log('Level 2.4');

//Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
let str28 = "asv200hg300dam00";

for (let i = 0; i < str28.length; i++) {
    if (!isNaN(str28[i])) {
        console.log(`Позиція першої цифри: ${i}`);
        break;
    }
}

//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

let obj = {
    name: "Olena",
    age: 43,
    city: "Zaporizhzhia"
};

let keys = Object.keys(obj);
let values = Object.values(obj);

console.log("Ключі:", keys);
console.log("Значення:", values);

//Дано число. Выведите в консоль количество четных цифр в этом числе.

let num14 = 2565788934411036;

let countnum = num14.toString().split('')
let count2 = 0;
for (i = 0; i < countnum.length; i++) {

    if (countnum[i] % 2 === 0) {
        count2++;
    }
}
console.log(count2);

//Дана некоторая строка: 'abcde'
//Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:'AbCdE'


let str14 = 'abcde';

let result1 = str14
    .split('')
    .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char)
    .join('');

console.log(result1);

//Дана некоторая строка со словами:'aaa bbb ccc'
//Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:'Aaa Bbb Ccc'

let str16 = 'aaa bbb ccc';

let result3 = str16
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

console.log(result3);

//2.5
console.log('Level 2.5');

//Дана некоторая строка, например, вот такая:'023m0df0dfg0'
//Получите массив позиций всех нулей в этой в строке.

let str17 = '023m0df0dfg0';

let zeroPositions = [];

for (let i = 0; i < str17.length; i++) {
    if (str17[i] === '0') {
        zeroPositions.push(i);
    }
}
console.log(zeroPositions);

//Дана некоторая строка:'abcdefg'
//Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:'abdeg'

let str19 = 'abcdefg';
let result4 = '';

for (let i = 0; i < str19.length; i++) {
    if ((i + 1) % 3 !== 0) {
        result4 += str19[i];
    }
}

console.log(result4);

//Дан некоторый массив, например, вот такой:[1, 2, 3, 4, 5, 6]
//Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

let arr3 = [1, 2, 3, 4, 5, 6];

let sumEvennums = 0;
let sumOddnums = 0;

for (let i = 0; i <= arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
        sumEvennums++
    }
    else sumOddnums++
}

let result5 = sumEvennums / sumOddnums;
console.log(result5);

//2.6
console.log('Level 2.6');

//Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

let str18 = 'sd6h324k0kssd56b';

let arr18 = [];

for (let i = 0; i <= str18.length; i++) {
    if (!isNaN(str18[i])) {
        arr18.push(i)
    }
}
console.log(arr18);

//Дан массив с некоторыми числами, например, вот такой:[123, 456, 789]
//Напишите код, который перевернет числа в этом массиве по следующему принципу:[321, 654, 987]

let arr15 = [123, 456, 789];

let reversedArr = arr15.map(num => {
    return num.toString().split('').reverse().join('');
});

console.log(reversedArr);

//Дана некоторая строка с числом:'1234567'
//Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:'1 234 567'

let str12 = '1234567';
let result8 = [];

for (let i = str12.length - 1; i >= 0; i -= 3) {
    result8.unshift(str12.slice(i - 2, i + 1));
}

let formattedStr = result8.join(' ');

console.log(formattedStr);

//Дана некоторая строка:'AbCdE'
//Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:'aBcDe'

let str22 = 'AbCdE';

let toggledStr = str22
    .split('')
    .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
    .join('');

console.log(toggledStr);

//Дан некоторый массив с числами, например, вот такой:[1, 2, 3, 4, 5, 6]
//Слейте пары элементов вместе:[12, 34, 56]

let arr4 = [1, 2, 3, 4, 5, 6];

let mergedPairs = [];

for (let i = 0; i < arr.length; i += 2) {
    mergedPairs.push(Number(arr[i].toString() + arr[i + 1].toString()));
}

console.log(mergedPairs);

//Дана некоторая строка со словами:'aaa bbb ccc eee fff'
//Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:'aaa Bbb ccc Eee fff'

let str20 = 'aaa bbb ccc eee fff';

let newStr = str20
    .split(' ')
    .map((word, index) => index % 2 !== 0 ? word[0].toUpperCase() + word.slice(1) : word)
    .join(' ');

console.log(newStr);

//2.7
console.log('Level 2.7');

//Дана некоторая строка: 'a bc def ghij'
//Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:'A BC DEF ghij'

let str23 = 'a bc def ghij';

let newStr1 = str23
    .split(' ')
    .map((word, index) => word.length <= 3 ? word.toUpperCase() : word)
    .join(' ');

console.log(newStr1);

//Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

let char = 'd';

if (char === char.toUpperCase()) {
    console.log("Символ в верхнем регистре.");
} else console.log("Символ в нижнем регистре.");

//Дано некоторое число, например, такое:123789
//Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28

let num15 = 123789;

let result7 = num15
    .toString()
    .split('')
    .filter(num => num % 2 === 0)
    .join('');

console.log(result7);

//2.8
console.log('Level 2.8');

//Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

let str2 = 'sdFdddHpA';

let newStr2 = str2
    .split('')
    .filter(char => char === char.toUpperCase())

if (newStr2 <= 2) {
    console.log("В строке не более двух заглавных букв.");
} else {
    console.log("В строке больше двух заглавных букв.");
}

//Дана некоторая строка:'1 22 333 4444 22 5555 1'
//Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:'1 22 333 22 1'

let str3 = '1 22 333 4444 22 5555 1';

let result9 = str3
    .split(' ')
    .filter(num => num.length <= 3)
    .join(' ');

console.log(result9);

//Даны два массива:  let arr1 = [1, 2, 3];  let arr2 = ['a', 'b', 'c'];
//Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]

let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c'];
let result10 = arr1.slice(0, 2).concat(arr2, arr1[2]);
console.log(result10);

// seond variation
let result11 = [...arr1.slice(0, 2), ...arr2, arr1[2]];
console.log(result11);


//2.9
console.log('Level 2.9');

//Дано некоторое число: 123456 Найдите сумму пар цифр этого числа. 
//В нашем случае имеется ввиду следующее: 12 + 34 + 56

let num16 = 123456;
let str11 = num16.toString();
let sum11 = 0;

for (let i = 0; i < str11.length; i += 2) {
    sum11 += Number(str11[i] + str11[i + 1]);
}

console.log(sum11);

//Дан массив с числами: [1, 2, 3, 4, 5]
//Выведите в консоль элементы этого массива в обратном порядке.

let arr5 = [1, 2, 3, 4, 5];

console.log(arr5.reverse());

//2.10
console.log('Level 2.10');

//Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

let str4 = 's376gg90ff12';
let letterCount = 0;

for (let i = 0; i < str4.length; i++) {
    if (isNaN(str4[i])) {
        letterCount++;
    }
}

if (letterCount <= 3) {
    console.log("В строке не более трех букв.");
} else {
    console.log("В строке больше трех букв.");
}

//Дано число. Получите первую четную цифру с конца этого числа.
let num2 = 3407149;

let result2 = num2
    .toString()
    .split('')
    .reverse()
    .find(num => num % 2 === 0);

if (result2) {
    console.log("Первая четная цифра с конца:", result2);
} else {
    console.log("Парных цифр нет.");
}

//Дана некоторая строка:'abcde abcde abcde'
//Замените в ней первый символ каждого слова на '!':  '!bcde !bcde !bcde'

let str5 = 'abcde abcde abcde';

let result6 = str5
    .split(' ')
    .map(word => '!' + word.slice(1))
    .join(' ')

console.log(result6);

//Дан массив с числами: [1, 2, 3, 3, 4, 5]
//Проверьте, что в этом массиве есть два одинаковых элемента подряд.

let arr6 = [1, 2, 3, 3, 4, 5];

let result12 = arr6
    .map((num, i) => num === arr6[i + 1])
    .includes(true);

console.log(result12 ? "Есть одинаковые элементы подряд." : "Нет одинаковых элементов подряд.");
