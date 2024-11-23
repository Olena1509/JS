//Переписати колбек функцію з лекції.

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

// Написати таку ж колбек функцію за логікою: writeProgram => buyKeyboard => visitCinema 
function writeProgram(isDone, cb) {
    if (isDone) {
        cb(1000); 
    } else {
        cb('Work is not completed. No payment!');
    }
}

function buyKeyboard(money, cb) {
    const keyboardPrice = 200;
    if (money >= keyboardPrice) {
        const rest = money - keyboardPrice;
        cb(rest); 
    } else {
        cb('Not enough money to buy a keyboard');
    }
}

function visitCinema(money, cb) {
    const cinemaTicket = 300;
    if (money >= cinemaTicket) {
        const rest = money - cinemaTicket;
        cb(rest); 
    } else {
        cb('No money for cinema');
    }
}

writeProgram(true, (response) => {
    if (typeof response === 'number') {
        console.log('Great! I got paid for my work:', response);

        buyKeyboard(response, (restAfterKeyboard) => {
            if (typeof restAfterKeyboard === 'number') {
                console.log('I bought a keyboard, remaining money:', restAfterKeyboard);

                visitCinema(restAfterKeyboard, (restAfterCinema) => {
                    if (typeof restAfterCinema === 'number') {
                        console.log('Watched a movie! Money left:', restAfterCinema);
                    } else {
                        console.log('Could not go to the cinema:', restAfterCinema);
                    }
                });

            } else {
                console.log('Could not buy a keyboard:', restAfterKeyboard);
            }
        });

    } else {
        console.log('Work issue:', response);
    }
});