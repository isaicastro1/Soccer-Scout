import { useEffect, useState } from "react";
import Trophy from "../../Assets/trophy.png";

import "./match-preview.styles.scss";

const MatchPreview = ({ game }) => {
  const [teamWon, setTeamWon] = useState("tie");
  const [matchEnded, setMatchEnded] = useState(false);

  const {
    fixture: {
      id,
      date,
      status: { elapsed: minutes, long: live },
    },
    league: { round },
    teams: {
      home: { name: teamOneName, logo: teamOneLogo },
      away: { name: teamTwoName, logo: teamTwoLogo },
    },
    goals: { home: homeGoals, away: awayGoals },
  } = game;

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
    <div className="match-preview-container" key={id}>
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
            src={teamOneLogo}
            alt="logo"
            style={{ height: "40px", width: "40px" }}
          />
        </div>
        <div className="time">
          {live === "Not Started" ? (
            <span className="match-time">{time}</span>
          ) : live === "Match Finished" ? (
            <span className="match-time">FT</span>
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
      <div className="see-more" id="see-more">
        see more
      </div>
    </div>
  );
};

export default MatchPreview;
