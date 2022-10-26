import { useState } from "react";

import "./Home.scss";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "a71347195c0d1cc14a27dbf7d1343c89",
  },
};

const allLeagues = {
  premier: 39,
  laliga: 140,
  champions: 2,
};

const Home = () => {
  const [league, setLeague] = useState(140);
  const [year, setYear] = useState(2022);

  const fetchData = async () => {
    const response = await fetch(
      `https://v3.football.api-sports.io/standings?season=${year}&league=${league}`,
      options
    );
    const data = await response.json();
    const allData = data.response[0].league.standings[0];
    return allData.map((item) => {
      console.log(item.team.name);
    });
  };

  const handleLeagueChange = (event) => {
    setLeague(allLeagues[event.target.value]);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  console.log(fetchData());

  return (
    <div className="home-container">
      <h2>Find your favorite team's standings!</h2>
      <div className="options">
        <label htmlFor="season">Choose a League:</label>
        <select name="league" id="league" onChange={handleLeagueChange}>
          <option value="laliga">LaLiga</option>
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
        <button className="button-submit" onClick={fetchData}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;
