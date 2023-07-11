//import logo from './logo.svg';
//import './App.css';

import { Fragment } from 'react';

function App() {
  const name = '홍길동';
  const age = 20;

  return (
    /* 제일 상위 태그의 형제 태그가 있으면 안된다. */
    <>
      <Fragment>
        {/* 리액트가 제공해주는 Fragment 태그 */}
        <div className="App">
          {/* JSX의 주석은 이런 모양, 중괄호가 있음 */}
          <ul>
            <li>1. JSX의 규칙 주석은 alt + shift + a</li>
            <li>2. JSX에서는 반드시 하나의 JSX형태를 ()로 리턴해야 한다,</li>
            <li>
              3. div 태그를 사용하기 싫다면 Fragment태그 or 없는 모형<></> 을
              사용할 수 있다.
            </li>
            <li>4. 함수 안에서 만들어진 변수는 중괄호 참조를 사용한다.</li>
            <li>
              5. JSX에서 if문을 사용하고 싶다면, if문 대신 삼항연산자를
              사용한다.
            </li>
            <li>
              6. 화면에 보여주고 싶은게 없는 경우에는 (빈공간이 아닌)null을
              반환시킨다
            </li>
            <li>7. undefined를 반환하는 상황을 만들면 안된다.</li>
            <li
              style={{
                color: 'red',
                backgroundColor: '#555555',
                fontSize: 16,
              }}
            >
              {/* 바깥 중괄호는 변수를 사용하기 위한 중괄호참조 안쪽 중괄호는 객체를 표현하기 위한 중괄호 */}
              8. DOM요소 (태그)에 스타일을 직접 넣을 때는 반드시 객체형으로 묶고
              카멜표기법을 사용한다.
            </li>
            <li>9. class 대신 className 속성을 사용한다.</li>
            <li>
              10. HTML5의 문법을 정확하게 지킨다.(홀로 사용되는 태그는 반드시
              닫는 태그를 적는다.)
            </li>
          </ul>
          {name}, {age}
          {name === '홍길동' ? '맞음' : '아님'}
          {name === '홍길동' ? <p>홍길동임</p> : <p>홍길동 아님</p>}
          <br />
          {age === 21 ? <p>20세 입니다</p> : null}
          <input />
          <br />
          <img alt="제목" src="" />
        </div>
      </Fragment>
    </>
    /* 태그 안에 아무것도 없는, 없는태그도 사용 가능 */
  );
}

export default App;
