import { useState } from 'react';

function StateComponentQ() {
  const [count, setCount] = useState(0);

  // const upCount = () => {
  //   setCount(count + 1);
  // };
  // const downCount = () => {
  //   setCount(count - 1);
  // };
  // const resetCount = () => {
  //   setCount(0);
  // };
  return (
    <div>
      <h3>실습</h3>
      카운트 : {count}
      <br />
      {/* <button onClick={upCount}>증가</button>
      <button onClick={downCount}>감소</button>
      <button onClick={resetCount}>초기화</button> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {/* 흔히 할 수 있는 실수. count++ 는 const값을 변경하는 거기때문에 에러가 발생한다. */}
        {/* const인 count 의 현재 값에 +1 을 한다는 의미로 작성해야 에러 없이 동작한다. */}
        증가
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        감소
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        초기화
      </button>
    </div>
  );
}

export default StateComponentQ;
