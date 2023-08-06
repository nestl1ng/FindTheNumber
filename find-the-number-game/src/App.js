import './css/App.css';
import MainSection from './js/MainSection';
import Loader from './js/Loader';
import Preloader from './js/Preloader';
import MainGame from './js/MainGame';
import Statistics from './js/Statistics';
import { useState } from 'react';

function App() {
  let [step,setStep] = useState(0);
  let [correctCount, setCorrectCount] = useState(0);
  let [tapCount, setTapCount] = useState(0);
  let [points, setPoints] = useState(0);
  let comp = <MainSection setStep={setStep}/>;
  switch (step) {
    case 1:
      comp = <Loader setStep={setStep}/>;
      break;
    case 2:
      comp = <Preloader setStep={setStep}/>;
      break;
    case 3:
      comp = <MainGame setStep={setStep} step={step} correctCount={correctCount} setCorrectCount={setCorrectCount} tapCount={tapCount} setTapCount={setTapCount} points={points} setPoints={setPoints}/>;
      break;
    case 4:
      comp = <Statistics setStep={setStep} correctCount={correctCount} setCorrectCount={setCorrectCount} tapCount={tapCount} setTapCount={setTapCount} points={points} setPoints={setPoints}/>;
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
