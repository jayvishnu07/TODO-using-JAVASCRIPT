const listItemsUl = document.querySelector(".list-items")
const inputTxt = document.querySelector(".input-box");
const clicker = document.querySelector(".input-button");
const todoFliter = document.querySelector(".todo-filter");




clicker.addEventListener("click",addTodoListFun);
listItemsUl.addEventListener("click",deleteTodoFun);
todoFliter.addEventListener("click",todoFilterFun);
document.addEventListener("DOMContentLoaded",getTodos);


function addTodoListFun(){    
    const todoListDiv = document.createElement("div");
    todoListDiv.classList = "todo-list-div";

    const todoListLi = document.createElement("li");
    todoListLi.innerText = inputTxt.value;
    todoListLi.classList = "todo-list-li"
    todoListDiv.appendChild(todoListLi);
    storeToLocalStorage(inputTxt.value);

    const checkBoxButton = document.createElement("button");
    checkBoxButton.innerHTML = '<i class="fas fa-check" ></i>';
    checkBoxButton.classList = 'todo-list-checkbox';
    todoListDiv.appendChild(checkBoxButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash" ></i>';
    deleteButton.classList = 'todo-list-deletebutton';
    todoListDiv.appendChild(deleteButton);

    listItemsUl.appendChild(todoListDiv)
    inputTxt.value = "";
};

function deleteTodoFun(e){
    const item = e.target;
    const todo = item.parentElement;
    if(item.classList[0] === 'todo-list-deletebutton'){
        todo.classList.add('fall');
        todo.addEventListener("transitionend",function(){
            todo.remove();
            removeTodo(todo);
        });
    }
    if(item.classList[0] === 'todo-list-checkbox'){
        todo.classList.toggle('completed-check');
    }
}

function todoFilterFun(e){
    // const todos = document.querySelectorAll('.list-items div');
    // var choice = todoFliter.value;
   
    const todos = listItemsUl.childNodes;
    let todoArray = []

    for(let i = 1;i<todos.length;i++){
        todoArray = [...todoArray, todos[i]]
    }

  
    todoArray.forEach(function(todo){
        switch (e.target.value) {
            case "all": 
                todo.style.display = "flex"               
                break;
            case "completed":
                if(todo.classList.contains('completed-check')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case 'uncompleted':
                if(todo.classList.contains('completed-check')){
                    todo.style.display = "none";
                }else{
                    todo.style.display = "flex";
                }
                break;
        }
    })
}

function storeToLocalStorage(todo){
    let todos=[];
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos))
}

function getTodos(){
    let todos= [];
    
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    for(let i=0;i<todos.length;i++){
        process(todos[i]);
    }
}

function process (todo){
// again creating the whole thing
const todoListDiv = document.createElement("div");
todoListDiv.classList = "todo-list-div";

const todoListLi = document.createElement("li");
todoListLi.innerText = todo;
todoListLi.classList = "todo-list-li"
todoListDiv.appendChild(todoListLi);

const checkBoxButton = document.createElement("button");
checkBoxButton.innerHTML = '<i class="fas fa-check" ></i>';
checkBoxButton.classList = 'todo-list-checkbox';
todoListDiv.appendChild(checkBoxButton);

const deleteButton = document.createElement("button");
deleteButton.innerHTML = '<i class="fas fa-trash" ></i>';
deleteButton.classList = 'todo-list-deletebutton';
todoListDiv.appendChild(deleteButton);

listItemsUl.appendChild(todoListDiv)
}

function removeTodo(todo){
    let todos= [];
    
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1)
    localStorage.setItem("todos",JSON.stringify(todos));
}