import Numbers4lvl from "./Numbers4lvl";
import Numbers6lvl from "./Numbers6lvl";
import Numbers8lvl from "./Numbers8lvl";
const Numbers = ({
  searchNumb,
  getRandomInt,
  setLevelCount,
  levelCount,
  bonusCount,
  setBonusCount,
  setCorrectCount,
  correctCount,
  setFlag,
  flag,
  tapCount,
  setTapCount,
  setPoints,
  points,
  setWrongAnsw,
  setTrueAnsw,
  arrayRandElement,
  arrColor
}) => {
  let range = 10; // максимальное значение
  let count = 6; // кол-во требуемых чисел
  if ((levelCount === 4) || (levelCount === 5)) {
    count = 12;
  } else if ((levelCount === 6) || (levelCount === 7)) {
    count = 16;
  } else if (levelCount > 7) {
    count = 25;
  }
  if (levelCount === 2) {
    range = 100;
  } else if ((levelCount >= 3) && (levelCount < 7)) {
    range = 1000;
  } else if (levelCount >= 7) {
    range = 10000;
  }
  //randomNumbers
  let objNumb = {};
  let randomMass = [];
  for (let i = 0; i < count; ++i) {
    let rand = Math.floor(Math.random() * (range - i));
    randomMass.push((rand in objNumb ? objNumb[rand] : rand) + 1);
    let numb = range - i - 1;
    objNumb[rand] = numb in objNumb ? objNumb[numb] : numb;
  }
  if (randomMass.indexOf(searchNumb) === -1) {
    randomMass.pop();
    randomMass.splice(getRandomInt(0, count - 1), 0, searchNumb);
  }

  let arrAnimated = ["Rotate", "Blink", "Scale"];
  function Answer(numb) {
    if (numb === searchNumb) {
      if (levelCount < 9) {
        setLevelCount(levelCount + 1);
      }
      if (bonusCount < 5) {
        setBonusCount(bonusCount + 1);
      }
      setCorrectCount(correctCount + 1);
      setPoints(42 * bonusCount + points);
      setTrueAnsw(prev => !prev);
      setTimeout(function () {
        setTrueAnsw(prev => !prev);
      }, 300);
    } else {
      if (levelCount > 1) {
        setLevelCount(levelCount - 1);
      }
      if (bonusCount > 1) {
        setBonusCount(bonusCount - 1);
      }
      if (correctCount > 0) {
        setCorrectCount(correctCount - 1)
      }
      setWrongAnsw(prev => !prev);
      setTimeout(function () {
        setWrongAnsw(prev => !prev);
      }, 300);
    }
    setFlag(!flag);
    setTapCount(tapCount + 1);
  }
  let numbers4lvl;
  let numbers6lvl;
  let numbers8lvl;
  if (levelCount >= 4) {
    numbers4lvl = <Numbers4lvl levelCount={levelCount} randomMass={randomMass} Answer={Answer} arrayRandElement={arrayRandElement} arrColor={arrColor} arrAnimated={arrAnimated} />
  }
  if (levelCount >= 6) {
    numbers6lvl = <Numbers6lvl levelCount={levelCount} randomMass={randomMass} Answer={Answer} arrayRandElement={arrayRandElement} arrColor={arrColor} arrAnimated={arrAnimated} />;
  }
  if (levelCount >= 8) {
    numbers8lvl = <Numbers8lvl levelCount={levelCount} randomMass={randomMass} Answer={Answer} arrayRandElement={arrayRandElement} arrColor={arrColor} arrAnimated={arrAnimated} />;
  }
  return (
    <div className="NumbersGame">
      <div className={`NumbersLine ${((levelCount > 3) && (levelCount < 6)) ? "Four" : ""}${((levelCount === 6) || (levelCount === 7)) ? "Six" : ""}${((levelCount === 8) || (levelCount === 9)) ? "Eight" : ""}`}>
        {randomMass.filter((v, index) => { if ((levelCount > 0) && (levelCount < 4)) return index < 3; else if ((levelCount >= 4) && (levelCount < 8)) return index < 4; else return index < 5 }).map((item, ind) => {
          return <button
            onClick={() => Answer(item)}
            className={`NumberItem ${arrayRandElement(arrColor)} ${levelCount >= 3 ? arrayRandElement(arrAnimated) : ""
              }`}
          >
            <span className="NumberItemInner">{item}</span>
          </button>
        })}
      </div>
      <div className={`NumbersLine ${((levelCount > 3) && (levelCount < 6)) ? "Four" : ""}${((levelCount === 6) || (levelCount === 7)) ? "Six" : ""}${((levelCount === 8) || (levelCount === 9)) ? "Eight" : ""}`}>
        {randomMass.filter((v, index) => { if ((levelCount > 0) && (levelCount < 4)) return index >= 3 && index < 6; else if ((levelCount >= 4) && (levelCount < 8)) return index >= 4 && index < 8; else return index >= 5 && index < 10 }).map((item, ind) => {
          return <button
            onClick={() => Answer(item)}
            className={`NumberItem ${arrayRandElement(arrColor)} ${levelCount >= 3 ? arrayRandElement(arrAnimated) : ""
              }`}
          >
            <span className="NumberItemInner">{item}</span>
          </button>
        })}
      </div>
      {numbers4lvl}
      {numbers6lvl}
      {numbers8lvl}
    </div>
  );
};
export default Numbers;
