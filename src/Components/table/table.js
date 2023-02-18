import "./table.scss";

const Table = ({ leagueLogo, leagueName, tableData }) => {
  return (
    <div className={`league ${"league-" + leagueName}`}>
      <header className={`${leagueName}-container`}>
        <img src={leagueLogo} style={{ width: "70px" }} alt="team-logo" />
        <h3 className="standings-league-name">{leagueName}</h3>
      </header>
      <div className={leagueName}>
        <div className={`${leagueName}-table`}>
          <table className="standings">
            <thead>
              <tr>
                <th scope="col" className="left" title="team">
                  TEAM
                </th>
                <th scope="col" className="right" title="GP">
                  GP
                </th>
                <th scope="col" className="right" title="W">
                  W
                </th>
                <th scope="col" className="right" title="D">
                  D
                </th>
                <th scope="col" className="right" title="L">
                  L
                </th>
                <th scope="col" className="right" title="GD">
                  GD
                </th>
                <th scope="col" className="right" title="P">
                  P
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData &&
                tableData.map((item) => {
                  console.log(item);
                  return (
                    <tr className="team-row" key={item.uiKey}>
                      <td className="team-name">
                        <img src={item.imageObject.path} alt="logo" />
                        <a href={`https://onefootball.com/${item.teamPath}`}>
                          {item.teamName}
                        </a>
                      </td>
                      <td className="right">{item.playedMatchesCount}</td>
                      <td className="right">{item.wonMatchesCount}</td>
                      <td className="right">{item.drawnMatchesCount}</td>
                      <td className="right">{item.lostMatchesCount}</td>
                      <td className="right">
                        {item.goalsDiff ? item.goalsDiff : 0}
                      </td>
                      <td className="right">{item.points}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
