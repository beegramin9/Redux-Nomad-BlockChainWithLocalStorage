import {createStore} from 'redux';

const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.getElementById('number')


/*  reducer: state를 변화시키는 함수
첫번째 parameter로 state를 받고, logic을 통해서 state를 바꾼 후
modified된 state값을 return함, store.getState()로 얻을 수 있음
!!! 중요한 것은 짝지어진 modifyCount(=reducer)만
storeCount(=store)의 state를 바꿀 수 있음, 다른 함수들은 할 수 없다! 

두번째 parameter로 action을 받는데, action은 state를 modify할 
로직을 짜는 역할을 담당
action은 object 형태이며, store.dispatch(object)로 보낼 수 있음 */

const ADD = "ADD";
const MINUS = "MINUS";

const modifyCount = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default:
      return count
  }
}

/* store: state(=동적 데이터)를 넣어놓는 장소(=변수) */
const storeCount = createStore(modifyCount);

const handleClickAdd = () => (storeCount.dispatch({type: ADD}));
const handleClickMinus = () => (storeCount.dispatch({type: MINUS}));

add.addEventListener('click', handleClickAdd);
minus.addEventListener('click', handleClickMinus);

const onClick = () => {
  console.log('Subscribe: State의 변화를 감지한다. getState()로 가져와서 변화된 state를 렌더링할 수 있다.');
  console.log(storeCount.getState());
  number.innerText = storeCount.getState();
} 
/* subscribe는 함수를 parameter로 받는데, 
dispatch에 action을 보내서 state가 변할 때마다 subscribe에 전달한 함수가 호출된다 */
storeCount.subscribe(onClick);