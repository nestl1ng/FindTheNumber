import React from "react";
import "../css/MainGame.css";

const MainGame = () => {
  return (
    <div className="GameScreenMain">
      <div className="GameScreenContainer">
        <div className="MainGameContainer">
          <div className="MainMenu">
            <div class="MainMenuItem Time">
              <div class="MainMenuItemText"> ВРЕМЯ </div>
              <div class="MainMenuItemIndex"> 00:00 </div>
            </div>
            <div class="MainMenuItem">
              <div class="MainMenuItemText"> УРОВЕНЬ </div>
              <div class="MainMenuItemIndex">1-9</div>
            </div>
            <div class="MainMenuItem">
              <div class="MainMenuItemText"> ОЧКИ </div>
              <div class="MainMenuItemIndex">0</div>
            </div>
            <div class="MainMenuItem Bonuses">
              <div class="MainMenuItemText"> БОНУС </div>
              <div className="MainMenuItemIndex">
                <span class="GameMenuMultRounds">
                  <span class="GameMenuMultRound Active"></span>
                  <span class="GameMenuMultRound"></span>
                  <span class="GameMenuMultRound"></span>
                  <span class="GameMenuMultRound"></span>
                  <span class="GameMenuMultRound"></span>
                  <span class="GameMenuMultText">x1</span>
                </span>
              </div>
            </div>
          </div>
          <div className="MainGameInner">
            <div className="MainGameTask">
            <p class="MainGameTaskText"> Найдите указанное число: </p>
            <span class="MainGameTaskReference">5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainGame;
