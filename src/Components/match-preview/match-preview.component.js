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
  const [teamWon, setTeamWon] = useState("tie");
  const [matchEnded, setMatchEnded] = useState(false);
  const [homeTeamLogo, setHomeTeamLogo] = useState(Shield);
  const [awayTeamLogo, setAwayTeamLogo] = useState(Shield);

  console.log("game", game);

  const {
    fixture: {
      id,
      date,
      status: { elapsed: minutes, long: live },
    },
    league: { round },
    teams: {
      home: { id: homeId, name: teamOneName, logo: teamOneLogo },
      away: { id: awayId, name: teamTwoName, logo: teamTwoLogo },
    },
    goals: { home: homeGoals, away: awayGoals },
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
    const determineWinner = (homeGoals, awayGoals) => {
      if (live === "Match Finished") {
        setMatchEnded(true);
      }

      if (homeGoals > awayGoals) {
        setTeamWon("home");
      } else if (homeGoals < awayGoals) {
        setTeamWon("away");
      } else {
        return "tie";
      }
    };

    determineWinner(homeGoals, awayGoals);
  }, [homeGoals, awayGoals, live]);

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
            {teamWon === "home" && matchEnded ? (
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
            {teamWon === "away" && matchEnded ? (
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
