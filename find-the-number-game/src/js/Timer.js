import { useEffect, useState } from "react";

const Timer = ({ minutes, seconds, flag, step, setStep }) => {
  const [[m, s], setTime] = useState([minutes, seconds]);

  const tick = () => {
    if (m === 0 && s === 0) {
      setTime([0, 0]);
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  useEffect(() => {
    if ((s === 0)&&(m === 0)) {
      setTimeout(function () {
        setStep(step+1)
      }, 300);
    }
  }, [flag]);
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="MainMenuItemIndex">{`${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`}</div>
  );
};
export default Timer;
