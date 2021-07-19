import {createStore} from "redux";
import {createAction} from "@reduxjs/toolkit";

const addToDo = createAction('ADD'); 
/* parameter = type, string 
모든 데이터는 payload라는 변수에 들어간다.*/
const deleteToDo = createAction('DELETE');
console.log(addToDo(), deleteToDo());

export const actionCreators = {
    addToDo,
    deleteToDo
}

const reducer = (state=[], action) => {
    switch (action.type) {
        case addToDo.type:
            return [{ text: action.payload, id: Date.now() }, ...state];
        case deleteToDo.type:
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            return state 
    }
}


const storeWithToolkit = createStore(reducer);

export default storeWithToolkit;