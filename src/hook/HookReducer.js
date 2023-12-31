import { useReducer } from 'react';

//1. 리듀서 함수 ( state값, reducer 실행 함수로 전달하는 상태값)
//컴포넌트 함수 밖에 선언
const myReducer = (state, action) => {
  console.log(state);
  console.log(action);

  //action에 따라서 상태를 변경하고 return state 반환
  if (action.x === 'increase') {
    state = { value: state.value + 1 };
  } else if (action.x === 'decrease') {
    state = { value: state.value - 1 };
  } else if (action.x === 'reset') {
    state = { value: 0 };
  }

  return state;
};

function HookReducer() {
  //2. [현재 state, reducer실행함수] =  reducer hook ( 실행시킬 reducer 함수, state초기값)
  const [state, func] = useReducer(myReducer, { value: 0 });

  const handleClick = () => {
    //reducer 함수를 실행
    func({ x: 'increase' });
  };

  return (
    <div>
      <h3>카운트 : {state.value}</h3>
      <button onClick={handleClick}>증가</button>
      <button onClick={() => func({ x: 'decrease' })}>감소</button>
      <button onClick={() => func({ x: 'reset' })}>초기화</button>
    </div>
  );
}
export default HookReducer;
