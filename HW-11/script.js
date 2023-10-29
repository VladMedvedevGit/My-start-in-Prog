let userNickname = "Petya";
let userScore = 23;

let itemPrice = prompt("Вкажіть ціну товару");
let itemCount = prompt ("Вкажіть кількість товарів");
let amountForPaid = itemPrice * itemCount;

document.write(`Загальна сума до сплати: ${amountForPaid} грн. <br>`);

let discount = Math.floor(amountForPaid * 0.05);

document.write(`Ваша знижка: ${discount} грн.<br>`);
document.write(`Підсумкова вартість: ${amountForPaid - discount} грн.`);
