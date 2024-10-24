//1.Створіть функцію для обчислення факторіалу числа.Створіть функцію calculateFactorial(n), яка приймає аргумент n (ціле число)
// і виводить в консоль факторіал цього числа. Використовуйте цикл для обчислення факторіалу.

function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(calculateFactorial(7));

//2. Підрахунок кількості букв у рядку.
//Створіть функцію countSymb(sym), яка приймає рядок через prompt
//і виводить в консоль кількість букв у цьому рядку.
// Використовуйте умови та цикли для підрахунку букв.
//** Підказка стрічку також можна ітерувати, використваши .length

function countSymb(sym) {
    let count = 0;
    for (let i = 0; i < sym.length; i++) {
        if (sym[i] !== ' ') {
            count++;
        }
    }
    console.log(`Кількість літер у рядку: ${count}`);
}

const input = prompt('Введіть рядок для підрахунку кількості літер:');
countSymb(input);

//Створіть функцію для визначення простого числа (ціле число це число без коми: 1, 44, 100 ітд).
//Створіть функцію isPrime(number), яка приймає аргумент number і повертає (return) true,
//якщо число є простим, і false, якщо не є.
// ** Просте число це 3, 56, 23  Не просте це 1.33, 4.1, 55.222

function isPrime(number) {
    if (number % 1 === 0) {
        return true;
    }
    return false;
}

console.log(isPrime(1.8));

//4. Запит на пароль.
//Створіть функцію passwordPrompt(), яка приймає пароль і повторення паролю через prompt().
//Після цього викликайте цю функцію, якщо паролі співпадають має вивестись (console): Успіх, а в іншому випадку: Невдача.

function passwordPrompt(password1) {
    const password2 = prompt('Repeat your password')
    if (password1 === password2) {
        console.log('Успіх');
    } else console.log('Невдача');
}

passwordPrompt('elena1509');

//5. Факторіал чисел в діапазоні.
//Створіть функцію factorialRange(num1, num2, num3),
//яка приймає 2 числа.
//Функція має обчислити факторіали всіх чисел і повернути (return) результат у вигляді об'єкта {num1: num2, num3: } і вивести

function factorialRange(num1, num2) {
    let result = {};

    for (let i = num1; i <= num2; i++) {
        result[i] = calculateFactorial(i); // перше завдання
    }

    return result;
}
console.log(factorialRange(3, 6));

// 6. Калькурятор.
//Створіть функцію calc(num1, num2, action), яка приймає 2 числа з prompt
//та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)
//Результат повернути (return) і вивести

function calc(num1, num2, action) {
    const plus = num1 + num2;
    const minus = num1 - num2;
    const multi = num1 * num2;
    const div = num1 / num2;

    switch (action) {
        case '+':
            return plus;
        case '-':
            return minus;
        case '*':
            return multi;
        case '/':
            return div;
    }
}

const num1 = prompt('Введіть 1 число');
const num2 = prompt('Введіть 2 число');
const action = prompt('Оберіть дію(+,-,*,/)');
console.log(calc(num1, num2, action));
