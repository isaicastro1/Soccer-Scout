import { useContext } from "react";
import { TeamDataContext } from "../../contexts/teamData.context";

import "../ScoreTableLaLiga/ScoreTable.scss";

const teamId = {
  Arsenal: 359,
  "Manchester City": 382,
  "Tottenham Hotspur": 367,
  "NewCastle United": 361,
  "Manchester United": 360,
  Chelsea: 363,
  Fulham: 370,
  "Brighton Hove Albion": 331,
  Liverpool: 364,
  "Crystal Palace": 384,
  Brentford: 337,
  Everton: 368,
  "West Ham United": 371,
  "AFC Bournemouth": 349,
  "Leeds United": 357,
  "Aston Villa": 362,
  Southampton: 376,
  "Leicester City": 375,
  "Wolverhampton Wanderers": 380,
  "Nottingham Forest": 393,
};

const ScoreTablePrem = () => {
  const { allTeamData } = useContext(TeamDataContext);

  return (
    <div className="prem">
      <div className="league-table">
        <header>
          <h1>Premiere League</h1>
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
                rank,
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
                    <img src={logo} style={{ height: 20, width: 20 }} />
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

export default ScoreTablePrem;
