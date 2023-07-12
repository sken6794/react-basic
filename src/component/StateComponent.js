import { useState } from 'react';

function StateComponet() {
  //state - 컴포넌트 안에서 변화하는 값 (상태변수)
  //const result = useState('초기값');
  // console.log(result[0]); //초기값
  // console.log(result[1]); //함수

  const [data, setData] = useState('d?');
  const [num, setNum] = useState(0);

  const [color, setColor] = useState('black');
  //state는 절대 직접 값을 바꾸면 안된다.
  //state는 이벤트 or 특정 함수 안에서 바꾸도록 처리한다.
  const change = () => {
    setData('변경됨');
    setNum(10);
  };

  const handleColor = () => setColor('red');
  //비동기적으로 state값을 변경 -> 화면을 리렌더링 하게 된다.
  console.log(1);
  return (
    <div>
      state : {data}
      <button onClick={change}>변경</button>
      <br />
      num : {num}
      <br />
      <h3 style={{ color: color }}>{data}</h3>
      <button onClick={handleColor}>붉은색</button>
      {/* 함수가 간단하면 인라인으로 바로 등록하는 것도 가능 */}
      <button onClick={() => setColor('blue')}>푸른색</button>
      <button onClick={() => setColor('yellow')}>노란색</button>
    </div>
  );
}

export default StateComponet;
