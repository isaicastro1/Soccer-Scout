import News from "../../Components/news/news.component";
import TodayMatches from "../../Components/today-matches/today-matches.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <TodayMatches />
      <News />
    </div>
  );
};

export default Home;
