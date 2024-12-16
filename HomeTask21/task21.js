//3.1
console.log('Level 3.1');

//Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

let num = 12345;
let result = num
    .toString()
    .split('')
    .every((num, index, arr) => index === 0 || num >= arr[index - 1]);

console.log(result ? "Цифры расположены по возрастанию." : "Цифры не расположены по возрастанию.");

//Дан массив: [1, '', 2, 3, '', 5] Удалите из массива все пустые строки.

let arr = [1, '', 2, 3, '', 5];

let filteredArr = arr.filter(element => element !== '');

console.log(filteredArr);

//Дан массив:

//[
//	[2, 1, 4, 3, 5],
//	[3, 5, 2, 4, 1],
//	[4, 3, 1, 5, 2],
//]
// Отсортируйте элементы в каждом подмассиве.

let arr1 = [
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
];

let sortedArr = arr1.map(array => array.sort((a, b) => a - b));

console.log(sortedArr);

//Даны два массива: let arr1 = [1, 2, 3];  let arr2 = [1, 2, 3, 4, 5];
//Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

let arr3 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];

if (arr3.length > arr2.length) {
    arr3.length = arr2.length;
} else if (arr2.length > arr3.length) {
    arr2.length = arr3.length;
}

console.log(arr3);
console.log(arr2);

//3.2
console.log('Level 3.2');

//Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

for (let i = 10; i <= 1000; i++) {
    let secondLastDigit = Math.floor((i % 100) % 10);
    if (secondLastDigit % 2 === 0) {
        console.log(i);
    }
}

//Дан массив. Удалите из него каждый пятый элемент.

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let filteredArr1 = arr4.filter((_, index) => (index + 1) % 5 !== 0);

console.log(filteredArr1);

//Дана некоторая переменная с числом: let num = 5;
//Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:'00000'

let num1 = 5;
let zeros = '0'.repeat(num1);

console.log(zeros);

//Дана некоторая строка со словами: 'aaa bbb ccc eee fff'
//Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:'aaa ccc fff'

let str = 'aaa bbb ccc eee fff';
let result2 = str
    .split(' ')
    .filter((_, index) => index % 2 === 0)
    .join(' ');

console.log(result2);

//Дан массив:[ [1, 2, 3],[4, 5, 6],[7, 8, 9],] Найдите сумму элементов этого массива.

let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let sum = array.flat().reduce((acc, num) => acc + num, 0);

console.log(sum);

//3.3
console.log('Level 3.3');

//Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

let words = ["cat", "dog", "elephant", "bat", "ant"];

let filteredWords = words.filter(word => word.length <= 3);

console.log(filteredWords);

//Дано некоторое число: 1357 Проверьте, что все цифры этого числа являются нечетными.

let number = 1357;

let digits = number.toString().split('');

let allOdd = digits.every(digit => digit % 2 !== 0);

console.log(allOdd);

//Дано некоторое слово: 'abcba' Проверьте, что это слово читается одинаково с любой стороны.
let word = 'abcba';

let result1 = word === word.split('').reverse().join('');

console.log(result1);

//Дан массив:Найдите сумму элементов этого массива.

let arr5 =
    [
        [
            [11, 12, 13],
            [14, 15, 16],
            [17, 17, 19],
        ],
        [
            [21, 22, 23],
            [24, 25, 26],
            [27, 27, 29],
        ],
        [
            [31, 32, 33],
            [34, 35, 36],
            [37, 37, 39],
        ],
    ]

let sum1 = arr5.flat(Infinity).reduce((acc, num) => acc + num, 0);

console.log(sum1);

//3.4
console.log('Level 3.4');

//Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

for (let i = 10; i <= 1000; i++) {
    let firstDigit = i.toString().charAt(0);
    if (firstDigit % 2 === 0) {
        console.log(i);
    }
}

//Дан некоторый массив, например, вот такой:[1, 2, 3, 4, 5, 6]
//Поменяйте местами пары элементов этого массива:[2, 1, 4, 3, 6, 5]

let array1 = [1, 2, 3, 4, 5, 6];

// Перемещение пар элементов
for (let i = 0; i < array1.length; i += 2) {
    if (i + 1 < array1.length) {
        let temp = array1[i];
        array1[i] = array1[i + 1];
        array1[i + 1] = temp;
    }
}
console.log(array1);

//Дан следующий объект: Найдите сумму элементов этого объекта.

let obj = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
}

let values = Object.values(obj).flatMap(Object.values);

let sum2 = values.reduce((acc, curr) => acc + curr, 0);

console.log(sum2);

//3.5
console.log('Level 3.5');

//Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

let text = 'apple banana apricot pineapple avocado orange almond';
let words1 = text.split(' ');

let newwords = words1.filter(word => word.startsWith('a'));

console.log(newwords);

//Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
let numbers = [10, 23, 45, 67, 85, 92, 100];

let result4 = numbers.filter(number => number % 5 === 0);

console.log(result4);

//Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.
let numbers1 = [12, 30, 45, 67, 80, 90, 100];

let result5 = numbers1.filter(number => number.toString().includes('0'));

console.log(result5);

//Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.

let numbers2 = [12, 30, 45, 67, 80, 90, 100];

let result6 = numbers2.some(number => number.toString().includes('3'));

console.log(result6);

//Дано некоторое число:35142
//Отсортируйте цифры этого числа. В нашем случае должно получится следующее:12345

let number1 = 35142;

let result7 = number1.toString().split('').sort().join('');

console.log(result7);

//Напишите программу, которая сформирует следующую строку:'-1-2-3-4-5-'

let result8 = '';

for (let i = 1; i <= 5; i++) {
    result8 += '-' + i;
}

console.log(result8 + '-');

//Дан следующий объект:Найдите сумму элементов этого объекта.


let obj2 = {
    1: {
        1: {
            1: 111,
            2: 112,
            3: 113,
        },
        2: {
            1: 121,
            2: 122,
            3: 123,
        },
    },
    2: {
        1: {
            1: 211,
            2: 212,
            3: 213,
        },
        2: {
            1: 221,
            2: 222,
            3: 223,
        },
    },
    3: {
        1: {
            1: 311,
            2: 312,
            3: 313,
        },
        2: {
            1: 321,
            2: 322,
            3: 323,
        },
    },
}

function sumObject(obj2) {
    let sum = 0;

    for (let key in obj2) {
        if (typeof obj2[key] === 'object') {
            sum += sumObject(obj2[key]);
        } else {
            sum += obj2[key];
        }
    }

    return sum;
}

let totalSum = sumObject(obj2);

console.log(totalSum);

//3.6
console.log('Level 3.6');

//Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.

let numbers3 = [123, 45, 6789, 12, 345, 678, 90123];

let result9 = numbers3.filter(number => number.toString().length <= 3);

console.log(result9);

//Дано число, например, вот такое: let num = 12345;
// Проверьте, что все цифры этого числа больше нуля.

let num2 = 12345;

let result10 = num2.toString().split('').every(digit => digit > '0');

console.log(result10);

//Дан некоторый массив, например, вот такой: [123, 456, 789]
//Слейте все элементы этого массива в один массив, разбив их посимвольно:[1, 2, 3, 4, 5, 6, 7, 8, 9]
const array2 = [123, 456, 789];

const mergedArray = array2.flatMap(num => num.toString().split(''));

console.log(mergedArray);

//Дан следующая структура:Найдите сумму элементов этой структуры.

let data = [
    {
        1: 11,
        2: 12,
        3: 13,
    },
    {
        1: 21,
        2: 22,
        3: 23,
    },
    {
        1: 24,
        2: 25,
        3: 26,
    },
];

const sumElements = data => data.reduce((acc, curr) => {
    return acc + Object.values(curr).reduce((sum, value) => sum + value, 0);
}, 0);

const totalSum1 = sumElements(data);

console.log(totalSum1);

//3.7
console.log('Level 3.7');

//Дана строка со словами. Отсортируйте слова в алфавитном порядке.

const sentence = 'banana apple cherry date elderberry fig grape';

const words2 = sentence.split(' ').sort();

console.log(words2);

//Дано число. Получите массив делителей этого числа.
function getDivisors(num) {
    const divisors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
}

const num3 = 28;
const divisors = getDivisors(num3);

console.log(divisors);

//Даны два числа. Получите массив общих делителей этих чисел.
function getDivisors(num) {
    const divisors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
}

function commonDivisors(num1, num2) {
    const divisors1 = getDivisors(num1);
    const divisors2 = getDivisors(num2);

    return divisors1.filter(divisor => divisors2.includes(divisor));
}

const num4 = 28;
const num5 = 36;
const commonDivs = commonDivisors(num4, num5);

console.log(commonDivs);

//Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const num6 = 10;

if (isPrime(num6)) {
    console.log('Число является простым.');
} else {
    console.log('Число не является простым.');
}

//Через запятую написаны числа. Получите максимальное из этих чисел.
let numbersStr = '3, 5, 7, 2, 8, 4';

let maxNumber = Math.max(...'3, 5, 7, 2, 8, 4'.split(', ').map(Number));

console.log(maxNumber);

//Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

const numbers4 = [1, 22, 14, 2, 3, 44, 4, 5];

function duplicateSingleDigits(arr) {
    return arr.reduce((acc, num) => {
        acc.push(num);
        if (num >= 0 && num <= 9) {
            acc.push(num);
        }
        return acc;
    }, []);
}

const newArray = duplicateSingleDigits(numbers4);

console.log(newArray);

//Дана строка. Удалите из нее все гласные буквы.

const str1 = 'This is a sample string.';

function removeVowels(s) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i].toLowerCase();
        if (!'aeiou'.includes(char)) {
            result += s[i];
        }
    }

    return result;
}

const noVowelsStr = removeVowels(str1);

console.log(noVowelsStr);

//Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

const str2 = 'this is a sample string';

function capitalizeLastLetter(s) {
    return str2.split(' ').map(word => {
        if (word.length > 0) {
            return word.slice(0, -1) + word.slice(-1).toUpperCase();
        }
        return word;
    }).join(' ');
}

const result11 = capitalizeLastLetter(str2);

console.log(result11);

//Дан следующая структура:Найдите сумму элементов этой структуры.

let data1 = [
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
];

function sumOfElements(data1) {
    return data1.reduce((sum, obj) => {
        const objValues = Object.values(obj);
        const nestedSums = objValues.reduce((acc, arr) => acc + arr.reduce((a, b) => a + b, 0), 0);
        return sum + nestedSums;
    }, 0);
}

const totalSum2 = sumOfElements(data1);

console.log(totalSum2);

//3.8
console.log('Level 3.8');

//Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.
let numbers5 = [13, 30, 333, 50, 32];

let result12 = numbers5.every(num => num.toString().includes('3'));

console.log(result12);

//Дана строка в формате: 'kebab-case' Преобразуйте ее в формат: 'snake_case'

let kebabCaseStr = 'kebab-case';

let snakeCaseStr = '';

for (let i = 0; i < kebabCaseStr.length; i++) {
    if (kebabCaseStr[i] === '-') {
        snakeCaseStr += '_';
    } else {
        snakeCaseStr += kebabCaseStr[i];
    }
}

console.log(snakeCaseStr);

//Дана строка в формате: 'snake_case' Преобразуйте ее в формат:'camelCase'

const snakeCaseStr1 = 'snake_case';

function toCamelCase(str) {
    return str.split('_')
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}

const camelCaseStr = toCamelCase(snakeCaseStr1);

console.log(camelCaseStr);

//Дана строка в формате:'camelCase' Преобразуйте ее в формат:'snake_case'

const camelCaseStr3 = 'camelCase';

function toSnakeCase(str) {
    let snakeCaseStr = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'A' && char <= 'Z') {
            snakeCaseStr += `_${char.toLowerCase()}`;
        } else {
            snakeCaseStr += char;
        }
    }

    return snakeCaseStr;
}

const snakeCaseStr2 = toSnakeCase(camelCaseStr3);

console.log(snakeCaseStr2);

//Сформируйте с помощью циклов следующий массив: [[1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3],]

const numRows = 5;
const nestedArray = [];

for (let i = 0; i < numRows; i++) {
    nestedArray.push([1, 2, 3]);
}

console.log(nestedArray);

//3.9
console.log('Level 3.9');

//Дана строка. Проверьте, что эта строка состоит только из цифр.
let str4 = '12345';

function isAllDigits(s) {
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            return false;
        }
    }
    return true;
}

let result13 = isAllDigits(str4);

console.log(result13);

//Дана строка. Проверьте, что эта строка состоит только из четных цифр.
let str5 = '24680';

function isAllEvenDigits(s) {
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!['0', '2', '4', '6', '8'].includes(char)) {
            return false;
        }
    }
    return true;
}

let result14 = isAllEvenDigits(str5);

console.log(result14);

//Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

const maxNumber1 = 1000;
const numbersWithSum13 = [];

for (let num = 1; num <= maxNumber1; num++) {
    const sumOfDigits = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    if (sumOfDigits === 13) {
        numbersWithSum13.push(num);
    }
}

console.log(numbersWithSum13);


//Сформируйте с помощью циклов следующий массив:[[1, 2, 3],[4, 5, 6],[7, 8, 9],]
const numRows1 = 3;
const numCols = 3;
const nestedArray1 = [];

for (let i = 0; i < numRows1; i++) {
    const row = [];
    for (let j = 1; j <= numCols; j++) {
        row.push((i * numCols) + j);
    }
    nestedArray1.push(row);
}

console.log(nestedArray1);

//3.10
console.log('Level 3.10');

//Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.
let arr6 = [1, 2, 3, 4, 5];
let doubledArray = arr6.reduce((acc, curr) => acc.concat([curr, curr]), []);

console.log(doubledArray);

//Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.
const arr7 = [10, 20, 30, 40, 50];
const num7 = 10;

const divisors1 = arr7.filter(element => num7 % element === 0);

console.log(divisors1);

//Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.
const num8 = 12345;
const num9 = 54321;

const digits1 = num8.toString().split('');
const digits2 = num9.toString().split('');

const commonDigits = digits1.filter(digit => digits2.includes(digit));

console.log(commonDigits);

//Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

const num10 = 1234533;

const strNum = num10.toString();
const positions = [];

for (let i = 1; i < strNum.length - 1; i++) {
    if (strNum[i] === '3') {
        positions.push(i);
    }
}

console.log(positions);

//Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.
const arr8 = [123, 445, 789, 112, 456];

const uniqueDigitNumbers = arr8.filter(num => {
    const strNum = num.toString();
    const digitSet = new Set(strNum);
    return digitSet.size === strNum.length;
});

console.log(uniqueDigitNumbers);

//Дан массив:[[1, 2, 3],[4, 5, 6],[7, 8, 9],]
//Слейте элементы этого массива в один одномерный массив:[1, 2, 3, 4, 5, 6, 7, 8, 9]

const multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const result15 = multiArray.flat();

console.log(result15);

//4.1
console.log('Level 4.1');

//Сделайте функцию, которая вернет текущий день недели словом.
function getCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    return daysOfWeek[today];
}

console.log(getCurrentDayOfWeek());

//Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.

function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = new Date(date).getDay();
    return daysOfWeek[dayIndex];
}

const date = '2024-12-15';
console.log(getDayOfWeek(date));

//Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

function secondsToDays(seconds) {
    const secondsInDay = 24 * 60 * 60;
    const days = Math.floor(seconds / secondsInDay);
    return days;
}

const seconds = 86400;
console.log(secondsToDays(seconds));

//Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.
function truncateString(maxLength, str) {
    if (typeof str === 'string' && typeof maxLength === 'number') {
        return str.length > maxLength ? str.slice(0, maxLength) : str;
    }
    return str;
}

console.log(truncateString(5, "Hello, World!"));

//Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.
function getZodiacSign(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    let sign = '';

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) sign = 'Aries';
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) sign = 'Taurus';
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) sign = 'Gemini';
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) sign = 'Cancer';
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) sign = 'Leo';
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) sign = 'Virgo';
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) sign = 'Libra';
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) sign = 'Scorpio';
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) sign = 'Sagittarius';
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) sign = 'Capricorn';
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) sign = 'Aquarius';
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) sign = 'Pisces';

    return sign;
}


const date3 = new Date('1990-08-15');
console.log(getZodiacSign(date3));

//Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.
function sumOfDivisors(num) {
    if (num <= 0) return 0;
    let sum = 0;
    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum;
}

const number2 = 28;
console.log(sumOfDivisors(number2));


//4.2
console.log('Level 4.2');

//Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
function sumOfDivisors(num) {
    if (num <= 0) return 0;

    let sum = 0;
    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum;
}

const number6 = 28;
console.log(sumOfDivisors(number6));

//Сделайте функцию, которая параметром будет принимать число и удалять из него нули.
function removeZeros(num) {
    let result = '';
    const numStr = num.toString();

    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] !== '0') {
            result += numStr[i];
        }
    }

    return parseInt(result, 10);
}

// Пример использования:
const number7 = 102304050;
console.log(removeZeros(number7));

//Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.
function daysToDate(targetDate) {
    const currentDate = new Date();
    const targetYear = currentDate.getFullYear();

    const target = new Date(targetYear, ...targetDate.split('-').map(Number).slice(1));

    const timeDifference = target - currentDate;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 0) {
        return -daysDifference;
    } else {
        return daysDifference;
    }
}

const date4 = '2024-12-25';
console.log(daysToDate(date4));

//Сделайте функцию, которая параметром будет принимать год и проверять, високосный он или нет.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


const year = 2024;
console.log(isLeapYear(year));

//Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.

function getLeapYears() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;
    const leapYears = [];

    for (let year = startYear; year <= currentYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year);
        }
    }

    return leapYears;
}

console.log(getLeapYears());

//Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.
function daysUntilEndOfMonth() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const nextMonth = currentMonth + 1;

    const firstDayOfNextMonth = new Date(today.getFullYear(), nextMonth, 1);

    const difference = firstDayOfNextMonth - today;

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
}
console.log(daysUntilEndOfMonth());


//Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
//{
//	next: 'пн',
//	curr: 'вс',
//	prev: 'сб',
//}


function getWeekDays() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (вс) - 6 (сб)

    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    const prevDay = (dayOfWeek === 0) ? 6 : dayOfWeek - 1;
    const nextDay = (dayOfWeek === 6) ? 0 : dayOfWeek + 1;

    return {
        prev: days[prevDay],
        curr: days[dayOfWeek],
        next: days[nextDay]
    };
}
console.log(getWeekDays());


//Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(inputArray);
console.log(uniqueArray);

//Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.
function removeDuplicatesMoreThanThree(arr) {
    const frequency = {};


    arr.forEach(num => {
        if (frequency[num] === undefined) {
            frequency[num] = 1;
        } else {
            frequency[num]++;
        }
    });
    return arr.filter(num => frequency[num] <= 3);
}

const inputArray1 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5];
const uniqueArray1 = removeDuplicatesMoreThanThree(inputArray1);
console.log(uniqueArray1);

//Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.
function removeAdjacentDuplicates(arr) {
    if (arr.length === 0) return arr;

    let result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            result.push(arr[i]);
        }
    }

    return result;
}

const inputArray3 = [1, 1, 2, 2, 3, 3, 4, 5, 5];
const uniqueArray3 = removeAdjacentDuplicates(inputArray3);
console.log(uniqueArray3);

//Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:

//{
//	max: 9,
//	min: 1,
//}

function getMaxMin(arr) {
    if (arr.length === 0) return { max: null, min: null };

    const max = Math.max(...arr);
    const min = Math.min(...arr);

    return { max, min };
}

const inputArray4 = [1, 2, 3, 4, 5, 9];
const result16 = getMaxMin(inputArray4);
console.log(result16);


//4.4
console.log('Level 4.4');

//Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.
function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}

const number8 = 36;
const divisorCount = countDivisors(number8);
console.log(divisorCount);

//Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.
function getZodiacSign(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    let sign = '';

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) sign = 'Овен';
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) sign = 'Телец';
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) sign = 'Близнецы';
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) sign = 'Рак';
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) sign = 'Лев';
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) sign = 'Дева';
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) sign = 'Весы';
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) sign = 'Скорпион';
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) sign = 'Стрелец';
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) sign = 'Козерог';
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) sign = 'Водолей';
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) sign = 'Рыбы';

    return sign;
}


const birthDate = new Date('1990-07-15');
const zodiacSign = getZodiacSign(birthDate);
console.log(zodiacSign);

//Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
function getDivisors(n) {
    const divisors = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
}
const number9 = 36;
const divisorsArray = getDivisors(number9);
console.log(divisorsArray);

//Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const number10 = 29;
const result17 = isPrime(number10);
console.log(result17); 

//Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.
function removeEvenDigits(num) {
    let numStr = num.toString();
    let oddDigits = numStr.split('').filter(digit => digit % 2 !== 0);
    return parseInt(oddDigits.join(''), 10);
}

const number11 = 123456;
const result18 = removeEvenDigits(number11);
console.log(result18);

//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
function fillArrayWithRandomNumbers(N, min, max) {
    const randomNumbers = [];

    for (let i = 0; i < N; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push(randomNum);
    }

    return randomNumbers;
}
const randomArray = fillArrayWithRandomNumbers(10, 1, 100);
console.log(randomArray);

//4.5
console.log('Level 4.5');

//Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.

function isNumericString(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9') {
            return false;
        }
    }
    return true;
}

console.log(isNumericString("12345")); 
console.log(isNumericString("123a5")); 

//Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.
function secondMax(arr) {
    if (arr.length < 2) {
        return null; 
    }
    let max1 = Math.max(...arr);
    arr = arr.filter(num => num !== max1);
    let max2 = Math.max(...arr);

    return max2;
}

const numbers6 = [3, 1, 4, 1, 5, 9, 2, 6];
const result19 = secondMax(numbers6);
console.log(result18);

//Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.
function range(min, max) {
    const result = [];
    
    for (let i = min; i <= max; i++) {
        result.push(i);
    }

    return result;
}

const min = 3;
const max = 7;
const rangeArray = range(min, max);
console.log(rangeArray); 

//Сделайте функцию, которая заполнит массив случайными латинскими буквами.
function randomLettersArray(n) {
    const result = [];
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomLetter = letters[randomIndex];
        result.push(randomLetter);
    }

    return result;
}
const n = 10;
const randomLetters = randomLettersArray(n);
console.log(randomLetters); 

//Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.
function sumFibonacci(N) {
    if (N <= 0) return 0;

    let fib = [0, 1];
    let sum = 1; 

    for (let i = 2; i < N; i++) {
        let nextFib = fib[i - 1] + fib[i - 2];
        fib.push(nextFib);
        sum += nextFib;
    }

    return sum;
}

const N = 5;
const sum3= sumFibonacci(N);
console.log(sum3); 

//4.6
console.log('Level 4.6');

//Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.
function isValidDate(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day;
}

console.log(isValidDate("2024-02-30")); 

//Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.
function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateRandomString(10));

//Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.
function getInitials(sentence) {
    return sentence
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase()) 
        .join(''); 
}

console.log(getInitials('hello world')); // "HW"

//Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.
function replaceWithDivisors(arr) {
    return arr.map(num => {
        const divisors = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    });
}

console.log(replaceWithDivisors([10, 15, 21]));

//Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:

//{
//	d: 12,
//	h: 10,
//	m: 59,
//	s: 59,
//}

function convertSeconds(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= 24 * 60 * 60;

    const hours = Math.floor(seconds / (60 * 60));
    seconds %= 60 * 60;

    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    return {
        d: days,
        h: hours,
        m: minutes,
        s: seconds
    };
}
console.log(convertSeconds(1234567));

//4.7
console.log('Level 4.7');

// Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.

function sortWords(text) {
    return text
        .split(' ') 
        .sort((a, b) => a.localeCompare(b)) 
        .join(' '); 
}

console.log(sortWords("яблуко груша банан ананас"));

//Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
function findCommonElements(array1, array2) {
    
    const set1 = new Set(array1);
    const set2 = new Set(array2);

    const commonElements = Array.from(set1).filter(item => set2.has(item));

    return commonElements;
}

const arr9 = [1, 2, 3, 4, 5];
const arr10 = [3, 4, 5, 6, 7];
const result20 = findCommonElements(arr9, arr10);
console.log(result20);



//Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.

class RandomNumberGenerator {
    constructor(max = 100) {
      this.usedNumbers = new Set();
      this.max = max;
    }
  
    getRandomNumber() {
      let number;
      do {
        number = Math.floor(Math.random() * this.max);
      } while (this.usedNumbers.has(number));
      
      this.usedNumbers.add(number);
      return number;
    }
  }
  
  const rng = new RandomNumberGenerator();
  console.log(rng.getRandomNumber());

  //Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:
//let arr = [1, 2, 3, 4, 5]; func(arr, 1); // 2 func(arr, 4); // 5 func(arr, 5); // 1

function getNextElement(arr, element) {
    const index = arr.indexOf(element);
    if (index === -1) return undefined;
  
    return arr[(index + 1) % arr.length]; 
  }
  
  let arr11 = [1, 2, 3, 4, 5];
  
  console.log(getNextElement(arr11, 1)); 
  console.log(getNextElement(arr11, 4)); 
  console.log(getNextElement(arr11, 5)); 

//4.8
console.log('Level 4.8');

//Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.









