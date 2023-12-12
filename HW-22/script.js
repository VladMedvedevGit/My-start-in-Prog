// Домашня робота:
// - створити запит до АПІ 
// https://swapi.dev/documentation
// Вивести інформацію в карточку, де розмістити кнопку де можна отримати додаткову інфу по кліку на кнопку виконавши ще один запит. Наприклад отримали інформацію про героя фільму, отже повина бути кнопка по кліку на яку буде виведена додаткова інформація про фільм в яких він брав участь 

let hero = document.querySelector('.hero-cart');
let btn = document.querySelector('button');
let heroInfo = document.querySelector('.hero-info');

function makeResponse(url,wrap ){    
    let xhr= new XMLHttpRequest;
    xhr.open('GET', url, true);
    xhr.send();
    xhr.responseType = 'json';
    xhr.onreadystatechange= function(){
        if(xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400){           
         let result = xhr.response;
            for(let key in result){
                let h3Description= document.createElement('h3')
                h3Description.innerText= `${key}: ${result[key]}`;
                wrap.append( h3Description);        
                console.log(h3Description);
                if(key == "gender" || key == "release_date"){
                    break;
                }
            }            
            btn.onclick= function(){
                result.films.forEach(link => {
                    makeResponse(link, heroInfo)
                });
            }
        }
    }
}
makeResponse("https://swapi.dev/api/people/1/", hero);



  