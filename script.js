const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('my to-do list');

function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === ' ') {
        alert('Por favor ingrese una nueva tarea!');
        return;
    }

const li = document.createElement('li');
li.textContent = taskText;

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.className = 'delete-btn';

deleteBtn.addEventListener('click', () => { 
    todoList.removeChild(li);
});

li.appendChild(deleteBtn);

todoList.appendChild(li);

todoInput.value = '';

}

addBtn.addEventListener('click', addTask);

todoInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addTask();
}
});
