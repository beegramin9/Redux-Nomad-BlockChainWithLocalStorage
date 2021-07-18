import {createStore} from "redux";

const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = text => (
    {type: ADD,
    text}
)

const deleteToDo = id => (
    {type: DELETE,
    id: parseInt(id)}
)

export const actionCreators = {
    addToDo,
    deleteToDo
}

const reducer = (state=[], action) => {
    switch (action.type) {
        case ADD:
            return [ {text: action.text, id: Date.now()}, ...state ]
        case DELETE:
            return state.filter( existingToDo => existingToDo.id !== action.id)
        default:
            return state 
    }
}


const storeToDo = createStore(reducer);

export default storeToDo;