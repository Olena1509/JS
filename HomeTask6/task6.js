//Реалізувати алгоритм: лінійний пошук для наступного масиву ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів']

const arrLine=['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів']
const findCity = prompt('Enter the city you want to find :Київ, Херсон, Крим, Запоріжжя, Донецьк, Білгород, Львів')

for (let i=0; i< arrLine.length; i++) {
    if ( findCity === arrLine[i]){
        console.log('linear search: [Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів]');
        break
    }
}
//Реалізувати алгоритм: бінарний пошук для наступного масиву [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110]

const arrBi = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110];

const findNum = Number(prompt('Enter the number which you search'))

let startInd = 0;
let endInd = arrBi.length - 1;
while (startInd <= endInd) {
    let center = Math.floor((startInd + endInd) / 2);
    if (arrBi[center] === findNum) {
        console.log('binary search:[1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110]');
        break;
    } else if (arrBi[center] < findNum) {
        startInd = center + 1;
    } else {
        endInd = center - 1;
    }

}