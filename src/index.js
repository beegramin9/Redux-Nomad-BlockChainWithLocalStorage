import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/App";
import { Provider } from "react-redux";
import storeToDo  from './store/storeToDo'; 


ReactDOM.render(
    <Provider store={storeToDo}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
