import React from "react";

const MainSection = ({step,setStep}) => {
  return (
    <div className="GameScreenMain">
      <div className="GameScreenHeader">
        <h3 className="GameScreenHeaderTitle">Найди число</h3>
        <p className="GameScreenHeaderDescript">
          <span className="ng-scope">Тренажер на внимание</span>
        </p>
      </div>
      <div className="GameScreenBody">
        <div className="GameScreenBodyContent">
          <div className="GameScreenBodyWrap">
            <h4 className="GameScreenBodyTitle">Тренирует:</h4>
            <ul className="GameScreenList">
              <li className="GameScreenListItem">
                <div className="GameScreenListItemTitle">
                  <div className="GameScreenListItemTitleImg eye1"></div>
                  <div className="GameScreenListItemTitleText">
                    Произвольное внимание
                  </div>
                </div>
                <div className="GameScreenListItemDesc">
                  Научитесь концентрировать внимание только на важном
                </div>
              </li>
              <li className="GameScreenListItem">
                <div className="GameScreenListItemTitle">
                  <div className="GameScreenListItemTitleImg eye2"></div>
                  <div className="GameScreenListItemTitleText">
                    Концентрацию и переключение внимания
                  </div>
                </div>
                <div className="GameScreenListItemDesc">
                  Позволит не упускать из виду важные детали
                </div>
              </li>
              <li className="GameScreenListItem">
                <div className="GameScreenListItemTitle">
                  <div className="GameScreenListItemTitleImg eye3"></div>
                  <div className="GameScreenListItemTitleText">
                    Зрительное восприятие
                  </div>
                </div>
                <div className="GameScreenListItemDesc">
                  Сможете быстро находить основные мысли в текстах
                </div>
              </li>
            </ul>
          </div>
          <div className="GameScreenDifficulty">
            <button onClick={()=>setStep(1)} className="GameScreenBtn">Далее</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainSection;
