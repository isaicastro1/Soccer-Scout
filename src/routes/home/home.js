import LiveScores from "../../Components/live-scores/live-scores.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container" style={{ color: "white" }}>
      <LiveScores />
    </div>
  );
};

export default Home;
