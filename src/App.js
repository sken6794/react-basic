import { Fragment, useState } from 'react';
import './css/App.css';
import x from './css/App.module.css';
function App() {
  //console.log(x);
  return (
    <Fragment>
      <header className="app_header">
        <p style={{ color: 'red', textAlign: 'center' }}>안녕</p>
      </header>
      <section className={x.wrap}>
        <div className={x.item}>
          {/* inner는 global 붙인 예제 */}
          <p className="inner">안녕하지 못해</p>
          <input type="text" className="input-control" />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
