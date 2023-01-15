import { useState } from "react";

import MatchPreview from "../../Components/match-preview/match-preview.component";
import Spinner from "../spinner/spinner.component";

import { options } from "../../utils/options";
import { getDate, leagueDates } from "../../utils/date";
import { allLeagues, allLeaguesLogos } from "../../utils/all-leagues";

import "./next-matches-table.styles.scss";

const NextMatchesTable = () => {
  const [nextMatches, setNextMatches] = useState([]);
  const [league, setLeague] = useState(140);
  const [isLoading, setIsLoading] = useState(false);
  const [leagueCalled, setLeagueCalled] = useState(false);
  const [nameOfLeague, setNameOfLeague] = useState("laliga");

  const upcomingMatchesDate = leagueDates[`${nameOfLeague}`];

  const getNextMatches = async () => {
    setIsLoading(true);
    setLeagueCalled(true);
    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures?season=2022&league=${league}&from=${getDate()}&to=${upcomingMatchesDate}`,
      options
    );
    const data = await response.json();
    if (!data.response.length) {
      alert("Sorry, Could not fetch data from API");
      throw new Error("Could not fetch data");
    }
    setNextMatches(data.response);
    setIsLoading(false);
  };

  const handleLeagueChange = (event) => {
    setLeague(allLeagues[event.target.value]);
    setNameOfLeague(event.target.value);
  };

  const separateMatchesByDate = (arrayOfMatches) => {
    if (!arrayOfMatches) return;

    let fixtureDates = {};

    // add matches with same dates to obj
    arrayOfMatches.forEach((match) => {
      let date = match.fixture.date;
      date = date.slice(0, 10);
      if (fixtureDates[date]) {
        fixtureDates[date].push(match);
      } else {
        fixtureDates[date] = [match];
      }
    });

    return Object.entries(fixtureDates).sort();
  };

  const newMatches = separateMatchesByDate(nextMatches);

  newMatches.map((match) => {
    return match[1].sort((a, b) => {
      let hourA = new Date(a.fixture.date).getUTCHours();
      let hourB = new Date(b.fixture.date).getUTCHours();
      return hourA - hourB;
    });
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : leagueCalled ? (
        <div className="matches-container">
          <img
            src={
              allLeaguesLogos[
                nameOfLeague.toString().toLowerCase().replace(" ", "")
              ]
            }
            style={{ width: "100px", height: "100px" }}
            alt="logo"
          />
          {newMatches &&
            newMatches.map((match) => {
              let date = new Date(match[0]).toGMTString().slice(0, 11);
              return (
                <div key={match[0]} className="same-day-match">
                  <div className="match-date-title">
                    <h2>{date}</h2>
                  </div>
                  <div className="match">
                    {match[1].map((game) => {
                      let homeGoals = game.goals.home;
                      let awayGoals = game.goals.away;
                      let live = game.fixture.status.long;
                      let time = new Date(game.fixture.date)
                        .toLocaleString()
                        .split("")
                        .splice(10, 12)
                        .join("")
                        .replace(":00", "");
                      return (
                        <MatchPreview
                          key={game.fixture.id}
                          teamOneName={game.teams.home.name}
                          teamOneLogo={game.teams.home.logo}
                          teamTwoName={game.teams.away.name}
                          teamTwoLogo={game.teams.away.logo}
                          round={game.league.round}
                          time={time}
                          live={live}
                          homeGoals={homeGoals}
                          awayGoals={awayGoals}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="find-league-container">
          <h2>Find your favorite league's upcoming matches!</h2>
          <div className="options">
            <label htmlFor="season">Choose a League:</label>
            <select name="league" id="league" onChange={handleLeagueChange}>
              <option value="laliga">La Liga</option>
              <option value="premier">Premier League</option>
              <option value="champions">Champions League</option>
            </select>
            <br />
            <button className="button-submit" onClick={getNextMatches}>
              Search
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NextMatchesTable;
