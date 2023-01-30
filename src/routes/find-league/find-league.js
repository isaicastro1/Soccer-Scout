import { useState, useContext, useEffect } from "react";

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

  const fetchTeamData = async () => {
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
  };

  useEffect(() => {
    if (!league) return;

    fetchTeamData();
  }, [league]);

  const handleLeagueChange = (event) => {
    setLeagueName(event.target.getAttribute("value"));
    setLeague(allLeagues[event.target.getAttribute("value")]);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : leagueCalled ? (
        <Table leagueName={leagueName} leagueLogo={leagueLogo} />
      ) : (
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
          <div className="choose-league">
            <select name="year" id="year" onChange={handleYearChange}>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default FindLeague;
