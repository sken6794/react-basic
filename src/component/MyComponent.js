import propTypes from 'prop-types';

function MyComponent({ name, age, addr, email }) {
  //console.log(x);
  //하위 컴포넌트의 첫째 매개변수에는 props가 전달된다.

  //구조분해할당으로 값을 받아 올 것임.
  //const { name, age, addr } = x;

  return (
    <div>
      함수형 컴포넌트
      <br />
      props : {name}
      <br />
      props : {age}
      <br />
      props : {addr}
      <br />
      props : {email}
    </div>
  );
}

//props값이 넘어오지 않을 때 기본값의 선언
//컴포넌트명.defaultProps = {}
MyComponent.defaultProps = {
  email: 'aaasdf@naver.com',
  age: 0,
  addr: '부산',
};

//props값의 타입검증 (정적타입 지정)
//Component.propTypes={}
MyComponent.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  addr: propTypes.string.isRequired,
};
export default MyComponent;
