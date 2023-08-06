const Numbers8lvl = ({ randomMass, Answer, arrayRandElement, arrColor, arrAnimated }) => {
    return (
        <div className="NumbersLine Eight">
            {randomMass.filter((v, index) => index >= 20).map((item, ind) => {
                return <button
                    onClick={() => Answer(item)}
                    className={`NumberItem ${arrayRandElement(arrColor)} ${arrayRandElement(arrAnimated)}`}>
                    <span className="NumberItemInner">{item}</span>
                </button>
            })}
        </div>
    )
}
export default Numbers8lvl
