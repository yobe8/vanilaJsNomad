const toDoForm = document.querySelector('.js-toDoForm'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.querySelector('.js-toDoList')

const TODOS_LS = 'toDos';

function paintToDo(text) {
    const toDoLiTags = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText = '❌';
    const span = document.createElement('span');
    span.innerText = text;
    toDoLiTags.appendChild(span);
    toDoLiTags.appendChild(delBtn);
    toDoList.appendChild(toDoLiTags);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null) {

    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();