import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Find your favorite team's standings!</h2>
      <div className="options">
        <label htmlFor="season">Choose a League:</label>
        <select name="league" id="league">
          <option value="LaLiga">LaLiga</option>
          <option value="Premier League">Premier League</option>
          <option value="Champions League">Champions League</option>
        </select>
        <label htmlFor="year">Choose a Year:</label>
        <select name="year" id="year">
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
        <br />
        <input type="submit" value="Submit" className="button-submit" />
      </div>
    </div>
  );
};

export default Home;
