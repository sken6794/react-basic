import { useState, useRef, useEffect } from 'react';

function HookQ() {
  const [login, setLogin] = useState({ id: '', pw: '' });

  const handleIdChange = (e) => {
    const copy = { ...login, id: e.target.value };
    setLogin(copy);
  };

  const handlePwChange = (e) => {
    const copy = { ...login, pw: e.target.value };
    setLogin(copy);
  };

  const idRef = useRef(null);
  const pwRef = useRef(null);

  const handleClick = () => {
    if (login.id === '') {
      alert('아이디 적으세여');
      idRef.current.focus();
      return;
    } else if (login.pw === '') {
      alert('비번 적으세여');
      pwRef.current.focus();
      return;
    }
    alert(`아이디 : ${login.id}, 비번:${login.pw}`);
    setLogin({ id: '', pw: '' });
  };

  useEffect(() => {
    idRef.current.focus();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="아이디"
        onChange={handleIdChange}
        value={login.id}
        ref={idRef}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={handlePwChange}
        value={login.pw}
        ref={pwRef}
      />
      <br />
      <button onClick={handleClick}>로그인</button>
    </div>
  );
}
export default HookQ;
