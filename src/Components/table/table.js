import { useContext } from "react";
import { TeamDataContext } from "../../contexts/teamData.context";

import "../ScoreTable/ScoreTable.scss";

let i = 0;

const Table = ({ nameOfLeague }) => {
  const { uclData, teamId } = useContext(TeamDataContext);

  console.log("ucl", uclData);

  return (
    <div className="league">
      <header>
        <h1>{nameOfLeague}</h1>
      </header>
      <div className={`${nameOfLeague.replaceAll(" ", "-")}`}>
        {uclData &&
          uclData.map((array) => {
            i++;
            return (
              <table className="standings" key={i}>
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
                        <tr className="" key={id}>
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
            );
          })}
      </div>
    </div>
  );
};

export default Table;
