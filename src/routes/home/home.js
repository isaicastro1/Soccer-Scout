import { useState } from "react";
import News from "../../Components/news/news.component";
import TodayMatches from "../../Components/today-matches/today-matches.component";

import "./home.styles.scss";

const Home = () => {
  const [navigateToMatches, setNavigateToMatches] = useState(false);

  return (
    <div className="home-container">
      <TodayMatches setNavigateToMatches={setNavigateToMatches} />
      {!navigateToMatches ? <News /> : <></>}
    </div>
  );
};

export default Home;
