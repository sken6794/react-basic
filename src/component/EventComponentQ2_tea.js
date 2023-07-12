import { useState } from 'react';

function EventComponentQ2() {
  const [form, setForm] = useState({ data: '', result: '' });

  const handleChange = (e) => {
    setForm({ data: e.target.value, result: form.result });
  };

  const handlebtn = () => {
    setForm({ data: '', result: form.data });
  };

  return (
    <div>
      <h3>인풋데이터 핸들링 (실습)</h3>
      <p>클릭 시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</p>
      <p>힌트는 state 객체로 처리</p>
      <input type="text" name="in" onChange={handleChange} value={form.data} />
      <button onClick={handlebtn}>추가하기</button>
      <h4>결과</h4>
      {form.result}
    </div>
  );
}

export default EventComponentQ2;
