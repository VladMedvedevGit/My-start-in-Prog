
let userMinutes= document.querySelector('#minutes');
userMinutes.placeholder= "00";
let userSeconds= document.querySelector('#seconds');
userSeconds.placeholder= "00";
let startBtn= document.querySelector('.start'); 
let resetBtn= document.querySelector('.reset'); 
let secInterval;
startBtn.addEventListener('click', function(){    
    function delay(unit,unit2){ 
        let counter= +unit.value; 
        if(counter > 10){
            counter -=1;          
            unit.value=counter; 
        } else if(counter < 11 && counter){
            counter -=1;          
            unit.value= `0${counter}`; 
        } else if(+unit2.value >0 && counter == 0){
            counter = 60
            unit2.value --;
            counter -=1;   
            unit.value=counter;        
            if(+unit2.value < 10 && +unit2.value >= 0){
                unit2.value= `0${ unit2.value}`; 
            }
        } else if(+unit2.value == 0 && counter == 0){
            alert("Time's over"); 
            clearInterval(secInterval);   
        }    
    }; 
    if (+userSeconds.value > 0 && +userSeconds.value <= 60 || +userMinutes.value > 0){
        secInterval= setInterval(delay, 1000, userSeconds, userMinutes )
    };       
});
resetBtn.addEventListener('click', function(){
    clearInterval(secInterval);
    userMinutes.value= "";
    userSeconds.value= ""; 
    userMinutes.placeholder= "00";  
    userSeconds.placeholder= "00"; 
});
