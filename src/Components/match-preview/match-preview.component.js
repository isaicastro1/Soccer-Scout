import { useEffect, useState } from "react";

import Trophy from "../../Assets/trophy.png";

import "./match-preview.styles.scss";

const MatchPreview = ({
  teamOneName,
  teamOneLogo,
  teamTwoName,
  teamTwoLogo,
  round,
  time,
  live,
  homeGoals,
  awayGoals,
}) => {
  const [homeWon, setHomeWon] = useState(false);
  const [matchEnded, setMatchEnded] = useState(false);

  useEffect(() => {
    const homeWin = () => {
      if (homeGoals === null) return;
      setHomeWon(homeGoals > awayGoals);
      setMatchEnded(true);
    };

    homeWin();
  }, [awayGoals, homeGoals]);

  useEffect(() => {
    "effect render";
  }, [homeWon]);

  return (
    <div className="match-preview-container">
      <h3 className="match-game">{round}</h3>
      <div className="team-logos">
        <div className="team-logo-container">
          {homeWon ? (
            <div>
              <img src={Trophy} style={{ height: "40px" }} alt="trophy" />
            </div>
          ) : (
            <></>
          )}
          <div className="team-name">
            <h5 className="team-one-name">{teamOneName}</h5>
          </div>
          <img className="team-logo" src={teamOneLogo} alt="logo" />
        </div>
        <div className="time">
          {live === "Not Started" ? (
            <div className="match-time">{time}</div>
          ) : live === "Match Finished" ? (
            <div className="match-time">FT</div>
          ) : (
            <div className="match-time">LIVE</div>
          )}
          <div className="match-result">
            <div className="home-goals">{homeGoals}</div>
            {homeGoals || awayGoals ? (
              <span style={{ display: "flex", alignItems: "center" }}>-</span>
            ) : (
              <></>
            )}
            <div className="away-goals">{awayGoals}</div>
          </div>
        </div>
        <div className="team-logo-container">
          <img className="team-logo" src={teamTwoLogo} alt="logo" />
          <div className="team-name">
            <h5 className="team-two-name">{teamTwoName}</h5>
          </div>
          {!homeWon && matchEnded ? (
            <div>
              <img src={Trophy} style={{ height: "40px" }} alt="trophy" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="see-more">see more</div>
    </div>
  );
};

export default MatchPreview;
