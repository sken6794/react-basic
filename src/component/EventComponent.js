import { useState } from 'react';
function EventComponet() {
  const [name, setName] = useState('');

  const [topic, setTopic] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
    //console.log(e);
    //마지막으로 input태그의 value속성에 리액트의 state를 기입.
  };

  const handleKeyUp = (e) => {
    //엔터를 쳤을 때 동작함
    //log에 event를 찍어보고 키코드를 확인
    if (e.key === 'Enter') {
      //console.log('엔터');
      handleClick();
    }
  };

  const handleClick = (e) => {
    alert(`${name}님의 할 일 목록 ${topic}`);
    setName('');
    setTopic('');
  };

  return (
    <div>
      <h3>리액트의 이벤트 핸들링(input 태그의 change이벤트)</h3>
      <input type="text" onChange={handleChange} value={name} />
      <br />
      변경된 값 : {name}
      <hr />
      <h3>리액트 이벤트(keyUp)</h3>
      <input
        type="text"
        onChange={(e) => setTopic(e.target.value)}
        onKeyUp={handleKeyUp}
        value={topic}
      />
      <br />
      변경된 값 : {topic}
      <hr />
      <h3>리액트 이벤트 (click)</h3>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default EventComponet;
