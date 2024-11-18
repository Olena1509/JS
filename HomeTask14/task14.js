function recursionArray(arr, i = 0) {
    if (arr.length > i) {
        console.log(arr[i]);
        recursionArray(arr, ++i)

    }
}

recursionArray([1, 2, 3, 4, 5, 6])

function recursionArray1(arr, i = 0) {
    if (arr.length < i) return;
    console.log(arr[i]);
    recursionArray(arr, ++i)
}

recursionArray1([1, 2, 3, 4, 5, 6])


function stepper() {
    var num = 0;
    function dec() {
        num++;
    }
    function inc() {
        num--;
    }

    function getNum() {
        return num
    }

    return {
        dec: dec,
        inc: inc,
        getNum: getNum
    }

}


let objStepper = stepper();
console.log(objStepper);

objStepper.dec();
objStepper.dec();
objStepper.dec();
objStepper.dec();

console.log(objStepper.getNum());


//
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



