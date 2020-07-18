
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoContainer = document.querySelector('.todo-container');
const todoList = document.querySelector('.todo-list');

todoBtn.addEventListener('click', function (event) {
    event.preventDefault();
    //create to do div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoList.appendChild(todoDiv);

    //Create new item
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    todoDiv.appendChild(newItem);
    newItem.innerText = todoInput.value;
    todoInput.value = '';

    // Create delete button
    const deleteBtn = document.createElement('button');
    todoDiv.appendChild(deleteBtn);
    deleteBtn.classList.add('trash-btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    //Delete button eventlistener
    deleteBtn.addEventListener('click', function () {
        newItem.style.display = 'none';
        //newItem.classList.add('flip');
        deleteBtn.style.display = 'none';
        checkBtn.style.display = 'none';
    });

    //Create check button 
    const checkBtn = document.createElement('button');
    todoDiv.appendChild(checkBtn);
    checkBtn.classList.add('check-btn');
    checkBtn.innerHTML = '<i class="fas fa-check-square"></i>';

    //Check button eventlistener
    checkBtn.addEventListener('click', function () {
        newItem.classList.toggle('line');
        checkBtn.classList.add('green');
        newItem.classList.toggle('fade')
        checkBtn.classList.toggle('fade')
        deleteBtn.classList.toggle('fade');
    });
});


