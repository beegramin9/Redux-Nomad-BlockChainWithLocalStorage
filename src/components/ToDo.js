import React from "react";
import { connect } from "react-redux";
import { actionCreators } from '../store/storeWithToolkit';
import { Link } from "react-router-dom";

function ToDo ( {text, clickDeleteButton, id} ) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text} 
            </Link>
            <button onClick={clickDeleteButton}>DELETE</button>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    /* ownProps: 원래 가지고 있던 text prop과 id prop */
    console.log('Todo',ownProps);
    return { clickDeleteButton: () => dispatch(actionCreators.deleteToDo(ownProps.id))}
}

export default connect(null, mapDispatchToProps) (ToDo);