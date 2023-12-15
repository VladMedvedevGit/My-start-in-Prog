// Домашня робота:
// -створіть кнопку і елемент канвас, при кліку на кнопку намалюйте прямокутник по цетнтру канвас лемента
// Створіть сторінку до якої підключається  файл index.js а в файл index.js  імпортується файл який експротує класс Product ( можна взяти з попередніх завдань)

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let drawBtn = document.querySelector('.draw-btn');

function drawRectangle (){   
    ctx.fillStyle = 'blue';
    ctx.fillRect(150, 150, 100, 100);
}
drawBtn.addEventListener('click', function(){
    drawRectangle();
    setTimeout(() => {
        ctx.clearRect(150, 150, canvas.width, canvas.height);
    }, 3000);
 });