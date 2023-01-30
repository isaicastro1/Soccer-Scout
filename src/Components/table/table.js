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
              <div className={`${leagueName}-table`} key={array[1].group}>
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
                      array.map(
                        ({
                          team: { id, name, logo },
                          all,
                          goalsDiff,
                          points,
                        }) => {
                          const {
                            played,
                            win: wins,
                            draw: draws,
                            lose: losses,
                          } = all;
                          return (
                            <tr className="team-row" key={id}>
                              <td className="team-name">
                                <img src={logo} alt={name} />
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
                                {/* {goalsDiff.toString().includes("-") */}
                                {goalsDiff ? goalsDiff : `+${goalsDiff}`}
                              </td>
                              <td className="right">{points}</td>
                            </tr>
                          );
                        }
                      )}
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
