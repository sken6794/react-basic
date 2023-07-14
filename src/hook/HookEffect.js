import { useEffect, useState } from 'react';
function HookEffect() {
  //state를 관리하는 훅
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  console.log(1);
  //생명주기 훅
  //   useEffect(() => {
  //     console.log('렌더링완료 : ' + name);
  //   });
  // 2번째 매개변수로 [] 을 주면 딱 한번만 실행 됨

  //   useEffect(() => {
  //     console.log('첫번째 마운트 이후에만 실행');
  //   }, []);

  //특정 값이 업데이트 될 때 실행된다.
  useEffect(() => {
    console.log('name업데이트 시 실행');

    return () => {
      console.log('unmount될 때 실행된다.');
      console.log(`인풋의 값이 바뀌기 직전 값${name}`); // state가 ab로 변경할 때 a가 출력
    };
  }, [name, age]);
  console.log(2);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />
      <br />
      이름 : {name}
      나이 : {age}
    </div>
  );
}

export default HookEffect;
