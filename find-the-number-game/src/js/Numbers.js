import React from "react";

const Numbers = ({
  searchNumb,
  getRandomInt,
  setLevelCount,
  levelCount,
  bonusCount,
  setBonusCount,
}) => {
  let range = 10; // максимальное значение
  let count = 6; // кол-во требуемых чисел
  if (levelCount === 2) {
    range = 100;
  } else if (levelCount === 3) {
    range = 1000;
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
    randomMass.splice(getRandomInt(0, 5), 0, searchNumb);
  }

  //colors
  function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }
  let arrColor = ["Orange", "Blue", "Green", "Pink", "Purple"];
  let arrAnimated = ["Rotate", "Blink", "Scale"];
  function Answer(numb) {
    if (numb === searchNumb) {
      if (levelCount < 9) {
        setLevelCount(levelCount + 1);
      }
      if (bonusCount < 5) {
        setBonusCount(bonusCount + 1);
      }
    } else {
      if (levelCount > 1) {
        setLevelCount(levelCount - 1);
      }
      if (bonusCount > 1) {
        setBonusCount(bonusCount - 1);
      }
    }
  }
  return (
    <div className="NumbersGame">
      <div className="NumbersLine">
        <button
          onClick={() => Answer(randomMass[0])}
          className={`NumberItem ${arrayRandElement(arrColor)} ${
            levelCount === 3 ? arrayRandElement(arrAnimated) : ""
          }`}
        >
          <span className="NumberItemInner">{randomMass[0]}</span>
        </button>
        <button
          onClick={() => Answer(randomMass[1])}
          className={`NumberItem ${arrayRandElement(arrColor)} ${
            levelCount === 3 ? arrayRandElement(arrAnimated) : ""
          }`}
        >
          <span className="NumberItemInner">{randomMass[1]}</span>
        </button>
        <button
          onClick={() => Answer(randomMass[2])}
          className={`NumberItem ${arrayRandElement(arrColor)} ${
            levelCount === 3 ? arrayRandElement(arrAnimated) : ""
          }`}
        >
          <span className="NumberItemInner">{randomMass[2]}</span>
        </button>
      </div>
      <div className="NumbersLine">
        <button
          onClick={() => Answer(randomMass[3])}
          className={`NumberItem ${arrayRandElement(arrColor)} ${
            levelCount === 3 ? arrayRandElement(arrAnimated) : ""
          }`}
        >
          <span className="NumberItemInner">{randomMass[3]}</span>
        </button>
        <button
          onClick={() => Answer(randomMass[4])}
          className={`NumberItem ${arrayRandElement(arrColor)} ${
            levelCount === 3 ? arrayRandElement(arrAnimated) : ""
          }`}
        >
          <span className="NumberItemInner">{randomMass[4]}</span>
        </button>
        <button
          onClick={() => Answer(randomMass[5])}
          className={`NumberItem ${arrayRandElement(arrColor)} ${
            levelCount === 3 ? arrayRandElement(arrAnimated) : ""
          }`}
        >
          <span className="NumberItemInner">{randomMass[5]}</span>
        </button>
      </div>
    </div>
  );
};
export default Numbers;
