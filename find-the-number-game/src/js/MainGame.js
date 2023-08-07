import "../css/MainGame.css";
import Numbers from "./Numbers";
import { useState } from "react";
import Timer from "./Timer";
import Answers from "./Answers";
const MainGame = ({
  step,
  setStep,
  correctCount,
  setCorrectCount,
  tapCount,
  setTapCount,
  points,
  setPoints,
}) => {
  let [levelCount, setLevelCount] = useState(1);
  let [bonusCount, setBonusCount] = useState(1);
  let [flag, setFlag] = useState(false);
  let [wrongAnsw, setWrongAnsw] = useState(false);
  let [trueAnsw, setTrueAnsw] = useState(false);

  let seconds = 0;
  let minutes = 1;

  function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }
  let arrColor = ["Orange", "Blue", "Green", "Pink", "Purple"];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  let searchNumb = getRandomInt(1, 11);
  if (levelCount === 2) {
    searchNumb = getRandomInt(1, 101);
  } else if (levelCount >= 3 && levelCount < 7) {
    searchNumb = getRandomInt(1, 1001);
  } else if (levelCount >= 7) {
    searchNumb = getRandomInt(1, 10001);
  }
  return (
    <div className="GameScreenMain">
      <div className="GameScreenContainer">
        <div className={`MainGameContainer ${levelCount > 1 ? arrayRandElement(arrColor) : ""}`}>
          <div className="MainMenu">
            <div className="MainMenuItem Time">
              <div className="MainMenuItemText"> ВРЕМЯ </div>
              <Timer
                seconds={seconds}
                minutes={minutes}
                flag={flag}
                setStep={setStep}
                step={step}
              />
            </div>
            <div className="MainMenuItem">
              <div className="MainMenuItemText"> УРОВЕНЬ </div>
              <div className="MainMenuItemIndex">{levelCount}-9</div>
            </div>
            <div className="MainMenuItem">
              <div className="MainMenuItemText"> ОЧКИ </div>
              <div className="MainMenuItemIndex">{points}</div>
            </div>
            <div className="MainMenuItem Bonuses">
              <div className="MainMenuItemText"> БОНУС </div>
              <div className="MainMenuItemIndex">
                <span className="GameMenuMultRounds">
                  <span className="GameMenuMultRound Active"></span>
                  <span
                    className={`GameMenuMultRound ${
                      bonusCount >= 2 ? "Active" : ""
                    }`}
                  ></span>
                  <span
                    className={`GameMenuMultRound ${
                      bonusCount >= 3 ? "Active" : ""
                    }`}
                  ></span>
                  <span
                    className={`GameMenuMultRound ${
                      bonusCount >= 4 ? "Active" : ""
                    }`}
                  ></span>
                  <span
                    className={`GameMenuMultRound ${
                      bonusCount >= 5 ? "Active" : ""
                    }`}
                  ></span>
                  <span className="GameMenuMultText">x{bonusCount}</span>
                </span>
              </div>
            </div>
          </div>
          <Answers wrongAnsw={wrongAnsw} trueAnsw={trueAnsw} />
          <div
            className={`MainGameInner ${
              wrongAnsw || trueAnsw ? "disable" : ""
            }`}
          >
            <div className="MainGameTask">
              <p className="MainGameTaskText"> Найдите указанное число: </p>
              <span className="MainGameTaskReference">{searchNumb}</span>
            </div>
            <Numbers
              arrColor={arrColor}
              arrayRandElement={arrayRandElement}
              setFlag={setFlag}
              flag={flag}
              searchNumb={searchNumb}
              getRandomInt={getRandomInt}
              setLevelCount={setLevelCount}
              levelCount={levelCount}
              bonusCount={bonusCount}
              setBonusCount={setBonusCount}
              correctCount={correctCount}
              setCorrectCount={setCorrectCount}
              setTapCount={setTapCount}
              tapCount={tapCount}
              setPoints={setPoints}
              points={points}
              setWrongAnsw={setWrongAnsw}
              setTrueAnsw={setTrueAnsw}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainGame;
