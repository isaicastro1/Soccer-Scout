import "./match-preview.styles.scss";

const MatchPreview = ({
  teamOneName,
  teamOneLogo,
  teamTwoName,
  teamTwoLogo,
  round,
  time,
  date,
}) => {
  time = time.split("").slice(11, -9).join("");
  date = date.slice(0, 10).replaceAll("-", "/");

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
          <div className="match-date">{date}</div>
          <div className="match-time">{time}</div>
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
