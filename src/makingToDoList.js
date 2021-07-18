import { createStore } from "redux";

const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

/* Dispatch Type */
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

/* Dispatched Objects */
const addToDo = text => (
    /* 여기 Object가 바로 reducer의 action */
    {type: ADD_TODO, 
    text}
)

const deleteToDo = id => (
    {type: DELETE_TODO,
    id}
)



/* State 3원칙
1. state는 read-only이다. 즉 storeToDo.getState()+1 이런식으로 수정할 수 없다.
2. state를 수정하는 유일한 방법은 action을 보내는 것 뿐이다. 
3. mutating state 대신 새로운 state object를 만들어서 return해야 한다. */
const reducer = (state = [], action) => {
    /* reducer 내의 logic에 들어있는 state는 예전 state고
    return되는 값이 새로운 state가 된다 */
    switch(action.type) {
        case ADD_TODO:
            /* [ 기존 state(ES6 SPREAD), 새로운 입력 ] */
            return [{text: action.text , id: Date.now()}, ...state];
        case DELETE_TODO:
            return state.filter(eachToDo => eachToDo.id !== parseInt(action.id)); // HTML에서 받아오는 숫자는 str
        default:
            return state;
    }
}

const storeToDo = createStore(reducer);

/* Action creator = Dispatch the action */
const dispatchAddToDo = (text) => {
    storeToDo.dispatch(addToDo(text));
}

const dispatchDeleteTodo = (e) => {
   const id = e.target.parentNode.id;
   storeToDo.dispatch(deleteToDo(id));
}

/* After dispatching new ToDo via form, subscribe listens to that and showToDos activates */
const showToDos = () => {
    const currentToDos = storeToDo.getState();
    ul.innerHTML = ""; 
    currentToDos.forEach(currentToDo => {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "DELETE";
        deleteButton.addEventListener('click', dispatchDeleteTodo);
        li.id = currentToDo.id;
        li.innerText = currentToDo.text;
        li.appendChild(deleteButton);
        ul.appendChild(li);
    });

}

storeToDo.subscribe(showToDos);

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo);
}

form.addEventListener('submit',onSubmit);