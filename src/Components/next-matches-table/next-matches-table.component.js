import { useEffect, useState, useCallback, useContext } from "react";

import MatchPreview from "../../Components/match-preview/match-preview.component";
import Spinner from "../spinner/spinner.component";
import { getDate, leagueDates } from "../../utils/date";
import { allLeagues, leagueUrl, leagues } from "../../utils/all-leagues";

import { UserContext } from "../../contexts/user.context";

import { getFavoritesFromFirebase } from "../../utils/firebase/firebase";

import Shield from "../../Assets/shield.png";

import "./next-matches-table.styles.scss";

const NextMatchesTable = () => {
  const [nextMatches, setNextMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userFavorites, setUserFavorites] = useState([]);
  const [isFavoritesChecked, setIsFavoritesChecked] = useState(true);
  const [newAPIMatches, setNewAPIMatches] = useState();
  const [tableData, setTableData] = useState();

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

  // const getMatchesFromFavorites = (favorites, matches) => {
  //   const favoritesSet = new Set(favorites);
  //   return matches
  //     .filter(([, fixtures]) => {
  //       return fixtures.some(({ teams }) => {
  //         return (
  //           favoritesSet.has(teams.away.name) ||
  //           favoritesSet.has(teams.home.name)
  //         );
  //       });
  //     })
  //     .flatMap(([, fixtures]) =>
  //       fixtures.filter(
  //         ({ teams }) =>
  //           favoritesSet.has(teams.away.name) ||
  //           favoritesSet.has(teams.home.name)
  //       )
  //     );
  // };

  const handleChange = () => {
    setIsFavoritesChecked(!isFavoritesChecked);
  };

  // const newFavoriteMatches = separateMatchesByDate(
  //   getMatchesFromFavorites(userFavorites, newMatches)
  // );

  const date = getDate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://onefootball.com/proxy-web-experience/en/matches?date=${date}`
        );
        const data = await response.json();

        let matches = [];

        const fixtures = data.containers.filter((item) => {
          return (
            item.fullWidth &&
            item.fullWidth.component &&
            item.fullWidth.component.matchCardsList
          );
        });

        fixtures.map((item) => {
          if (
            leagues[item.fullWidth.component.matchCardsList.sectionHeader.title]
          ) {
            matches.push(item.fullWidth.component.matchCardsList);
          }
        });
        setNewAPIMatches(matches);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const separateMatches = (matchesArray) => {
    if (!matchesArray) return;

    let fixtureLeague = {};

    matchesArray.map((match) => {
      const league = match.sectionHeader.title;
      if (fixtureLeague[league]) {
        fixtureLeague[league].push(match);
      } else {
        fixtureLeague[league] = [match];
      }
    });
    return Object.entries(fixtureLeague).sort();
  };

  const matches = separateMatches(newAPIMatches);

  // sort by favorite league
  matches &&
    matches.sort((a, b) => {
      const leagueOrder = [
        "LaLiga",
        "Premier League",
        "Bundesliga",
        "Ligue 1 Uber Eats",
        "Serie A",
      ];
      return leagueOrder.indexOf(a[0]) - leagueOrder.indexOf(b[0]);
    });

  useEffect(() => {
    if (matches && matches.length) {
      setIsLoading(false);
    }
  }, [matches]);

  const handleSeeMoreClick = (league) => {
    fetch(leagueUrl[league])
      .then((data) => data.json())
      .then((res) => {
        res.containers.filter((item) => {
          return (
            item.fullWidth &&
            item.fullWidth.component &&
            item.fullWidth.component.standings.rows
          );
        });
      });
  };

  useEffect(() => {
    console.log("tableData", tableData);
  }, [tableData]);

  const renderMatches = (matches) => {
    return matches.map((match) => {
      const subtitle = match[1][0].sectionHeader.subtitle;
      const logo = match[1][0].sectionHeader.entityLogo.path;
      return (
        <div
          className="container"
          key={match[1][0].sectionHeader.entityLogo.path}
        >
          <div className="league-section">
            <div className="section-logo">
              <h5>{leagues[match[0]]}</h5>
              <img style={{ width: "50px" }} src={logo} />
            </div>
          </div>
          <div className="match" key={match[0]}>
            {match[1][0].matchCards.map((game) => {
              return (
                <MatchPreview
                  game={game}
                  subtitle={subtitle}
                  key={game.uiKey}
                />
              );
            })}
          </div>
          <div className="standings-link">
            <p onClick={() => handleSeeMoreClick(leagues[match[0]])}>
              See standings &#8827;
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="matches-container">
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
            renderMatches(matches)
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
      )}
    </>
  );
};

export default NextMatchesTable;
