// selectors
let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');
let filterOption = document.querySelector('.filter-todo');

// event listeners
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)


//functions
function addToDo(event) {
    // prevent form from submitting
    event.preventDefault();
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create li
    let newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // add todo to local storage
    savelocalStorage(todoInput.value)
    // check mark button
    let completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton);
     // check mark trash
    let trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton);
    // append to list
    todoList.appendChild(todoDiv);
    todoInput.value = ''; 
}

function deleteCheck(e) {
    // console.log(e.target)
    let item = e.target;
    if (item.classList[0] === 'trash-btn') {
        let todo = item.parentElement;
        // add annimation
        todo.classList.add('fall')
        removeLocalTodos(todo)
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
        
    }
    if (item.classList[0] === 'complete-btn') {
        let todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    let todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                        todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
        }
    }) 

}

// save to local storage
function savelocalStorage(todo) {
    let todos;
        if (localStorage.getItem('todos') === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
    // console.log('Hello')
    let todos = [];
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create li
    let newTodo = document.createElement('li')
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark button
    let completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton);
     // check mark trash
    let trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton);
    // append to list
    todoList.appendChild(todoDiv);
    todoInput.value = '';         
    })

}

function removeLocalTodos(todo) {
    let todos;
        if (localStorage.getItem('todos') === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
    }
    let todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos))
}

document.createElement( )





// function startMe() {
//     setTimeout(thisAlert, 2000);
// }
let id = 0;
function thisAlert() {
    alert("My name is Duchblaze!")
}
// function startMe() {
//     stopAlert = setTimeout(function () {
//         alert("My name is Duchblaze!");
//     }, 3000)
// }

function startMe() {
    id = setTimeout(thisAlert, 5000)
}

function stopMe() {
    clearTimeout(id);
}