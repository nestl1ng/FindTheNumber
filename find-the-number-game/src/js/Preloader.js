import "../css/Preloader.css";
import { useState } from "react";
import { useEffect } from "react";

const Preloader = ({setStep}) => {
    const [ seconds, setSeconds ] = useState(3);
    useEffect(() => {
        if (seconds > 0) {
          setTimeout(setSeconds, 1000, seconds - 1);
        } 
      }, [seconds]);
      if(seconds===0){
        setStep(3)
      }
  return (
    <div className="GameScreenMain">
      <div className="GameScreenContainer">
        <div className="GameCounting">
          <div class="GameCountingItem">{seconds}</div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
