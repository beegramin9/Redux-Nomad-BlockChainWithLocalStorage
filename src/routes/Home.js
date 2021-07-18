import React, {useState, Fragment} from "react";
import { connect } from "react-redux";
import { actionCreators } from '../store/storeToDo';
import ToDo from "../components/ToDo";

function Home( {stateToDos, dispatchAddTodo} ) {
    const [text, setText] = useState("");
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        dispatchAddTodo(text)
        setText("");
    }
    return (
        <Fragment>
            <h1>To Dos</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} placeholder="Write a to do" onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul>{stateToDos.map( stateToDo => <ToDo {...stateToDo} key={stateToDo.id}/>)}</ul>, 
        </Fragment>
    );
}

/* 1. getState역할
store.getState()로 받은 state를 Component props에 전달하는 역할
Home.js에서 store.js의 현재 state를 받아와서 Home Component props에
return값을 추가로 전달한다 == Home( {props} )자리에 매개변수로 줄 수 있음, Pure React */
function mapStateToProps(state, ownProps) {
    /* store에서 받아온 state, 원래 가지고 있던 props, 여기서는 react-router부터 받아온 history, location 등의 props */
    console.log('mapStateToProps',state, ownProps);
    /* 기존의 ownProps(react-router에 의해 제공된 history, location...) object에 stateToDos: state object 추가(concatonation) */
    return { stateToDos: state }
}

/* 2. dispatch역할
store.dispatch()로 받은 dispatch를 Component props에 전달하는 역할, Home( {props} )자리에 매개변수로 줄 수 있음.
remember, redux에서의 dispatch는 action을 보내는 것. action엔 type뿐만 아니라 logic에서 사용될 변수도 같이 보내진다
Home.js에서 store.js의 dispatch를 Home Component props에 return값을 추가로 전달한다.

해당 Component가 return될 때마다 mapStateToProps, mapDispatchToProps가 실행된다
즉 mapStateToProps에서 state를 받아오고,
mapDispatchToProps에서 state를 변화시키는 logic을 가진 dispatch를 가져온다 */
function mapDispatchToProps(dispatch, ownProps) {
    console.log('mapDispatchToProps',dispatch);
    return { dispatchAddTodo: text => dispatch(actionCreators.addToDo(text)) }
}
/* connect(mapStateToProps, mapDispatchToProps) 
둘 중 하나만 필요하다면 나머지를 null로 바꿔주면 된다.*/
export default connect(mapStateToProps, mapDispatchToProps) (Home);