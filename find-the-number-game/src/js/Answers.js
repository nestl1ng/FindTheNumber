import "../css/Answers.css";
const Answers = ({wrongAnsw,trueAnsw}) => {
  return (
    <div className="GameAnswer">     
      <span className={`GameAnswerResult Wrong ${wrongAnsw ? "" : "disable"}`}></span>
      <span className={`GameAnswerResult True ${trueAnsw ? "" : "disable"}`}></span>
    </div>
  );
};
export default Answers;
