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
  minutes,
}) => {
  const [teamWon, setteamWon] = useState("tie");
  const [matchEnded, setMatchEnded] = useState(false);

  useEffect(() => {
    const homeWin = () => {
      if (homeGoals === null) return;

      if (live === "Match Finished") {
        setMatchEnded(true);
      }

      const homeWins = homeGoals > awayGoals;
      const tie = homeGoals === awayGoals;

      homeWins ? setteamWon("home") : !tie ? setteamWon("away") : <></>;
    };

    homeWin();
  }, [awayGoals, homeGoals, live]);

  return (
    <div className="match-preview-container">
      <h3 className="match-game">{round}</h3>
      <div className="team-logos">
        <div className="team-logo-container">
          {teamWon === "home" && matchEnded ? (
            <div>
              <img src={Trophy} style={{ height: "40px" }} alt="trophy" />
            </div>
          ) : (
            <></>
          )}
          <div className="team-name">
            <h5 className="team-one-name">{teamOneName}</h5>
          </div>
          <img
            className="team-logo"
            src={teamOneLogo}
            alt="logo"
            style={{ height: "40px", width: "40px" }}
          />
        </div>
        <div className="time">
          {live === "Not Started" ? (
            <div className="match-time">{time}</div>
          ) : live === "Match Finished" ? (
            <div className="match-time">FT</div>
          ) : (
            <div className="match-time">
              <span className="live-dot">{minutes}'</span>
            </div>
          )}
          <div className="match-result">
            <div className="home-goals">{homeGoals}</div>
            {homeGoals !== null || awayGoals !== null ? (
              <span style={{ display: "flex", alignItems: "center" }}>-</span>
            ) : (
              <></>
            )}
            <div className="away-goals">{awayGoals}</div>
          </div>
        </div>
        <div className="team-logo-container">
          <img
            className="team-logo"
            src={teamTwoLogo}
            alt="logo"
            style={{ height: "40px", width: "40px" }}
          />
          <div className="team-name">
            <h5 className="team-two-name">{teamTwoName}</h5>
          </div>
          {teamWon === "away" && matchEnded ? (
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
