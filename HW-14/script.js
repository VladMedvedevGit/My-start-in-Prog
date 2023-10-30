// Домашня робота: 

// 1)Створити функцію яка отримує массив і вибирає з нього всі парні числа і розміщує в новому масиві. 
// Функція повина повертати массив з парними номерами. -->

let arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];

function even (arr){
    let arrEvenNumbers = [];
    for (let i = 0; i< arr.length; i++){
        if (arr[i] % 2 == 0){
           arrEvenNumbers.push(arr[i])        
        }  
    }
    return arrEvenNumbers;
};
console.log(even(arrRandomNumbers));

// 2)Створити функцію яка перемножає всі значення массиву на 2 і записує їх в новий массив який повертає -->

function multiply (arr){
    let arrMultiplyed = [];
    for (let i = 0; i< arr.length; i++){
        arrMultiplyed.push(arr[i] * 2)       
    }
    return arrMultiplyed;
};
console.log(multiply(arrRandomNumbers));


// 3) створити функцію яка замінює в массиві =) на ;)

const smile = [':)', '=)',':)', '=)',':)', '=)'];

function replaseSmile (arr){
    let newSmiles = [];
    for (let i = 0; i< arr.length; i++){
        if (arr[i] == '=)'){
           arr[i] =';)';                 
        }  
        newSmiles.push(arr[i]);  
    }
    return newSmiles;
};
console.log(replaseSmile(smile));