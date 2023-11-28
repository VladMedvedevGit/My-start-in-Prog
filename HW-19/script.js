
let userMinutes= document.querySelector('#minutes');
userMinutes.placeholder= "00";

let userSeconds= document.querySelector('#seconds');
userSeconds.placeholder= "00";

let startBtn= document.querySelector('.start'); 
let resetBtn= document.querySelector('.reset'); 
let counterInterval; 
startBtn.addEventListener('click', function(){
    
        function delay(unit){ 
            let counter= +unit.value; 
            if(counter > 10){
                counter -=1;          
                unit.value=counter; 
            console.log(counter);
            } else if(counter < 11 && counter > 0){
                counter -=1          
                unit.value= `0${counter}`; 
                console.log(counter);
                } 
        }   
        if (+userMinutes.value == 0 && +userSeconds.value > 0 && +userSeconds.value <= 60){
           setInterval(delay, 1000, userSeconds);     
        };
        
        // if (+userMinutes.value > 0 || +userSeconds.value > 0){
        //     setInterval(delay, 1000 * 60, userMinutes);
        //    for (let i=60; i>0; i-=1) {
        //     setInterval(delay, 1000, userSeconds);
        //    } 
        // } 
});
resetBtn.addEventListener('click', function(){
    clearInterval(counterInterval);
    userMinutes.value= "";
    userSeconds.value= ""; 
    userMinutes.placeholder= "00";  
    userSeconds.placeholder= "00"; 
});