import { useState, useContext } from "react";

import { TeamDataContext } from "../../contexts/teamData.context";
import { options } from "../../utils/options";
import { allLeagues } from "../../utils/all-leagues";

import Table from "../../Components/table/table";
import Spinner from "../../Components/spinner/spinner.component";

import "./find-league.styles.scss";

const FindLeague = () => {
  const [league, setLeague] = useState(140);
  const [isLoading, setIsLoading] = useState(false);
  const [year, setYear] = useState(2022);
  const [leagueCalled, setLeagueCalled] = useState(false);
  const [nameOfLeague, setNameOfLeague] = useState("");

  const { setAllTeamData, setLeagueName } = useContext(TeamDataContext);

  const fetchTeamData = async () => {
    setIsLoading(true);
    setLeagueCalled(true);
    const response = await fetch(
      `https://v3.football.api-sports.io/standings?season=${year}&league=${league}`,
      options
    );
    const data = await response.json();
    setNameOfLeague(data.response[0].league.name);
    const teamData = await data.response[0].league.standings;
    setAllTeamData(teamData);
    setIsLoading(false);
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
        <Table nameOfLeague={nameOfLeague} />
      ) : (
        <div className="find-league-container">
          <h2>Find your favorite team's standings!</h2>
          <div className="options">
            <label htmlFor="season">Choose a League:</label>
            <select name="league" id="league" onChange={handleLeagueChange}>
              <option value="laliga">La Liga</option>
              <option value="premier">Premier League</option>
              <option value="champions">Champions League</option>
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
