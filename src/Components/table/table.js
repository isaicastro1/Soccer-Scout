import { useContext } from "react";
import { TeamDataContext } from "../../contexts/teamData.context";

import "./table.scss";

const Table = ({ leagueLogo, leagueName }) => {
  const { allTeamData, teamId } = useContext(TeamDataContext);

  return (
    <div className="league">
      <header className={`${leagueName}-container`}>
        <img src={leagueLogo} style={{ width: "70px" }} alt="team-logo" />
      </header>
      <div className={leagueName}>
        {allTeamData &&
          allTeamData.map((array) => {
            return (
              <div className={`${leagueName}-table`} key={array[0].group}>
                <h2 key={array[0].group}>{array[0].group}</h2>
                <table className="standings" key={array[0].team.name}>
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
                    {array &&
                      array.map((item) => {
                        const id = item.team.id;
                        const name = item.team.name;
                        const logo = item.team.logo;
                        const played = item.all.played;
                        const wins = item.all.win;
                        const draws = item.all.draw;
                        const losses = item.all.lose;
                        const goalsDiff = item.goalsDiff;
                        const points = item.points;

                        return (
                          <tr className="team-row" key={id}>
                            <td className="team-name">
                              <img
                                src={logo}
                                style={{ height: 20, width: 20 }}
                                alt={name}
                              />
                              <a
                                href={`https://www.espn.com/soccer/team/_/id/${
                                  teamId[name]
                                }/${
                                  name.includes(" ")
                                    ? name.replace(" ", "-").toLowerCase()
                                    : name.toLowerCase()
                                }`}
                                name=""
                              >
                                {name}
                              </a>
                            </td>
                            <td className="right">{played}</td>
                            <td className="right">{wins}</td>
                            <td className="right">{draws}</td>
                            <td className="right">{losses}</td>
                            <td className="right">
                              {goalsDiff.toString().includes("-")
                                ? goalsDiff
                                : `+${goalsDiff}`}
                            </td>
                            <td className="right">{points}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Table;
