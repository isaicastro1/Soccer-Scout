import "./match-preview.styles.scss";

const MatchPreview = () => {
  return (
    <div className="match-preview-container">
      <h3 className="match-game">Champions League Group Stage</h3>
      <div className="team-logos">
        <div className="team-logo-container">
          <img
            className="team-logo"
            style={{ width: "100px", height: "100px" }}
            src="https://media.api-sports.io/football/teams/541.png"
            alt="logo"
          />
        </div>
        <div className="vs">vs</div>
        <div className="team-logo-container">
          <img
            className="team-logo"
            style={{ width: "100px", height: "100px" }}
            src="https://media.api-sports.io/football/teams/529.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="team-names">
        <div className="team-1">
          <div className="team-name">
            <h4>Real Madrid</h4>
          </div>
          <div className="team-score">2</div>
        </div>
        <div className="team-2">
          <div className="team-name">
            <h4>Barcelona</h4>
          </div>
          <div className="team-score">0</div>
        </div>
      </div>
    </div>
  );
};

export default MatchPreview;
