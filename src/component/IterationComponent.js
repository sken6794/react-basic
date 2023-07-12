function IterationComponet() {
  const arr = [1, 2, 3, 4, 5];

  // const result = arr.map((val, idx, ar) => {
  //   // console.log(val);
  //   // console.log(idx);
  //   // console.log(ar);

  //   return val * 10;
  // });
  // console.log(result); // 10,20,30,40,50
  //const result = arr.map((val) => val * 10);
  //console.log(result); //10,20,30,40,50

  //map을 이용한 태그 생성
  //key 는 컴포넌트 반복 시에 고유하게 지정해야 하는 값이다. (권고사항)
  const result = arr.map((item, index) => <li key={index}>{item}</li>);
  //console.log(result);

  const list = [
    { id: 1, title: 'aaa123' },
    { id: 2, title: 'bbb123' },
    { id: 3, title: 'ccc123' },
  ];

  const newarr = list.map((item) => (
    <option key={item.id}>{item.title}</option>
  ));

  return (
    <div>
      <h3>컴포넌트 반복</h3>
      <ul>{result}</ul>

      <h3>여기에 list의 title값을 컴포넌트 반복으로 값을 넣어</h3>
      <select name="" id="">
        {newarr}
      </select>
    </div>
  );
}

export default IterationComponet;
