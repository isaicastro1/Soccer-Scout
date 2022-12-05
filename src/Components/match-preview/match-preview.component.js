import "./match-preview.styles.scss";

const MatchPreview = ({
  teamOneName,
  teamOneLogo,
  teamTwoName,
  teamTwoLogo,
  round,
  time,
}) => {
  time = time.split("").slice(11, -9).join("");

  return (
    <div className="match-preview-container">
      <h3 className="match-game">{round}</h3>
      <div className="team-logos">
        <div className="team-logo-container">
          <div className="team-name">
            <h5>{teamOneName}</h5>
          </div>
          <img className="team-logo" src={teamOneLogo} alt="logo" />
        </div>
        <div className="time">{time}</div>
        <div className="team-logo-container">
          <img className="team-logo" src={teamTwoLogo} alt="logo" />
          <div className="team-name">
            <h5>{teamTwoName}</h5>
          </div>
        </div>
      </div>
      <div className="see-more">see more</div>
    </div>
  );
};

export default MatchPreview;
