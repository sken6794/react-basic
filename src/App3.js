import StateComponent from './component/StateComponent';
import StateComponent2 from './component/StateComponent2';
import StateComponentQ from './component/StateComponentQ';

function App() {
  return (
    <>
      <StateComponent />
      <br />
      <StateComponent2 age={20} />
      <br />
      <StateComponentQ />
    </>
  );
}

export default App;
