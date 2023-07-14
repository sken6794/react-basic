import { useState } from 'react';
function IterationComponetQ() {
  const arr = [
    { src: '/img/img1.png', title: '아이폰10', price: 1000 },
    { src: '/img/img2.png', title: '아이폰11', price: 2000 },
    { src: '/img/img3.png', title: '아이폰12', price: 3000 },
    { src: '/img/img4.png', title: '아이폰13', price: 4000 },
  ];

  //1. arr을 state로 관리
  const [list, setList] = useState(arr);

  //2. img를 관리할 state변수
  const [img, setImg] = useState('/img/img1.png');

  //3.이벤트
  const handleClick = (e) => {
    if (e.target.tagName !== 'IMG') {
      return;
    }

    setImg(e.target.src);
  };

  //3.이벤트
  const newList = list.map((i, dx) => (
    <div key={dx} onClick={handleClick}>
      <img src={i.src} alt={i.title} width="100" />
      <p>상품: {i.title}</p>
      <p>가격 : {i.price}</p>
    </div>
  ));
  return (
    <div>
      <hr />
      <h3>이미지 데이터 반복해보기</h3>
      <div>
        <img src={img} alt="" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {newList}
      </div>
    </div>
  );
}

export default IterationComponetQ;
