
let Button = document.querySelector('.container .text button');
const containerTodo = document.querySelector('.container-todo');






Button.addEventListener('click' , function(){
    // Ambil Text Dari Input 
    let input = document.querySelector('.container input')
   
    // Create ToDo Div
    let toDo = document.createElement('div');
    let toDoText = document.createTextNode(input.value);
    toDo.appendChild(toDoText);
    toDo.classList.add('toDo')
    // Create Button
    let kotak = document.createElement('div');
    kotak.classList.add('kotak');  
    toDo.appendChild(kotak); 
    // Append 
    containerTodo.appendChild(toDo);
    input.value = "";
});

containerTodo.addEventListener('click' , deleteCheck);

function deleteCheck(event){
   
    const item = event.target;

        if (item.classList[0] === "kotak"){
            const todoItem = item.parentElement;
            todoItem.classList.add('transition');
            todoItem.addEventListener('transitionend' , function(){
                todoItem.remove();
            });
           
        }
    
}




