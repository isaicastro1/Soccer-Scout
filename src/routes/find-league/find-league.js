import { useState } from "react";

import { leagueUrl, leagues } from "../../utils/all-leagues";

import Table from "../../Components/table/table";
import Spinner from "../../Components/spinner/spinner.component";

import "./find-league.styles.scss";

const FindLeague = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [standings, setStandings] = useState([]);
  const [leagueCalled, setLeagueCalled] = useState(false);
  const [leagueLogo, setLeagueLogo] = useState("");
  const [leagueName, setLeagueName] = useState("");

  const fetchTeamData = (event) => {
    return new Promise((resolve, reject) => {
      fetch(leagueUrl[event.target.getAttribute("value")])
        .then((response) => response.json())
        .then((data) => {
          const arrayOfStandings = data.containers.filter((item) => {
            return (
              item.fullWidth &&
              item.fullWidth.component &&
              item.fullWidth.component.standings
            );
          });
          const gameDetails = data.containers.filter((item) => {
            return (
              item.fullWidth &&
              item.fullWidth.component &&
              item.fullWidth.component.entityTitle
            );
          });
          resolve({ arrayOfStandings, gameDetails });
        })
        .catch((error) => reject(error));
      setLeagueCalled(true);
    });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : !leagueCalled ? (
        <div className="find-league-wrapper">
          <h2>LEAGUE TABLE</h2>
          <div className="find-league-container">
            <div className="options">
              <div
                className="image-container"
                value="La Liga"
                onClick={(e) => {
                  fetchTeamData(e).then((data) => {
                    setLeagueName(
                      leagues[
                        data.gameDetails[0].fullWidth.component.entityTitle
                          .title
                      ]
                    );
                    setLeagueLogo(
                      data.gameDetails[0].fullWidth.component.entityTitle
                        .imageObject.path
                    );
                    setStandings(
                      data.arrayOfStandings[0].fullWidth.component.standings
                        .rows
                    );
                  });
                }}
              >
                <img
                  alt="logo"
                  value="La Liga"
                  src="https://media-3.api-sports.io/football/leagues/140.png"
                />
              </div>
              <div
                className="image-container"
                value="Premier League"
                onClick={(e) => {
                  fetchTeamData(e).then((data) => {
                    setLeagueName(
                      leagues[
                        data.gameDetails[0].fullWidth.component.entityTitle
                          .title
                      ]
                    );
                    setLeagueLogo(
                      data.gameDetails[0].fullWidth.component.entityTitle
                        .imageObject.path
                    );
                    setStandings(
                      data.arrayOfStandings[0].fullWidth.component.standings
                        .rows
                    );
                  });
                }}
              >
                <img
                  alt="logo"
                  value="Premier League"
                  src="https://media-3.api-sports.io/football/leagues/39.png"
                />
              </div>
              <div
                className="image-container"
                value="Champions League"
                onClick={(e) => {
                  fetchTeamData(e).then((data) => {
                    setLeagueName(
                      leagues[
                        data.gameDetails[0].fullWidth.component.entityTitle
                          .title
                      ]
                    );
                    setLeagueLogo(
                      data.gameDetails[0].fullWidth.component.entityTitle
                        .imageObject.path
                    );
                    setStandings(
                      data.arrayOfStandings[0].fullWidth.component.standings
                        .rows
                    );
                  });
                }}
              >
                <img
                  alt="logo"
                  value="Champions League"
                  src="https://media-3.api-sports.io/football/leagues/2.png"
                />
              </div>
              <div
                className="image-container"
                value="Ligue 1"
                onClick={(e) => {
                  fetchTeamData(e).then((data) => {
                    setLeagueName(
                      leagues[
                        data.gameDetails[0].fullWidth.component.entityTitle
                          .title
                      ]
                    );
                    setLeagueLogo(
                      data.gameDetails[0].fullWidth.component.entityTitle
                        .imageObject.path
                    );
                    setStandings(
                      data.arrayOfStandings[0].fullWidth.component.standings
                        .rows
                    );
                  });
                }}
              >
                <img
                  alt="logo"
                  value="Ligue 1"
                  src="https://media.api-sports.io/football/leagues/61.png"
                />
              </div>
              <div
                className="image-container"
                value="Bundesliga"
                onClick={(e) => {
                  fetchTeamData(e).then((data) => {
                    setLeagueName(
                      leagues[
                        data.gameDetails[0].fullWidth.component.entityTitle
                          .title
                      ]
                    );
                    setLeagueLogo(
                      data.gameDetails[0].fullWidth.component.entityTitle
                        .imageObject.path
                    );
                    setStandings(
                      data.arrayOfStandings[0].fullWidth.component.standings
                        .rows
                    );
                  });
                }}
              >
                <img
                  alt="logo"
                  value="Bundesliga"
                  src="https://media-3.api-sports.io/football/leagues/78.png"
                />
              </div>
              <div
                className="image-container"
                value="Serie A"
                onClick={(e) => {
                  fetchTeamData(e).then((data) => {
                    setLeagueName(
                      leagues[
                        data.gameDetails[0].fullWidth.component.entityTitle
                          .title
                      ]
                    );
                    setLeagueLogo(
                      data.gameDetails[0].fullWidth.component.entityTitle
                        .imageObject.path
                    );
                    setStandings(
                      data.arrayOfStandings[0].fullWidth.component.standings
                        .rows
                    );
                  });
                }}
              >
                <img
                  alt="logo"
                  value="Serie A"
                  src="https://media.api-sports.io/football/leagues/135.png"
                />
              </div>
              <div
                className="image-container"
                value="BBVA"
                onClick={(e) => {
                  fetchTeamData(e).then((data) => {
                    setLeagueName(
                      data.gameDetails[0].fullWidth.component.entityTitle.title
                    );
                    setLeagueLogo(
                      data.gameDetails[0].fullWidth.component.entityTitle
                        .imageObject.path
                    );
                    setStandings(
                      data.arrayOfStandings[0].fullWidth.component.standings
                        .rows
                    );
                  });
                }}
              >
                <img
                  alt="logo"
                  value="BBVA"
                  src="https://media.api-sports.io/football/leagues/262.png"
                />
              </div>
              <div
                className="image-container"
                value="MLS"
                onClick={(e) => {
                  fetchTeamData(e).then((data) => {
                    setLeagueName(
                      data.gameDetails[0].fullWidth.component.entityTitle.title
                    );
                    setLeagueLogo(
                      data.gameDetails[0].fullWidth.component.entityTitle
                        .imageObject.path
                    );
                    setStandings(
                      data.arrayOfStandings[0].fullWidth.component.standings
                        .rows
                    );
                  });
                }}
              >
                <img
                  alt="logo"
                  value="MLS"
                  src="https://media-3.api-sports.io/football/leagues/253.png"
                />
              </div>
              <div
                className="image-container"
                value="Europa League"
                onClick={(e) => {
                  fetchTeamData(e).then((data) => {
                    setLeagueName(
                      leagues[
                        data.gameDetails[0].fullWidth.component.entityTitle
                          .title
                      ]
                    );
                    setLeagueLogo(
                      data.gameDetails[0].fullWidth.component.entityTitle
                        .imageObject.path
                    );
                    setStandings(
                      data.arrayOfStandings[0].fullWidth.component.standings
                        .rows
                    );
                  });
                }}
              >
                <img
                  alt="logo"
                  value="Europa League"
                  src="https://media-3.api-sports.io/football/leagues/3.png"
                />
              </div>
              <div
                className="image-container"
                value="Pro League"
                onClick={(e) => {
                  fetchTeamData(e).then((data) => {
                    setLeagueLogo(
                      data.gameDetails[0].fullWidth.component.entityTitle
                        .imageObject.path
                    );
                    setStandings(
                      data.arrayOfStandings[0].fullWidth.component.standings
                        .rows
                    );
                    setLeagueName(
                      data.gameDetails[0].fullWidth.component.entityTitle.title
                    );
                  });
                }}
              >
                <img
                  alt="logo"
                  value="Pro League"
                  src="https://media-3.api-sports.io/football/leagues/307.png"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Table
          leagueName={leagueName}
          leagueLogo={leagueLogo}
          tableData={standings}
        />
      )}
    </>
  );
};

export default FindLeague;
