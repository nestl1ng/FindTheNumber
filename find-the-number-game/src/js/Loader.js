import React from "react";
import "../css/Loader.css";
const Loader = ({ setStep }) => {
  return (
    <div className="GameScreenMain">
      <div className="GameScreenContainer">
        <div className="GameScreenContainerTutor" onClick={() => setStep(2)}>
          <div className="GameScreenContainerHeader">
            <p className="GameScreenContainerHeaderTask">
              Найдите указанное число:
            </p>
            <span className="GameScreenContainerHeaderTaskReference">75</span>
          </div>
          <div className="GameScreenContainerNumbers">
            <div className="GameScreenNumberLine">
              <button className="GameScreenNumberItem Orange">
                <span className="GameScreenNumberItemInner">75</span>
                <div className="GameScreenNumberItemArm"></div>
              </button>
              <button className="GameScreenNumberItem Pink Disable">
                <span className="GameScreenNumberItemInner">1</span>
              </button>
              <button className="GameScreenNumberItem Purple Disable">
                <span className="GameScreenNumberItemInner">35</span>
              </button>
            </div>
            <div className="GameScreenNumberLine">
              <button className="GameScreenNumberItem Green Disable">
                <span className="GameScreenNumberItemInner">7</span>
              </button>
              <button className="GameScreenNumberItem Green Disable">
                <span className="GameScreenNumberItemInner">885</span>
              </button>
              <button className="GameScreenNumberItem Blue Disable">
                <span className="GameScreenNumberItemInner">40</span>
              </button>
            </div>
          </div>
          <div className="GameScreenNumberText">
            Нажмите на экран,<br></br>чтобы продолжить
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loader;
