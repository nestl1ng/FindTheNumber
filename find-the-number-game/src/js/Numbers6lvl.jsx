const Numbers6lvl = ({ levelCount, randomMass, Answer, arrayRandElement, arrColor, arrAnimated }) => {
  return (
    <div
      className={`NumbersLine ${((levelCount >= 6) && (levelCount < 8)) ? "Six" : ""}${(levelCount >= 8) ? "Eight" : ""}`}>
      {randomMass.filter((v, index) => { if ((levelCount >= 6) && (levelCount < 8)) return index >= 12 && index < 16; else return index >= 15 && index < 20 }).map((item, ind) => {
        return <button
          onClick={() => Answer(item)}
          className={`NumberItem ${arrayRandElement(arrColor)} ${arrayRandElement(arrAnimated)}`}>
          <span className="NumberItemInner">{item}</span>
        </button>
      })}
    </div>
  )
}
export default Numbers6lvl;
