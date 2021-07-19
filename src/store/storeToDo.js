import {createStore} from "redux";
import {createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit";

// 1. createAction
/* const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE'); */

// 2. createReducer
/* Initial State, action.type 
createReducer를 사용하면 state를 mutate할 수 있다.
물론 이전의 방식대로 바로 새로운 state를 return할 수도 있다. 
state를 mutate할 때는 return하면 안된다. 새로운 state만 return할 수 있다. */
/* const reducer = createReducer( [], {
    [addToDo]: (state, action) => {
        state.push({text:action.payload, id: Date.now()});
    },
    [deleteToDo]: (state, action) => state.filter( existingToDo => existingToDo.id !== action.payload)
}); */


export const  {
    add,
    remove
} = toDos.actions;

/* action과 reducer를 제공 */
const toDos = createSlice({
    name: 'toDosReducer', // Redux Devtools에서 볼 수 있음
    initialState: [],
    reducers: {
        add: (state, action) => {
                state.push({text:action.payload, id: Date.now()});
            }, 
        remove: (state, action) => state.filter( existingToDo => existingToDo.id !== action.payload)
    }
})

const storeToDo = configureStore({reducer: toDos.reducers});

export default storeToDo;