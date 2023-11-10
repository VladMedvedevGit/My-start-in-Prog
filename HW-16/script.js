// Домашня робота:
// 1)Створити класс “Товар” (Product), який має наступні властивості і методи:
// Властивості:
// productName (ім’я товару)
// price (ціна товару)
// quantity (кількість одиниць товару)
// Методи:
// гетер getTotalPrice() - повертає загальну вартість товару (ціна * кількість).
// гетер getString() - повертає рядок з інформацією про товар у форматі “Ім’я: {ім’я}, Ціна: {ціна}, Кількість: {кількість}”.
// cетер  setProductName який змінює назву товара
// сетер setQuantity який вказує кількість

// 2) Створити класс TVclass  який наслідує попередній класс, наслідувати ключі і доадти нові  (color,  rating, productionYear) 

// 3) Створити гетер в классі який видає інформацію про те скільки років тому був випущений телевізор

class Product{
    constructor(productName,price,quantity){
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
    }
    get getTotalPrice(){
        return console.log(this.price * this.quantity);
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
