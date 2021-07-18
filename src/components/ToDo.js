import React from "react";
import { connect } from "react-redux";
import { actionCreators } from '../store/storeToDo';
import { Link } from "react-router-dom";

function ToDo ( {text, clickDeleteButton, id} ) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text} <button onClick={clickDeleteButton}>DELETE</button>
            </Link>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    /* ownProps: 원래 가지고 있던 text prop과 id prop */
    console.log('Todo',ownProps);
    return { clickDeleteButton: () => dispatch(actionCreators.deleteToDo(ownProps.id))}
}

export default connect(null, mapDispatchToProps) (ToDo);