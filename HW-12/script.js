
// HW_ 12_1

let age = +prompt("Вкажіть свій вік");

let fitAge = (age > 18) ? true : false;

alert(fitAge ? "Все Ok - Ваш вік відповідає вимогам" : "Вибачте, Ваш вік не відповідає вимогам");

// _______________________________________________________________________________

// HW_ 12_2

let firstNumber = +prompt("Вкажіть перше число");
let secondNumber = Number(prompt("Вкажіть друге число"));
let mathOperator = prompt("Уточніть яку операцію ви хотіли б прозвезти, вказуючи відповідний математичний оператор (+, -, *, /)");
let mathResult;

if (mathOperator === "/" && secondNumber !== 0){
    mathResult = firstNumber / secondNumber;
}
else if(mathOperator === "*"){
    mathResult = firstNumber * secondNumber;
}    
else if(mathOperator === "+"){
        mathResult = firstNumber + secondNumber;    
}
else if(mathOperator === "-"){
    mathResult = firstNumber - secondNumber;    
};
console.log(mathResult);