import "./match-preview.styles.scss";

const MatchPreview = () => {
  return (
    <div className="match-preview-container">
      <h3 className="match-game">Champions League Group Stage</h3>
      <div className="team-logos">
        <div className="team-logo-container">
          <div className="team-name">
            <h5>Real Madrid</h5>
          </div>
          <img
            className="team-logo"
            src="https://media.api-sports.io/football/teams/541.png"
            alt="logo"
          />
        </div>
        <div className="time">1:00</div>
        <div className="team-logo-container">
          <img
            className="team-logo"
            src="https://media.api-sports.io/football/teams/529.png"
            alt="logo"
          />
          <div className="team-name">
            <h5>Barcelona</h5>
          </div>
        </div>
      </div>
      <div className="see-more">see more</div>
    </div>
  );
};

export default MatchPreview;
