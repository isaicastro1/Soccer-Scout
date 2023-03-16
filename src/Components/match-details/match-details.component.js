import { removeSecondsFromTime } from "../../utils/date";
import MatchInfo from "../match-info/match-info.component";
import MatchStats from "../match-stats/match-stats.component";

import "./match-details.styles.scss";

const MatchDetails = ({ matchStats, MiniSpinner, matchClicked }) => {
  const {
    fixture: {
      status: { long, elapsed },
      date,
      referee,
      venue: { name: stadium },
    },
    league: { name: leagueName, round },
    score: { fulltime, extratime },
    goals: { home: homeGoals, away: awayGoals },
    teams: {
      away: { name: awayName, logo: awayLogo },
      home: { name: homeName, logo: homeLogo },
    },
  } = matchClicked;

  // console.log("match", matchClicked);

  const awayResponse = matchStats?.away?.response;
  const homeResponse = matchStats?.home?.response;

  const awayStats = (awayResponse?.[0]?.statistics || []).reduce(
    (obj, item) => {
      obj[item.type] = item.value;
      return obj;
    },
    {}
  );

  const homeStats = (homeResponse?.[0]?.statistics || []).reduce(
    (obj, item) => {
      obj[item.type] = item.value;
      return obj;
    },
    {}
  );

  let newDate = removeSecondsFromTime(new Date(date).toLocaleTimeString());

  return (
    <div className="match-stats-container">
      <div className="teams-wrapper">
        <div className="team-one-wrapper">
          <div className="team-one-name">{homeName}</div>
          <div className="team-one-logo">
            <img src={homeLogo} alt="logo" />
          </div>
        </div>
        <div className="scores-data">
          {long === "Halftime" ? (
            <>
              <span className="live-dot">HT</span>
              <div className="fixture-score">{`${homeGoals} : ${awayGoals}`}</div>
            </>
          ) : long === "Match Finished" ? (
            <div className="fixture-score">{`${homeGoals} : ${awayGoals}`}</div>
          ) : long === "Not Started" ? (
            <></>
          ) : (
            <>
              <span className="live-dot">{elapsed}'</span>
              <div className="fixture-score">{`${homeGoals} : ${awayGoals}`}</div>
            </>
          )}
          <div className="fixture-time">
            {long === "Not Started" ? newDate : long}
          </div>
        </div>
        <div className="team-two-wrapper">
          <div className="team-two-logo">
            <img src={awayLogo} alt="logo" />
          </div>
          <div className="team-two-name">{awayName}</div>
        </div>
      </div>
      <MatchInfo
        date={date}
        referee={referee}
        stadium={stadium}
        leagueName={leagueName}
        round={round}
      />
      {matchStats ? (
        <MatchStats
          matchStats={matchStats}
          MiniSpinner={MiniSpinner}
          matchClicked={matchClicked}
        />
      ) : (
        <div className="statistics-container">
          <h5 className="statistics-title">STATISTICS</h5>
          <MiniSpinner />
        </div>
      )}
    </div>
  );
};

export default MatchDetails;
