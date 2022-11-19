import MatchPreview from "../match-preview/match-preview.component";

import "./live-scores.styles.scss";

const LiveScores = () => {
  return (
    <div className="live-scores-container">
      <h2>Live Scores</h2>
      <div className="matches">
        <MatchPreview />
        <MatchPreview />
        <MatchPreview />
      </div>
    </div>
  );
};

export default LiveScores;
