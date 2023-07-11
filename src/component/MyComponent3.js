function MyComponent3({ title, content, writer }) {
  return (
    //
    <div>
      실습 컴퍼넌트
      <br />
      Title : {title}
      <br />
      Content : {content}
      <br />
      Writer : {writer} <br />
    </div>
  );
}

MyComponent3.defaultProps = {
  writer: 'admin',
};

export default MyComponent3;
