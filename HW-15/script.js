
// Домашня робота:
// - Створіть функцію конструктор filmMaker  яка створює обєкт з ключами filmName,  yearProduction,  rating . створити 5 обєктів і розмістити в масиві films 


let FilmMaker = function(filmName,  yearProduction,  rating){
    this.filmName= filmName;
    this.yearProduction= yearProduction;
    this.rating= rating;
}

let filmsArrow = [];
function makeFilmsArrow(filmName,yearProd,rating) {
    let filmsObj = new FilmMaker(filmName,yearProd,rating);
    filmsArrow.push(filmsObj);
}

makeFilmsArrow("Jurassic Park", 1993, 5);
makeFilmsArrow("The Matrix", 1999, 5);
makeFilmsArrow("Forrest Gump", 1994, 5);
makeFilmsArrow("Pirates of the Caribbean", 2003, 5);
makeFilmsArrow("Sherlock Holmes", 2009, 5);

console.log(filmsArrow);

// - Створіть на прототипі filmMaker  метод який виводить інформацію про фільм в console.log

FilmMaker.prototype.filmInfo = function(){
    console.log(`Наза фільму-${this.filmName}, рік випуску-${this.yearProduction}, рейтинг-${this.rating}`);
}
filmsArrow[2].filmInfo();

// -  Створити функцію яка сортує фільми за рoком випуску і повертає новий массив

function sortFilmsYear(arr){       
        arr.sort(function(a, b){
        return a.yearProduction - b.yearProduction;
        }); 
    return console.log(arr);    
};
sortFilmsYear(filmsArrow);

// -  Створіть новий массив з const strings = ["apple", "banana", "orange"]; в якому всі значення в верхньому регістрі

const strings = ["apple", "banana", "orange"]; 

let newStrings= [];
for(let str of strings){
    newStrings.push(str.toUpperCase())
}
console.log(newStrings);

// - Створіть масив рядків і використовуйте forEach, щоб вивести кожен рядок в консоль 
// після перетворення його в нижній регістр.

 const words = ["JavaScript", "HTML", "CSS"];

 words.forEach(str => {
    console.log(str.toLowerCase())
 });

// - Створіть масив чисел. Використовуйте filter, щоб відфільтрувати та залишити тільки парні числа. 
// Потім використовуйте sort, щоб впорядкувати їх в зростаючому порядку.

const numbers = [5, 2, 8, 1, 6];

let newNumbers = numbers
                        .filter(function(number){
                            return number % 2 == 0;
                        })
                        .sort(function(a,b) {
                            return a - b;
                        })                        
console.log(newNumbers);   

