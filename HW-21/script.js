// Домашня робота:
// -Створіть функцію, яка приймає рядок і повертає true, якщо він є коректною електронною поштою, і false в іншому випадку.

function checkMail(mail){
    let mailRegEx = /[0-9a-z_]+@[0-9a-z_]/;
    // /^(([^<>()[\].,;:\s@"]+
    //  (\.[^<>()[\].,;:\s@"]+)*)|(".+"))@
    //   (([^<>()[\].,;:\s@"]+\.)+
    //     [^<>()[\].,;:\s@"]{2,})$/iu
    let testMail  = mailRegEx.test(mail) ? true : false;
    return console.log(testMail);
}
let userEmail = 'My Test@gmail.com'; 
checkMail(userEmail);



// - Створіть функцію для перевірки пароля. Пароль повинен містити щонайменше 8 символів, включаючи принаймні одну цифру, одну велику і одну малу літеру.
function checPassword(pass){
    let passRegEx = /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]){8,}/g;
  
    let testPass  = passRegEx.test(pass) ? "password is correct" : "password is incorrect";
    return alert(testPass);
}
let userPass = 'FFFFF1q'; 
checPassword(userPass);

// - Створіть функцію яка перевіряє чи дата в такому форматі 21-12-1999. Якщо так вивести true якщо ні false



function checkDate(date){
    let dateRegEx = /^\d{1,2}\-\d{1,2}\-\d{4}$/;
    let testDate  = dateRegEx.test(date) ? true : false;
    return console.log(testDate );
}
let myDate = '12.12.2022'; 
checkDate(myDate);