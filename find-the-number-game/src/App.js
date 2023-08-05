import './css/App.css';
import MainSection from './js/MainSection';
import Loader from './js/Loader';
import Preloader from './js/Preloader';
import MainGame from './js/MainGame';
import { useState } from 'react';

function App() {
  let [step,setStep] = useState(3);
  let comp = <MainSection setStep={setStep}/>;
  switch (step) {
    case 1:
      comp = <Loader setStep={setStep}/>;
      break;
    case 2:
      comp = <Preloader setStep={setStep}/>;
      break;
    case 3:
      comp = <MainGame setStep={setStep}/>;
      break;
    default:
      comp = <MainSection setStep={setStep}/>;
  }
  return (
    <div className="App">
      {comp}
    </div>
  );
}

export default App;
