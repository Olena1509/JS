//Повторіть 14 та 15 домашні завдання (ті які стосуються функціонального програмування), та використовуйте 
// Rest/Spread оператори. Деструктиризацію


function clearHouse(isClean, cb) {
    if (isClean) {
      cb({ status: 'success', money: 500 });
    } else {
      cb({ status: 'error', message: 'Should clear before get money!!!' });
    }
  }
  
  function shop({ money }, cb) {
    const priceOfJeans = 50;
    if (money >= priceOfJeans) {
      const rest = money - priceOfJeans;
      cb({ status: 'success', money: rest });
    } else {
      cb({ status: 'error', message: 'Not enough money' });
    }
  }
  
  function mac({ money }, cb) {
    const priceOfBurger = 100;
    if (money >= priceOfBurger) {
      const rest = money - priceOfBurger;
      cb({ status: 'success', money: rest });
    } else {
      cb({ status: 'error', message: 'Need more money' });
    }
  }
  
  clearHouse(true, (response) => {
    const { status, money, message } = response;
  
    if (status === 'success') {
      console.log('Uraa, I got money!!!');
  
      shop({ money }, (shopResponse) => {
        const { status: shopStatus, money: restJeans, message: shopMessage } = shopResponse;
  
        if (shopStatus === 'success') {
          console.log('Ura, I bought Jeans! I have:', restJeans);
  
          mac({ money: restJeans }, (macResponse) => {
            const { status: macStatus, money: restBurger, message: macMessage } = macResponse;
  
            if (macStatus === 'success') {
              console.log('Yummy Yummy!! I have:', restBurger);
            } else {
              console.log('I will be hungry all the day:', macMessage);
            }
          });
        } else {
          console.log('Salary is too low:', shopMessage);
        }
      });
    } else {
      console.log('Not lucky, not lucky:', message);
    }
  });

  // 
  console.log('____________________________________________________')

  //
  function writeProgram(isDone, cb) {
    if (isDone) {
        cb({ status: 'success', money: 1000 });
    } else {
        cb({ status: 'error', message: 'Work is not completed. No payment!' });
    }
}

function buyKeyboard({ money }, cb) {
    const keyboardPrice = 200;
    if (money >= keyboardPrice) {
        const rest = money - keyboardPrice;
        cb({ status: 'success', money: rest });
    } else {
        cb({ status: 'error', message: 'Not enough money to buy a keyboard' });
    }
}

function visitCinema({ money }, cb) {
    const cinemaTicket = 300;
    if (money >= cinemaTicket) {
        const rest = money - cinemaTicket;
        cb({ status: 'success', money: rest });
    } else {
        cb({ status: 'error', message: 'No money for cinema' });
    }
}

writeProgram(true, (response) => {
    const { status, money, message } = response;

    if (status === 'success') {
        console.log('Great! I got paid for my work:', money);

        buyKeyboard({ money }, (keyboardResponse) => {
            const { status: keyboardStatus, money: restAfterKeyboard, message: keyboardMessage } = keyboardResponse;

            if (keyboardStatus === 'success') {
                console.log('I bought a keyboard, remaining money:', restAfterKeyboard);

                visitCinema({ money: restAfterKeyboard }, (cinemaResponse) => {
                    const { status: cinemaStatus, money: restAfterCinema, message: cinemaMessage } = cinemaResponse;

                    if (cinemaStatus === 'success') {
                        console.log('Watched a movie! Money left:', restAfterCinema);
                    } else {
                        console.log('Could not go to the cinema:', cinemaMessage);
                    }
                });

            } else {
                console.log('Could not buy a keyboard:', keyboardMessage);
            }
        });

    } else {
        console.log('Work issue:', message);
    }
});

//Приведіть 10 самостійних прикладів з копіюванням масивів/обєктів (5 масивів (2 багаторівневе), 5 об'єктів (2 багаторівневе))

const arr1 = [1, 2, 3];
const copyArr1 = arr1.slice();
console.log(copyArr1);

const arr2 = [4, 5, 6];
const copyArr2 = [...arr2];
console.log(copyArr2);

const arr3 = [[1, 2], [3, 4]];
const copyArr3 = [...arr3];
copyArr3[0][0] = 99; 
console.log(arr3);

const arr4 = [[1, 2], [3, 4]];
const copyArr4 = JSON.parse(JSON.stringify(arr4));
copyArr4[0][0] = 99; 
console.log(arr4);

const arr5 = [7, 8, 9];
const copyArr5 = Array.from(arr5);
console.log(copyArr5);

const obj1 = { name: 'Anna', age: 25 };
const copyObj1 = Object.assign({}, obj1);
console.log(copyObj1);

const obj2 = { city: 'Kyiv', country: 'Ukraine' };
const copyObj2 = { ...obj2 };
console.log(copyObj2);

const obj3 = { user: { name: 'John', age: 30 }, active: true };
const copyObj3 = { ...obj3 };
copyObj3.user.name = 'Mike'; 
console.log(obj3);

const obj4 = { user: { name: 'Emma', age: 22 }, active: false };
const copyObj4 = JSON.parse(JSON.stringify(obj4));
copyObj4.user.name = 'Sophia';
console.log(obj4); 

const obj5 = { a: 1, b: 2, c: 3 };
const copyObj5 = {};
for (let key in obj5) {
    copyObj5[key] = obj5[key];
}
console.log(copyObj5); 


