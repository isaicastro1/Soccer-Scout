import { useEffect, useState, useCallback, useContext } from "react";

import MatchPreview from "../../Components/match-preview/match-preview.component";
import Spinner from "../spinner/spinner.component";
import MatchStats from "../match-stats/match-stats.component";

import { getDate, leagueDates } from "../../utils/date";
import { allLeagues } from "../../utils/all-leagues";

import { UserContext } from "../../contexts/user.context";

import { getFavoritesFromFirebase } from "../../utils/firebase/firebase";

import Shield from "../../Assets/shield.png";

import "./next-matches-table.styles.scss";

const NextMatchesTable = () => {
  const [nextMatches, setNextMatches] = useState([]);
  const [league, setLeague] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [leagueCalled, setLeagueCalled] = useState(false);
  const [nameOfLeague, setNameOfLeague] = useState("laliga");
  const [logoPlaceholder, setLogoPlaceholder] = useState(Shield);
  const [userFavorites, setUserFavorites] = useState([]);
  const [isFavoritesChecked, setIsFavoritesChecked] = useState(true);
  const [matchParams, setMatchParams] = useState(null);
  const [matchStats, setMatchStats] = useState(null);
  const [statsClicked, setStatsClicked] = useState(false);
  const [matchClicked, setMatchClicked] = useState(null);

  const { currentUser } = useContext(UserContext);
  useEffect(() => {
    const getUserFavorites = async () => {
      if (!currentUser || !currentUser.email) return;
      const favorites = await getFavoritesFromFirebase(currentUser.email);
      try {
        const favoriteTeams = await fetch(favorites);
        const data = await favoriteTeams.text();
        let favoritesArray = data.split(",");
        setUserFavorites(favoritesArray);
      } catch (error) {
        console.log(error);
      }
    };
    getUserFavorites();
  }, [currentUser]);

  const upcomingMatchesDate = leagueDates[`${nameOfLeague}`] || "2023-03-10";

  const getNextMatches = useCallback(async () => {
    if (!league) return;

    setIsLoading(true);
    setLeagueCalled(true);

    const date = getDate();

    try {
      const response = await fetch("https://soccer-api.herokuapp.com/matches", {
        // const response = await fetch("http://localhost:3001/matches", {
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          league,
          date,
          upcomingMatchesDate,
        }),
      });

      const data = await response.json();

      if (!data.response.length) {
        alert("Sorry, Could not fetch data from API");
        throw new Error("Could not fetch data");
      }
      setNextMatches(data.response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [league, upcomingMatchesDate]);

  useEffect(() => {
    getNextMatches();
  }, [getNextMatches, setNextMatches, setIsLoading]);

  const handleLeagueChange = (event) => {
    setLeague(allLeagues[event.target.getAttribute("value")]);
    setNameOfLeague(event.target.getAttribute("value"));
  };

  const separateMatchesByDate = (arrayOfMatches) => {
    if (!arrayOfMatches) return;

    let fixtureDates = {};

    // add matches with same dates to obj
    arrayOfMatches.forEach((match) => {
      let date = match.fixture.date.slice(0, 10);
      if (fixtureDates[date]) {
        fixtureDates[date].push(match);
      } else {
        fixtureDates[date] = [match];
      }
    });

    return Object.entries(fixtureDates).sort();
  };

  const getMatchesFromFavorites = (favorites, matches) => {
    const favoritesSet = new Set(favorites);
    return matches
      .filter(([, fixtures]) => {
        return fixtures.some(({ teams }) => {
          return (
            favoritesSet.has(teams.away.name) ||
            favoritesSet.has(teams.home.name)
          );
        });
      })
      .flatMap(([, fixtures]) =>
        fixtures.filter(
          ({ teams }) =>
            favoritesSet.has(teams.away.name) ||
            favoritesSet.has(teams.home.name)
        )
      );
  };

  const newMatches = separateMatchesByDate(nextMatches);

  useEffect(() => {
    if (!matchParams) return;

    const { id, homeId, awayId } = matchParams;

    const getMatchStats = async (homeTeamId, awayTeamId, fixtureId) => {
      const response = await fetch("http://localhost:3001/stats", {
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          homeTeamId,
          awayTeamId,
          fixtureId,
        }),
      });

      const data = await response.json();

      setMatchStats(data);
    };
    getMatchStats(homeId, awayId, id);
  }, [matchParams]);

  //sorts matches by date
  newMatches.map((match) => {
    return match[1].sort((a, b) => {
      let hourA = new Date(a.fixture.date).getUTCHours();
      let hourB = new Date(b.fixture.date).getUTCHours();
      return hourA - hourB;
    });
  });

  const handleChange = () => {
    setIsFavoritesChecked(!isFavoritesChecked);
  };

  const newFavoriteMatches = separateMatchesByDate(
    getMatchesFromFavorites(userFavorites, newMatches)
  );

  const renderMatches = (matches) => {
    return matches.map((match) => {
      let date = new Date(match[1][0].fixture.date).toString().slice(0, 11);
      return (
        <div key={match[0]} className="same-day-match">
          <div className="match-date-title">
            <h2>{date}</h2>
          </div>
          <div className="match">
            {match[1].map((game) => {
              return (
                <MatchPreview
                  game={game}
                  key={game.fixture.id}
                  setMatchParams={setMatchParams}
                  setStatsClicked={setStatsClicked}
                  setMatchClicked={setMatchClicked}
                />
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : leagueCalled && statsClicked ? (
        <MatchStats
          matchStats={matchStats}
          Spinner={Spinner}
          matchClicked={matchClicked}
        />
      ) : leagueCalled ? (
        <div className="matches-container">
          <img
            src={logoPlaceholder}
            style={{ width: "100px" }}
            alt="logo"
            onLoad={() => setLogoPlaceholder(nextMatches[0].league.logo)}
          />
          <div className="switch-button">
            <input
              onChange={handleChange}
              className="switch-button-checkbox"
              type="checkbox"
            ></input>
            <label className="switch-button-label" htmlFor="">
              <span className="switch-button-label-span">SHOW ALL</span>
            </label>
          </div>
          {isFavoritesChecked ? (
            renderMatches(newMatches)
          ) : newFavoriteMatches.length ? (
            renderMatches(newFavoriteMatches)
          ) : (
            <div
              style={{
                width: "100vw",
                height: "40vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>Please Sign In to Add Favorites</h3>
            </div>
          )}
        </div>
      ) : (
        <div className="upcoming-matches-container">
          <h2>Upcoming Matches</h2>
          <div className="find-league-container">
            <div className="options">
              <div
                className="image-container"
                value="laLiga"
                onClick={handleLeagueChange}
              >
                <img
                  alt="logo"
                  value="laLiga"
                  src="https://media-3.api-sports.io/football/leagues/140.png"
                />
              </div>
              <div
                className="image-container"
                value="premier"
                onClick={handleLeagueChange}
              >
                <img
                  alt="logo"
                  value="premier"
                  src="https://media-3.api-sports.io/football/leagues/39.png"
                />
              </div>
              <div
                className="image-container"
                value="champions"
                onClick={handleLeagueChange}
              >
                <img
                  alt="logo"
                  value="champions"
                  src="https://media-3.api-sports.io/football/leagues/2.png"
                />
              </div>
              <div
                className="image-container"
                value="ligue1"
                onClick={handleLeagueChange}
              >
                <img
                  alt="logo"
                  value="ligue1"
                  src="https://media.api-sports.io/football/leagues/61.png"
                />
              </div>
              <div
                className="image-container"
                value="bundesliga"
                onClick={handleLeagueChange}
              >
                <img
                  alt="logo"
                  value="bundesliga"
                  src="https://media-3.api-sports.io/football/leagues/78.png"
                />
              </div>
              <div
                className="image-container"
                value="serieA"
                onClick={handleLeagueChange}
              >
                <img
                  alt="logo"
                  value="serieA"
                  src="https://media.api-sports.io/football/leagues/135.png"
                />
              </div>
              <div
                className="image-container"
                value="ligaMx"
                onClick={handleLeagueChange}
              >
                <img
                  alt="logo"
                  value="ligaMx"
                  src="https://media.api-sports.io/football/leagues/262.png"
                />
              </div>
              <div
                className="image-container"
                value="mls"
                onClick={handleLeagueChange}
              >
                <img
                  alt="logo"
                  value="mls"
                  src="https://media-3.api-sports.io/football/leagues/253.png"
                />
              </div>
              <div
                className="image-container"
                value="europaLeague"
                onClick={handleLeagueChange}
              >
                <img
                  alt="logo"
                  value="europaLeague"
                  src="https://media-3.api-sports.io/football/leagues/3.png"
                />
              </div>
              <div
                className="image-container"
                value="proLeague"
                onClick={handleLeagueChange}
              >
                <img
                  alt="logo"
                  value="proLeague"
                  src="https://media-3.api-sports.io/football/leagues/307.png"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NextMatchesTable;
