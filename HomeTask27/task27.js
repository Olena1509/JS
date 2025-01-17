//творіть функцію, яка виводить текст "Hello, World!" в консоль з затримкою у 3 секунди за допомогою setTimeout.
//Опишіть в console.info, як функція виконується асинхронно.


function sayHelloWorld() {
    setTimeout(() => {
        console.log("Hello, World!");
        console.info("Функція виконується асинхронно, оскільки виклик setTimeout відправляє завдання в чергу подій, а основний код продовжує виконуватися.");
    }, 3000); 
}

sayHelloWorld();


//Створіть промисіфіковані функції, і функцію яка виконує кілька запитів до різних промисифікованих функцій за допомогою- Promise.all- Promise.allSettled
//- Promice.race- Promice.any

function fetchData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Дані з fetchData1"), 2000); // Виконується за 2 секунди
    });
}

function fetchData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Дані з fetchData2"), 3000); // Виконується за 3 секунди
    });
}

function fetchData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Помилка в fetchData3"), 1500); // Помилка через 1.5 секунди
    });
}

function fetchWithPromiseAll() {
    Promise.all([fetchData1(), fetchData2(), fetchData3()])
        .then((results) => {
            console.log("Promise.all виконаний успішно. Результати:", results);
        })
        .catch((error) => {
            console.log("Promise.all завершився з помилкою:", error);
        });
}

fetchWithPromiseAll();

function fetchWithPromiseAllSettled() {
    Promise.allSettled([fetchData1(), fetchData2(), fetchData3()])
        .then((results) => {
            console.log("Promise.allSettled результати:", results);
        });
}

fetchWithPromiseAllSettled();
function fetchWithPromiseRace() {
    Promise.race([fetchData1(), fetchData2(), fetchData3()])
        .then((result) => {
            console.log("Promise.race завершився першим з результатом:", result);
        })
        .catch((error) => {
            console.log("Promise.race завершився першим з помилкою:", error);
        });
}

fetchWithPromiseRace();
function fetchWithPromiseAny() {
    Promise.any([fetchData1(), fetchData2(), fetchData3()])
        .then((result) => {
            console.log("Promise.any завершився першим успішним результатом:", result);
        })
        .catch((error) => {
            console.log("Promise.any завершився з помилкою:", error);
        });
}

fetchWithPromiseAny();


//Використовуючи асинхронний код, напишіть програму, 
   //яка виконує певну асинхронну операцію (наприклад, затримка за допомогою setTimeout) декілька разів у циклі.
   //Покажіть, як код виконується асинхронно та управляється з використанням:- async/await- Promise
   function asyncOperationWithDelay(index) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Операція ${index} завершена`);
        }, 1000); // затримка 1 секунда
    });
}

async function runOperationsWithAsyncAwait() {
    console.log("Початок операцій...");
    for (let i = 1; i <= 5; i++) {
        const result = await asyncOperationWithDelay(i);
        console.log(result);
    }
    console.log("Всі операції завершені!");
}

runOperationsWithAsyncAwait();
function runOperationsWithPromise() {
    console.log("Початок операцій...");
    let chain = Promise.resolve(); // Початковий ланцюжок
    for (let i = 1; i <= 5; i++) {
        chain = chain.then(() => asyncOperationWithDelay(i).then((result) => {
            console.log(result);
        }));
    }
    chain.then(() => console.log("Всі операції завершені!"));
}

runOperationsWithPromise();

//Створіть анімацію об'єкта на веб-сторінці, використовуючи тільки CSS для анімації (наприклад, @keyframes).
//Потім використайте JavaScript для асинхронного запуску анімації, наприклад, при кліку на кнопку.

const box = document.querySelector('.box');
    const button = document.getElementById('animateButton');

    button.addEventListener('click', async () => {
      // Видаляємо клас анімації, якщо він вже був застосований
      box.classList.remove('animate');

      // Затримка перед повторним додаванням класу (для перезапуску)
      await new Promise(resolve => setTimeout(resolve, 50));

      // Додаємо клас для запуску анімації
      box.classList.add('animate');
    });

