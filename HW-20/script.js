window.onload = function(){
    let overlayEl = document.querySelector('.overlay');
    let modalEl = document.querySelector('.modal');
    let modalTitle= document.querySelector('.modal h3');
    let todoContainer = document.querySelector('.todo-list');
    let todoNameEl = document.querySelector('#todoName');
    let addButonEl = document.querySelector('.add');
    let closeModalEl = document.querySelector('.cancel');
    let applyEl = document.querySelector('.apply');
    let searchBtn= document.querySelector("button");
    let SelectBtn= document.querySelector("select");
    let allNames = [];
    let searchInput = document.querySelector('#search-input');
    let centralImg = document.querySelector('.main-img'); 

    function showModal(){
        modalTitle.innerText='New Note'
        todoNameEl.placeholder = "Input your note..."; 
        overlayEl.classList.toggle('open');
        modalEl.classList.toggle('open');
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let modalStyle = getComputedStyle(modalEl);
        
    }
    function closeModal(){
        overlayEl.classList.toggle('open');
        modalEl.classList.toggle('open');
        todoNameEl.value = "";
    }
    function createElemntItem(value){
        let element = document.createElement('div');
        element.classList.add('todo-item');
        element.id= value;        
        // Варіант 1
        let textPart = document.createElement('div');
        textPart.classList.add('text-part');
        textPart.classList.remove("cross-out");

        let btnPart = document.createElement('div');
        let text= document.createElement('div');
        let textInfo= value;
        text.append(textInfo);
        let itemCheckbox = document.createElement('input');
        itemCheckbox.type= 'checkbox';
        itemCheckbox.classList.add('checkbox');
        element.append(itemCheckbox);
        // console.log(element);
        textPart.append(text);
        let editBtn = document.createElement('button');
        editBtn.classList.add("edit-button");
        btnPart.append(editBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add("delete-button");
        btnPart.appendChild(deleteBtn);
        textPart.append(btnPart)
        element.append(textPart); 
 
        itemCheckbox.onclick=()=>{textPart.classList.toggle("cross-out")};
        
        function editModal(){
            modalTitle.innerText='Edit your note'
            todoNameEl.value = textPart.innerText; 
            overlayEl.classList.toggle('open');
            modalEl.classList.toggle('open');
            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;
            let modalStyle = getComputedStyle(modalEl);
                        
        }
     
        editBtn.addEventListener('click', editModal);

        function editTodoEl(){
            if(todoNameEl.value.length>0){
                textPart.innerText= todoNameEl.value;
                       
            }
            else{
                alert('Type todo');
            }
        }

        // applyEl.onclick =function(){
        //     editTodoEl();
        //     closeModal('');
        // } 

        centralImg.style.display="none";

        deleteBtn.onclick=()=>{element.remove();
            if(todoContainer.childNodes.length<8){
            centralImg.style.display="block";
            }
            todoNameEl.placeholder = "Input your note..."; 
        };
       
        return element;
    }
 
    function addTodoEl(){
        if(todoNameEl.value.length>0){
            todoContainer.appendChild(createElemntItem(todoNameEl.value));
            allNames.push(todoNameEl.value);       
        }
        else{
            alert('Type todo');
        }
    }

    addButonEl.addEventListener('click', showModal);
    closeModalEl.onclick = closeModal;

    applyEl.onclick =function(){
        addTodoEl();
        closeModal('');
    } 

// Search
    searchBtn.addEventListener('click', function (){
        if (allNames.length>0){
            for(let i= 0; i<todoContainer.children.length; i++){               
                todoContainer.children[i].classList.remove('item-marked');              
                if(searchInput.value !== "" && todoContainer.children[i].id === searchInput.value ){
                    console.log(todoContainer.children[i].id);
                    todoContainer.children[i].classList.add('item-marked');
                }                 
            }
        }
    })
//Select 
    SelectBtn.addEventListener('change', function (){
        let SelectText= this.options[this.selectedIndex].text;
        // if ( SelectText == "done"){
            for(let i= 0; i<todoContainer.children.length; i++){               
                let curentItem= todoContainer.children[i];
                if (SelectText == "done" && curentItem.children[0].checked == false){
                    curentItem.classList.add("item-hide")
                } else {
                    curentItem.classList.remove("item-hide")
                }                
            } 
    })

    console.dir(todoContainer.children);
    let switcherBtn = document.querySelector('.changeTheme');
    switcherBtn.addEventListener('click', function(){
        let root = document.documentElement;
        let curentBgColor= getComputedStyle(root).getPropertyValue('--body-bg');
        let curentTextColor= getComputedStyle(root).getPropertyValue('--text-color');
        let curentMainImg= getComputedStyle(root).getPropertyValue('--main-img-bg');
        let modalBg= getComputedStyle(root).getPropertyValue('--body-bg');
        let curentModalBordertColor= getComputedStyle(root).getPropertyValue('--text-color');
        console.log(curentBgColor);
      
        if(curentBgColor == 'white'){
            root.style.setProperty('--body-bg', 'black')
        }else {
            root.style.setProperty('--body-bg', 'white')
        }
        if(curentTextColor == 'black'){
            root.style.setProperty('--text-color', 'white')
        }else {
            root.style.setProperty('--text-color', 'black')
        }
        if(curentMainImg == 'url("img/Detective-check-footprint.png")'){
            root.style.setProperty('--main-img-bg', 'url("img/Detective-check-footprint1.png")')
        }else {
            root.style.setProperty('--main-img-bg', 'url("img/Detective-check-footprint.png")')
        } if(modalBg == 'white'){
            root.style.setProperty('--body-bg', 'black')
        }else {
            root.style.setProperty('--body-bg', 'white')
        }
        if(curentModalBordertColor == 'black'){
            root.style.setProperty('--text-color', 'white')
        }else {
            root.style.setProperty('--text-color', 'black')
        }    
    })
}    
    