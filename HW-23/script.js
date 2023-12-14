// Домашня робота:
// - Використовуючи АПІ, зробіть запит до всіх пород, виведіть їх список на екрані
// - при кліку на назву породи зробіть ще один запит і виведіть картинку цієї породи на екрані під назвою
// https://dog.ceo/dog-api/documentation/

let wrapper = document.querySelector('.wrapp');
let dogImgWrapp = document.querySelector('.dog-img');

function drawDogBreeds(breed){
   for(let key in breed.message){
        let breedName= document.createElement('h4')
        breedName.innerText= key;

        wrapper.append(breedName);  

        if(breed.message[key].length > 0){
            let breedTypes= document.createElement('ul');

            breed.message[key].forEach(element => {
                let breedType= document.createElement('li');
                breedType.innerText= `${element}`;
                breedTypes.appendChild(breedType);
            });
            wrapper.append(breedTypes);
        }      
   }
   function showImg(img){
        console.log(img.message); 
        let breedImg = document.createElement('img');
        breedImg.src = img.message; 
        dogImgWrapp.innerHTML = ''; 
        dogImgWrapp.append(breedImg);
   }
    wrapper.addEventListener('click', function(e){
        console.log(e.target); 
        if (e.target.tagName === 'H4' || e.target.tagName === 'LI') {
            fetch(`https://dog.ceo/api/breed/${e.target.innerText}/images/random`)
            .then(function (response) {
                if (response.status !== 200) {
                  return Promise.reject(new Error(response.statusText))
                }
                  return Promise.resolve(response)
            })
            .then(response => response.json())
            .then(json => {
                showImg(json);
                console.log(json); 
            })
            .catch(error => {
                alert('НАЖАЛЬ зображення цієї породи НЕ ВІДОБРАЖАЄТЬСЯ')
            })
        }
    })
};
fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(json => {
        console.log(json);    
        drawDogBreeds(json);
    })
 