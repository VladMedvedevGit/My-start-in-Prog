// Домашня робота:
// Створіть сторінку до якої підключається  файл index.js а в файл index.js  імпортується файл який експротує класс Product ( можна взяти з попередніх завдань)


export class Product{
    constructor(productName,price,quantity){
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
    }
    get getTotalPrice(){
        return console.log(`Загальна вартість ${this.price * this.quantity}грн.`);
    }
    get getInfoString() {
        return console.log(`Назва товару: ${this.productName}, Ціна:${this.price}грн. Кількість: ${this.quantity}шт.`); 
    }  
    set setProductName(newName) {
        this.productName = newName;
        console.log(this.productName)
    } 
    set setQuantity(value){
        this.productName(this.quantity = value);
    }
}