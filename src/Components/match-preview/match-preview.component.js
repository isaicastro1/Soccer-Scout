import "./match-preview.styles.scss";

const MatchPreview = ({
  teamOneName,
  teamOneLogo,
  teamTwoName,
  teamTwoLogo,
  round,
  time,
  live,
  homeGoals,
  awayGoals,
}) => {
  return (
    <div className="match-preview-container">
      <h3 className="match-game">{round}</h3>
      <div className="team-logos">
        <div className="team-logo-container">
          <div className="team-name">
            <h5 className="team-one-name">{teamOneName}</h5>
          </div>
          <img className="team-logo" src={teamOneLogo} alt="logo" />
        </div>
        <div className="time">
          {live === "Not Started" ? (
            <div className="match-time">{time}</div>
          ) : live === "Match Finished" ? (
            <div className="match-time">FT</div>
          ) : (
            <div className="match-time">LIVE</div>
          )}
          <div className="match-result">
            <div className="home-goals">{homeGoals}</div>
            {homeGoals || awayGoals ? (
              <span style={{ display: "flex", alignItems: "center" }}>-</span>
            ) : (
              <></>
            )}
            <div className="away-goals">{awayGoals}</div>
          </div>
        </div>
        <div className="team-logo-container">
          <img className="team-logo" src={teamTwoLogo} alt="logo" />
          <div className="team-name">
            <h5 className="team-two-name">{teamTwoName}</h5>
          </div>
        </div>
      </div>
      <div className="see-more">see more</div>
    </div>
  );
};

export default MatchPreview;
