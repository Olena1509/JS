//1. Опирайтесь на код лекцій про колбеки.2. Промисифікуйте функції.

function clearHouse(isClean, cb) {
    if (isClean) {
        cb(500)
    } else {
        cb('Should clear before get money!!!')
    }
}

function shop(money, cb) {
    const priceOfJeans = 50;
    if (money >= priceOfJeans) {
        const rest = money - priceOfJeans;
        cb(rest)
    } else { cb('Not enough money') }
}

function mac(money, cb) {
    const priceOfBurger = 100;
    if (money >= priceOfBurger) {
        const rest = money - priceOfBurger;
        cb(rest)
    } else { cb('Need more money') }
}

clearHouse(true, (response) => {
    if (typeof response === 'number') {
        console.log('Uraa,I got money!!!');

        shop(response, (restJeans) => {
            if (typeof restJeans === 'number') {
                console.log('Ura I bought Jeans, I have:', restJeans);

                mac(restJeans, (restBurger) => {
                    if (typeof restBurger === 'number') {
                        console.log('Yummy Yummy!! I have:', restBurger);
                    } else { console.log('I will be hungry all the day'); }
                })

            } else {
                console.log('Salary is too low');

            }
        })
    } else {
        console.log('not lucky not lucky:');
    }
})


//3. Викликайте ланцюжок виклку асинхронних функцій через Promise.

function clearHouse(isClean) {
    return new Promise((resolve, reject) => {
        if (isClean) {
            resolve(500); // Будинок чистий — отримуємо гроші
        } else {
            reject('Should clear before get money!!!'); // Будинок не чистий
        }
    });
}

function shop(money) {
    return new Promise((resolve, reject) => {
        const priceOfJeans = 50;
        if (money >= priceOfJeans) {
            const rest = money - priceOfJeans;
            resolve(rest); // Грошей вистачило, повертаємо залишок
        } else {
            reject('Not enough money'); // Недостатньо грошей для джинсів
        }
    });
}

function mac(money) {
    return new Promise((resolve, reject) => {
        const priceOfBurger = 100;
        if (money >= priceOfBurger) {
            const rest = money - priceOfBurger;
            resolve(rest); // Грошей вистачило, повертаємо залишок
        } else {
            reject('Need more money'); // Недостатньо грошей для бургера
        }
    });
}

// Використання Promises
clearHouse(true)
    .then((money) => {
        console.log('Uraa, I got money!!!', money);
        return shop(money);
    })
    .then((restAfterJeans) => {
        console.log('Ura I bought Jeans, I have:', restAfterJeans);
        return mac(restAfterJeans);
    })
    .then((restAfterBurger) => {
        console.log('Yummy Yummy!! I have:', restAfterBurger);
    })
    .catch((error) => {
        console.log(error);
    });


//4.  Викликайте ланцюжок виклку асинхронних функцій через async/await.
async function main() {
    try {
        const money = await clearHouse(true); 
        console.log('Uraa, I got money!!!', money);

        const restAfterJeans = await shop(money); 
        console.log('Ura I bought Jeans, I have:', restAfterJeans);

        const restAfterBurger = await mac(restAfterJeans); 
        console.log('Yummy Yummy!! I have:', restAfterBurger);
    } catch (error) {
        console.log(error); 
    }
}

main();

//5. Покажіть приклади використання Promise.all, Promise.allSetlled, Promise.race.

Promise.all([clearHouse(true), shop(500), mac(500)])
    .then((results) => {
        console.log('All promises resolved:');
        console.log('Money from clearHouse:', results[0]);
        console.log('Rest after shopping:', results[1]);
        console.log('Rest after eating:', results[2]);
    })
    .catch((error) => {
        console.log('One of the promises failed:', error);
    });

    Promise.allSettled([clearHouse(true), shop(500), mac(500)])
    .then((results) => {
        console.log('All promises settled:');
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index + 1} fulfilled with value:`, result.value);
            } else {
                console.log(`Promise ${index + 1} rejected with reason:`, result.reason);
            }
        });
    });

    Promise.race([clearHouse(true), shop(500), mac(500)])
    .then((result) => {
        console.log('First promise settled:', result);
    })
    .catch((error) => {
        console.log('First promise failed:', error);
    });
