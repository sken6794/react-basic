import { useState } from 'react';
function IterationComponetQ() {
  const arr = [
    { src: '/img/img1.png', title: '아이폰10', price: 1000 },
    { src: '/img/img2.png', title: '아이폰11', price: 2000 },
    { src: '/img/img3.png', title: '아이폰12', price: 3000 },
    { src: '/img/img4.png', title: '아이폰13', price: 4000 },
  ];

  const [img, setImg] = useState([{ src: '', title: '' }]);

  const imgChange = (src) => {
    setImg(src);
  };

  const newArr = arr.map((i, dx) => {
    return (
      <div style={{ display: 'inline-block', padding: '30px' }} key={dx}>
        <img
          src={i.src}
          alt={i.title}
          onClick={() => {
            imgChange(i.src);
          }}
        />
        <br />
        상품 : {i.title}
        <br />
        가격 : {i.price}
      </div>
    );
  });
  return (
    <div>
      <img src={img} alt="" />
      <br />
      {newArr}
    </div>
  );
}

export default IterationComponetQ;
