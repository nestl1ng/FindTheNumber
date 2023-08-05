const Numbers4lvl = ({levelCount}) => {
  return (
    <div className={`NumbersGame${levelCount===2 ? "Active" : ""}`}>
      Numbers4lvl
    </div>
  );
};
export default Numbers4lvl;
