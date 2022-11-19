import LiveScores from "../../Components/live-scores/live-scores.component";
import News from "../../Components/news/news.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <LiveScores />
      <News />
    </div>
  );
};

export default Home;
