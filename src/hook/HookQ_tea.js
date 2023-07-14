import { useState, useRef, useEffect } from 'react';

const [form, setForm] = useState({ id: '', pw: '' });

//inputRef 선언
const idRef = useRef(null);
const pwRef = useRef(null);

const handleChange = (e) => {
  const copy = { ...form, [e.target.name]: e.target.value };
  setForm(copy);
};

//useEffect 첫 번째 마운트에 포커싱

useEffect(() => {}, []);

const handleClick = () => {
  if (form.id === '') {
    alert('아이디 필수');
    idRef.current.focus();
    return;
  } else if (form.pw === '') {
    alert('비번 필수');
    pwRef.current.focus();

    return;
  }
  alert(`id : ${form.id}, pw : ${form.pw}`);
};

function HookQ() {
  return (
    <div>
      <input
        type="text"
        name="id"
        placeholder="아이디"
        onChange={handleChange}
        value={form.id}
        ref={idRef}
      />
      <br />
      <input
        type="password"
        name="pw"
        placeholder="비밀번호"
        onChange={handleChange}
        value={form.pw}
        ref={pwRef}
      />
      <br />
      <button onClick={handleClick}>로그인</button>
    </div>
  );
}
export default HookQ;
