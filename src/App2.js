//import logo from './logo.svg';
//import './App.css';

import { Fragment } from 'react';
import MyComponent from './component/MyComponent';
import MyComponent2 from './component/MyComponent2';
import MyComponent3 from './component/MyComponent3';

function App() {
  return (
    <Fragment>
      <div>새 컴퍼넌트</div>
      {/* props => 하위컴퍼넌트로 전달하는 매개변수 */}
      <MyComponent
        name={'홍길동'}
        age={20}
        addr={'서울시'}
        email={'over@naver.com'}
      />
      <MyComponent name={'이순신'} age={30} addr={'경기도'} />
      <MyComponent name={'김자바'} />
      {/* 2는 클래스형 컴퍼넌트 */}
      <MyComponent2 name={'신사임당'} age={40} />
      <MyComponent3
        title={'오늘의 목표'}
        content={'집가고싶다'}
        writer={'김자바'}
      />
      <MyComponent3 title={'내일의 목표'} content={'집가고싶다'} />

      {/* 함수형 컴퍼넌트 MyComponent3 를 생성
      props는 title, content, writer 를 전달
      writer는 기본값은 admin  */}
    </Fragment>
  );
}

export default App;
