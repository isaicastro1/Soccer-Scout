import { useState, useContext, useEffect, useCallback } from "react";

import { TeamDataContext } from "../../contexts/teamData.context";
import { allLeagues } from "../../utils/all-leagues";

import Table from "../../Components/table/table";
import Spinner from "../../Components/spinner/spinner.component";

import "./find-league.styles.scss";

const FindLeague = () => {
  const [league, setLeague] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [year, setYear] = useState(2022);
  const [leagueCalled, setLeagueCalled] = useState(false);
  const [leagueLogo, setLeagueLogo] = useState("");

  const { setAllTeamData, setLeagueName, leagueName } =
    useContext(TeamDataContext);

  const fetchTeamData = useCallback(async () => {
    if (!league) return;

    setIsLoading(true);
    setLeagueCalled(true);
    try {
      const response = await fetch("https://soccer-api.herokuapp.com/tables", {
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          year: year,
          league: league,
        }),
      });

      const data = await response.json();
      const teamData = await data.response[0].league.standings;
      setLeagueLogo(data.response[0].league.logo);
      setAllTeamData(teamData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [league, year, setAllTeamData]);

  useEffect(() => {
    fetchTeamData();
  }, [fetchTeamData, setAllTeamData, setLeagueLogo]);

  const handleLeagueChange = (event) => {
    setLeagueName(event.target.getAttribute("value"));
    setLeague(allLeagues[event.target.getAttribute("value")]);
  };

  return (
    <>
      {isLoading ? (
        <Spinner style={{ width: "100vw", height: "100vh" }} />
      ) : leagueCalled ? (
        <Table leagueName={leagueName} leagueLogo={leagueLogo} />
      ) : (
        <div className="find-league-wrapper">
          <h2>League Table</h2>
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

export default FindLeague;
