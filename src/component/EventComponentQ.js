import { useState } from 'react';

function EventComponentQ() {
  const [sel, setSel] = useState('');

  const selectMenu = (e) => {
    setSel(e.target.value);
  };

  const list = ['햄버거', '치킨', '피자', '떡볶이', '핫도그', '마라탕'];
  const arr = list.map((item, index) => <option key={index}>{item}</option>);

  return (
    <div>
      <h3>셀렉트 태그 핸들링 (실습)</h3>
      <p>셀랙트 태그가 체인지 될 때 선택한 결과를 아래 출력</p>
      <select name="" id="" onChange={selectMenu}>
        {/* <option>햄버거</option>
        <option>피자</option>
        <option>치킨</option> */}
        {arr}
      </select>
      <h4>선택한결과</h4>
      {sel}
    </div>
  );
}

export default EventComponentQ;
