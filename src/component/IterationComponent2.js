import { useState } from 'react';

function IterationComponet2() {
  const [list, setList] = useState([
    { id: 1, topic: 'hello' },
    { id: 2, topic: 'bye' },
  ]);

  //2. input데이터 state
  const [inputData, setInputData] = useState('');

  //5. 삭제는 아이디가 필요하다
  // const handleRemove = (id) => {
  //   //return에 true가 걸린 요소만 새로운 배열을 만듦
  //   const result = list.filter((item, index) => {
  //     // console.log(item);
  //     // console.log(index);

  //     return item.id !== id;
  //   });

  //   setList(result);
  // };
  //삭제하고자 하는 태그의 아이디를 구해서 필터에서 걔만 제외한 새로운 리스트를 받아서
  // setList로 리스트에 띄울 목록을 재구성
  const handleRemove = (id) => {
    const result = list.filter((item) => item.id !== id);
    setList(result);
  };

  const newList = list.map((item) => (
    <li key={item.id} onDoubleClick={() => handleRemove(item.id)}>
      {item.topic}
    </li>
  ));

  //3. input 데이터 핸들링
  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  //4. 클릭이벤트 생성
  const handleClick = () => {
    //console.log(inputData);
    //id는 마지막 아이디보다 큰 숫자.
    const obj = [{ id: list[list.length - 1].id + 1, topic: inputData }];

    //기존 배열에 합침
    //const newData = list.concat(obj);
    const newData = [...list, ...obj];
    setList(newData);
    setInputData('');
  };

  return (
    <div>
      <h3>할 일 목록 만들기</h3>

      <input type="text" onChange={handleChange} value={inputData} />
      {/* 4.클릭 이벤트 생성 */}
      <button onClick={handleClick}>추가하기</button>
      <ul>{newList}</ul>
    </div>
  );
}

export default IterationComponet2;
