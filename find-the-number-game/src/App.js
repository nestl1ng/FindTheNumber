import './css/App.css';
import MainSection from './js/MainSection';
import Loader from './js/Loader';
import { useState } from 'react';

function App() {
  let [step,setStep] = useState(0);
  let comp = <MainSection step={step} setStep={setStep}/>;
  if (step===1) {
    comp = <Loader/>;
  }
  return (
    <div className="App">
      {comp}
    </div>
  );
}

export default App;
