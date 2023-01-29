import { useState, useContext } from "react";

import { TeamDataContext } from "../../contexts/teamData.context";
import { allLeagues } from "../../utils/all-leagues";

import Table from "../../Components/table/table";
import Spinner from "../../Components/spinner/spinner.component";

import "./find-league.styles.scss";

const FindLeague = () => {
  const [league, setLeague] = useState(140);
  const [isLoading, setIsLoading] = useState(false);
  const [year, setYear] = useState(2022);
  const [leagueCalled, setLeagueCalled] = useState(false);
  const [leagueLogo, setLeagueLogo] = useState("");

  const { setAllTeamData, setLeagueName, leagueName } =
    useContext(TeamDataContext);

  const fetchTeamData = async () => {
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

  const handleLeagueChange = (event) => {
    setLeague(allLeagues[event.target.value]);
    setLeagueName(event.target.value);
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
          <h2>Find your favorite team's standings!</h2>
          <div className="options">
            <label htmlFor="season">Choose a League:</label>
            <select name="league" id="league" onChange={handleLeagueChange}>
              <option value="laLiga">La Liga</option>
              <option value="premier">Premier League</option>
              <option value="champions">Champions League</option>
              <option value="ligue1">Ligue 1</option>
              <option value="bundesliga">Bundesliga</option>
              <option value="serieA">Serie A</option>
              <option value="ligaMx">Liga MX</option>
              <option value="mls">MLS</option>
              <option value="europaLeague">Europa League</option>
              <option value="copaDelRey">Copa del Rey</option>
              <option value="faCup">FA Cup</option>
              <option value="euro">Euro Championship</option>
              <option value="copaAmerica">Copa America</option>
              <option value="clubWC">Club World Cup</option>
              <option value="goldCup">Gold Cup</option>
              <option value="proLeague">Pro League</option>
            </select>
            <label htmlFor="year">Choose a Year:</label>
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
            <br />
            <button className="button-submit" onClick={fetchTeamData}>
              Search
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FindLeague;
