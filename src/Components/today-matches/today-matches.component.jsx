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

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="today-matches-container">
          <h6>FIXTURES</h6>
          <div className="today-matches-wrapper">
            {todayMatches ? (
              todayMatches.map((item) => {
                return (
                  <div className="today-match-item" key={item.fixture.id}>
                    <div className="today-match-team-logos">
                      <img alt="logo" src={item.teams.home.logo} />
                      <img alt="logo" src={item.teams.away.logo} />
                    </div>
                    <div className="today-match-time">
                      <h6>
                        {new Date(item.fixture.date).toLocaleDateString()}
                      </h6>

                      {item.fixture.status.long === "Halftime" ? (
                        <>
                          <span className="live-dot">HT</span>
                          <div className="fixture-score">{`${item.goals.home} - ${item.goals.away}`}</div>
                        </>
                      ) : item.fixture.status.long === "Match Finished" ? (
                        <div className="fixture-score">{`${item.goals.home} - ${item.goals.away}`}</div>
                      ) : item.fixture.status.long === "Not Started" ? (
                        <></>
                      ) : (
                        <>
                          <span className="live-dot">
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
