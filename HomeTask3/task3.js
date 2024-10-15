// first task
let a = 'luckky';
a = Boolean(a);
console.log(a, typeof (a));

let b = 43;
b = Boolean(b);
console.log(b, typeof (b));

let c = 'happy';
c = Number(c);
console.log(c, typeof (c));

let d = null;
d = Boolean(d);
console.log(d, typeof (d));

let e = undefined;
e = Boolean(e);
console.log(e, typeof (e));

// task2
if (confirm("Are you happy?")) {
    console.log("You confirmed popup");
} else {
    console.log("Confirm Error");
}

//task 3

confirm("Are you happy?") ? console.log("You confirmed popup") : console.log("Confirm Error");

//task4

let age = prompt('How old are you ?');

if (age >= 1 && age < 12) {
    console.log('You are a child')

} else
    if (age > 12 && age < 18) {
        console.log('You are a teenager')

    } else
        if (age > 18 && age < 60) {
            console.log('You are an adult')

        } else if (age >= 60) {
            console.log('You are so old')
        }
        else {
            console.log('does it not a number,try more')
        }

//task5

let position = prompt('What is your name position?')
switch (position) {
    case 'Admin':
        alert('I have full access!')
        break;
    case 'Student':
        alert('I am Student')
        break;
    case 'Teacher':
        alert('I am teacher')
        break;
    case 'Young':
        alert('I am young and ready to party')
        break;
    default:
        alert('You entered own name')
}

//task6 Самостійно приведіть приклади використання <, >, >=, <=, ==, ===, !=, !==, ||, &&

let aa = 5;
if (aa < 10) {
    console.log("aa менше 10");
}

let bb = 20;
if (bb > 15) {
    console.log("bb більше 15");
}

let cc = 7;
if (cc >= 7) {
    console.log("cc більше або дорівнює 7");
}

let dd = 3;
if (dd <= 5) {
    console.log("dd менше або дорівнює 5");
}

let ee = "5";
if (ee == 5) {
    console.log("ee рівне 5");
}

let ff = "5";
if (ff === 5) {
    console.log("ff строго рівне 5");
} else {
    console.log("ff не строго рівне 5");
}

let g = "10";
if (g != 5) {
    console.log("g не дорівнює 5");
}

let h = 10;
if (h !== "10") {
    console.log("h не дорівнює '10' строго");
}

let x = 5;
let y = 10;
if (x > 0 && y > 5) {
    console.log("x більше 0 і y більше 5");
}

let p = 3;
let q = 8;
if (p < 5 || q < 5) {
    console.log("p менше 5 або q менше 5");
}

let newage = 25;
if ((newage > 18 && newage < 30) || newage === 60) {
    console.log("Вік у діапазоні від 18 до 30 або точно 60");
}
