import "../css/Statistics.css";
const Statistics = ({ correctCount,setCorrectCount, tapCount,setTapCount, points,setPoints, setStep }) => {
  const f = (x) =>
    x.toString().includes(".") ? x.toString().split(".").pop().length : 0;
  let percent = (correctCount / tapCount) * 100;
  if (f(percent) > 0) {
    percent = percent.toFixed(2);
  }
 function Reload(){
  setCorrectCount(0);
  setTapCount(0);
  setPoints(0);
  setStep(2);
 }

  return (
    <div className="GameScreenMain">
      <div className="GameScreenContainer">
        <div className="GameScreenWrap">
          <div className="GameScreenHead">
            <h3 class="GameScreenResultsTitle">Ваши результаты</h3>
          </div>
          <div className="GameScreenContent">
            <div className="GameScreenContentWrap">
              <div className="GameScreenResult">
                <table class="GameScreenTable">
                  <tbody>
                    <tr class="GameScreenTableRow">
                      <td class="GameScreenTableCell"> Текущий результат </td>
                      <td class="GameScreenTableCell Result">{points}</td>
                    </tr>
                    <tr class="GameScreenTableRow">
                      <td class="GameScreenTableCell"> Верных ответов </td>
                      <td class="GameScreenTableCell Result">
                        <span>{correctCount}</span> из <span>{tapCount}</span>
                      </td>
                    </tr>
                    <tr class="GameScreenTableRow">
                      <td class="GameScreenTableCell"> Точность ответов </td>
                      <td class="GameScreenTableCell Result"> {percent}% </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <button
              onClick={() => {
                Reload();
              }}
              class="GameScreenBtnPurple"
            >
              {" "}
              Переиграть{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
