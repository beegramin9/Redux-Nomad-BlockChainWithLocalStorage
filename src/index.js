import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/App";
import { Provider } from "react-redux";
import storeWithToolkit  from './store/storeWithToolkit'; 


ReactDOM.render(
    <Provider store={storeWithToolkit}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
