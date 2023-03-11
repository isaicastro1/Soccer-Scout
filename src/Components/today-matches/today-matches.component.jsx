import { useEffect, useState } from "react";
import Spinner from "../spinner/spinner.component";

import { getDate } from "../../utils/date";
import { allLeagues } from "../../utils/all-leagues";

import "./today-matches.styles.scss";

const TodayMatches = () => {
  const [todayMatches, setTodayMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      const getAllMatches = async () => {
        // let date = "2023-03-11";
        let date = getDate();
        const response = await fetch(
          "https://soccer-api.herokuapp.com/all-matches",
          {
            // const response = await fetch("http://localhost:3001/all-matches", {
            method: "post",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              date,
            }),
          }
        );

        const data = await response.json();

        const matches = data.response.filter((match) =>
          Object.values(allLeagues).includes(match.league.id)
        );

        if (!data.response.length) {
          console.log("Sorry there is no fixtures today");
          return;
        }

        setTodayMatches(matches);
        setIsLoading(false);
      };
      getAllMatches();
    } catch (error) {
      console.log("could not fetch matches data", error);
    }
  }, []);

  const sortByLeague = (fixtures) => {
    if (!fixtures) return;

    const preferredLeagues = [
      "Premier League",
      "La Liga",
      "UEFA Champions League",
      "Bundesliga",
      "Ligue 1",
      "UEFA Europa League",
      "Serie A",
      "Pro League",
    ];

    // Filter the fixtures by the preferred leagues order
    const filteredFixtures = fixtures
      .filter((fixture) => preferredLeagues.includes(fixture.league.name))
      .sort((a, b) => {
        const leagueA = a.league.name;
        const leagueB = b.league.name;

        if (
          preferredLeagues.indexOf(leagueA) < preferredLeagues.indexOf(leagueB)
        ) {
          return -1;
        } else if (
          preferredLeagues.indexOf(leagueA) > preferredLeagues.indexOf(leagueB)
        ) {
          return 1;
        } else {
          return 0;
        }
      });
    return filteredFixtures;
  };

  const orderedFixtures = sortByLeague(todayMatches);

  // Gets the next 4 days
  const getNextDays = () => {
    const dates = [];

    // Get today's date
    const today = new Date();
    dates.push("TODAY");

    // Get tomorrow's date
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    dates.push("TOMORROW");

    // Get the remaining days as day names
    const daysOfWeek = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];

    for (let i = 2; i <= 4; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(daysOfWeek[date.getDay()]);
    }

    console.log(dates);
  };

  getNextDays();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="today-matches-container">
          <h6>FIXTURES</h6>
          <div className="today-matches-wrapper">
            {orderedFixtures ? (
              orderedFixtures.map((item) => {
                // console.log(item);
                return (
                  <div className="today-match-item" key={item.fixture.id}>
                    <div className="today-match-team-logos">
                      <img src={item.teams.home.logo} alt="logo" />
                      <img src={item.teams.away.logo} alt="logo" />
                    </div>
                    <div className="today-match-time">
                      {item.fixture.status.long === "Halftime" ? (
                        <>
                          <span className="live-dot">HT</span>
                          <div className="fixture-score">{`${item.goals.home} - ${item.goals.away}`}</div>
                        </>
                      ) : item.fixture.status.long === "Match Finished" ? (
                        <>
                          <span className="match-time">FT</span>
                          <div className="fixture-score">{`${item.goals.home} - ${item.goals.away}`}</div>
                        </>
                      ) : item.fixture.status.long === "Not Started" ? (
                        <>
                          <h6>
                            {new Date(item.fixture.date).toLocaleDateString()}
                          </h6>
                          <span className="match-time">
                            {new Date(item.fixture.date).toLocaleString(
                              "en-US",
                              {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                              }
                            )}
                          </span>
                        </>
                      ) : (
                        <>
                          <span
                            className="live-dot"
                            style={{ textAlign: "center" }}
                          >
                            {item.fixture.status.elapsed}'
                          </span>
                          <div className="fixture-score">{`${item.goals.home} - ${item.goals.away}`}</div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <h1 style={{ width: "100vw", height: "100vh" }}>
                No matches scheduled for today
              </h1>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TodayMatches;
