import { useState } from 'react';
function EventComponent2() {
  //state 여러개를 객체로 관리하기
  const [form, setForm] = useState({ name: '', topic: '' });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    const copy = { ...form, [e.target.name]: e.target.value }; //객체 복사

    //객체의 키값이 변수이면 [] 로 감싸준다.
    //console.log(copy);

    setForm(copy);
  };

  const handleClick = () => {
    alert(`${form.name}님의 할일 목록 ${form.topic}`);
    setForm({ name: '', topic: '' });
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
      <h2>EventComponent2</h2>
      <h3>리액트의 이벤트 핸들링(input 태그의 change이벤트)</h3>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={form.name}
      />
      <br />
      변경된 값 : {form.name}
      <hr />
      <h3>리액트 이벤트()</h3>
      <input
        type="text"
        name="topic"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={form.topic}
      />
      <br />
      변경된 값 : {form.topic}
      <hr />
      <h3>리액트 이벤트 ()</h3>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default EventComponent2;
