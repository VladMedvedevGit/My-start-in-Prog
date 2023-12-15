import {Product} from './script.js';

console.log(`Hello Everybody!`);

let bred =  new Product('Хліб', 20, 3);
console.log(bred);

bred.getTotalPrice;
bred.getInfoString;
bred.setProductName = "Батон";
bred.getInfoString;
bred.quantity = 7;
bred.getInfoString;

class  TVclass extends Product {
    constructor(productName, price, quantity, color, rating, productionYear) {
    super(productName, price, quantity) 
        this.color = color;
        this.rating = rating;
        this.productionYear = productionYear;
    }
    get getProductAge(){
        let nowDate = new Date();
        return console.log(nowDate.getFullYear() - this.productionYear);
    }
}
let samsung = new TVclass("Samsung", 300, 2, "black", 4, 2019);

console.log(samsung);
samsung.getProductAge;
