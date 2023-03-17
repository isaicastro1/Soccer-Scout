import { useEffect, useState } from "react";

import Trophy from "../../Assets/trophy.png";
import Shield from "../../Assets/shield.png";

import "./match-preview.styles.scss";

const MatchPreview = ({
  game,
  setMatchParams,
  setStatsClicked,
  setMatchClicked,
}) => {
  const [matchEnded, setMatchEnded] = useState(false);
  const [homeTeamLogo, setHomeTeamLogo] = useState(Shield);
  const [awayTeamLogo, setAwayTeamLogo] = useState(Shield);

  const {
    fixture: {
      id,
      date,
      status: { elapsed: minutes, long: live },
    },
    league: { round },
    teams: {
      home: {
        id: homeId,
        name: teamOneName,
        logo: teamOneLogo,
        winner: homeWinner,
      },
      away: {
        id: awayId,
        name: teamTwoName,
        logo: teamTwoLogo,
        winner: awayWinner,
      },
    },
    goals: { home: homeGoals, away: awayGoals },
    score: {
      penalty: { home: homePenalties, away: awayPenalties },
    },
  } = game;

  const handleMatchClick = () => {
    setStatsClicked(true);
    setMatchParams({ id, homeId, awayId });
    setMatchClicked(game);
  };

  let time = new Date(date)
    .toLocaleString()
    .split("")
    .splice(10, 12)
    .join("")
    .replace(":00", "");

  useEffect(() => {
    if (live === "Match Finished") {
      setMatchEnded(true);
    }
  }, [live]);

  return (
    <div
      className="match-preview-container"
      key={id}
      onClick={handleMatchClick}
    >
      <h3 className="match-game">{round}</h3>
      <div className="team-logos">
        <div className="team-logo-container">
          <div className="team-name">
            {homeWinner && matchEnded ? (
              <div className="winner">
                <img src={Trophy} style={{ height: "30px" }} alt="trophy" />
              </div>
            ) : (
              <></>
            )}
            <h5 className="team-one-name">{teamOneName}</h5>
          </div>
          <img
            className="team-logo"
            src={homeTeamLogo}
            alt="logo"
            style={{ height: "40px", width: "40px" }}
            onLoad={() => setHomeTeamLogo(teamOneLogo)}
          />
        </div>
        <div className="time">
          {live === "Not Started" || live === "Time to be defined" ? (
            <span className="match-time">{time}</span>
          ) : live === "Match Finished" ? (
            <span className="match-time">FT</span>
          ) : live === "Halftime" ? (
            <div className="match-time">
              <span className="live-dot">HT</span>
            </div>
          ) : live === "Match Postponed" ? (
            <span className="match-time">Postponed</span>
          ) : (
            <div className="match-time">
              <span className="live-dot">{minutes}'</span>
            </div>
          )}
          <div className="match-result">
            {homeGoals !== null || awayGoals !== null ? (
              <>
                <div className="home-goals">{homeGoals}</div>
                <span>-</span>
                <div className="away-goals">{awayGoals}</div>
              </>
            ) : (
              <></>
            )}
          </div>
          {homePenalties !== null || awayPenalties !== null ? (
            <div className="penalties">
              <h6>PENS:</h6>
              <span className="penalties-score">{`(${homePenalties}) - (${awayPenalties})`}</span>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="team-logo-container">
          <img
            className="team-logo"
            src={awayTeamLogo}
            alt="logo"
            style={{ height: "40px", width: "40px" }}
            onLoad={() => setAwayTeamLogo(teamTwoLogo)}
          />
          <div className="team-name">
            {awayWinner && matchEnded ? (
              <div className="winner">
                <img src={Trophy} style={{ height: "30px" }} alt="trophy" />
              </div>
            ) : (
              <></>
            )}
            <h5 className="team-two-name">{teamTwoName}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPreview;
