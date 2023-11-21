
// Домашня робота:
// 1) Створіть -елемент, наприклад, кнопку або div, і додайте подію click, яка виводить повідомлення В середині елементу або поруч скільки разів ви клікнули

let newBut= document.querySelector('button');

let cliking = 0;
newBut.addEventListener('click', function(){
    cliking += 1;
    newBut.innerHTML= `You clicked ${cliking} times`;
})


// 2) Створіть елемент (наприклад, div або input), і додайте обробник подій, який виводить повідомлення про те, яка подія сталася (наприклад, 'mouseenter' чи 'mouseleave' і т.д).

let newInput= document.querySelector('input');
    function showAlert(){
    alert('mouseenter');
    }
    newInput.addEventListener('mouseenter', showAlert);


// 3) Створіть кнопку яка при кліку видаляє обробник подій з завдання №2

let butClear= document.querySelector('.clearEvent');
    butClear.addEventListener('click', function(){
        newInput.removeEventListener('mouseenter', showAlert)              
});


// 4) Створіть картку товара де є інпут з значенням 0 і 2 кнопки + та -  натиска

let itemCart = document.querySelector('.itemCart');

let cartInput = document.createElement('input');
let number = 0;  
    cartInput.value = number;
    itemCart.appendChild(cartInput);
let butPlus = document.createElement('button');
    butPlus.innerHTML= '+';
    itemCart.appendChild(butPlus);
    butPlus.addEventListener('click', function(){
        number = +cartInput.value;
        number += 1;
        cartInput.value = number;
    })
let butMinus = document.createElement('button');
    butMinus.innerHTML= '-';
    itemCart.appendChild(butMinus);
    butMinus.addEventListener('click', function(){
        number = +cartInput.value;
        if (number > 0 ){
            number -= 1;
            cartInput.value = number; 
        }   
    })

// Додадткова робота:
// Напишіть гру камінь ножниці бумага з використанням подій. Результат гри можна виводити в alert чи на сторінці.

let userAnswer= document.querySelector('.userAnswer');
    userAnswer.placeholder= "input your variant";

let butCompare= document.querySelector('.compare');
let butReset= document.querySelector('.reset');

let variants = ['rock', 'shears', 'paper']

function answerCompare(userVariant){
    let randomVariant = variants[Math.floor(Math.random() * 3)];        
    let result;  
    if(userVariant=='rock' && randomVariant == 'shears'){
        result = "Congratulations! You won!"
    }else if(userVariant=='shears' && randomVariant == 'paper'){
        result = "Congratulations! You won!"
    }
    else if(userVariant=='paper' && randomVariant == 'rock'){
        result = "Congratulations! You won!"
    }else {
        result = "You didn't win, try again";
    }
    console.log(randomVariant);
    return  alert(result);
}
butCompare.addEventListener('click', function(){
    if(userAnswer.value){
        answerCompare(userAnswer.value);
    }
});
butReset.addEventListener('click', function(){
    userAnswer.value= ""; 
    userAnswer.placeholder= "input your variant";      
});