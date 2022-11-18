import MatchPreview from "../match-preview/match-preview.component";

import "./live-scores.styles.scss";

const LiveScores = () => {
  return (
    <div className="live-scores-container">
      <h2 style={{ color: "white", textAlign: "center" }}>Live Scores</h2>
      <MatchPreview />
    </div>
  );
};

export default LiveScores;
