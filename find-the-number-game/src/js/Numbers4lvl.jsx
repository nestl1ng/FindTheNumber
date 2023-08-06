const Numbers4lvl = ({ levelCount, randomMass, Answer, arrayRandElement, arrColor, arrAnimated }) => {
  return (
    <div
      className={`NumbersLine ${(levelCount < 6) ? "Four" : ""}${((levelCount >= 6) && (levelCount < 8)) ? "Six" : ""}${(levelCount >= 8) ? "Eight" : ""}`}>
      {randomMass.filter((v, index) => { if (levelCount < 8) return index >= 8 && index < 12; else return index >= 10 && index < 15 }).map((item, ind) => {
        return <button
          onClick={() => Answer(item)}
          className={`NumberItem ${arrayRandElement(arrColor)} ${arrayRandElement(arrAnimated)}`}>
          <span className="NumberItemInner">{item}</span>
        </button>
      })}
    </div>
  );
};
export default Numbers4lvl;
