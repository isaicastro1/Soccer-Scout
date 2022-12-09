import { useEffect, useContext } from "react";

import { TeamDataContext } from "../../contexts/teamData.context";
import MatchPreview from "../../Components/match-preview/match-preview.component";
import { options } from "../../utils/options";
import { getDate, modifyDate } from "../../utils/date";

import "./nextMatches.styles.scss";

const NextMatches = () => {
  const { nextMatches, setNextMatches } = useContext(TeamDataContext);

  useEffect(() => {
    const getNextMatches = async () => {
      const response = await fetch(
        `https://v3.football.api-sports.io/fixtures?season=2022&league=2&from=${getDate()}&to=2023-06-30`,
        options
      );
      const data = await response.json();
      if (!data.response.length) {
        alert("Sorry, Could not fetch data from API");
        throw new Error("Could not fetch data");
      }
      setNextMatches(data.response);
    };
    getNextMatches();
  }, [setNextMatches]);

  const seperateMatchesByDate = (arrayOfMatches) => {
    if (!arrayOfMatches) return;

    let fixtureDates = {};

    // add matches with same dates to obj
    arrayOfMatches.forEach((match) => {
      let date = modifyDate(match.fixture.date);
      if (fixtureDates[date]) {
        fixtureDates[date].push(match);
      } else {
        fixtureDates[date] = [match];
      }
    });
    return Object.entries(fixtureDates).sort();
  };

  const newMatches = seperateMatchesByDate(nextMatches);

  return (
    <div className="matches-container">
      {newMatches &&
        newMatches.map((match) => {
          return (
            <div key={match[1][1].fixture.id} className="same-day-match">
              <div className="match-date-title">
                <h2>{match[0]}</h2>
              </div>
              <div className="match">
                {match[1].map((game) => {
                  return (
                    <MatchPreview
                      key={game.fixture.id}
                      teamOneName={game.teams.home.name}
                      teamOneLogo={game.teams.home.logo}
                      teamTwoName={game.teams.away.name}
                      teamTwoLogo={game.teams.away.logo}
                      round={game.league.round}
                      time={game.fixture.date}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default NextMatches;
