import { useEffect, useState } from "react";

import { MatchResult } from "../match-result/match-result.component";

import Trophy from "../../Assets/trophy.png";
import Shield from "../../Assets/shield.png";

import "./match-preview.styles.scss";

const MatchPreview = ({ game, subtitle }) => {
  const [teamWon, setTeamWon] = useState("tie");
  const [matchEnded, setMatchEnded] = useState(false);
  const [homePreviewLogo, setHomePreviewLogo] = useState(Shield);
  const [awayPreviewLogo, setAwayPreviewLogo] = useState(Shield);

  const {
    awayTeam: { image: awayLogo, name: awayName, score: awayScore },
    homeTeam: { image: homeLogo, name: homeName, score: homeScore },
    kickoff,
    period,
    timePeriod,
  } = game;

  console.log(game);

  const time = new Date(kickoff).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  const date = new Date(kickoff).toLocaleDateString();

  useEffect(() => {
    const determineWinner = (homeGoals, awayGoals) => {
      if (period === "FULL_TIME") {
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

    determineWinner(homeScore, awayScore);
  }, [homeScore, awayScore, period]);

  return (
    <div className="match-preview-container" key={game.iuKey}>
      <span className="matchday">{subtitle}</span>
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
            <h5 className="team-one-name">{homeName}</h5>
          </div>
          <img
            className="team-logo"
            src={homePreviewLogo}
            alt="logo"
            style={{ height: "40px", width: "40px" }}
            onLoad={() => setHomePreviewLogo(homeLogo)}
          />
        </div>
        <div className="time">
          {timePeriod === "Full time" ? (
            <>
              <span className="match-time">FT</span>
              <MatchResult homeScore={homeScore} awayScore={awayScore} />
            </>
          ) : period === "PRE_MATCH" ? (
            <span className="match-time">{time}</span>
          ) : period === "FIRST_HALF" || period === "SECOND_HALF" ? (
            <>
              <div className="match-time">
                <span className="live-dot">{timePeriod}</span>
              </div>
              <MatchResult homeScore={homeScore} awayScore={awayScore} />
            </>
          ) : period === "HALF_TIME" ? (
            <>
              <span className="match-time">HT</span>
              <MatchResult homeScore={homeScore} awayScore={awayScore} />
            </>
          ) : (
            <>No</>
          )}
        </div>
        <div className="team-logo-container">
          <img
            className="team-logo"
            src={awayPreviewLogo}
            alt="logo"
            style={{ height: "40px", width: "40px" }}
            onLoad={() => setAwayPreviewLogo(awayLogo)}
          />
          <div className="team-name">
            {teamWon === "away" && matchEnded ? (
              <div className="winner">
                <img src={Trophy} style={{ height: "30px" }} alt="trophy" />
              </div>
            ) : (
              <></>
            )}
            <h5 className="team-two-name">{awayName}</h5>
          </div>
        </div>
      </div>
      <div className="see-more" id="see-more">
        SEE MORE
      </div>
    </div>
  );
};

export default MatchPreview;
