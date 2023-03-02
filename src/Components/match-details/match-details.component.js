import MatchInfo from "../match-info/match-info.component";
import MatchStats from "../match-stats/match-stats.component";

const MatchDetails = ({ matchStats, Spinner, matchClicked }) => {
  if (!matchStats) {
    return <Spinner />;
  }

  const {
    fixture: {
      status: { long },
      date,
      referee,
      venue: { name: stadium },
    },
    league: { name: leagueName, round },
    score: { fulltime, extratime },
  } = matchClicked;

  const {
    away: { response: awayResponse },
    home: { response: homeResponse },
  } = matchStats;

  const {
    team: { id: awayId, name: awayName, logo: awayLogo },
  } = awayResponse[0];

  const {
    team: { id: homeId, name: homeName, logo: homeLogo },
  } = homeResponse[0];

  const awayStats = awayResponse[0].statistics.reduce((obj, item) => {
    obj[item.type] = item.value;
    return obj;
  }, {});

  const homeStats = homeResponse[0].statistics.reduce((obj, item) => {
    obj[item.type] = item.value;
    return obj;
  }, {});

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
          <div className="fixture-score">
            {`${fulltime.home || 0} : ${fulltime.away || 0}`}
          </div>
          <div className="fixture-time">{long}</div>
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
      <MatchStats
        matchStats={matchStats}
        Spinner={Spinner}
        matchClicked={matchClicked}
      />
    </div>
  );
};

export default MatchDetails;
