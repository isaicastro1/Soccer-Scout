import "./match-info.styles.scss";

const MatchInfo = ({ date, referee, stadium, leagueName, round }) => {
  const newDate = new Date(date).toDateString();

  return (
    <div className="match-info-container">
      <h4>MATCH INFO</h4>
      <div className="item-date">{newDate}</div>
      <div className="match-info-item">
        <span className="item-circle"></span>
        <div className="item-data">
          <h5>League:</h5>
          {leagueName}
        </div>
      </div>
      <div className="match-info-item">
        <span className="item-circle"></span>
        <div className="item-data">
          <h5>Round:</h5>
          {round}
        </div>
      </div>
      <div className="match-info-item">
        <span className="item-circle"></span>
        <div className="item-data">
          <h5>Stadium:</h5>
          {stadium}
        </div>
      </div>
      <div className="match-info-item">
        <span className="item-circle"></span>
        <div className="item-data">
          <h5>Referee:</h5>
          {referee}
        </div>
      </div>
    </div>
  );
};

export default MatchInfo;
