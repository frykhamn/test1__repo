const addBtn = document.getElementById('add-btn');
const input = document.getElementById('input-field');
const todosContainer = document.getElementById('todos');

let todos = [];

const renderTodos = () => {

    todosContainer.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const todoSpan = document.createElement('span');
        todoSpan.innerText = todo;

        const removeButton = document.createElement('button');
        removeButton.innerText = "X";
        removeButton.classList.add('remove-btn');
        removeButton.setAttribute("data-id", index);

        todoDiv.append(todoSpan, removeButton);

        todosContainer.appendChild(todoDiv);
    });
}

addBtn.onclick = function () {
    const todoText = input.value;
    if (todoText) {
        todos.push(todoText);
        input.value = '';
        renderTodos();
    }
};

todosContainer.onclick = (event) => {

    if (event.target.classList.contains('remove-btn')) {
        const index = event.target.getAttribute('data-id');
        todos.splice(index, 1);
        renderTodos();
    }

}

renderTodos();