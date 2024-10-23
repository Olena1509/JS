
//1. Реалізувати алгоритм: сортування бульбашкою для наступного масиву [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19]
const arr = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr)

// 2. Вивести всі алгоритми цієї лекції і попередньої в функції, викличте функції

//buuble
const arr1 = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19];

function bubbleSort(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] > arr1[j + 1]) {
                let temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
            }
        }
    }
    return arr1
}

console.log(bubbleSort(arr1))

//linear
const arrLine = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів']

function linearSort(arrLine) {
    for (let i = 0; i < arrLine.length; i++) {
        if (findCity === arrLine[i]) {
            console.log('linear search: [Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів]');
            return i;
        }
    }
    console.log('city is not found')
    return -1;
}
const findCity = prompt('Enter the city you want to find :Київ, Херсон, Крим, Запоріжжя, Донецьк, Білгород, Львів')
linearSort(arrLine);

//binar

const arrBi = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110];

function binarSort(arrBi) {
    let startInd = 0;
    let endInd = arrBi.length - 1;
    while (startInd <= endInd) {
        let center = Math.floor((startInd + endInd) / 2);
        if (arrBi[center] === findNum) {
            console.log('binary search:[1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110]');
            return center;
        } else if (arrBi[center] < findNum) {
            startInd = center + 1;
        } else {
            endInd = center - 1;
        }

    }
    console.log('this number not found')
    return -1;
}
const findNum = Number(prompt('Enter the number which you search'))
binarSort(arrBi)

// 3. Створіть функцію яка виводить в консоль пояснення того що таке hosting

function explainHoisting() {
    console.log('хостинг (hoisting) — це механізм, при якому змінні та функції "піднімаються" на початок своєї області видимості під час виконання коду.')
}

explainHoisting();
//Створіть функцію яка виводить в консоль пояснення що таке scope
function explainScope() {
    console.log("Scope (область видимості) — це концепція в JavaScript, яка визначає, де змінні та функції є доступними в коді.");
}

explainScope();
//Створіть функцію яка виводить в консоль пояснення чим поганий var
function explainWhyVarIsNotGood() {
    console.log('1.var піднімається на початок своєї області видимості, але значення не присвоюється до реальної ініціалізації. Це може спричинити проблеми, коли змінна доступна до свого оголошення. 2.Змінні, оголошені за допомогою var, ігнорують блоки, такі як цикли чи умовні оператори, і залишаються доступними за їх межами. 3.var дозволяє оголошувати змінну повторно в тій самій області видимості, що може спричинити випадкове перезаписування змінних.')
}

explainWhyVarIsNotGood();