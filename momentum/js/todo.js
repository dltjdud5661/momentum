// #7 TO DO LIST
const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('quote');

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newToDo;
    const button = document.createElement('button');
    button.innerText = '🐧';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = todoInput.value; // input의 현재 value를 새로운 변수에 복사하는 것이다.
    todoInput.value = '';  //newToDo가 비워지는 게 아니다.
    paintToDo(newToDo);  //nput.value를 인자로 또 다른 함수 호출
}

todoForm.addEventListener('submit', handleToDoSubmit);
