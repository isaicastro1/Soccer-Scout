import { useContext } from "react";

import { TeamDataContext } from "../../contexts/teamData.context";

import teamId from "../../utils/team-id";

import "./ScoreTable.scss";

const ScoreTable = ({ nameOfLeague }) => {
  const { allTeamData } = useContext(TeamDataContext);

  console.log("allTeamData", allTeamData);

  return (
    <div className="league">
      <div className="league-table">
        <header>
          <h1>{nameOfLeague}</h1>
        </header>
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
            {allTeamData.map((item) => {
              const {
                id,
                name,
                logo,
                played,
                wins,
                draws,
                losses,
                goalsDiff,
                points,
              } = item;

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
      </div>
    </div>
  );
};

export default ScoreTable;
