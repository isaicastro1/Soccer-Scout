import { useContext } from "react";

import { TeamDataContext } from "../../contexts/teamData.context";

// import Table from "../table/table";

import "./ScoreTable.scss";

const ScoreTable = ({ nameOfLeague }) => {
  const { allTeamData, leagueName, uclData } = useContext(TeamDataContext);

  // console.log("all team data table", allTeamData);
  console.log("ucl data table", uclData);

  const map = [];

  return (
    <div className="league">
      <div className="league-table">
        <header>
          <h1>{nameOfLeague}</h1>
        </header>

        {uclData &&
          uclData.map((array) => {
            const newArray = [...array];

            // console.log("new array", newArray);

            // array.forEach((item) => {
            //   return map.push({
            //     id: item.team.id,
            //     rank: item.rank,
            //     name: item.team.name,
            //     logo: item.team.logo,
            //     played: item.all.played,
            //     wins: item.all.win,
            //     draws: item.all.draw,
            //     losses: item.all.lose,
            //     goalsDiff: item.goalsDiff,
            //     points: item.points,
            //   });
            // });

            console.log("new array", newArray);

            return (
              <table className="standings" key={newArray[0].team.name}>
                <thead>
                  <tr>
                    <th scope="col" className="left" title="team">
                      Team
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
                  {newArray &&
                    newArray.forEach((item) => {
                      return (
                        <tr className="" key={item.team.name}>
                          <td className="team-name">
                            <img
                              src={item.team.logo}
                              style={{ height: 20, width: 20 }}
                            />
                            <a href="">{item.team.name}</a>
                          </td>
                          <td className="right">{item.all.played}</td>
                          <td className="right">{item.all.win}</td>
                          <td className="right">{item.all.draw}</td>
                          <td className="right">{item.all.lose}</td>
                          <td className="right">
                            {item.goalsDiff.toString().includes("-")
                              ? item.goalsDiff
                              : `+${item.goalsDiff}`}
                          </td>
                          <td className="right">{item.points}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            );
          })}

        {/* {leagueName === "champions" ? (
          <Table allTeamData={allTeamData} uclData={uclData} />
        ) : (
          <Table allTeamData={allTeamData} />
        )} */}
      </div>
    </div>
  );
};

export default ScoreTable;
