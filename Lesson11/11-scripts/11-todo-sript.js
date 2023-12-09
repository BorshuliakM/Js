const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
}, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
}];

renderTodoList();

document.querySelector('.add-btn')
    .addEventListener('click', () => {
    addTodo();
    });

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-btn js-delete-todo-button"
            ">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector('.js-todolist')
        .innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deletebtn, index) => {
            deletebtn.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });
}

/*function renderTodoList() {

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        /*const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-btn"
                onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            ">Delete</button>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todolist').innerHTML = todoListHTML;
}*/

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });


    inputElement.value = '';

    renderTodoList();
}