
// Домашня робота:

// - створіть розмітку яка відповідає таким селекторам
// let autoplay = document.querySelector('[autoplay]');
// let elements = document.querySelectorAll('div, p');
// let listItems = document.querySelectorAll('ul.nav > li');
// let listItem = document.querySelectorAll('li:nth-child(2)');

let autoplay = document.querySelector('[autoplay]');
let elements = document.querySelectorAll('div, p');
let listItems = document.querySelectorAll('ul.nav > li');
let listItem = document.querySelector('li:nth-child(2)');

console.log(autoplay);
console.log(elements);
console.log(listItems);
console.log(listItem);

// - Створіть новий елемент div за допомогою createElement. Додайте його до існуючого елемента в DOM, використовуючи appendChild. Присвойте створеному елементу текстовий вміст із текстом JavaScript.

let newDiv = document.createElement('div');
console.log(newDiv.InnerText= "JavaScript");

// -Створіть кнопку в HTML. Напишіть функцію JavaScript, яка видаляє цю кнопку з DOM, використовуючи remove.

let myButton =  document.querySelector('button');

function removeElement(elem){
    return elem.remove()
}
removeElement(myButton);

// - Створіть HTML з декількома елементами, розташованими один поруч з іншим. Знайдіть елемент і додайте класс(selected)  і текст до його та наступного та попереднього сусіда, використовуючи nextElementSibling та prevElementSibling.

let newH3 = document.querySelector('h3');


console.log(newH3);
newH3.className = "selected";
console.log(newH3.previousElementSibling.InnerText='Hi');
console.log(newH3.InnerText='Have a nice day!');
console.log(newH3.nextElementSibling.InnerText='Bye');

// - Створіть HTML з елементом, якому присвоено клас. Змініть текстовий вміст цього елемента, використовуючи innerHTML. Потім додайте ще один клас до цього елемента, використовуючи classList.

let colorDiv = document.querySelector('.first-color');
console.log(colorDiv);
colorDiv.className = 'second-color';
colorDiv.classList.add('main-block');
console.log(colorDiv);

// Додаткова робота:
// Створіть код який створює 50 дівів різного кольору з стилями які зкруглють кути а також додають різний рандомний бекграунд кожному діву

let wrapper = document.querySelector('.wrapper');

function randomColor(){
     let r = Math.floor(Math.random() * 255);
     let g = Math.floor(Math.random() * 255);
     let b = Math.floor(Math.random() * 255);
    return (`rgb(${r}, ${g}, ${b})`)
}

function createColorDivs(divNumbers,width,height){
    for(let i=0; i<divNumbers; i++){
        let newDiv = document.createElement('div');
        newDiv.style.width= `${width}px`;
        newDiv.style.height= `${height}px`;
        newDiv.style.borderRadius = '50%';
        newDiv.style.backgroundColor = randomColor();    
        wrapper.appendChild(newDiv);
    }
    return wrapper;
}
createColorDivs(50,100,100);
